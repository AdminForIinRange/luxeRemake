"use client";

import React, { useEffect, useState } from "react";
import { Box, Button, Text, Select } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Months array for display
const months = [
  "January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December",
];

// Get the number of days in a specific month
const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();

const AvailabilityCalendar: React.FC = () => {
  const [airbnbData, setAirbnbData] = useState<any[]>([]);
  const [bookingcomData, setBookingcomData] = useState<any[]>([]);
  const [clashes, setClashes] = useState<Set<number>>(new Set());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedHouse, setSelectedHouse] = useState("ultimate-luxury-beachside-escape");

  // House List with dynamic URL based on the house name
  const houseList = [
    {
      name: "ultimate-luxury-beachside-escape",
      airbnbUrl: `/api/availability?house=ultimate-luxury-beachside-escape&platform=airbnb`,
      bookingcomUrl: `/api/availability?house=ultimate-luxury-beachside-escape&platform=bookingcom`,
      description: "This luxurious beachside escape has it all, from stunning ocean views to modern amenities.",
    },
    {
      name: "melbourne-street-haven",
      airbnbUrl: `/api/availability?house=melbourne-street-haven&platform=airbnb`,
      bookingcomUrl: `/api/availability?house=melbourne-street-haven&platform=bookingcom`,
      description: "This charming haven is located in the heart of Melbourne, with everything you need just a short walk away.",
    },
    {
      name: "charming-coastal-home",
      airbnbUrl: `/api/availability?house=charming-coastal-home&platform=airbnb`,
      bookingcomUrl: `/api/availability?house=charming-coastal-home&platform=bookingcom`,
      description: "A coastal retreat with stunning ocean views and a cozy atmosphere.",
    },
    {
      name: "cosy-apartment",
      airbnbUrl: `/api/availability?house=cosy-apartment&platform=airbnb`,
      bookingcomUrl: `/api/availability?house=cosy-apartment&platform=bookingcom`,
      description: "Perfect for a romantic getaway, with a comfortable living space and all the amenities you need.",
    },
  ];

  // Function to fetch the availability data from both Airbnb and Booking.com dynamically
  const fetchAvailability = async (house: string) => {
    try {
      const airbnbUrl = houseList.find(h => h.name === house)?.airbnbUrl || '';
      const bookingcomUrl = houseList.find(h => h.name === house)?.bookingcomUrl || '';
  
      if (house === 'melbourne-street-haven') {
        console.log("Booking.com URL:", process.env.MELBOURNE_STREET_HAVEN_BOOKINGCOM_ICS_URL);
      }
  
      // Fetch the availability data for both platforms
      const airbnbRes = await fetch(airbnbUrl);
      const bookingRes = await fetch(bookingcomUrl);
  
      // Check if both responses are OK before parsing JSON
      if (!airbnbRes.ok || !bookingRes.ok) {
        throw new Error("Failed to fetch data from one or both platforms.");
      }
  
      const airbnbData = await airbnbRes.json();
      const bookingcomData = await bookingRes.json();
  
      // Validate if both datasets have the expected events property
      if (!airbnbData.events || !bookingcomData.events) {
        console.error("Invalid data structure received from one or both platforms:", { airbnbData, bookingcomData });
        throw new Error("Invalid data received from one or both platforms");
      }
  
      // Set data only if both are valid
      setAirbnbData(airbnbData.events);
      setBookingcomData(bookingcomData.events);
  
      // Check for clashes between the two sets of events
      checkClashes(airbnbData.events, bookingcomData.events);
  
    } catch (error) {
      console.error("Error fetching availability data:", error.message);
      alert("There was an issue fetching availability data. Please try again later.");
    }
  };
  

  // Function to check for clashes between Airbnb and Booking.com availability
  const checkClashes = (airbnbEvents: any[], bookingcomEvents: any[]) => {
    const clashDates: Set<number> = new Set();

    // Map airbnb dates and bookingcom dates for quick lookup
    const airbnbDates = new Set(
      airbnbEvents.map((event) => {
        const start = new Date(event.start);
        return `${start.getFullYear()}-${start.getMonth()}-${start.getDate()}`;
      })
    );
    const bookingcomDates = new Set(
      bookingcomEvents.map((event) => {
        const start = new Date(event.start);
        return `${start.getFullYear()}-${start.getMonth()}-${start.getDate()}`;
      })
    );

    // Find overlaps and add them to the clash set
    airbnbDates.forEach((date) => {
      if (bookingcomDates.has(date)) {
        clashDates.add(parseInt(date.split('-')[2]));
      }
    });

    setClashes(clashDates);
  };

  // Fetch availability when the component mounts or when the month/year changes or house is changed
  useEffect(() => {
    fetchAvailability(selectedHouse);
  }, [currentMonth, currentYear, selectedHouse]);

  // Handle navigating between months
  const prevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
    setCurrentYear((prev) => (currentMonth === 0 ? prev - 1 : prev));
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    setCurrentYear((prev) => (currentMonth === 11 ? prev + 1 : prev));
  };

  return (
    <Box rounded="xl" p={6} mb={8} textAlign="start" boxShadow="0 4px 12px rgba(0,0,0,0.05)" bg="white" border="1px solid" borderColor="gray.100">
      {/* Calendar Header with Title and Navigation */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Box>
          <Text fontSize="28px" fontWeight="bold" color="teal.700">
            {months[currentMonth]} {currentYear}
          </Text>
          <Text fontSize="sm" color="gray.500" mt={1}>
            {houseList.find(h => h.name === selectedHouse)?.description}
          </Text>
        </Box>
        <Box display="flex" gap={2}>
          <Button variant="outline" onClick={prevMonth} borderRadius="full" size="sm" borderColor="teal.400" _hover={{ bg: "teal.50" }}>
            <ChevronLeft />
          </Button>
          <Button variant="outline" onClick={nextMonth} borderRadius="full" size="sm" borderColor="teal.400" _hover={{ bg: "teal.50" }}>
            <ChevronRight />
          </Button>
        </Box>
      </Box>

      {/* Dropdown to select the house */}
      <select 
        value={selectedHouse} 
        onChange={(e) => setSelectedHouse(e.target.value)} 
        style={{
          appearance: "none",
          width: "100%",
          backgroundColor: "white",
          border: "1px solid",
          borderColor: "gray.400",
          _hover: {
            borderColor: "gray.500",
          },
          padding: "0.5rem 1rem 0.5rem 2rem",
          borderRadius: "0.5rem",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
          outline: "none",
          ":focus": {
            boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.5)",
          },
        }}
      >
        {houseList.map((house) => (
          <option key={house.name} value={house.name}>{house.name}</option>
        ))}
      </select>

      {/* Calendar Grid */}
      <Box borderRadius="lg" overflow="hidden" border="1px solid" borderColor="gray.200" boxShadow="sm">
        {/* Days of Week Header */}
        <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" bg="gray.50" borderBottom="1px solid" borderColor="gray.200" p={2}>
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <Box key={day} textAlign="center">
              <Text fontWeight="bold" fontSize="sm" color="gray.700">
                {day}
              </Text>
            </Box>
          ))}
        </Box>

        {/* Calendar Days */}
        <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap={0}>
          {Array.from({ length: getDaysInMonth(currentYear, currentMonth) }, (_, index) => {
            const day = index + 1;
            const isClashed = clashes.has(day); // Use Set for clash detection
            const isAirbnbBooked = airbnbData.some((event) => {
              const eventDate = new Date(event.start);
              return (
                eventDate.getDate() === day &&
                eventDate.getMonth() === currentMonth &&
                eventDate.getFullYear() === currentYear
              );
            });
            const isBookingComBooked = bookingcomData.some((event) => {
              const eventDate = new Date(event.start);
              return (
                eventDate.getDate() === day &&
                eventDate.getMonth() === currentMonth &&
                eventDate.getFullYear() === currentYear
              );
            });

            // Determine background color based on booking status
            let bgColor = "white";
            let borderColor = "gray.200";
            let statusText = "";

            if (isClashed) {
              bgColor = "red.50";
              borderColor = "red.300";
              statusText = "Clash";
            } else if (isAirbnbBooked && isBookingComBooked) {
              bgColor = "purple.50";
              borderColor = "purple.300";
              statusText = "Both";
            } else if (isAirbnbBooked) {
              bgColor = "orange.50";
              borderColor = "orange.300";
              statusText = "Airbnb";
            } else if (isBookingComBooked) {
              bgColor = "blue.50";
              borderColor = "blue.300";
              statusText = "Booking";
            } else {
              bgColor = "green.50";
              borderColor = "green.200";
              statusText = "Available";
            }

            return (
              <Box
                key={day}
                height="110px"
                border="1px solid"
                borderColor={borderColor}
                bg={bgColor}
                transition="all 0.2s"
                _hover={{
                  transform: "scale(1.02)",
                  zIndex: 1,
                  boxShadow: "md",
                }}
                position="relative"
                overflow="hidden"
              >
                {/* Day Number */}
                <Box
                  position="absolute"
                  top={1}
                  left={1}
                  bg={isClashed ? "red.400" : "gray.100"}
                  color={isClashed ? "white" : "gray.700"}
                  borderRadius="full"
                  w="24px"
                  h="24px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="xs"
                  fontWeight="bold"
                >
                  {day}
                </Box>

                {/* Status Indicator */}
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  p={1}
                  bg={isClashed ? "red.400" : isAirbnbBooked || isBookingComBooked ? "gray.100" : "transparent"}
                  textAlign="center"
                >
                  <Text
                    fontSize="xs"
                    fontWeight={isClashed ? "bold" : "normal"}
                    color={isClashed ? "white" : "gray.600"}
                  >
                    {statusText}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default AvailabilityCalendar;
