"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Box, Button, Text } from "@chakra-ui/react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Import moment-timezone for consistent timezone handling
import moment from "moment-timezone"

// Set default timezone to Australia/Sydney
moment.tz.setDefault("Australia/Sydney")

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
]

// Get the number of days in a specific month (using Sydney timezone)
const getDaysInMonth = (year: number, month: number) => {
  return moment.tz([year, month, 1], "Australia/Sydney").daysInMonth()
}

// Get the first day of the month (0 = Sunday, 1 = Monday, etc.) in Sydney timezone
const getFirstDayOfMonth = (year: number, month: number) => {
  return moment.tz([year, month, 1], "Australia/Sydney").day()
}

// Format date as YYYY-MM-DD in Sydney timezone
const formatDate = (year: number, month: number, day: number) => {
  return moment.tz([year, month, day], "Australia/Sydney").format("YYYY-MM-DD")
}

// Parse a date string to a moment object in Sydney timezone
const parseSydneyDate = (dateStr: string) => {
  return moment.tz(dateStr, "Australia/Sydney")
}

interface Event {
  uid: string
  summary: string
  start: string
  end: string
  description?: string
  platform: string
  type: string
  allDay: boolean
  timezone?: string
}

const AvailabilityCalendar = () => {
  // Get current date in Sydney timezone
  const sydneyNow = moment().tz("Australia/Sydney")
  const [airbnbData, setAirbnbData] = useState<Event[]>([])
  const [bookingcomData, setBookingcomData] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [clashes, setClashes] = useState<Set<string>>(new Set())
  const [currentYear, setCurrentYear] = useState(sydneyNow.year())
  const [currentMonth, setCurrentMonth] = useState(sydneyNow.month())
  const [selectedHouse, setSelectedHouse] = useState("ultimate-luxury-beachside-escape")
  const [lastUpdated, setLastUpdated] = useState<string>(sydneyNow.format("DD MMM YYYY, h:mm A"))

  const houseList = [
    {
      name: "ultimate-luxury-beachside-escape",
      displayName: "Ultimate Luxury Beachside Escape",
      description: "This luxurious beachside escape has it all, from stunning ocean views to modern amenities.",
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
      description: "A coastal retreat with stunning ocean views and a cozy atmosphere.",
    },
    {
      name: "cosy-apartment",
      displayName: "Cosy Apartment",
      description: "Perfect for a romantic getaway, with a comfortable living space and all the amenities you need.",
    },
  ]

  // Function to fetch the availability data from both Airbnb and Booking.com
  const fetchAvailability = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Fetch data from both platforms in parallel
      const [airbnbRes, bookingRes] = await Promise.all([
        fetch(`/api/availability?house=${selectedHouse}&platform=airbnb`),
        fetch(`/api/availability?house=${selectedHouse}&platform=bookingcom`),
      ])

      if (!airbnbRes.ok) {
        throw new Error(`Failed to fetch Airbnb data: ${airbnbRes.statusText}`)
      }

      if (!bookingRes.ok) {
        throw new Error(`Failed to fetch Booking.com data: ${bookingRes.statusText}`)
      }

      const airbnbData = await airbnbRes.json()
      const bookingcomData = await bookingRes.json()

      setAirbnbData(airbnbData.events || [])
      setBookingcomData(bookingcomData.events || [])

      // Update last updated time in Sydney timezone
      setLastUpdated(moment().tz("Australia/Sydney").format("DD MMM YYYY, h:mm A"))

      // Check for clashes between the two platforms
      findClashes(airbnbData.events || [], bookingcomData.events || [])
    } catch (error: any) {
      console.error("Error fetching availability data:", error)
      setError(`Failed to load availability data: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  // Function to find clashes between Airbnb and Booking.com bookings
  const findClashes = (airbnbEvents: Event[], bookingcomEvents: Event[]) => {
    const clashDates = new Set<string>()

    // For each Airbnb event, check if it overlaps with any Booking.com event
    airbnbEvents.forEach((airbnbEvent) => {
      const airbnbStart = parseSydneyDate(airbnbEvent.start)
      const airbnbEnd = parseSydneyDate(airbnbEvent.end)

      bookingcomEvents.forEach((bookingEvent) => {
        const bookingStart = parseSydneyDate(bookingEvent.start)
        const bookingEnd = parseSydneyDate(bookingEvent.end)

        // Check if the dates overlap
        if (airbnbStart.isBefore(bookingEnd) && airbnbEnd.isAfter(bookingStart)) {
          // Calculate the overlap period
          const overlapStart = moment.max(airbnbStart, bookingStart)
          const overlapEnd = moment.min(airbnbEnd, bookingEnd)

          // Add each day in the overlap period to the clash set
          const currentDate = overlapStart.clone()
          while (currentDate.isBefore(overlapEnd)) {
            clashDates.add(currentDate.format("YYYY-MM-DD"))
            currentDate.add(1, "day")
          }
        }
      })
    })

    setClashes(clashDates)
  }

  // Check if a specific date is booked on Airbnb
  const isAirbnbBooked = (year: number, month: number, day: number) => {
    const dateStr = formatDate(year, month, day)
    const date = parseSydneyDate(dateStr)

    return airbnbData.some((event) => {
      const eventStart = parseSydneyDate(event.start)
      const eventEnd = parseSydneyDate(event.end)
      return date.isSameOrAfter(eventStart) && date.isBefore(eventEnd)
    })
  }

  // Check if a specific date is booked on Booking.com
  const isBookingComBooked = (year: number, month: number, day: number) => {
    const dateStr = formatDate(year, month, day)
    const date = parseSydneyDate(dateStr)

    return bookingcomData.some((event) => {
      const eventStart = parseSydneyDate(event.start)
      const eventEnd = parseSydneyDate(event.end)
      return date.isSameOrAfter(eventStart) && date.isBefore(eventEnd)
    })
  }

  // Check if a specific date has a booking clash
  const hasClash = (year: number, month: number, day: number) => {
    return clashes.has(formatDate(year, month, day))
  }

  // Fetch availability when the component mounts or when the month/year/house changes
  useEffect(() => {
    fetchAvailability()
  }, [currentMonth, currentYear, selectedHouse])

  // Handle navigating between months
  const prevMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((prevYear) => prevYear - 1)
        return 11
      }
      return prev - 1
    })
  }

  const nextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((prevYear) => prevYear + 1)
        return 0
      }
      return prev + 1
    })
  }

  // Get the selected house details
  const selectedHouseDetails = houseList.find((h) => h.name === selectedHouse) || houseList[0]

  // Calculate empty cells before the first day of the month
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth)
  const emptyDays = Array(firstDay).fill(null)

  return (
    <Box
      rounded="xl"
      p={6}
      mb={8}
      textAlign="start"
      boxShadow="0 4px 12px rgba(0,0,0,0.05)"
      bg="white"
      border="1px solid"
      borderColor="gray.100"
    >
      {/* Calendar Header with Title and Navigation */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Box>
          <Text fontSize="28px" fontWeight="bold" color="teal.700">
            {months[currentMonth]} {currentYear}
          </Text>
          <Text fontSize="sm" color="gray.500" mt={1}>
            {selectedHouseDetails.displayName}
          </Text>
        </Box>
        <Box display="flex" gap={2}>
          <Button
            variant="outline"
            onClick={prevMonth}
            borderRadius="full"
            size="sm"
            borderColor="teal.400"
            _hover={{ bg: "teal.50" }}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            onClick={nextMonth}
            borderRadius="full"
            size="sm"
            borderColor="teal.400"
            _hover={{ bg: "teal.50" }}
          >
            <ChevronRight />
          </Button>
        </Box>
      </Box>

      {/* Timezone Indicator */}
      <Box bg="blue.50" p={2} borderRadius="md" mb={4} display="flex" justifyContent="center">
        <Text fontSize="sm" color="blue.700">
          All times shown in Australia/Sydney timezone
        </Text>
      </Box>

      {/* Property Description */}
      <Text fontSize="sm" color="gray.600" mb={4}>
        {selectedHouseDetails.description}
      </Text>

      {/* House Selector */}
      <Box
        as="select"
        value={selectedHouse}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedHouse(e.target.value)}
        width="100%"
        mb={4}
        p="0.5rem"
        borderRadius="md"
        borderColor="gray.300"
        bg="white"
        _focus={{
          borderColor: "teal.500",
          boxShadow: "0 0 0 1px teal.500",
        }}
      >
        {houseList.map((house) => (
          <Box as="option" key={house.name} value={house.name}>
            {house.displayName}
          </Box>
        ))}
      </Box>

      {/* Loading and Error States */}
      {isLoading && (
        <Box textAlign="center" py={8} color="gray.500">
          <Text>Loading availability data...</Text>
        </Box>
      )}

      {error && (
        <Box bg="red.50" p={4} borderRadius="md" color="red.600" mb={4}>
          <Text fontWeight="medium">{error}</Text>
        </Box>
      )}

      {/* Legend */}
      <Box display="flex" gap={4} mb={4} flexWrap="wrap">
        <Box display="flex" alignItems="center">
          <Box
            w="12px"
            h="12px"
            bg="green.50"
            borderRadius="sm"
            border="1px solid"
            borderColor="green.200"
            mr={2}
          ></Box>
          <Text fontSize="xs" color="gray.600">
            Available
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Box
            w="12px"
            h="12px"
            bg="orange.50"
            borderRadius="sm"
            border="1px solid"
            borderColor="orange.300"
            mr={2}
          ></Box>
          <Text fontSize="xs" color="gray.600">
            Airbnb
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Box w="12px" h="12px" bg="blue.50" borderRadius="sm" border="1px solid" borderColor="blue.300" mr={2}></Box>
          <Text fontSize="xs" color="gray.600">
            Booking.com
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Box w="12px" h="12px" bg="red.50" borderRadius="sm" border="1px solid" borderColor="red.300" mr={2}></Box>
          <Text fontSize="xs" color="gray.600">
            Booking Clash
          </Text>
        </Box>
      </Box>

      {/* Calendar Grid */}
      <Box borderRadius="lg" overflow="hidden" border="1px solid" borderColor="gray.200" boxShadow="sm">
        {/* Days of Week Header */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(7, 1fr)"
          bg="gray.50"
          borderBottom="1px solid"
          borderColor="gray.200"
          p={2}
        >
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
          {/* Empty cells for days before the first day of the month */}
          {emptyDays.map((_, index) => (
            <Box key={`empty-${index}`} height="110px" border="1px solid" borderColor="gray.100" bg="gray.50"></Box>
          ))}

          {/* Actual days of the month */}
          {Array.from({ length: getDaysInMonth(currentYear, currentMonth) }, (_, index) => {
            const day = index + 1
            const isAirbnb = isAirbnbBooked(currentYear, currentMonth, day)
            const isBookingCom = isBookingComBooked(currentYear, currentMonth, day)
            const isClashed = hasClash(currentYear, currentMonth, day)

            // Determine background color based on booking status
            let bgColor = "white"
            let borderColor = "gray.200"
            let statusText = ""

            if (isClashed) {
              bgColor = "red.50"
              borderColor = "red.300"
              statusText = "Clash"
            } else if (isAirbnb && isBookingCom) {
              bgColor = "purple.50"
              borderColor = "purple.300"
              statusText = "Both"
            } else if (isAirbnb) {
              bgColor = "orange.50"
              borderColor = "orange.300"
              statusText = "Airbnb"
            } else if (isBookingCom) {
              bgColor = "blue.50"
              borderColor = "blue.300"
              statusText = "Booking"
            } else {
              bgColor = "green.50"
              borderColor = "green.200"
              statusText = "Available"
            }

            return (
              <Box
                key={day}
                height="110px"
                border="1px solid"
                borderColor={borderColor}
                bg={bgColor}
                position="relative"
                transition="all 0.2s"
                _hover={{
                  transform: "scale(1.02)",
                  zIndex: 1,
                  boxShadow: "md",
                }}
                cursor="pointer"
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
                  bg={isClashed ? "red.400" : isAirbnb || isBookingCom ? "gray.100" : "transparent"}
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

                {/* Price Indicator (Only shown for available dates) */}
                {!isAirbnb && !isBookingCom && !isClashed && (
                  <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center">
                    <Text fontSize="sm" fontWeight="bold" color="green.600">
                      Available
                    </Text>
                  </Box>
                )}
              </Box>
            )
          })}
        </Box>
      </Box>

      {/* Calendar Footer */}
      <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
        <Text fontSize="xs" color="gray.500">
          Last updated: {lastUpdated} (Sydney time)
        </Text>
        <Box
          display="flex"
          alignItems="center"
          bg="teal.50"
          p={2}
          borderRadius="md"
          border="1px dashed"
          borderColor="teal.200"
        >
          <Text fontSize="xs" color="teal.700" fontWeight="medium">
            {clashes.size > 0
              ? `⚠️ ${clashes.size} booking conflicts detected this month`
              : "✓ No booking conflicts this month"}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default AvailabilityCalendar
