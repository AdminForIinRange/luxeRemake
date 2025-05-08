import { type NextRequest, NextResponse } from "next/server"
import axios from "axios"
import ical from "node-ical"
import moment from "moment-timezone"

// Set default timezone to Australia/Sydney
moment.tz.setDefault("Australia/Sydney")

// Function to fetch and parse iCal data with timeout and retries
const fetchIcalData = async (url: string, retries = 2, timeout = 10000) => {
  try {
    const icsData = await axios.get(url, {
      timeout,
      headers: {
        Accept: "text/calendar",
        "Cache-Control": "no-cache",
      },
    })

    if (!icsData.data || typeof icsData.data !== "string") {
      throw new Error("Invalid iCal data format received")
    }

    return ical.parseICS(icsData.data)
  } catch (error) {
    if (retries > 0) {
      console.warn(`Retrying iCal fetch for URL: ${url}, ${retries} attempts left`)
      return fetchIcalData(url, retries - 1, timeout)
    }
    throw new Error(`Error fetching iCal data: ${error.message}`)
  }
}

// Centralized house-platform mapping for environment variables
const housePlatformMap: Record<string, Record<string, string>> = {
  "cosy-apartment": {
    airbnb: "COSY_APARTMENT_ADL_AIRBNB_ICS_URL",
    bookingcom: "COSY_APARTMENT_ADL_BOOKINGCOM_ICS_URL",
  },
  "charming-coastal-home": {
    airbnb: "CHARMING_COASTAL_HOME_SEAFORD_AIRBNB_ICS_URL",
    bookingcom: "CHARMING_COASTAL_HOME_SEAFORD_BOOKINGCOM_ICS_URL",
  },
  "melbourne-street-haven": {
    airbnb: "MELBOURNE_STREET_HAVEN_AIRBNB_ICS_URL",
    bookingcom: "MELBOURNE_STREET_HAVEN_BOOKINGCOM_ICS_URL",
  },
  "ultimate-luxury-beachside-escape": {
    airbnb: "ULTIMATE_LUXURY_BEACHSIDE_ESCAPE_WEST_BEACH_AIRBNB_ICS_URL",
    bookingcom: "ULTIMATE_LUXURY_BEACHSIDE_ESCAPE_WEST_BEACH_BOOKINGCOM_ICS_URL",
  },
}

// Function to construct environment variable key based on house and platform
const getHouseVar = (house: string, platform: string): string | null => {
  if (housePlatformMap[house] && housePlatformMap[house][platform]) {
    return housePlatformMap[house][platform]
  }
  return null
}

// Convert UTC time to Sydney time
const convertToSydneyTime = (date: Date | string): string => {
  if (!date) return ""

  // Handle both Date objects and string dates
  return moment.utc(date).tz("Australia/Sydney").format("YYYY-MM-DDTHH:mm:ss")
}

// Process an iCal event to standardized format with Sydney timezone
const processEvent = (event: any, platform: string): any => {
  if (!event || !event.start || !event.end) {
    return null
  }

  // Determine if this is a reservation or a blocked period
  const isReservation =
    platform === "airbnb" ? event.summary === "Reserved" : event.summary && event.summary.includes("CLOSED")

  // Convert dates to Sydney timezone
  const startDate = convertToSydneyTime(event.start)
  const endDate = convertToSydneyTime(event.end)

  // Shift the date by 1 day forward
  const newStartDate = moment(startDate).subtract(1, 'days').format("YYYY-MM-DDTHH:mm:ss")
  const newEndDate = moment(endDate).subtract(1, 'days').format("YYYY-MM-DDTHH:mm:ss")

  return {
    uid: event.uid || "",
    summary: event.summary || "",
    start: newStartDate,
    end: newEndDate,
    description: event.description || "",
    platform: platform,
    type: isReservation ? "reservation" : "blocked",
    allDay: true, // iCal events from Airbnb and Booking.com are typically all-day events
    // Include timezone info for clarity
    timezone: "Australia/Sydney",
  }
}

export async function GET(req: NextRequest) {
  const house = req.nextUrl.searchParams.get("house")
  const platform = req.nextUrl.searchParams.get("platform")

  console.log(`Request received - House: ${house}, Platform: ${platform}`)

  if (!house || !platform) {
    console.error("Missing 'house' or 'platform' parameter")
    return NextResponse.json({ error: 'Both "house" and "platform" parameters are required.' }, { status: 400 })
  }

  // Get the environment variable for the given house and platform
  const houseVar = getHouseVar(house, platform)

  if (!houseVar) {
    console.error(`No iCal URL found for house: ${house} on platform: ${platform}`)
    return NextResponse.json(
      { error: `No iCal URL found for house: ${house} on platform: ${platform}` },
      { status: 404 },
    )
  }

  const icalUrl = process.env[houseVar]

  if (!icalUrl) {
    console.error(`Environment variable for iCal URL is missing for house: ${house} and platform: ${platform}`)
    return NextResponse.json(
      { error: `No iCal URL found for house: ${house} on platform: ${platform}` },
      { status: 404 },
    )
  }

  try {
    console.log(`Fetching iCal data from URL: ${icalUrl}`)
    const parsedData = await fetchIcalData(icalUrl)

    // Filter for VEVENT type and process events
    const events = Object.values(parsedData)
      .filter((event: any) => event.type === "VEVENT")
      .map((event: any) => processEvent(event, platform))
      .filter(Boolean) // Remove any null events

    // Check if we got any events
    if (events.length === 0) {
      console.warn(`No events found in the iCal data for house: ${house} on platform: ${platform}`)
      return NextResponse.json({ events: [] })
    }

    return NextResponse.json({
      events,
      meta: {
        timezone: "Australia/Sydney",
        house,
        platform,
        fetchedAt: moment().tz("Australia/Sydney").format(),
      },
    })
  } catch (error: any) {
    console.error(`Error fetching or parsing calendar for house: ${house} on platform: ${platform}:`, error)
    return NextResponse.json(
      {
        error: "Failed to fetch or parse the calendar",
        details: error.message,
        house,
        platform,
      },
      { status: 500 },
    )
  }
}
