"use client"

import { useState } from "react"
import { Box, HStack, Text } from "@chakra-ui/react"
import {
  Search,
  Home,
  DollarSign,
  Users,
  Calendar,
  Info,
  MapPin,
  ChevronDown,
  TrendingUp,
  Star,
  Shield,
  Zap,
  Maximize,
  Wifi,
  Coffee,
  Tv,
  Wind,
  Check,
} from "lucide-react"
import ThumnailSlider from "../carousel/ThumnailSlider"
import TitleSubheading from "./Text/titleSubheading"

const locations = [
  "Broken Bow, OK",
  "Adelaide, Australia",
  "Craigmore, SA",
  "Sydney, NSW",
  "Melbourne, VIC",
  "Brisbane, QLD",
  "Austin, TX",
  "San Francisco, CA",
]

// Property details for selected locations
const propertyDetails = {
  "Broken Bow, OK": {
    revenue: "$66.8K",
    revenueTrend: "+10%",
    occupancy: "45%",
    occupancyTrend: "+4%",
    dailyRate: "$431.90",
    dailyRateTrend: "+4%",
    marketScore: "74",
    expenses: "$8.7K",
    income: "$16.7K",
    capRate: "5.8%",
    bedrooms: 3,
    bathrooms: 2,
    sqft: "1,850",
    yearBuilt: "2015",
    propertyType: "Cabin",
    amenities: ["Lake View", "Hot Tub", "Fireplace", "Deck", "WiFi"],
    seasonality: "High in Summer",
    peakMonths: ["June", "July", "August"],
    coordinates: { lat: 34.0298, lng: -94.7655 },
  },
  "Adelaide, Australia": {
    revenue: "$30.6K",
    revenueTrend: "+1%",
    occupancy: "65%",
    occupancyTrend: "+2%",
    dailyRate: "$107",
    dailyRateTrend: "-1%",
    marketScore: "74",
    expenses: "$8.7K",
    income: "$16.7K",
    capRate: "4.2%",
    bedrooms: 2,
    bathrooms: 1,
    sqft: "950",
    yearBuilt: "2002",
    propertyType: "Apartment",
    amenities: ["City View", "Balcony", "Pool", "Gym", "WiFi"],
    seasonality: "Consistent Year-Round",
    peakMonths: ["December", "January", "February"],
    coordinates: { lat: -34.9285, lng: 138.6007 },
  },
  "Craigmore, SA": {
    revenue: "$25.4K",
    revenueTrend: "+3%",
    occupancy: "65%",
    occupancyTrend: "+5%",
    dailyRate: "$107",
    dailyRateTrend: "-2%",
    marketScore: "68",
    expenses: "$8.7K",
    income: "$16.7K",
    capRate: "4.5%",
    bedrooms: 3,
    bathrooms: 2,
    sqft: "1,450",
    yearBuilt: "1998",
    propertyType: "House",
    amenities: ["Garden", "Patio", "BBQ", "Parking", "WiFi"],
    seasonality: "Consistent Year-Round",
    peakMonths: ["December", "January", "February"],
    coordinates: { lat: -34.7007, lng: 138.6696 },
  },
}

// Default property details for locations not in our database
const defaultPropertyDetails = {
  revenue: "$45.2K",
  revenueTrend: "+5%",
  occupancy: "58%",
  occupancyTrend: "+3%",
  dailyRate: "$215.50",
  dailyRateTrend: "+2%",
  marketScore: "70",
  expenses: "$10.5K",
  income: "$14.8K",
  capRate: "4.9%",
  bedrooms: 2,
  bathrooms: 2,
  sqft: "1,200",
  yearBuilt: "2010",
  propertyType: "Residential",
  amenities: ["WiFi", "Parking", "AC", "Heating"],
  seasonality: "Varies",
  peakMonths: ["June", "July", "August"],
  coordinates: { lat: 0, lng: 0 },
}

