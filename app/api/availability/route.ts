import { type NextRequest, NextResponse } from "next/server";
import axios from "axios";
import ical from "node-ical";
import moment from "moment-timezone";
import { time } from "console";

// Set default timezone to Australia/Sydney
moment.tz.setDefault("Australia/Sydney");

// Function to fetch and parse iCal data with timeout and retries
const fetchIcalData = async (url: string, retries = 2, timeout = 10000) => {
  try {
    console.log(`Fetching iCal data from: ${url}`);
    const icsData = await axios.get(url, {
      timeout,
      headers: {
        Accept: "text/calendar",
        "Cache-Control": "no-cache",
      },
    });

    if (!icsData.data || typeof icsData.data !== "string") {
      throw new Error("Invalid iCal data format received");
    }

    // Log the first 200 characters of the iCal data for debugging
    console.log(`iCal data sample: ${icsData.data.substring(0, 200)}...`);

    return ical.parseICS(icsData.data);
  } catch (error) {
    if (retries > 0) {
      console.warn(
        `Retrying iCal fetch for URL: ${url}, ${retries} attempts left`,
      );
      return fetchIcalData(url, retries - 1, timeout);
    }
    throw new Error(`Error fetching iCal data: ${error.message}`);
  }
};

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
    bookingcom:
      "ULTIMATE_LUXURY_BEACHSIDE_ESCAPE_WEST_BEACH_BOOKINGCOM_ICS_URL",
  },
};

// Function to construct environment variable key based on house and platform
const getHouseVar = (house: string, platform: string): string | null => {
  if (housePlatformMap[house] && housePlatformMap[house][platform]) {
    return housePlatformMap[house][platform];
  }
  return null;
};

// Convert UTC time to Sydney time
const convertToSydneyTime = (date: Date | string): string => {
  if (!date) return "";

  // Handle both Date objects and string dates
  return moment.utc(date).tz("Australia/Sydney").format("YYYY-MM-DDTHH:mm:ss");
};

// Process an iCal event to standardized format with Sydney timezone
const processEvent = (event: any, platform: string): any => {
  if (!event || !event.start || !event.end) {
    return null;
  }

  // Platform-specific processing logic
  let isReservation = false;
  let guestInfo = null;

  if (platform === "airbnb") {
    // Airbnb specific processing
    isReservation =
      event.summary &&
      (event.summary.includes("CLOSED") ||
        event.summary.includes("BOOKED") ||
        event.summary.includes("Reservation") ||
        event.summary.includes("Airbnb") ||
        event.summary.includes("Not available"));

    // Try to extract guest info from description if available
    if (event.description) {
      const guestMatch = event.description.match(
        /([A-Za-z]+)(\s+and\s+\d+\s+guests?)?/i,
      );
      const guestCountMatch = event.description.match(/and\s+(\d+)\s+guests?/i);

      if (guestMatch) {
        const guestCount = guestCountMatch
          ? Number.parseInt(guestCountMatch[1], 10)
          : 0;
        guestInfo = {
          name: "Airbnb",
        };
      }
    }
  } else if (platform === "bookingcom") {
    // Booking.com specific processing
    isReservation =
      event.summary &&
      (event.summary.includes("CLOSED") ||
        event.summary.includes("BOOKED") ||
        event.summary.includes("Reservation") ||
        event.summary.includes("Not available"));

    // Try to extract guest info from Booking.com format
    if (event.description) {
      const bookingIdMatch = event.description.match(
        /Booking ID:\s*([A-Z0-9]+)/i,
      );
      const guestNameMatch = event.description.match(
        /Guest name:\s*([A-Za-z\s]+)/i,
      );
      const guestCountMatch = event.description.match(
        /Number of guests:\s*(\d+)/i,
      );

      if (guestNameMatch || bookingIdMatch) {
        guestInfo = {
          name: guestNameMatch ? guestNameMatch[1].trim() : "Booking.com Guest",
          bookingId: bookingIdMatch ? bookingIdMatch[1] : null,
          count: guestCountMatch
            ? Number.parseInt(guestCountMatch[1], 10) - 1
            : 0,
          total: guestCountMatch ? Number.parseInt(guestCountMatch[1], 10) : 1,
        };
      }
    } else {
      // For Booking.com entries without description (like "CLOSED - Not available")
      guestInfo = {
        name: "Booking.com",
      };
    }
  }

  // Convert dates to Sydney timezone
  const startDate = convertToSydneyTime(event.start);
  const endDate = convertToSydneyTime(event.end);

  // Extract check-in/check-out times
  let checkInTime = "12:00"; // Default check-in time (2 PM)  // <------ FIX
  let checkOutTime = "12:00"; // Default check-out time (10 AM) // <------ FIX

  // Try to extract check-in/check-out times from description if available
  if (event.description) {
    const checkInMatch = event.description.match(
      /check[\s-]*in:?\s*(\d{1,2}:\d{2})/i,
    );
    const checkOutMatch = event.description.match(
      /check[\s-]*out:?\s*(\d{1,2}:\d{2})/i,
    );

    if (checkInMatch && checkInMatch[1]) {
      checkInTime = checkInMatch[1];
    }

    if (checkOutMatch && checkOutMatch[1]) {
      checkOutTime = checkOutMatch[1];
    }
  }

  // Shift the date by 1 day forward for Airbnb to match Booking.com format
  // This is a common adjustment needed for Airbnb iCal feeds
  const newStartDate = moment(startDate)
    .subtract(platform === "airbnb" ? 0 : 0, "day")
    .format("YYYY-MM-DDTHH:mm:ss");
  const newEndDate = moment(endDate).format("YYYY-MM-DDTHH:mm:ss");

  return {
    uid: event.uid || "",
    summary: event.summary || "",
    start: newStartDate,
    end: newEndDate,
    checkInTime,
    checkOutTime,
    description: event.description || "",
    platform: platform,
    type: isReservation ? "reservation" : "Booking.com",
    allDay: true, // iCal events from Airbnb and Booking.com are typically all-day events
    guestInfo,
    // Include timezone info for clarity
    timezone: "Australia/Sydney",
  };
};

