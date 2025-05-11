"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  User,
  Clock,
  Check,
  AlertTriangle,
  ChevronDown,
} from "lucide-react";

// Import moment-timezone for consistent timezone handling
import moment from "moment-timezone";

// Set default timezone to Australia/Sydney
moment.tz.setDefault("Australia/Sydney");

// Months array for display
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Get the number of days in a specific month (using Sydney timezone)
const getDaysInMonth = (year: number, month: number) => {
  return moment.tz([year, month, 1], "Australia/Sydney").daysInMonth();
};

// Get the first day of the month (0 = Sunday, 1 = Monday, etc.) in Sydney timezone
const getFirstDayOfMonth = (year: number, month: number) => {
  return moment.tz([year, month, 1], "Australia/Sydney").day();
};

// Format date as YYYY-MM-DD in Sydney timezone
const formatDate = (year: number, month: number, day: number) => {
  return moment.tz([year, month, day], "Australia/Sydney").format("YYYY-MM-DD");
};

interface GuestInfo {
  name: string;
  count?: number;
  total?: number;
  bookingId?: string;
}

interface Event {
  uid: string;
  summary: string;
  start: string;
  end: string;
  description?: string;
  platform: string;
  type: string;
  allDay: boolean;
  timezone?: string;
  checkInTime?: string;
  checkOutTime?: string;
  guestInfo?: GuestInfo;
}

// Default check-in/check-out times if not specified

const BUFFER_HOURS = 0; // Buffer time between bookings in hours
const DEFAULT_CHECK_IN_TIME = "14:00"; // Default check-in time if not specified
const DEFAULT_CHECK_OUT_TIME = "10:00"; // Default check-out time if not specified

