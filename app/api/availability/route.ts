// app/api/availability/route.ts

import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import ical from 'node-ical';

// Function to fetch and parse iCal data
const fetchIcalData = async (url: string) => {
  try {
    const icsData = await axios.get(url);
    return ical.parseICS(icsData.data);
  } catch (error) {
    throw new Error(`Error fetching iCal data: ${error.message}`);
  }
};

// Centralized house-platform mapping for environment variables
const housePlatformMap: Record<string, Record<string, string>> = {
  "cosy-apartment": {
    airbnb: 'COSY_APARTMENT_ADL_AIRBNB_ICS_URL',
    bookingcom: 'COSY_APARTMENT_ADL_BOOKINGCOM_ICS_URL',
  },
  "charming-coastal-home": {
    airbnb: 'CHARMING_COASTAL_HOME_SEAFORD_AIRBNB_ICS_URL',
    bookingcom: 'CHARMING_COASTAL_HOME_SEAFORD_BOOKINGCOM_ICS_URL',
  },
  "melbourne-street-haven": {
    airbnb: 'MELBOURNE_STREET_HAVEN_AIRBNB_ICS_URL',
    bookingcom: 'MELBOURNE_STREET_HAVEN_BOOKINGCOM_ICS_URL',
  },
  "ultimate-luxury-beachside-escape": {
    airbnb: 'ULTIMATE_LUXURY_BEACHSIDE_ESCAPE_WEST_BEACH_AIRBNB_ICS_URL',
    bookingcom: 'ULTIMATE_LUXURY_BEACHSIDE_ESCAPE_WEST_BEACH_BOOKINGCOM_ICS_URL',
  },
  // Add any other houses and platforms here as needed
};

// Function to construct environment variable key based on house and platform
const getHouseVar = (house: string, platform: string): string | null => {
  // Check if the house exists in the map
  if (housePlatformMap[house]) {
    // Check if the platform exists for the given house
    if (housePlatformMap[house][platform]) {
      return housePlatformMap[house][platform];
    } else {
      console.warn(`Platform "${platform}" not found for house "${house}"`);
      return null;
    }
  } else {
    console.warn(`House "${house}" not found in configuration.`);
    return null;
  }
};

export async function GET(req: NextRequest) {
  const house = req.nextUrl.searchParams.get('house');
  const platform = req.nextUrl.searchParams.get('platform');

  console.log(`House: ${house}, Platform: ${platform}`);

  if (!house || !platform) {
    return NextResponse.json(
      { error: 'Both "house" and "platform" are required.' },
      { status: 400 }
    );
  }

  // Get the environment variable for the given house and platform
  const houseVar = getHouseVar(house, platform);

  if (!houseVar) {
    return NextResponse.json(
      { error: `No iCal URL found for house: ${house} on platform: ${platform}` },
      { status: 404 }
    );
  }

  const icalUrl = process.env[houseVar];

  if (!icalUrl) {
    return NextResponse.json(
      { error: `No iCal URL found for house: ${house} on platform: ${platform}` },
      { status: 404 }
    );
  }

  try {
    const parsedData = await fetchIcalData(icalUrl);
    const events = Object.values(parsedData)
      .filter((event) => event.type === "VEVENT") // Only consider events (bookings)
      .map((event: any) => ({
        uid: event.uid,
        summary: event.summary,
        start: event.start,
        end: event.end,
        location: event.location,
        description: event.description,
        allDay: event.datetype === "date",
      }));

    return NextResponse.json({ events });
  } catch (error) {
    console.error("Error fetching or parsing calendar:", error);
    return NextResponse.json(
      { error: "Failed to fetch or parse the calendar", details: error.message },
      { status: 500 }
    );
  }
}