export async function GET(req: NextRequest) {
  const house = req.nextUrl.searchParams.get("house");
  const platform = req.nextUrl.searchParams.get("platform");

  console.log(`Request received - House: ${house}, Platform: ${platform}`);

  if (!house || !platform) {
    console.error("Missing 'house' or 'platform' parameter");
    return NextResponse.json(
      { error: 'Both "house" and "platform" parameters are required.' },
      { status: 400 },
    );
  }

  // Get the environment variable for the given house and platform
  const houseVar = getHouseVar(house, platform);

  if (!houseVar) {
    console.error(
      `No iCal URL found for house: ${house} on platform: ${platform}`,
    );
    return NextResponse.json(
      {
        error: `No iCal URL found for house: ${house} on platform: ${platform}`,
      },
      { status: 404 },
    );
  }

  const icalUrl = process.env[houseVar];

  if (!icalUrl) {
    console.error(
      `Environment variable for iCal URL is missing for house: ${house} and platform: ${platform}`,
    );
    return NextResponse.json(
      {
        error: `No iCal URL found for house: ${house} on platform: ${platform}`,
      },
      { status: 404 },
    );
  }

  try {
    console.log(`Fetching iCal data from URL: ${icalUrl}`);
    const parsedData = await fetchIcalData(icalUrl);

    // Log a sample of the parsed data for debugging
    if (Object.values(parsedData).length > 0) {
      const sampleEvent = Object.values(parsedData)[0];
      console.log(
        `Sample event from ${platform}:`,
        JSON.stringify(sampleEvent, null, 2),
      );
    }

    // Filter for VEVENT type and process events
    const events = Object.values(parsedData)
      .filter((event: any) => event.type === "VEVENT")
      .map((event: any) => processEvent(event, platform))
      .filter(Boolean); // Remove any null events

    // Check if we got any events
    if (events.length === 0) {
      console.warn(
        `No events found in the iCal data for house: ${house} on platform: ${platform}`,
      );
      return NextResponse.json({ events: [] });
    }

    return NextResponse.json({
      events,
      meta: {
        timezone: "Australia/Sydney",
        house,
        platform,
        fetchedAt: moment().tz("Australia/Sydney").format(),
      },
    });
  } catch (error: any) {
    console.error(
      `Error fetching or parsing calendar for house: ${house} on platform: ${platform}:`,
      error,
    );
    return NextResponse.json(
      {
        error: "Failed to fetch or parse the calendar",
        details: error.message,
        house,
        platform,
      },
      { status: 500 },
    );
  }
}
