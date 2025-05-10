"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Box, Button, Text} from "@chakra-ui/react"
import { ArrowDown, ChevronLeft, ChevronRight, User } from "lucide-react"

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

interface GuestInfo {
  name: string
  count?: number
  total?: number
  bookingId?: string
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
  checkInTime?: string
  checkOutTime?: string
  guestInfo?: GuestInfo
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

      console.log("Airbnb data:", airbnbData.events)
      console.log("Booking.com data:", bookingcomData.events)

      setAirbnbData(airbnbData.events || [])
      setBookingcomData(bookingcomData.events || [])

      // Update last updated time in Sydney timezone
      setLastUpdated(moment().tz("Australia/Sydney").format("DD MMM YYYY, h:mm A"))

      // Check for clashes between the two platforms
      // findClashes(airbnbData.events || [], bookingcomData.events || [])
    } catch (error: any) {
      console.error("Error fetching availability data:", error)
      setError(`Failed to load availability data: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  // Function to find clashes between Airbnb and Booking.com bookings
  // const findClashes = (airbnbEvents: Event[], bookingcomEvents: Event[]) => {
  //   const clashDates = new Set<string>()

  //   // For each Airbnb event, check if it overlaps with any Booking.com event
  //   airbnbEvents.forEach((airbnbEvent) => {
  //     const airbnbStart = moment(airbnbEvent.start).format("YYYY-MM-DD")
  //     const airbnbEnd = moment(airbnbEvent.end).format("YYYY-MM-DD")

  //     bookingcomEvents.forEach((bookingEvent) => {
  //       const bookingStart = moment(bookingEvent.start).format("YYYY-MM-DD")
  //       const bookingEnd = moment(bookingEvent.end).format("YYYY-MM-DD")

  //       // Check if the dates overlap
  //       if (moment(airbnbStart).isSameOrBefore(bookingEnd) && moment(airbnbEnd).isSameOrAfter(bookingStart)) {
  //         // Calculate the overlap period
  //         const overlapStart = moment.max(moment(airbnbStart), moment(bookingStart))
  //         const overlapEnd = moment.min(moment(airbnbEnd), moment(bookingEnd))

  //         // Add each day in the overlap period to the clash set
  //         const currentDate = overlapStart.clone()
  //         while (currentDate.isSameOrBefore(overlapEnd)) {
  //           clashDates.add(currentDate.format("YYYY-MM-DD"))
  //           currentDate.add(1, "day")
  //         }
  //       }
  //     })
  //   })

  //   setClashes(clashDates)
  // }

  // Check if a specific date is booked on Airbnb
  const isAirbnbBooked = (year: number, month: number, day: number) => {
    const dateStr = formatDate(year, month, day)

    return airbnbData.some((event) => {
      const eventStart = moment(event.start).format("YYYY-MM-DD")
      const eventEnd = moment(event.end).format("YYYY-MM-DD")
      return moment(dateStr).isSameOrAfter(eventStart) && moment(dateStr).isSameOrBefore(eventEnd)
    })
  }

  // Check if a specific date is booked on Booking.com
  const isBookingComBooked = (year: number, month: number, day: number) => {
    const dateStr = formatDate(year, month, day)

    return bookingcomData.some((event) => {
      const eventStart = moment(event.start).format("YYYY-MM-DD")
      const eventEnd = moment(event.end).format("YYYY-MM-DD")
      return moment(dateStr).isSameOrAfter(eventStart) && moment(dateStr).isSameOrBefore(eventEnd)
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
      <Box display="flex" gap={2} mb={4}>
      {houseList.map((h) => (
  <Box
    key={h.name}
    as="button"
    onClick={() => setSelectedHouse(h.name)}
    bg={selectedHouse === h.name ? "teal.500" : "gray.100"}
    color={selectedHouse === h.name ? "white" : "gray.800"}
    borderRadius="full"
    px={4}
    py={1.5}
    fontWeight="medium"
    fontSize="sm"
    boxShadow={selectedHouse === h.name ? "md" : "none"}
    transition="all 0.2s"
    _hover={{
      bg: selectedHouse === h.name ? "teal.600" : "gray.200",
      boxShadow: "sm",
    }}
    _active={{
      transform: "scale(0.98)",
    }}
    _focus={{ boxShadow: "outline" }}
    mx={1}
    my={1}
  >
    {h.displayName}
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
          <Box position="relative" w="40px" h="16px" mr={2}>
            <Box position="absolute" top="50%" left="0" right="0" h="4px" bg="gray.200" borderRadius="full"></Box>
          </Box>
          <Text fontSize="xs" color="gray.600">
            Available
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Box position="relative" w="40px" h="16px" mr={2}>
            <Box position="absolute" top="50%" left="0" right="0" h="4px" bg="orange.500" borderRadius="full"></Box>
          </Box>
          <Text fontSize="xs" color="gray.600">
            Airbnb
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Box position="relative" w="40px" h="16px" mr={2}>
            <Box position="absolute" top="50%" left="0" right="0" h="4px" bg="blue.500" borderRadius="full"></Box>
          </Box>
          <Text fontSize="xs" color="gray.600">
           Booking.com
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Box position="relative" w="40px" h="16px" mr={2}>
            <Box position="absolute" top="50%" left="0" right="0" h="4px" bg="red.500" borderRadius="full"></Box>
          </Box>
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
            const dateStr = formatDate(currentYear, currentMonth, day)
            const isAirbnb = isAirbnbBooked(currentYear, currentMonth, day)
            const isBookingCom = isBookingComBooked(currentYear, currentMonth, day)
            const isClashed = hasClash(currentYear, currentMonth, day)

            // Find booking details for this date
            const airbnbBooking = airbnbData.find((event) => {
              const eventStart = moment(event.start).format("YYYY-MM-DD")
              const eventEnd = moment(event.end).format("YYYY-MM-DD")
              return moment(dateStr).isSameOrAfter(eventStart) && moment(dateStr).isSameOrBefore(eventEnd)
            })

            const bookingComBooking = bookingcomData.find((event) => {
              const eventStart = moment(event.start).format("YYYY-MM-DD")
              const eventEnd = moment(event.end).format("YYYY-MM-DD")
              return moment(dateStr).isSameOrAfter(eventStart) && moment(dateStr).isSameOrBefore(eventEnd)
            })

            // Check if this is the first or last day of a booking
            const isAirbnbStart = airbnbBooking && moment(airbnbBooking.start).format("YYYY-MM-DD") === dateStr
            const isAirbnbEnd = airbnbBooking && moment(airbnbBooking.end).format("YYYY-MM-DD") === dateStr
            const isBookingComStart =
              bookingComBooking && moment(bookingComBooking.start).format("YYYY-MM-DD") === dateStr
            const isBookingComEnd = bookingComBooking && moment(bookingComBooking.end).format("YYYY-MM-DD") === dateStr

            return (
              <Box
                key={day}
                height="110px"
                border="1px solid"
                borderColor="gray.200"
                bg="white"
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

                {/* Price (for available dates) */}
             
                {/* Airbnb Booking Bar */}
                {isAirbnb && (
                  <Box
                    position="absolute"
                    top="40%"
                    left={isAirbnbStart ? "50%" : "0"}
                    right={isAirbnbEnd ? "50%" : "0"}
                    height="8px"
                    bg="orange.500"
                    zIndex={1}
                    borderLeftRadius={isAirbnbStart ? "full" : "none"}
                    borderRightRadius={isAirbnbEnd ? "full" : "none"}
                  >
                    {isAirbnbStart && (
                      <Box
                        position="absolute"
                        left="-12px"
                        top="-4px"
                        width="16px"
                        height="16px"
                        borderRadius="full"
                        bg="orange.500"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Text fontSize="8px" color="white" fontWeight="bold">
                          IN
                        </Text>
                      </Box>
                    )}
                    {isAirbnbEnd && (
                      <Box
                        position="absolute"
                        right="-12px"
                        top="-4px"
                        width="16px"
                        height="16px"
                        borderRadius="full"
                        bg="orange.500"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Text fontSize="8px" color="white" fontWeight="bold">
                          OUT
                        </Text>
                      </Box>
                    )}

                    {/* Guest info for Airbnb */}
                    {airbnbBooking?.guestInfo && isAirbnbStart && (
                      <Box
                        position="absolute"
                        top="-20px"
                        left="0"
                        right="0"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg="orange.100"
                        p="1px"
                        borderRadius="sm"
                        zIndex={2}
                      >
                        <User size={10} />
                        <Text fontSize="9px" ml="2px" color="orange.800" fontWeight="medium" noOfLines={1}>
                          {airbnbBooking.guestInfo.name}
                          {airbnbBooking.guestInfo.total && airbnbBooking.guestInfo.total > 1
                            ? ` + ${airbnbBooking.guestInfo.total - 1}`
                            : ""}
                        </Text>
                      </Box>
                    )}
                  </Box>
                )}

                {/* Booking.com Booking Bar */}
                {isBookingCom && (
                  <Box
                    position="absolute"
                    top="60%"
                    left={isBookingComStart ? "50%" : "0"}
                    right={isBookingComEnd ? "50%" : "0"}
                    height="8px"
                    bg="blue.500"
                    zIndex={1}
                    borderLeftRadius={isBookingComStart ? "full" : "none"}
                    borderRightRadius={isBookingComEnd ? "full" : "none"}
                  >
                    {isBookingComStart && (
                      <Box
                        position="absolute"
                        left="-12px"
                        top="-4px"
                        width="16px"
                        height="16px"
                        borderRadius="full"
                        bg="blue.500"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Text fontSize="8px" color="white" fontWeight="bold">
                          IN
                        </Text>
                      </Box>
                    )}
                    {isBookingComEnd && (
                      <Box
                        position="absolute"
                        right="-12px"
                        top="-4px"
                        width="16px"
                        height="16px"
                        borderRadius="full"
                        bg="blue.500"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Text fontSize="8px" color="white" fontWeight="bold">
                          OUT
                        </Text>
                      </Box>
                    )}

                    {/* Guest info for Booking.com */}
                    {bookingComBooking?.guestInfo && isBookingComStart && (
                      <Box
                        position="absolute"
                        top="-20px"
                        left="0"
                        right="0"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg="blue.100"
                        p="1px"
                        borderRadius="sm"
                        zIndex={2}
                      >
                        <User size={10} />
                        <Text fontSize="9px" ml="2px" color="blue.800" fontWeight="medium" noOfLines={1}>
                          {bookingComBooking.guestInfo.name}
                          {bookingComBooking.guestInfo.total && bookingComBooking.guestInfo.total > 1
                            ? ` + ${bookingComBooking.guestInfo.total - 1}`
                            : ""}
                        </Text>
                      </Box>
                    )}
                  </Box>
                )}

                {/* Clash Indicator */}
                {/* {isClashed && (
                  <Box position="absolute" bottom={2} left={0} right={0} textAlign="center">
                    <Text fontSize="xs" fontWeight="bold" color="red.600">
                      CLASH
                    </Text>
                  </Box>
                )} */}
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
