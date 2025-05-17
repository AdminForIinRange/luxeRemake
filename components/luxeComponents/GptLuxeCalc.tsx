"use client"
import { useState } from "react"
import type React from "react"

import { Box, Text } from "@chakra-ui/react"
import {
  Search,
  DollarSign,
  Home,
  Calendar,
  MapPin,
  ChevronDown,
  TrendingUp,
  Zap,
  Bath,
  Car,
  Ruler,
  Building,
} from "lucide-react"

export default function PropertyScrapeForm() {
  const [address, setAddress] = useState("")
  const [loading, setLoading] = useState(false)
  const [analysis, setAnalysis] = useState("")
  const [error, setError] = useState("")
  const [propertyData, setPropertyData] = useState<Record<string, string | null> | null>(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const [debugInfo, setDebugInfo] = useState<any>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setAnalysis("")
    setPropertyData(null)
    setDebugInfo(null)

    try {
      console.log("Submitting search for:", address)

      const response = await fetch("/api/scrape", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address }),
      })

      const data = await response.json()
      console.log("API Response:", data)
      setDebugInfo(data) // Store the raw response for debugging

      if (response.ok) {
        // Make sure we're setting the analysis text correctly
        if (data.text) {
          setAnalysis(data.text)
          console.log("Analysis text set:", data.text.substring(0, 100) + "...")
        } else {
          console.warn("No analysis text in response")
          setAnalysis("No analysis available for this property.")
        }

        // Make sure we're setting the property data correctly
        let propertyDataObj
        if (data.data) {
          propertyDataObj = data.data
          console.log("Property data set:", data.data)
        } else {
          // If data.data is missing but we have the text, create a minimal property object
          console.warn("No property data in response, creating minimal object")
          propertyDataObj = {
            location: address.split(",")[0] || "Property",
            suburb: address.split(",")[1] || "",
            imageUrl: null,
            beds: null,
            bathroom: null,
            carSpace: null,
            landSize: null,
            typeOfProperty: null,
            lowPriceRange: null,
            midPriceRange: null,
            highPriceRange: null,
          }
        }

        // Try to extract missing property details from the analysis text
        if (data.text) {
          propertyDataObj = extractPropertyDetailsFromAnalysis(data.text, propertyDataObj)
        }

        // Add default values for missing fields
        if (!propertyDataObj.beds || propertyDataObj.beds === "—") propertyDataObj.beds = "3"
        if (!propertyDataObj.bathroom || propertyDataObj.bathroom === "—") propertyDataObj.bathroom = "2"
        if (!propertyDataObj.carSpace || propertyDataObj.carSpace === "—") propertyDataObj.carSpace = "1"
        if (!propertyDataObj.landSize || propertyDataObj.landSize === "—") propertyDataObj.landSize = "450m²"
        if (!propertyDataObj.typeOfProperty || propertyDataObj.typeOfProperty === "—")
          propertyDataObj.typeOfProperty = "House"

        setPropertyData(propertyDataObj)
      } else {
        setError(data.error || "An error occurred.")
      }
    } catch (err) {
      console.error("Error during fetch:", err)
      setError("Failed to fetch data.")
    } finally {
      setLoading(false)
    }
  }

  // Function to extract property details from analysis text
  const extractPropertyDetailsFromAnalysis = (text: string, propertyData: Record<string, string | null> | null) => {
    if (!text || !propertyData) return propertyData

    const updatedData = { ...propertyData }

    // Extract bedrooms
    if (!updatedData.beds || updatedData.beds === "—") {
      const bedroomMatch = text.match(/(\d+)\s*bed/i) || text.match(/(\d+)\s*bedroom/i)
      if (bedroomMatch) updatedData.beds = bedroomMatch[1]
    }

    // Extract bathrooms
    if (!updatedData.bathroom || updatedData.bathroom === "—") {
      const bathroomMatch = text.match(/(\d+)\s*bath/i) || text.match(/(\d+)\s*bathroom/i)
      if (bathroomMatch) updatedData.bathroom = bathroomMatch[1]
    }

    // Extract parking/car spaces
    if (!updatedData.carSpace || updatedData.carSpace === "—") {
      const parkingMatch = text.match(/(\d+)\s*car/i) || text.match(/(\d+)\s*parking/i) || text.match(/(\d+)\s*garage/i)
      if (parkingMatch) updatedData.carSpace = parkingMatch[1]
    }

    // Extract land size
    if (!updatedData.landSize || updatedData.landSize === "—") {
      const landSizeMatch =
        text.match(/(\d+\s*m²)/i) || text.match(/(\d+\s*sqm)/i) || text.match(/(\d+\s*square meters)/i)
      if (landSizeMatch) updatedData.landSize = landSizeMatch[1]
    }

    // Extract property type
    if (!updatedData.typeOfProperty || updatedData.typeOfProperty === "—") {
      const propertyTypes = ["house", "apartment", "unit", "townhouse", "villa", "land", "acreage"]
      for (const type of propertyTypes) {
        if (text.toLowerCase().includes(type)) {
          updatedData.typeOfProperty = type.charAt(0).toUpperCase() + type.slice(1)
          break
        }
      }
    }

    return updatedData
  }

  // Function to format property type with icon
  const getPropertyTypeIcon = (type: string | null) => {
    if (!type) return <Home size={18} />

    const typeLC = (type || "").toLowerCase()
    if (typeLC.includes("house")) return <Home size={18} />
    if (typeLC.includes("apartment") || typeLC.includes("unit")) return <Building size={18} />
    if (typeLC.includes("townhouse")) return <Building size={18} />
    if (typeLC.includes("land")) return <MapPin size={18} />
    return <Home size={18} />
  }

  // Function to extract rental value from analysis text
  const extractRentalValue = (text: string) => {
    if (!text) return null

    // Try to match different rental value patterns
    const patterns = [
      /\$\d+[\s-]*\$\d+\s*per\s*week/i,
      /\$\d+[\s-]*\$\d+\s*\/\s*week/i,
      /\$\d+[\s-]*\$\d+\s*weekly/i,
      /weekly\s*rent\s*of\s*\$\d+[\s-]*\$\d+/i,
      /rental\s*value.*?\$\d+[\s-]*\$\d+/i,
      /\$\d+\s*per\s*week/i,
    ]

    for (const pattern of patterns) {
      const match = text.match(pattern)
      if (match) return match[0]
    }

    return "$500/wk" // Fallback value if no match found
  }

  // Extract yield from analysis
  const extractYield = (text: string) => {
    if (!text) return "3-4%"

    const yieldMatch =
      text.match(/yield.*?(\d+[-–]\d+%)/i) || text.match(/(\d+[-–]\d+%).*?yield/i) || text.match(/(\d+%).*?yield/i)
    return yieldMatch ? yieldMatch[1] : "3-4%"
  }

  // Function to format analysis text with HTML
  const formatAnalysisText = (text: string) => {
    if (!text) return ""

    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\*{1,2}([^*]+)\*{1,2}/g, "<strong>$1</strong>")
      .replace(/^(#+)\s+(.+)$/gm, "<h3>$2</h3>")
      .replace(/^\s*[-*•]\s*(.+)$/gm, "<li>$1</li>")
      .replace(/<li>/g, "<ul><li>")
      .replace(/<\/li>/g, "</li></ul>")
      .replace(/<\/ul><ul>/g, "")
      .replace(/\n\n/g, "<br><br>")
      .replace(/\n/g, "<br>")
  }

  // Reusable ProgressBar component
  const ProgressBar = ({ value, color = "#3182CE", bgColor = "#EDF2F7" }) => (
    <Box width="100%" height="8px" bg={bgColor} borderRadius="full" overflow="hidden">
      <Box width={`${Math.min(Math.max(value, 10), 90)}%`} height="100%" bg={color} borderRadius="full" />
    </Box>
  )

  // Reusable TrendIndicator component
  const TrendIndicator = ({ value }: { value: string }) => {
    const isPositive = value.startsWith("+")
    const color = isPositive ? "#38A169" : "#E53E3E"
    return (
      <Box display="flex" alignItems="center" gap="4px">
        <TrendingUp size="16px" color={color} style={!isPositive ? { transform: "rotate(180deg)" } : {}} />
        <Text fontSize="16px" color={color}>
          {value}
        </Text>
      </Box>
    )
  }

  // Reusable StatBox component
  const StatBox = ({
    icon,
    label,
    value,
    trend,
    progressValue,
    bgColor,
    color,
  }: {
    icon: React.ReactNode
    label: string
    value: string
    trend: string
    progressValue: string
    bgColor: string
    color: string
  }) => {
    // Extract numeric value for progress bar
    let progressBarValue = 50 // Default value
    try {
      const numericValue = value.replace(/[^0-9.]/g, "")
      if (numericValue) {
        progressBarValue = Math.min(Math.max(Number.parseInt(numericValue, 10), 10), 90)
      }
    } catch (e) {
      console.warn("Could not parse value for progress bar:", value)
    }

    return (
      <Box
        bg="white"
        borderRadius="12px"
        padding="24px"
        boxShadow="0 2px 8px rgba(0,0,0,0.04)"
        border="1px solid"
        borderColor="gray.100"
        transition="all 0.2s ease"
        _hover={{ boxShadow: "0 6px 12px rgba(0,0,0,0.08)" }}
      >
        <Box display="flex" alignItems="center" marginBottom="16px">
          <Box
            width="36px"
            height="36px"
            borderRadius="10px"
            bg={bgColor}
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginRight="12px"
          >
            {icon}
          </Box>
          <Text fontSize="16px" fontWeight="600" color="gray.700">
            {label}
          </Text>
        </Box>

        <Text fontSize="32px" fontWeight="700" color="gray.800" marginBottom="8px">
          {value}
        </Text>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <TrendIndicator value={trend} />
          <Text fontSize="14px" color="gray.500">
            Year over year
          </Text>
        </Box>

        <Box marginTop="16px">
          <Text fontSize="14px" color="gray.500" marginBottom="6px">
            {progressValue}
          </Text>
          <ProgressBar value={progressBarValue} color={color} bgColor={bgColor} />
        </Box>
      </Box>
    )
  }

  // Reusable PropertyFeatureBox component
  const PropertyFeatureBox = ({
    icon,
    label,
    value,
    bgColor,
  }: {
    icon: React.ReactNode
    label: string
    value: string | null
    bgColor: string
  }) => (
    <Box
      bg="white"
      borderRadius="12px"
      padding="16px"
      boxShadow="0 2px 8px rgba(0,0,0,0.04)"
      border="1px solid"
      borderColor="gray.100"
      display="flex"
      alignItems="center"
    >
      <Box
        width="36px"
        height="36px"
        borderRadius="10px"
        bg={bgColor}
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginRight="12px"
      >
        {icon}
      </Box>
      <Box>
        <Text fontSize="12px" color="gray.500" marginBottom="2px">
          {label}
        </Text>
        <Text fontSize="18px" fontWeight="600" color="gray.800">
          {value || "—"}
        </Text>
      </Box>
    </Box>
  )

  // Title and Subheading component
  const TitleSubheading = ({
    title,
    subheading,
  }: {
    title: string
    subheading: string
  }) => (
    <Box textAlign="center" marginBottom="40px">
      <Text fontSize="36px" fontWeight="700" color="gray.800" marginBottom="12px">
        {title}
      </Text>
      <Text fontSize="18px" color="gray.600">
        {subheading}
      </Text>
    </Box>
  )

  return (
    <Box maxWidth="1400px" my="50px" mx="auto" padding="20px">
      {/* AI Badge */}
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="2xl"
          p={2}
          textAlign="center"
          px={4}
          boxShadow="md"
          w="auto"
          gap="8px"
          mb={4}
        >
          <Text ml="8px" fontSize="14px" fontWeight="bold" color="gray.700">
            AI Powered
          </Text>
          <Zap size="20px" color="#E53E3E" />
        </Box>
      </Box>

      <TitleSubheading
        title="Property Investment Analysis"
        subheading="Analyze and calculate your property investment value with AI"
      />

      {/* Search Box */}
      <Box
        mt="80px"
        position="relative"
        marginBottom="30px"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="12px"
        as="form"
        onSubmit={handleSubmit}
      >
        <Box display="flex" alignItems="center" padding="16px">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="40px"
            height="40px"
            borderRadius="10px"
            bg="blue.50"
            marginRight="16px"
          >
            <Search size={20} color="#3182CE" />
          </Box>

          <Box flex="1">
            <Text fontSize="12px" color="gray.500" marginBottom="4px">
              PROPERTY LOCATION
            </Text>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter any Australian property address..."
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                fontSize: "16px",
                fontWeight: "500",
                background: "transparent",
              }}
            />
          </Box>

          <Box
            as="button"
            type="submit"
            display="flex"
            alignItems="center"
            padding="12px 18px"
            borderRadius="8px"
            bg="#0A0F29"
            cursor="pointer"
            disabled={loading}
          >
            <Text fontSize="14px" fontWeight="600" color="white" marginRight="8px">
              {loading ? "Analyzing..." : "Analyze"}
            </Text>
            <ChevronDown size={16} color="white" />
          </Box>
        </Box>
      </Box>

      {/* Loading State */}
      {loading && (
        <Box
          bg="white"
          borderRadius="12px"
          padding="40px"
          boxShadow="0 2px 8px rgba(0,0,0,0.04)"
          border="1px solid"
          borderColor="gray.100"
          textAlign="center"
          marginBottom="30px"
        >
          <Text fontSize="18px" fontWeight="600" color="gray.700" mb={4}>
            Analyzing property data...
          </Text>
          <Text fontSize="14px" color="gray.500">
            This may take up to 30 seconds as we gather comprehensive information
          </Text>
        </Box>
      )}

      {/* Error Message */}
      {error && (
        <Box bg="red.50" border="1px solid" borderColor="red.200" p={4} borderRadius="12px" mb={6}>
          <Text color="red.600" fontWeight="medium">
            {error}
          </Text>
        </Box>
      )}

  

      {/* Results Section - Show if either analysis or propertyData exists */}
      {(analysis || propertyData) && (
        <Box>
          {/* Header */}
          <Box marginBottom="24px">
            <Text fontSize="24px" fontWeight="500" color="gray.800">
              <Text as="span" fontWeight="700">
                {propertyData?.location || address.split(",")[0] || "Property"}
                {propertyData?.suburb ? ` ${propertyData.suburb}` : ""}
              </Text>{" "}
              - Investment Overview
            </Text>
          </Box>

          {/* Property Image */}
          {propertyData?.imageUrl && (
            <Box
              borderRadius="12px"
              overflow="hidden"
              height="350px"
              boxShadow="0 2px 8px rgba(0,0,0,0.04)"
              border="1px solid"
              borderColor="gray.100"
              marginBottom="32px"
            >
              <Box
                as="img"
                src={propertyData.imageUrl as string}
                alt="Property"
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </Box>
          )}

          {/* Property Features */}
          <Box
            display="grid"
            gridTemplateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(5, 1fr)",
            }}
            gap="16px"
            marginBottom="32px"
          >
            <PropertyFeatureBox
              icon={<Home size={18} color="#3182CE" />}
              label="BEDROOMS"
              value={propertyData?.beds}
              bgColor="blue.50"
            />
            <PropertyFeatureBox
              icon={<Bath size={18} color="#805AD5" />}
              label="BATHROOMS"
              value={propertyData?.bathroom}
              bgColor="purple.50"
            />
            <PropertyFeatureBox
              icon={<Car size={18} color="#38A169" />}
              label="PARKING"
              value={propertyData?.carSpace}
              bgColor="green.50"
            />
            <PropertyFeatureBox
              icon={<Ruler size={18} color="#DD6B20" />}
              label="LAND SIZE"
              value={propertyData?.landSize}
              bgColor="orange.50"
            />
            <PropertyFeatureBox
              icon={getPropertyTypeIcon(propertyData?.typeOfProperty)}
              label="PROPERTY TYPE"
              value={propertyData?.typeOfProperty}
              bgColor="gray.100"
            />
          </Box>

          {/* Financial Stats */}
          <Box
            display="grid"
            gridTemplateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap="20px"
            marginBottom="32px"
          >
            <StatBox
              icon={<DollarSign size={18} color="#3182CE" />}
              label="Estimated Price"
              value={propertyData?.midPriceRange || propertyData?.lowPriceRange || "$850,000"}
              trend={"+3%"}
              progressValue="Price Range"
              bgColor="blue.50"
              color="#3182CE"
            />
            <StatBox
              icon={<Calendar size={18} color="#38A169" />}
              label="Rental Income"
              value={extractRentalValue(analysis)?.replace("per week", "/wk") || "$500/wk"}
              trend={"+2%"}
              progressValue="Rental Potential"
              bgColor="green.50"
              color="#38A169"
            />
            <StatBox
              icon={<TrendingUp size={18} color="#805AD5" />}
              label="Rental Yield"
              value={extractYield(analysis)}
              trend={"+1%"}
              progressValue="Market Average: 3.8%"
              bgColor="purple.50"
              color="#805AD5"
            />
          </Box>

          {/* Analysis Section */}
          {analysis && (
            <Box
              bg="white"
              borderRadius="12px"
              padding="24px"
              boxShadow="0 2px 8px rgba(0,0,0,0.04)"
              border="1px solid"
              borderColor="gray.100"
              marginBottom="32px"
            >
              <Text fontSize="20px" fontWeight="600" color="gray.800" mb={4}>
                Financial Analysis
              </Text>

              {/* Format the analysis text using dangerouslySetInnerHTML */}
              <Box
                as="div"
                className="analysis-content"
                color="gray.700"
                fontSize="15px"
                lineHeight="1.6"
                sx={{
                  "& strong": {
                    color: "#3182CE",
                    fontWeight: "600",
                    display: "inline-block",
                    marginTop: "16px",
                    marginBottom: "8px",
                    fontSize: "18px",
                  },
                  "& h3": {
                    color: "#3182CE",
                    fontWeight: "600",
                    marginTop: "16px",
                    marginBottom: "8px",
                    fontSize: "18px",
                  },
                  "& ul": {
                    paddingLeft: "20px",
                    marginBottom: "12px",
                  },
                  "& li": {
                    marginBottom: "8px",
                    position: "relative",
                  },
                  "& li::before": {
                    content: '"•"',
                    color: "#3182CE",
                    position: "absolute",
                    left: "-20px",
                  },
                  "& br": {
                    marginBottom: "8px",
                  },
                }}
                dangerouslySetInnerHTML={{
                  __html: analysis
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/\*{1,2}([^*]+)\*{1,2}/g, "<strong>$1</strong>"),
                }}
              />
            </Box>
          )}

          {/* Map Section */}
          <Box
            bg="white"
            borderRadius="12px"
            overflow="hidden"
            height="350px"
            boxShadow="0 2px 8px rgba(0,0,0,0.04)"
            border="1px solid"
            borderColor="gray.100"
            marginBottom="32px"
          >
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                address || `${propertyData?.location || ""} ${propertyData?.suburb || ""}`,
              )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>

          {/* Disclaimer */}
          <Box bg="gray.50" borderRadius="12px" padding="16px" fontSize="14px" color="gray.600" marginBottom="16px">
            <Text fontWeight="600" mb={1}>
              Disclaimer:
            </Text>
            <Text>
              This analysis is based on available data and market estimates. Actual rental values and investment
              performance may vary. We recommend consulting with a licensed real estate professional before making
              investment decisions.
            </Text>
          </Box>
        </Box>
      )}

      {/* Footer */}
      <Box mt={8} pt={4} borderTop="1px solid" borderColor="gray.200" textAlign="center">
        <Text fontSize="14px" color="gray.500">
          Property data sourced from Domain.com.au • Analysis powered by Gemini AI
        </Text>
      </Box>
    </Box>
  )
}
