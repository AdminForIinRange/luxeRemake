"use client"

import { Box, Stack, HStack, VStack, Text } from "@chakra-ui/react"
import { CalendarIcon, UserIcon, ClockIcon } from "lucide-react"

export default function Article() {
  return (
    <Box minH="100vh" bg="#f9fafb">
      <Box maxW="1200px" mx="auto" px={["4", "6", "8"]} py={["8", "12", "16"]}>
        <Box bg="white" borderRadius="xl" boxShadow="xl" overflow="hidden">
          {/* Article Header */}
          <Box
            bg="#0a2342"
            color="white"
            p={["8", "10", "12"]}
            backgroundImage="linear-gradient(to right, #0a2342, #1a365d)"
          >
            <VStack spacing="6" align="flex-start" maxW="900px">
              <Text
                as="h1"
                fontSize={["2rem", "2.5rem", "3.25rem"]}
                fontWeight="800"
                lineHeight="1.1"
                letterSpacing="-0.02em"
              >
                Luxury Property Management: Elevating Your Rental Experience
              </Text>

              <HStack gap="4" flexWrap="wrap" opacity="0.9" fontSize={["sm", "md"]}>
                <HStack gap="2">
                  <CalendarIcon size={16} />
                  <Text>April 11, 2025</Text>
                </HStack>
                <Text display={["none", "block"]}>•</Text>
                <HStack gap="2">
                  <UserIcon size={16} />
                  <Text>Luxe Managements Team</Text>
                </HStack>
                <Text display={["none", "block"]}>•</Text>
                <HStack gap="2">
                  <ClockIcon size={16} />
                  <Text>10 min read</Text>
                </HStack>
              </HStack>
            </VStack>
          </Box>

          <Box p={["6", "8", "10"]}>
            {/* Table of Contents - Desktop */}
            

            {/* Main Content */}
            <Box w={"100%"}>
              {/* Introduction */}
              <Box id="introduction" mb="16" scrollMarginTop="5rem">
                <Text
                  as="h2"
                  fontSize={["1.5rem", "1.75rem", "2rem"]}
                  fontWeight="700"
                  color="#0a2342"
                  mb="6"
                  lineHeight="1.2"
                  borderBottom="2px solid"
                  borderColor="#e2e8f0"
                  pb="2"
                >
                  Introduction
                </Text>
                <Stack direction={["column", "column", "row"]} gap="8" align="center">
                  <Box flex="1">
                    <Text fontSize={["md", "lg"]} mb="4" color="#374151" lineHeight="1.7">
                      At Luxe Managements, we believe your property should work for you—without compromise. More than
                      just a rental, your home is a statement of your values and lifestyle. Our high-end short-term
                      rental management solutions are crafted to unlock your property's full earning potential, while
                      ensuring each guest enjoys an exceptional stay.
                    </Text>
                    <Text fontSize={["md", "lg"]} color="#374151" lineHeight="1.7">
                      In this article, we reveal how Luxe Managements combines innovation, hospitality, and precision to
                      elevate the rental journey for both owners and guests alike.
                    </Text>
                  </Box>
                  <Box
                    flex="1"
                    backgroundImage={`url(https://images.pexels.com/photos/30670960/pexels-photo-30670960.jpeg)`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    transition="all 0.3s"
                    minH="320px"
                    w="100%"
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="lg"
                    position="relative"
                  >
                    <Box position="absolute" bottom="0" left="0" right="0" bg="rgba(0,0,0,0.6)" p="3">
                      <Text fontSize="sm" color="white" fontStyle="italic" textAlign="center">
                        A luxury property managed by Luxe Managements
                      </Text>
                    </Box>
                  </Box>
                </Stack>
              </Box>

              {/* Comprehensive Management Solutions */}
              <Box id="comprehensive-management" mb="16" scrollMarginTop="5rem">
                <Text
                  as="h2"
                  fontSize={["1.5rem", "1.75rem", "2rem"]}
                  fontWeight="700"
                  color="#0a2342"
                  mb="6"
                  lineHeight="1.2"
                  borderBottom="2px solid"
                  borderColor="#e2e8f0"
                  pb="2"
                >
                  End-to-End Management That Delivers
                </Text>
                <Box p="6" bg="#f8fafc" borderLeft="4px solid" borderColor="#0a2342" borderRadius="md">
                  <Text fontSize={["md", "lg"]} color="#374151" lineHeight="1.7">
                    Luxe Managements offers a comprehensive suite of services designed to remove the stress from
                    hosting. From stunning professional photography to dynamic pricing algorithms that respond to market
                    trends, our hands-on approach ensures your property always performs at its peak. We handle
                    everything—guest screening, check-ins, housekeeping, and 24/7 guest support—so you can enjoy passive
                    income without the hassle.
                  </Text>
                </Box>
              </Box>

              {/* The Luxe Advantage */}
              <Box id="luxe-advantage" mb="16" scrollMarginTop="5rem">
                <Text
                  as="h2"
                  fontSize={["1.5rem", "1.75rem", "2rem"]}
                  fontWeight="700"
                  color="#0a2342"
                  mb="6"
                  lineHeight="1.2"
                  borderBottom="2px solid"
                  borderColor="#e2e8f0"
                  pb="2"
                >
                  The Luxe Advantage
                </Text>
                <Stack direction={["column", "column", "row"]} gap="8" align="center">
                  <Box
                    flex="1"
                    backgroundImage={`url(https://images.pexels.com/photos/30670960/pexels-photo-30670960.jpeg)`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    transition="all 0.3s"
                    minH="320px"
                    w="100%"
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="lg"
                  ></Box>

                  <Box flex="1">
                    <Text fontSize={["md", "lg"]} color="#374151" lineHeight="1.7">
                      What sets Luxe apart is our unique fusion of luxury-level hospitality and data-driven
                      optimization. We don't just list your property—we position it. Our team continuously monitors
                      performance, adjusting rates and strategies based on real-time insights. From curated interior
                      styling to seamless guest communication, we bring a boutique hotel mindset to every property we
                      manage.
                    </Text>
                  </Box>
                </Stack>
              </Box>

              {/* Conclusion */}
              <Box id="conclusion" mb="12" scrollMarginTop="5rem">
                <Text
                  as="h2"
                  fontSize={["1.5rem", "1.75rem", "2rem"]}
                  fontWeight="700"
                  color="#0a2342"
                  mb="6"
                  lineHeight="1.2"
                  borderBottom="2px solid"
                  borderColor="#e2e8f0"
                  pb="2"
                >
                  Conclusion
                </Text>
                <Text fontSize={["md", "lg"]} mb="8" color="#374151" lineHeight="1.7">
                  Luxe Managements isn't just about managing properties—it's about creating remarkable experiences for
                  both guests and owners. With a commitment to excellence, innovation, and personal service, we make
                  short-term rental ownership seamless and rewarding. Whether you're new to hosting or ready to scale,
                  Luxe is here to help you succeed.
                </Text>

                <Box
                  bg="linear-gradient(135deg, #f8f4e3, #f0e6ca)"
                  p={["6", "8", "10"]}
                  borderRadius="xl"
                  boxShadow="md"
                  mt="10"
                >
                  <Text
                    as="h3"
                    fontSize={["1.25rem", "1.5rem"]}
                    fontWeight="700"
                    color="#0a2342"
                    mb="4"
                    lineHeight="1.2"
                  >
                    Why Choose Luxe Managements
                  </Text>
                  <Text fontSize={["md", "lg"]} mb="6" color="#374151" lineHeight="1.7">
                    Working with us means more than just management—it's a partnership. Our clients trust us to protect
                    and grow their investments, all while delivering the highest level of service to guests. With Luxe
                    Managements, you're not just handing over keys; you're opening the door to effortless success.
                  </Text>

                  <Box textAlign="center">
                    <Box
                      as="a"
                      href="#"
                      display="inline-block"
                      bg="#0a2342"
                      color="white"
                      py="3"
                      px="8"
                      borderRadius="lg"
                      fontWeight="600"
                      fontSize="lg"
                      _hover={{
                        bg: "rgba(10, 35, 66, 0.9)",
                        textDecoration: "none",
                        transform: "translateY(-2px)",
                        boxShadow: "lg",
                      }}
                      transition="all 0.3s ease"
                    >
                      Schedule a Consultation
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