const AirbnbCalendar = () => {
  // Get current date in Sydney timezone
  const sydneyNow = moment().tz("Australia/Sydney");
  const [airbnbData, setAirbnbData] = useState<Event[]>([]);
  const [bookingcomData, setBookingcomData] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [clashes, setClashes] = useState<Set<string>>(new Set());
  const [clashDetails, setClashDetails] = useState<
    Record<string, { reason: string; events: string[] }>
  >({});
  const [safeDoubleBookings, setSafeDoubleBookings] = useState<Set<string>>(
    new Set(),
  );
  const [currentYear, setCurrentYear] = useState(sydneyNow.year());
  const [currentMonth, setCurrentMonth] = useState(sydneyNow.month());
  const [selectedHouse, setSelectedHouse] = useState(
    "ultimate-luxury-beachside-escape",
  );
  const [lastUpdated, setLastUpdated] = useState<string>(
    sydneyNow.format("DD MMM YYYY, h:mm A"),
  );

  const houseList = [
    {
      name: "ultimate-luxury-beachside-escape",
      displayName: "Ultimate Luxury Beachside Escape",
      description:
        "This luxurious beachside escape has it all, from stunning ocean views to modern amenities.",
    },
    {
      name: "melbourne-street-haven",
      displayName: "Melbourne Street Haven",
      description:
        "This charming haven is located in the heart of Melbourne, with everything you need just a short walk away.",
    },
    {
      name: "charming-coastal-home",
      displayName: "Charming Coastal Home",
      description:
        "A coastal retreat with stunning ocean views and a cozy atmosphere.",
    },
    {
      name: "cosy-apartment",
      displayName: "Cosy Apartment",
      description:
        "Perfect for a romantic getaway, with a comfortable living space and all the amenities you need.",
    },
  ];

  // Function to fetch the availability data from both Airbnb and Booking.com
  const fetchAvailability = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Fetch data from both platforms in parallel
      const [airbnbRes, bookingRes] = await Promise.all([
        fetch(`/api/availability?house=${selectedHouse}&platform=airbnb`),
        fetch(`/api/availability?house=${selectedHouse}&platform=bookingcom`),
      ]);

      if (!airbnbRes.ok) {
        throw new Error(`Failed to fetch Airbnb data: ${airbnbRes.statusText}`);
      }

      if (!bookingRes.ok) {
        throw new Error(
          `Failed to fetch Booking.com data: ${bookingRes.statusText}`,
        );
      }

      const airbnbData = await airbnbRes.json();
      const bookingcomData = await bookingRes.json();

      console.log("Airbnb data:", airbnbData.events);
      console.log("Booking.com data:", bookingcomData.events);

      // Process the events to ensure they have check-in/check-out times
      const processedAirbnbEvents = processEvents(airbnbData.events || []);
      const processedBookingcomEvents = processEvents(
        bookingcomData.events || [],
      );

      setAirbnbData(processedAirbnbEvents);
      setBookingcomData(processedBookingcomEvents);

      // Update last updated time in Sydney timezone
      setLastUpdated(
        moment().tz("Australia/Sydney").format("DD MMM YYYY, h:mm A"),
      );

      // Check for clashes and safe double bookings between the two platforms
      findBookingOverlaps(processedAirbnbEvents, processedBookingcomEvents);
    } catch (error: any) {
      console.error("Error fetching availability data:", error);
      setError(`Failed to load availability data: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Process events to ensure they have check-in/check-out times
  const processEvents = (events: Event[]): Event[] => {
    return events.map((event) => {
      // Create a copy of the event to avoid mutating the original
      const processedEvent = { ...event };

      // If check-in time is not specified, use default
      if (!processedEvent.checkInTime) {
        processedEvent.checkInTime = DEFAULT_CHECK_IN_TIME;
      }

      // If check-out time is not specified, use default
      if (!processedEvent.checkOutTime) {
        processedEvent.checkOutTime = DEFAULT_CHECK_OUT_TIME;
      }

      return processedEvent;
    });
  };

  // Function to find clashes and safe double bookings between Airbnb and Booking.com bookings
  const findBookingOverlaps = (
    airbnbEvents: Event[],
    bookingcomEvents: Event[],
  ) => {
    const clashDates = new Set<string>();
    const safeDoubleBookingDates = new Set<string>();
    const clashDetailsMap: Record<
      string,
      { reason: string; events: string[] }
    > = {};

    // Combine all events for easier processing
    const allEvents = [...airbnbEvents, ...bookingcomEvents];

    // For each date that has bookings, check if there are overlaps
    const dateBookings: Record<string, Event[]> = {};

    // Group bookings by date
    allEvents.forEach((event) => {
      const startDate = moment(event.start).format("YYYY-MM-DD");
      const endDate = moment(event.end).format("YYYY-MM-DD");

      // Add each day of the booking to the dateBookings map
      const currentDate = moment(startDate);
      while (currentDate.isSameOrBefore(endDate)) {
        const dateStr = currentDate.format("YYYY-MM-DD");
        if (!dateBookings[dateStr]) {
          dateBookings[dateStr] = [];
        }
        dateBookings[dateStr].push(event);
        currentDate.add(1, "day");
      }
    });

    // Check each date for overlaps
    Object.entries(dateBookings).forEach(([dateStr, events]) => {
      if (events.length > 1) {
        // Sort events by start time on this date
        const sortedEvents = [...events].sort((a, b) => {
          const aIsStart = moment(a.start).format("YYYY-MM-DD") === dateStr;
          const bIsStart = moment(b.start).format("YYYY-MM-DD") === dateStr;

          // If both are start dates, compare check-in times
          if (aIsStart && bIsStart) {
            return a.checkInTime!.localeCompare(b.checkInTime!);
          }

          // If only one is a start date, the other is continuing from previous day
          if (aIsStart) return 1; // b comes first (it's continuing)
          if (bIsStart) return -1; // a comes first (it's continuing)

          // If neither are start dates, they're both continuing from previous days
          return 0;
        });

        // Check for time overlaps
        let hasClash = false;

        for (let i = 0; i < sortedEvents.length - 1; i++) {
          const currentEvent = sortedEvents[i];
          const nextEvent = sortedEvents[i + 1];

          const currentIsEnd =
            moment(currentEvent.end).format("YYYY-MM-DD") === dateStr;
          const nextIsStart =
            moment(nextEvent.start).format("YYYY-MM-DD") === dateStr;

          // If current event ends today and next event starts today, check times
          if (currentIsEnd && nextIsStart) {
            const currentEndTime = `${dateStr}T${currentEvent.checkOutTime}`;
            const nextStartTime = `${dateStr}T${nextEvent.checkInTime}`;

            const currentEnd = moment.tz(
              currentEndTime,
              "YYYY-MM-DDThh:mm",
              "Australia/Sydney",
            );
            const nextStart = moment.tz(
              nextStartTime,
              "YYYY-MM-DDThh:mm",
              "Australia/Sydney",
            );

            // Check if there's enough buffer time
            const hasEnoughBuffer =
              nextStart.diff(currentEnd, "hours") >= BUFFER_HOURS;

            if (!hasEnoughBuffer) {
              hasClash = true;
              clashDetailsMap[dateStr] = {
                reason: `Insufficient buffer between bookings: ${formatTime(
                  currentEvent.checkOutTime!,
                )} to ${formatTime(nextEvent.checkInTime!)}`,
                events: [currentEvent.uid, nextEvent.uid],
              };
              break;
            }
          } else {
            // If one event continues through the day and another starts/ends, it's a clash
            hasClash = true;
            clashDetailsMap[dateStr] = {
              reason: "Overlapping bookings on same day",
              events: [currentEvent.uid, nextEvent.uid],
            };
            break;
          }
        }

        if (hasClash) {
          clashDates.add(dateStr);
        } else if (events.length > 1) {
          // If there's no clash but multiple bookings, it's a safe double booking
          safeDoubleBookingDates.add(dateStr);
        }
      }
    });

    setClashes(clashDates);
    setSafeDoubleBookings(safeDoubleBookingDates);
    setClashDetails(clashDetailsMap);
  };

  // Check if a specific date is booked on Airbnb
  const isAirbnbBooked = (year: number, month: number, day: number) => {
    const dateStr = formatDate(year, month, day);

    return airbnbData.some((event) => {
      const eventStart = moment(event.start).format("YYYY-MM-DD");
      const eventEnd = moment(event.end).format("YYYY-MM-DD");
      return (
        moment(dateStr).isSameOrAfter(eventStart) &&
        moment(dateStr).isSameOrBefore(eventEnd)
      );
    });
  };

  // Check if a specific date is booked on Booking.com
  const isBookingComBooked = (year: number, month: number, day: number) => {
    const dateStr = formatDate(year, month, day);

    return bookingcomData.some((event) => {
      const eventStart = moment(event.start).format("YYYY-MM-DD");
      const eventEnd = moment(event.end).format("YYYY-MM-DD");
      return (
        moment(dateStr).isSameOrAfter(eventStart) &&
        moment(dateStr).isSameOrBefore(eventEnd)
      );
    });
  };

  // Check if a specific date has a booking clash
  const hasClash = (year: number, month: number, day: number) => {
    return clashes.has(formatDate(year, month, day));
  };

  // Check if a specific date has a safe double booking
  const hasSafeDoubleBooking = (year: number, month: number, day: number) => {
    return safeDoubleBookings.has(formatDate(year, month, day));
  };

  // Get clash details for a specific date
  const getClashDetails = (year: number, month: number, day: number) => {
    const dateStr = formatDate(year, month, day);
    return clashDetails[dateStr];
  };

  // Get booking details for a specific date
  const getBookingDetails = (year: number, month: number, day: number) => {
    const dateStr = formatDate(year, month, day);

    // Check Airbnb first
    const airbnbBooking = airbnbData.find((event) => {
      const eventStart = moment(event.start).format("YYYY-MM-DD");
      const eventEnd = moment(event.end).format("YYYY-MM-DD");
      return (
        moment(dateStr).isSameOrAfter(eventStart) &&
        moment(dateStr).isSameOrBefore(eventEnd)
      );
    });

    if (airbnbBooking) {
      return {
        platform: "airbnb",
        booking: airbnbBooking,
        isStart: moment(airbnbBooking.start).format("YYYY-MM-DD") === dateStr,
        isEnd: moment(airbnbBooking.end).format("YYYY-MM-DD") === dateStr,
      };
    }

    // Then check Booking.com
    const bookingComBooking = bookingcomData.find((event) => {
      const eventStart = moment(event.start).format("YYYY-MM-DD");
      const eventEnd = moment(event.end).format("YYYY-MM-DD");
      return (
        moment(dateStr).isSameOrAfter(eventStart) &&
        moment(dateStr).isSameOrBefore(eventEnd)
      );
    });

    if (bookingComBooking) {
      return {
        platform: "bookingcom",
        booking: bookingComBooking,
        isStart:
          moment(bookingComBooking.start).format("YYYY-MM-DD") === dateStr,
        isEnd: moment(bookingComBooking.end).format("YYYY-MM-DD") === dateStr,
      };
    }

    return null;
  };

  // Get all bookings for a specific date (could be multiple if there are same-day bookings)
  const getAllBookingsForDate = (year: number, month: number, day: number) => {
    const dateStr = formatDate(year, month, day);
    const bookings = [];

    // Check Airbnb bookings
    const airbnbBookings = airbnbData
      .filter((event) => {
        const eventStart = moment(event.start).format("YYYY-MM-DD");
        const eventEnd = moment(event.end).format("YYYY-MM-DD");
        return (
          moment(dateStr).isSameOrAfter(eventStart) &&
          moment(dateStr).isSameOrBefore(eventEnd)
        );
      })
      .map((booking) => ({
        platform: "airbnb",
        booking,
        isStart: moment(booking.start).format("YYYY-MM-DD") === dateStr,
        isEnd: moment(booking.end).format("YYYY-MM-DD") === dateStr,
      }));

    // Check Booking.com bookings
    const bookingComBookings = bookingcomData
      .filter((event) => {
        const eventStart = moment(event.start).format("YYYY-MM-DD");
        const eventEnd = moment(event.end).format("YYYY-MM-DD");
        return (
          moment(dateStr).isSameOrAfter(eventStart) &&
          moment(dateStr).isSameOrBefore(eventEnd)
        );
      })
      .map((booking) => ({
        platform: "bookingcom",
        booking,
        isStart: moment(booking.start).format("YYYY-MM-DD") === dateStr,
        isEnd: moment(booking.end).format("YYYY-MM-DD") === dateStr,
      }));

    return [...airbnbBookings, ...bookingComBookings];
  };

  // Fetch availability when the component mounts or when the month/year/house changes
  useEffect(() => {
    fetchAvailability();
  }, [currentMonth, currentYear, selectedHouse]);

  // Handle navigating between months
  const prevMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((prevYear) => prevYear - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((prevYear) => prevYear + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  // Get the selected house details
  const selectedHouseDetails =
    houseList.find((h) => h.name === selectedHouse) || houseList[0];

  // Calculate empty cells before the first day of the month
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const emptyDays = Array(firstDay).fill(null);

  // Format time for display
  const formatTime = (timeString: string) => {
    return moment(timeString, "HH:mm").format("h:mm A");
  };

const [isOpen, setIsOpen] = useState(false);

const [selectedDisplayName, setSelectedDisplayName] = useState(houseList[0]?.displayName || "Select a house");
const dropdownRef = useRef(null);

// Close dropdown when clicking outside
useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [dropdownRef]);

  return (
    <Box
      width="100%"
      maxWidth="1200px"
      mx="auto"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    >
      {/* Header Section */}
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ base: "flex-start", md: "center" }}
        mb={6}
        px={4}
      >
        {/* Month and Year */}
        <Box mb={{ base: 4, md: 0 }}>
          <Text fontSize="2xl" fontWeight="bold" color="#222222">
            {months[currentMonth]} {currentYear}
          </Text>
          <Text fontSize="sm" color="#717171" mt={1}>
            {selectedHouseDetails.displayName}
          </Text>
        </Box>

        {/* Controls */}
        <Box display="flex" alignItems="center" gap={3}>
          {/* Property Selector */}
          

          {/* Month Navigation */}
          <Box display="flex" gap={2}>
            <Box
              as="button"
              onClick={prevMonth}
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="36px"
              height="36px"
              borderRadius="full"
              border="1px solid"
              borderColor="#DDDDDD"
              _hover={{ borderColor: "#000000" }}
              transition="all 0.2s"
            >
              <Box as={ChevronLeft} size={18} color="#222222" />
            </Box>
            <Box
              as="button"
              onClick={nextMonth}
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="36px"
              height="36px"
              borderRadius="full"
              border="1px solid"
              borderColor="#DDDDDD"
              _hover={{ borderColor: "#000000" }}
              transition="all 0.2s"
            >
              <Box as={ChevronRight} size={18} color="#222222" />
            </Box>
          </Box>
        </Box>
      </Box>

<Box mb={6} px={4} position="relative" ref={dropdownRef}>
  {/* Custom Select Trigger */}
  <Box 
    onClick={() => setIsOpen(!isOpen)}
    width="100%"
    py={2}
    px={5}
    borderRadius="md"
    border="1px solid"
    borderColor="#DDDDDD"
    fontSize="sm"
    fontWeight="medium"
    bg="white"
    color="#222222"
    cursor="pointer"
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    _hover={{ borderColor: "#AAAAAA" }}
  >
    <Box>{selectedDisplayName}</Box>
    <Box 
      as="span" 
      transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
      transition="transform 0.2s"
    >
    <ChevronDown />
    </Box>
  </Box>

  {/* Dropdown Options */}
  {isOpen && (
    <Box 
      position="absolute"
   
 
mt={2}

     
      zIndex={10}
      bg="white"
      borderRadius="md"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      border="1px solid"
      borderColor="#DDDDDD"
      maxHeight="200px"
      overflowY="auto"
    >
      {houseList.map((house) => (
        <Box
          key={house.name}
          py={2}
          px={3}
          cursor="pointer"
          bg={selectedHouse === house.name ? "#F5F5F5" : "white"}
          _hover={{ bg: "#F5F5F5" }}
          onClick={() => {
            setSelectedHouse(house.name);
            setSelectedDisplayName(house.displayName);
            setIsOpen(false);
            // This assumes you have a setSelectedHouse function in your parent code
            // If you have a different function name, replace it accordingly
          }}
          fontSize="sm"
        >
          {house.displayName}
        </Box>
      ))}
    </Box>
  )}

  {/* Hidden native select for accessibility */}
   <select
  value={selectedHouse}
  onChange={(e) => {
    const house = houseList.find(h => h.name === e.target.value);
    if (house) {
      setSelectedHouse(house.name);
      setSelectedDisplayName(house.displayName);
      setIsOpen(false);
    }
  }}
  style={{
    position: 'absolute',
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    margin: '-1px',
    padding: 0,
    border: 'none',
  }}
>
  {houseList.map((house) => (
    <option key={house.name} value={house.name}>
      {house.displayName}
    </option>
  ))}
</select>
</Box>
      {/* Property Description */}
      <Box
        bg="#F7F7F7"
        p={4}
        borderRadius="lg"
        mb={6}
        mx={4}
        border="1px solid"
        borderColor="#EEEEEE"
      >
        <Text fontSize="sm" color="#717171">
          {selectedHouseDetails.description}
        </Text>
      </Box>

      {/* Loading State */}
      {isLoading && (
        <Box
          textAlign="center"
          py={10}
          px={4}
          bg="white"
          borderRadius="lg"
          border="1px solid"
          borderColor="#EEEEEE"
          mx={4}
          mb={6}
        >
          <Text fontSize="md" color="#717171" fontWeight="medium">
            Loading availability data...
          </Text>
          <Text fontSize="sm" color="#717171" mt={2}>
            Fetching bookings from Airbnb and Booking.com
          </Text>
        </Box>
      )}

      {/* Error State */}
      {error && (
        <Box
          bg="#FEE2E2"
          p={4}
          borderRadius="lg"
          mb={6}
          mx={4}
          border="1px solid"
          borderColor="#FECACA"
        >
          <Text fontSize="md" fontWeight="medium" color="#B91C1C">
            {error}
          </Text>
          <Text fontSize="sm" color="#B91C1C" mt={2}>
            Please try refreshing the page or contact support if the issue
            persists.
          </Text>
        </Box>
      )}

      {/* Calendar Legend */}
      <Box
        display="flex"
        flexWrap="wrap"
        gap={4}
        mb={4}
        px={4}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <Box display="flex" alignItems="center">
          <Box
            width="12px"
            height="12px"
            borderRadius="full"
            bg="#FF5A5F"
            mr={2}
          />
          <Text fontSize="sm" color="#717171">
            Airbnb
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Box
            width="12px"
            height="12px"
            borderRadius="full"
            bg="#00A699"
            mr={2}
          />
          <Text fontSize="sm" color="#717171">
            Booking.com
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Box
            width="12px"
            height="12px"
            borderRadius="full"
            bg="#FFB400"
            mr={2}
          />
          <Text fontSize="sm" color="#717171">
            Booking Clash
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Box
            width="12px"
            height="12px"
            borderRadius="full"
            bg="#4CAF50"
            mr={2}
          />
          <Text fontSize="sm" color="#717171">
            Safe Double Booking
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Box
            width="12px"
            height="12px"
            borderRadius="full"
            bg="#DDDDDD"
            mr={2}
          />
          <Text fontSize="sm" color="#717171">
            Available
          </Text>
        </Box>
      </Box>

      {/* Calendar Grid */}
      <Box
        border="1px solid"
        borderColor="#DDDDDD"
        borderRadius="lg"
        overflow="hidden"
        mx={4}
        boxShadow="0 1px 2px rgba(0,0,0,0.08)"
      >
        {/* Days of Week Header */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(7, 1fr)"
          bg="#F7F7F7"
          borderBottom="1px solid"
          borderColor="#EEEEEE"
        >
          {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
            <Box key={index} p={3} textAlign="center">
              <Text fontSize="sm" fontWeight="medium" color="#717171">
                {day}
              </Text>
            </Box>
          ))}
        </Box>

        {/* Calendar Days */}
        <Box display="grid" gridTemplateColumns="repeat(7, 1fr)">
          {/* Empty cells for days before the first day of the month */}
          {emptyDays.map((_, index) => (
            <Box
              key={`empty-${index}`}
              height={{ base: "100px", md: "120px" }}
              borderRight={index % 7 === 6 ? "none" : "1px solid #EEEEEE"}
              borderBottom="1px solid #EEEEEE"
              bg="#F7F7F7"
            />
          ))}

          {/* Actual days of the month */}
          {Array.from(
            { length: getDaysInMonth(currentYear, currentMonth) },
            (_, i) => {
              const day = i + 1;
              const isAirbnb = isAirbnbBooked(currentYear, currentMonth, day);
              const isBookingCom = isBookingComBooked(
                currentYear,
                currentMonth,
                day,
              );
              const isClash = hasClash(currentYear, currentMonth, day);
              const isSafeDoubleBooking = hasSafeDoubleBooking(
                currentYear,
                currentMonth,
                day,
              );
              const clashDetail = getClashDetails(
                currentYear,
                currentMonth,
                day,
              );
              const bookings = getAllBookingsForDate(
                currentYear,
                currentMonth,
                day,
              );
              const hasMultipleBookings = bookings.length > 1;

              // Get the primary booking to display (prioritize the one with clash if exists)
              const bookingDetails =
                bookings.find(
                  (b) =>
                    clashDetail && clashDetail.events.includes(b.booking.uid),
                ) || bookings[0];

              const cellIndex = i + firstDay;
              const isLastRow =
                Math.floor(cellIndex / 7) ===
                Math.floor(
                  (firstDay + getDaysInMonth(currentYear, currentMonth) - 1) /
                    7,
                );
const isLastColumn = cellIndex % 7 === 6
              // Determine cell background color
              let cellBgColor = "white";
              if (isClash)
                cellBgColor = "#FFF7E6"; // Light yellow for clash
              else if (isSafeDoubleBooking) cellBgColor = "#F0FDF4"; // Light green for safe double booking

              return (
                <Box
                  key={`day-${day}`}
                  height={{ base: "100px", md: "120px" }}
                  borderRight={
                    cellIndex % 7 === 6 ? "none" : "1px solid #EEEEEE"
                  }
                  borderBottom={isLastRow ? "none" : "1px solid #EEEEEE"}
                  bg={cellBgColor}
                  position="relative"
                  transition="all 0.2s"
                  _hover={{
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    zIndex: 1,
                  }}
                >
                  {/* Day Number */}
                  <Box position="absolute" top={2} left={2}>
                    <Text
                      fontSize="sm"
                      fontWeight="medium"
                      color={
                        isClash
                          ? "#FFB400"
                          : isSafeDoubleBooking
                            ? "#4CAF50"
                            : isAirbnb
                              ? "#FF5A5F"
                              : isBookingCom
                                ? "#00A699"
                                : "#717171"
                      }
                    >
                      {day}
                    </Text>
                  </Box>

                  {/* Safe Double Booking Indicator */}
                  {isSafeDoubleBooking && (

                    <> <Box
  position="absolute"
  top="50%"
  /* for normal cells: start at 50% when isStart, end at 50% when isEnd;
     but on the last column we flip that logic */
  right={
    isLastColumn
      ? (bookingDetails.isEnd ? "0%" : "50%")
      : (bookingDetails.isStart ? "50%" : "0")
  }
  left={
    isLastColumn
      ? (bookingDetails.isStart ? "50%" : "50%")
      : (bookingDetails.isEnd ? "50%" : "0%")
  }
  height="32px"
  bg={
    bookingDetails.platform === "airbnb"
      ? "rgba(255, 90, 95, 0.15)"
      : "rgba(0, 166, 153, 0.15)"
  }
  transform="translateY(-50%)"
  /* on a normal cell we round left when isStart, right when isEnd;
     on the last column we round the opposite corners instead */
  borderRightRadius={
    isLastColumn
      ? (bookingDetails.isEnd ? "none" : "none")
      : (bookingDetails.isStart ? "md" : "none")
  }
  borderLeftRadius={
    isLastColumn
      ? (bookingDetails.isStart ? "md" : "md")
      : (bookingDetails.isEnd ? "md" : "none")
  }
  border="2px solid"
  borderColor={
    bookingDetails.platform === "airbnb"
      ? "#FF5A5F"
      : "#00A699"
  }
  display="flex"
  alignItems="center"
  justifyContent="center"
>
  {bookingDetails.isStart && (
    <Box display="flex" alignItems="center" mr={1}>
      <Box as={Clock} size={10} color={
        bookingDetails.platform === "airbnb" ? "#FF5A5F" : "#00A699"
      } />
    </Box>
  )}
  {bookingDetails.isEnd && (
    <Box display="flex" alignItems="center" ml={1}>
      <Box as={Clock} size={10} color={
        bookingDetails.platform === "airbnb" ? "#FF5A5F" : "#00A699"
      } />
    </Box>
  )}
</Box>
</>
                    
                  )}

                  {/* Clash Indicator */}
                  {isClash && (
                    
                    <Box
                      position="absolute"
                      top={2}
                      right={2}
                      width="20px"
                      height="20px"
                      borderRadius="full"
                      bg="#FFB400"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      boxShadow="0 2px 4px rgba(0,0,0,0.1)"
                    >
                      <Box as={AlertTriangle} size={12} color="white" />
                    </Box>
                  )}

                  {/* Booking Information */}
                  {bookingDetails && (
                    <>
                      {/* Booking Bar - Improved Airbnb-style visualization */}
                      {!isClash && (
                        <Box
                          position="absolute"
                          top="50%"
                          left={bookingDetails.isStart ? "50%" : 0}
                          right={bookingDetails.isEnd ? "50%" : 0}
                          height="32px"
                          bg={
                            bookingDetails.platform === "airbnb"
                              ? "rgba(255, 90, 95, 0.15)"
                              : "rgba(0, 166, 153, 0.15)"
                          }
                          transform="translateY(-50%)"
                          borderLeftRadius={
                            bookingDetails.isStart ? "md" : "none"
                          }
                          borderRightRadius={
                            bookingDetails.isEnd ? "md" : "none"
                          }
                          border="2px solid"
                          borderColor={
                            bookingDetails.platform === "airbnb"
                              ? "#FF5A5F"
                              : "#00A699"
                          }
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          {/* Show check-in/check-out times for start/end dates */}
                          {bookingDetails.isStart && (
                            <Box display="flex" alignItems="center">
                              <Box
                                as={Clock}
                                size={10}
                                color={
                                  bookingDetails.platform === "airbnb"
                                    ? "#FF5A5F"
                                    : "#00A699"
                                }
                                mr={1}
                              />
                             
                            </Box>
                          )}
                          {bookingDetails.isEnd && (
                            <Box display="flex" alignItems="center">
                              <Box
                                as={Clock}
                                size={10}
                                color={
                                  bookingDetails.platform === "airbnb"
                                    ? "#FF5A5F"
                                    : "#00A699"
                                }
                                mr={1}
                              />
                             
                            </Box>
                          )}
                        </Box>
                      )}





                      {/* Start/End Indicators - Improved */}

                      {/* Guest Information (only on start date) */}
                      {bookingDetails.isStart &&
                        bookingDetails.booking.guestInfo && (
                          <Box
                            position="absolute"
                            bottom={0}
                            left={0}
                            right={0}
                            bg={
                              bookingDetails.platform === "airbnb"
                                ? "#FF5A5F"
                                : "#00A699"
                            }
                            color="white"
                            p={1}
                            borderTopLeftRadius="md"
                            borderTopRightRadius="md"
                          >
                            <Box display="flex" alignItems="center" mb={1}>
                              <Box
                                as="span"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                bg="white"
                                color={
                                  bookingDetails.platform === "airbnb"
                                    ? "#FF5A5F"
                                    : "#00A699"
                                }
                                borderRadius="full"
                                width="20px"
                                height="20px"
                                mr={2}
                              >
                                <Box as={User} size={12} />
                              </Box>
                              <Text fontSize="xs" fontWeight="medium">
                                {bookingDetails.booking.guestInfo.name}
                                {bookingDetails.booking.guestInfo.count &&
                                bookingDetails.booking.guestInfo.count > 1
                                  ? ` + ${bookingDetails.booking.guestInfo.count - 1}`
                                  : ""}
                              </Text>
                            </Box>
                            {bookingDetails.booking.guestInfo.total && (
                              <Text fontSize="xs" fontWeight="bold">
                                ${bookingDetails.booking.guestInfo.total}
                              </Text>
                            )}
                          </Box>
                        )}
                    </>
                  )}

                  {/* Display both platform bookings when there's a clash */}
                  {isClash && bookings.length > 1 && (
                    <Box
                      position="absolute"
                      bottom="42.5px"
                      left={0}
                      right={0}
                      px={1}
                      zIndex={3}
                    >
                      {bookings.map((booking, idx) => (
                        <Box
                          key={idx}
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          bg={
                            booking.platform === "airbnb"
                              ? "rgba(255, 90, 95, 1)"
                              : "rgba(0, 166, 153,1)"
                          }
                          borderColor={
                            booking.platform === "airbnb"
                              ? "#FF5A5F"
                              : "#00A699"
                          }
                          borderRadius={"md"}
                          mb={"3px"}
                          fontSize="xs"
                        >
                          <Box
                            h={"12.5px"}
                            fontWeight="bold"
                            bgColor={
                              booking.platform === "airbnb"
                                ? "#FF5A5F"
                                : "#00A699"
                            }
                          ></Box>
                        </Box>
                      ))}
                    </Box>
                  )}

                  {/* Safe Double Booking Banner */}
                  {isSafeDoubleBooking && (
                    <Box
                      position="absolute"
                      bottom={0}
                      left={0}
                      right={0}
                      bg="#4CAF50"
                      color="white"
                      p={2}
                      borderTopLeftRadius="md"
                      borderTopRightRadius="md"
                    >
                      <Text  fontSize={["0", "0", "0", "xs"]} fontWeight="bold">
                        SAFE DOUBLE BOOKING
                      </Text>
                    </Box>
                  )}

                  {/* Clash Banner */}
                  {isClash && (
                    <Box
                      position="absolute"
                      bottom={0}
                      left={0}
                      right={0}
                      bg="#FFB400"
                      color="white"
                      p={2}
                      borderTopLeftRadius="md"
                      borderTopRightRadius="md"
                    >
                      <Text fontSize="xs" fontWeight="bold">
                        BOOKING CLASH
                      </Text>
                    </Box>
                  )}

                  {/* Price for available dates */}
                </Box>
              );
            },
          )}
        </Box>
      </Box>

      {/* Calendar Footer */}
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ base: "flex-start", md: "center" }}
        mt={4}
        mb={4}
        px={4}
        gap={4}
      >
        <Text fontSize="xs" color="#717171">
          Last updated: {lastUpdated} (Sydney time)
        </Text>

        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          gap={2}
        >
          {safeDoubleBookings.size > 0 && (
            <Box
              display="flex"
              alignItems="center"
              bg="#F0FDF4"
              p={2}
              px={4}
              borderRadius="full"
              border="1px solid"
              borderColor="#DCFCE7"
            >
              <Box as={Check} size={12} color="#166534" mr={2} />
              <Text fontSize="xs" fontWeight="medium" color="#166534">
                {safeDoubleBookings.size} safe double bookings this month
              </Text>
            </Box>
          )}

          <Box
            display="flex"
            alignItems="center"
            bg={clashes.size > 0 ? "#FFF7E6" : "#F0FDF4"}
            p={2}
            px={4}
            borderRadius="full"
            border="1px solid"
            borderColor={clashes.size > 0 ? "#FED7AA" : "#DCFCE7"}
          >
            {clashes.size > 0 ? (
              <Box as={AlertTriangle} size={12} color="#B54708" mr={2} />
            ) : (
              <Box as={Check} size={12} color="#166534" mr={2} />
            )}
            <Text
              fontSize="xs"
              fontWeight="medium"
              color={clashes.size > 0 ? "#B54708" : "#166534"}
            >
              {clashes.size > 0
                ? `${clashes.size} booking conflicts detected`
                : "No booking conflicts this month"}
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Double Booking Information */}
      <Box
        bg="#F0FDF4"
        p={4}
        borderRadius="lg"
        mb={6}
        mx={4}
        border="1px solid"
        borderColor="#DCFCE7"
      >
        <Text fontSize="sm" fontWeight="medium" color="#166534" mb={2}>
          About Double Bookings
        </Text>
        <Text fontSize="xs" color="#166534">
          <strong>Safe Double Bookings:</strong> Multiple bookings on the same
          day with at least {BUFFER_HOURS} hours between check-out and check-in
          times.
        </Text>
        <Text fontSize="xs" color="#166534" mt={1}>
          <strong>Booking Clashes:</strong> Multiple bookings on the same day
          with insufficient buffer time between them.
        </Text>
      </Box>

      {/* Buffer Time Information */}
      <Box textAlign="center" mb={2}>
        <Text fontSize="xs" color="#717171">
          Required buffer between bookings: {BUFFER_HOURS} hours
        </Text>
      </Box>

      {/* Timezone Information */}
      <Box textAlign="center" mb={8}>
        <Text fontSize="xs" color="#717171">
          All times shown in Australia/Sydney timezone
        </Text>
      </Box>
    </Box>
  );
};

export default AirbnbCalendar;