// Color palette
const colors = {
  primary: "#3182CE",
  primaryDark: "#2B6CB0",
  primaryLight: "#4299E1",
  secondary: "#805AD5",
  secondaryLight: "#9F7AEA",
  accent: "#38B2AC",
  positive: "#48BB78",
  negative: "#E53E3E",
  neutral: "#718096",
  neutralLight: "#A0AEC0",
  neutralLighter: "#E2E8F0",
  neutralLightest: "#F7FAFC",
  dark: "#2D3748",
  white: "#FFFFFF",
  background: "#F8FAFC",
}

const CaluProperty = () => {
  const [searchValue, setSearchValue] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      setShowResults(true)
      setShowDropdown(false)
    }
  }

  const handleLocationSelect = (location) => {
    setSearchValue(location)
    setSelectedLocation(location)
    setShowDropdown(false)
    setShowResults(true) // Auto-show results when location is selected
  }

  // Get property details for the selected location or use default
  const getPropertyDetails = () => {
    return propertyDetails[selectedLocation] || defaultPropertyDetails
  }

  const details = getPropertyDetails()

  // Function to create a gradient progress bar
  const ProgressBar = ({ value, color, bgColor, height = "8px" }) => (
    <Box width="100%" height={height} bg={bgColor} borderRadius="full" overflow="hidden">
      <Box width={`${value}%`} height="100%" bg={color} borderRadius="full" />
    </Box>
  )

  // Function to create a circular progress indicator
  const CircularProgress = ({ value, size = "80px", thickness = "8px", color }) => {
    // Calculate the circumference and the dash offset based on the value
    const radius = 50 - Number.parseInt(thickness) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (value / 100) * circumference

    return (
      <Box position="relative" width={size} height={size}>
        {/* Background circle */}
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={radius} fill="none" stroke={colors.neutralLighter} strokeWidth={thickness} />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={thickness}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
        </svg>
        {/* Center text */}
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="24px" fontWeight="700" color={colors.dark}>
            {value}
          </Text>
        </Box>
      </Box>
    )
  }

  // Function to create a trend indicator
  const TrendIndicator = ({ value, size = "12px" }) => {
    const isPositive = value.startsWith("+")
    const color = isPositive ? colors.positive : colors.negative

    return (
      <Box display="flex" alignItems="center" gap="4px">
        {isPositive ? (
          <TrendingUp size={size} color={color} />
        ) : (
          <TrendingUp size={size} color={color} style={{ transform: "rotate(180deg)" }} />
        )}
        <Text fontSize={size} color={color}>
          {value}
        </Text>
      </Box>
    )
  }

  // Function to create a rating stars


  // Function to create an amenity badge


  return (



    <>
          <HStack
        mt={["50px", "50px", "50px", "50px", "50px", "50px"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
      >
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>
      <TitleSubheading
        title={"Calulate Property"}
        subheading={"Calculate the property value"}
      />
      <HStack  w="100%" justify="center" align="center">
        <Box
          w="100%"
          bg="white"
          borderRadius="md"
          p={["20px", "30px"]}
          textAlign="start"
        >
          {/* Title & Subtitle */}

          <HStack
            data-aos="fade-up"
            justify={[
              "center",
              "center",
              "center",
              "center",
              "center",
              "center",
            ]}
            align={"start"}
            w={"100%"}
            transition={"all 0.2s ease-in-out"}
            zIndex={3}
          >
            
          </HStack>
          {/* Images Container */}

          <HStack
            gap={["10px", "20px", "40px"]}
            justify="center"
            align="center"
            flexWrap="wrap"
          >
            {/* Image 1: Rotated 45° */}
          

            <Box
      width="100%"
      maxWidth="1200px"
      margin="0 auto"
      padding={{ base: "16px", md: "32px" }}
      
      borderRadius="16px"
      boxShadow="0 4px 20px rgba(0,0,0,0.05)"
    >

      
      <Box
        position="relative"
        marginBottom="40px"
        border="1px solid rgba(0,0,0,0.08)"
        borderRadius="12px"
        boxShadow="0 4px 12px rgba(0,0,0,0.03)"
        background={colors.white}
        transition="all 0.2s ease"
        _hover={{ boxShadow: "0 6px 16px rgba(0,0,0,0.06)" }}
      >
        <Box
          display="flex"
          alignItems="center"
          padding="18px 20px"
          cursor="pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="40px"
            height="40px"
            borderRadius="10px"
            bg={colors.neutralLightest}
            marginRight="16px"
          >
            <Search size={20} color={colors.primary} />
          </Box>
          <Box flex="1">
            <Text fontSize="12px" color={colors.neutral} marginBottom="4px">
              PROPERTY LOCATION
            </Text>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Enter a city, neighborhood, or address..."
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                fontSize: "16px",
                fontWeight: "500",
                color: colors.dark,
                background: "transparent",
              }}
            />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            padding="12px 18px"
            borderRadius="8px"
            bg={colors.primary}
            color={colors.white}
            onClick={handleSearch}
            cursor="pointer"
            transition="all 0.2s ease"
            _hover={{ bg: colors.primaryDark }}
          >
            <Text fontSize="14px" fontWeight="600" marginRight="8px">
              Search
            </Text>
            <ChevronDown size={16} color={colors.white} />
          </Box>
        </Box>

        {/* Enhanced Dropdown */}
        {showDropdown && (
          <Box
            position="absolute"
            top="100%"
            left="0"
            width="100%"
            bg={colors.white}
            borderRadius="0 0 12px 12px"
            boxShadow="0 10px 25px rgba(0,0,0,0.1)"
            zIndex="10"
            border="1px solid rgba(0,0,0,0.08)"
            borderTop="none"
            maxHeight="300px"
            overflowY="auto"
            padding="8px 0"
          >
            <Text fontSize="12px" fontWeight="600" color={colors.neutral} padding="8px 20px">
              POPULAR LOCATIONS
            </Text>
            {locations
              .filter((loc) => !searchValue || loc.toLowerCase().includes(searchValue.toLowerCase()))
              .map((location, index) => (
                <Box
                  key={index}
                  padding="12px 20px"
                  display="flex"
                  alignItems="center"
                  _hover={{ bg: colors.neutralLightest }}
                  cursor="pointer"
                  onClick={() => handleLocationSelect(location)}
                  transition="all 0.15s ease"
                >
                  <Box
                    width="32px"
                    height="32px"
                    borderRadius="8px"
                    bg={`rgba(${index * 20}, ${150 - index * 5}, ${200 - index * 10}, 0.1)`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    marginRight="12px"
                  >
                    <MapPin size={16} color={colors.primary} />
                  </Box>
                  <Box>
                    <Text fontSize="15px" fontWeight="500">
                      {location}
                    </Text>
                    <Text fontSize="12px" color={colors.neutral}>
                      {propertyDetails[location]
                        ? `${propertyDetails[location].propertyType} • ${propertyDetails[location].bedrooms} bed • ${propertyDetails[location].bathrooms} bath`
                        : "Residential Property"}
                    </Text>
                  </Box>
                </Box>
              ))}
            {locations.filter((loc) => !searchValue || loc.toLowerCase().includes(searchValue.toLowerCase())).length ===
              0 && (
              <Box padding="16px 20px" textAlign="center">
                <Text fontSize="14px" color={colors.neutral}>
                  No locations found. Try a different search.
                </Text>
              </Box>
            )}
          </Box>
        )}
      </Box>

      {/* Results Section with enhanced styling */}
      {showResults && (
        <Box>
          {/* Property Overview Header */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginBottom="24px"
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: "16px", md: "0" }}
          >
            <Box>
              <Box display="flex" alignItems="center" marginBottom="8px">
                <Box width="10px" height="10px" borderRadius="full" bg={colors.secondary} marginRight="8px" />
                <Text fontSize="14px" fontWeight="600" color={colors.neutral} letterSpacing="0.5px">
                  PROPERTY ANALYSIS
                </Text>
              </Box>
              <Text fontSize="24px" fontWeight="700" color={colors.dark}>
                {selectedLocation || "Market"} Investment Overview
              </Text>
            </Box>

            {/* Tabs */}

          </Box>

          {/* Property Details Summary */}
          

          {/* Enhanced Bento Grid Layout */}
          <Box
            display="grid"
            gridTemplateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            gap="20px"
            marginBottom="32px"
          >
            {/* Revenue Box */}
            <Box
              bg={colors.white}
              borderRadius="12px"
              padding="24px"
              display="flex"
              flexDirection="column"
              boxShadow="0 2px 8px rgba(0,0,0,0.04)"
              border="1px solid rgba(0,0,0,0.04)"
              position="relative"
              overflow="hidden"
              transition="all 0.2s ease"
              _hover={{ boxShadow: "0 6px 12px rgba(0,0,0,0.08)" }}
            >
              <Box
                position="absolute"
                top="0"
                right="0"
                width="80px"
                height="80px"
                borderRadius="0 0 0 80px"
                bg={`rgba(${colors.primary.replace("#", "")}, 0.05)`}
              />

              <Box display="flex" alignItems="center" marginBottom="16px">
                <Box
                  width="36px"
                  height="36px"
                  borderRadius="10px"
                  bg={`rgba(${colors.primary.replace("#", "")}, 0.1)`}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  marginRight="12px"
                >
                  <DollarSign size={18} color={colors.primary} />
                </Box>
                <Text fontSize="16px" fontWeight="600" color={colors.dark}>
                  Annual Revenue
                </Text>
              </Box>

              <Text fontSize="32px" fontWeight="700" color={colors.dark} marginBottom="8px">
                {details.revenue}
              </Text>

              <Box display="flex" alignItems="center" justifyContent="space-between">
                <TrendIndicator value={details.revenueTrend} size="14px" />
                <Text fontSize="13px" color={colors.neutral}>
                  Year over year
                </Text>
              </Box>

              <Box marginTop="16px">
                <Text fontSize="13px" color={colors.neutral} marginBottom="6px">
                  Revenue Potential
                </Text>
                <ProgressBar value={75} color={colors.primary} bgColor={colors.neutralLighter} />
              </Box>
            </Box>

            {/* Occupancy Box */}
            <Box
              bg={colors.white}
              borderRadius="12px"
              padding="24px"
              display="flex"
              flexDirection="column"
              boxShadow="0 2px 8px rgba(0,0,0,0.04)"
              border="1px solid rgba(0,0,0,0.04)"
              position="relative"
              overflow="hidden"
              transition="all 0.2s ease"
              _hover={{ boxShadow: "0 6px 12px rgba(0,0,0,0.08)" }}
            >
              <Box
                position="absolute"
                top="0"
                right="0"
                width="80px"
                height="80px"
                borderRadius="0 0 0 80px"
                bg={`rgba(${colors.accent.replace("#", "")}, 0.05)`}
              />

              <Box display="flex" alignItems="center" marginBottom="16px">
                <Box
                  width="36px"
                  height="36px"
                  borderRadius="10px"
                  bg={`rgba(${colors.accent.replace("#", "")}, 0.1)`}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  marginRight="12px"
                >
                  <Users size={18} color={colors.accent} />
                </Box>
                <Text fontSize="16px" fontWeight="600" color={colors.dark}>
                  Occupancy Rate
                </Text>
              </Box>

              <Text fontSize="32px" fontWeight="700" color={colors.dark} marginBottom="8px">
                {details.occupancy}
              </Text>

              <Box display="flex" alignItems="center" justifyContent="space-between">
                <TrendIndicator value={details.occupancyTrend} size="14px" />
                <Text fontSize="13px" color={colors.neutral}>
                  Year over year
                </Text>
              </Box>

              <Box marginTop="16px">
                <Text fontSize="13px" color={colors.neutral} marginBottom="6px">
                  Market Average: 62%
                </Text>
                <ProgressBar
                  value={Number.parseInt(details.occupancy)}
                  color={colors.accent}
                  bgColor={colors.neutralLighter}
                />
              </Box>
            </Box>

            {/* Daily Rate Box */}
            <Box
              bg={colors.white}
              borderRadius="12px"
              padding="24px"
              display="flex"
              flexDirection="column"
              boxShadow="0 2px 8px rgba(0,0,0,0.04)"
              border="1px solid rgba(0,0,0,0.04)"
              position="relative"
              overflow="hidden"
              transition="all 0.2s ease"
              _hover={{ boxShadow: "0 6px 12px rgba(0,0,0,0.08)" }}
            >
              <Box
                position="absolute"
                top="0"
                right="0"
                width="80px"
                height="80px"
                borderRadius="0 0 0 80px"
                bg={`rgba(${colors.primaryLight.replace("#", "")}, 0.05)`}
              />

              <Box display="flex" alignItems="center" marginBottom="16px">
                <Box
                  width="36px"
                  height="36px"
                  borderRadius="10px"
                  bg={`rgba(${colors.primaryLight.replace("#", "")}, 0.1)`}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  marginRight="12px"
                >
                  <Calendar size={18} color={colors.primaryLight} />
                </Box>
                <Text fontSize="16px" fontWeight="600" color={colors.dark}>
                  Avg Daily Rate
                </Text>
              </Box>

              <Text fontSize="32px" fontWeight="700" color={colors.dark} marginBottom="8px">
                {details.dailyRate}
              </Text>

              <Box display="flex" alignItems="center" justifyContent="space-between">
                <TrendIndicator value={details.dailyRateTrend} size="14px" />
                <Text fontSize="13px" color={colors.neutral}>
                  Year over year
                </Text>
              </Box>

              <Box marginTop="16px">
                <Text fontSize="13px" color={colors.neutral} marginBottom="6px">
                  Pricing Competitiveness
                </Text>
                <ProgressBar value={85} color={colors.primaryLight} bgColor={colors.neutralLighter} />
              </Box>
            </Box>

            {/* Market Score Box */}
            <Box
              bg={colors.white}
              borderRadius="12px"
              padding="24px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              boxShadow="0 2px 8px rgba(0,0,0,0.04)"
              border="1px solid rgba(0,0,0,0.04)"
              position="relative"
              overflow="hidden"
              transition="all 0.2s ease"
              _hover={{ boxShadow: "0 6px 12px rgba(0,0,0,0.08)" }}
            >
              <Text fontSize="16px" fontWeight="600" color={colors.dark} marginBottom="16px">
                Market Score
              </Text>

              <CircularProgress
                value={Number.parseInt(details.marketScore)}
                size="100px"
                thickness="8px"
                color={colors.secondary}
              />

              <Box marginTop="16px" textAlign="center">
               
                <Text fontSize="14px" color={colors.neutral} marginTop="8px">
                  {Number.parseInt(details.marketScore) > 70
                    ? "Excellent"
                    : Number.parseInt(details.marketScore) > 50
                      ? "Good"
                      : "Average"}{" "}
                  investment opportunity
                </Text>
              </Box>
            </Box>

            {/* Operating Expenses Box */}
            <Box
              bg={colors.white}
              borderRadius="12px"
              padding="24px"
              display="flex"
              flexDirection="column"
              boxShadow="0 2px 8px rgba(0,0,0,0.04)"
              border="1px solid rgba(0,0,0,0.04)"
              position="relative"
              overflow="hidden"
              transition="all 0.2s ease"
              _hover={{ boxShadow: "0 6px 12px rgba(0,0,0,0.08)" }}
            >
              <Box
                position="absolute"
                top="0"
                right="0"
                width="80px"
                height="80px"
                borderRadius="0 0 0 80px"
                bg={`rgba(${colors.negative.replace("#", "")}, 0.05)`}
              />

              <Box display="flex" alignItems="center" marginBottom="16px">
                <Box
                  width="36px"
                  height="36px"
                  borderRadius="10px"
                  bg={`rgba(${colors.negative.replace("#", "")}, 0.1)`}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  marginRight="12px"
                >
                  <DollarSign size={18} color={colors.negative} />
                </Box>
                <Text fontSize="16px" fontWeight="600" color={colors.dark}>
                  Operating Expenses
                </Text>
              </Box>

              <Text fontSize="32px" fontWeight="700" color={colors.dark} marginBottom="8px">
                {details.expenses}
              </Text>

              <Box marginTop="8px">
                <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="8px">
                  <Text fontSize="13px" color={colors.neutral}>
                    Maintenance
                  </Text>
                  <Text fontSize="13px" fontWeight="500">
                    $2.1K
                  </Text>
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="8px">
                  <Text fontSize="13px" color={colors.neutral}>
                    Property Tax
                  </Text>
                  <Text fontSize="13px" fontWeight="500">
                    $3.2K
                  </Text>
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Text fontSize="13px" color={colors.neutral}>
                    Insurance
                  </Text>
                  <Text fontSize="13px" fontWeight="500">
                    $1.8K
                  </Text>
                </Box>
              </Box>
            </Box>

            {/* Net Operating Income Box */}
            <Box
              bg={colors.white}
              borderRadius="12px"
              padding="24px"
              display="flex"
              flexDirection="column"
              boxShadow="0 2px 8px rgba(0,0,0,0.04)"
              border="1px solid rgba(0,0,0,0.04)"
              position="relative"
              overflow="hidden"
              transition="all 0.2s ease"
              _hover={{ boxShadow: "0 6px 12px rgba(0,0,0,0.08)" }}
            >
              <Box
                position="absolute"
                top="0"
                right="0"
                width="80px"
                height="80px"
                borderRadius="0 0 0 80px"
                bg={`rgba(${colors.positive.replace("#", "")}, 0.05)`}
              />

              <Box display="flex" alignItems="center" marginBottom="16px">
                <Box
                  width="36px"
                  height="36px"
                  borderRadius="10px"
                  bg={`rgba(${colors.positive.replace("#", "")}, 0.1)`}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  marginRight="12px"
                >
                  <Zap size={18} color={colors.positive} />
                </Box>
                <Text fontSize="16px" fontWeight="600" color={colors.dark}>
                  Net Operating Income
                </Text>
              </Box>

              <Text fontSize="32px" fontWeight="700" color={colors.dark} marginBottom="8px">
                {details.income}
              </Text>

              <Box marginTop="8px">
                <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="8px">
                  <Text fontSize="13px" color={colors.neutral}>
                    Cap Rate
                  </Text>
                  <Text fontSize="13px" fontWeight="600" color={colors.positive}>
                    {details.capRate}
                  </Text>
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="8px">
                  <Text fontSize="13px" color={colors.neutral}>
                    Cash on Cash Return
                  </Text>
                  <Text fontSize="13px" fontWeight="600" color={colors.positive}>
                    8.2%
                  </Text>
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Text fontSize="13px" color={colors.neutral}>
                    ROI (5-Year)
                  </Text>
                  <Text fontSize="13px" fontWeight="600" color={colors.positive}>
                    42%
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Enhanced Map Section */}
          <Box
            bg={colors.white}
            borderRadius="12px"
            overflow="hidden"
            height="450px"
            position="relative"
            boxShadow="0 2px 8px rgba(0,0,0,0.04)"
            border="1px solid rgba(0,0,0,0.04)"
            marginBottom="32px"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              padding="16px 20px"
              bg="rgba(255, 255, 255, 0.9)"
              backdropFilter="blur(8px)"
              zIndex="1"
              borderBottom="1px solid rgba(0,0,0,0.05)"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <MapPin size={18} color={colors.primary} style={{ marginRight: "8px" }} />
                <Text fontSize="16px" fontWeight="600">
                  {selectedLocation || "Location"}
                </Text>
              </Box>
              
            </Box>

            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedLocation || "United States")}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

  
          </Box>

          {/* Enhanced Call to Action */}
          
        </Box>
      )}
    </Box>


          </HStack>
        </Box>
      </HStack>

    
    </>
  )
}

export default CaluProperty
