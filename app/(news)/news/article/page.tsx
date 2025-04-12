"use client"

import { Box, Stack, HStack, VStack, Text } from "@chakra-ui/react"
import { CalendarIcon, UserIcon, ClockIcon } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "comprehensive-management", title: "Comprehensive Management Solutions" },
  { id: "premium-experience", title: "Premium Guest Experience" },
  { id: "property-maintenance", title: "Property Maintenance Excellence" },
  { id: "technology", title: "Innovative Technology" },
  { id: "sustainability", title: "Sustainability Practices" },
  { id: "conclusion", title: "Why Choose Luxe Managements" },
]

export default function ArticlePage() {
  return (
    <Box minH="100vh" bg="#f8f4e3">
      <Box maxW="1400px" mx="auto" px="4" py="12">
        <Box bg="white" borderRadius="lg" boxShadow="lg" overflow="hidden">
          {/* Article Header */}
          <Box bg="#0a2342" color="white" p={["6", "6", "10"]}>
            <Text as="h1" fontSize={["1.875rem", "2.25rem", "3rem"]} fontWeight="700" lineHeight="1.2" mb="6">
              Luxury Property Management: Elevating Your Rental Experience
            </Text>
            <HStack gap="4" flexWrap="wrap">
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
          </Box>

          <Box p={["6", "8", "10"]}>
            <Stack direction={["column", "column", "column", "row"]} gap="10">
              {/* Table of Contents - Sidebar */}
              <Box order={[2, 2, 2, 1]} w={["100%", "100%", "100%", "25%"]}>
                <TableOfContents sections={sections} />
              </Box>

              {/* Main Content */}
              <Box order={[1, 1, 1, 2]} w={["100%", "100%", "100%", "75%"]}>
                {/* Introduction */}
                <Box id="introduction" mb="12" scrollMarginTop="5rem">
                  <Text as="h2" fontSize="1.5rem" fontWeight="600" color="#0a2342" mb="4" lineHeight="1.2">
                    Introduction
                  </Text>
                  <Stack direction={["column", "column", "row"]} gap="8">
                    <Box>
                      <Text fontSize="lg" mb="4" color="#374151">
                        At Luxe Managements, we understand that your property is more than just an investment—it's a
                        reflection of your standards and aspirations. Our premium short-term rental management services
                        are designed to maximize your property's potential while providing guests with an unforgettable
                        experience.
                      </Text>
                      <Text fontSize="lg" color="#374151">
                        This article outlines our comprehensive approach to luxury property management and how our
                        services can benefit property owners looking for hassle-free rental management with maximum
                        returns.
                      </Text>
                    </Box>
                    <Box position="relative" minH="300px" borderRadius="lg" overflow="hidden" boxShadow="md">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="Luxury property interior"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <Text fontSize="sm" color="#6b7280" fontStyle="italic" textAlign="center" mt="2">
                        A luxury property managed by Luxe Managements
                      </Text>
                    </Box>
                  </Stack>
                </Box>

                {/* Comprehensive Management Solutions */}
                <Box id="comprehensive-management" mb="12" scrollMarginTop="5rem">
                  <Text as="h2" fontSize="1.5rem" fontWeight="600" color="#0a2342" mb="4" lineHeight="1.2">
                    Comprehensive Management Solutions
                  </Text>
                  <Text mb="4" color="#374151">
                    Our team of dedicated professionals handles every aspect of your property's rental journey. From
                    professional photography and strategic pricing to guest screening and 24/7 support, we ensure a
                    seamless experience for both property owners and guests. Our data-driven approach to pricing
                    optimization ensures you'll always receive the maximum return on your investment, adjusting to
                    market conditions and seasonal demand fluctuations.
                  </Text>

                  <Stack direction={["column", "column", "row"]} gap="4" mb="6">
                    <Box>
                      <Box position="relative" h="16rem" borderRadius="lg" overflow="hidden" boxShadow="md">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Professional photography"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </Box>
                      <Text fontSize="sm" color="#6b7280" fontStyle="italic" textAlign="center" mt="2">
                        Professional photography services
                      </Text>
                    </Box>
                    <Box>
                      <Box position="relative" h="16rem" borderRadius="lg" overflow="hidden" boxShadow="md">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Strategic pricing"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </Box>
                      <Text fontSize="sm" color="#6b7280" fontStyle="italic" textAlign="center" mt="2">
                        Data-driven pricing strategies
                      </Text>
                    </Box>
                    <Box>
                      <Box position="relative" h="16rem" borderRadius="lg" overflow="hidden" boxShadow="md">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Guest screening"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </Box>
                      <Text fontSize="sm" color="#6b7280" fontStyle="italic" textAlign="center" mt="2">
                        Thorough guest screening process
                      </Text>
                    </Box>
                  </Stack>

                  <Box mb="8">
                    <Text as="h3" fontSize="1.25rem" fontWeight="500" color="#0a2342" mb="3">
                      Our Management Process:
                    </Text>
                    <VStack align="stretch" gap="2" pl="5">
                      <HStack align="flex-start" gap="2">
                        <Text>1.</Text>
                        <Text>
                          <Text as="span" fontWeight="bold">
                            Property Assessment
                          </Text>{" "}
                          - We evaluate your property's potential and identify opportunities for improvement.
                        </Text>
                      </HStack>
                      <HStack align="flex-start" gap="2">
                        <Text>2.</Text>
                        <Text>
                          <Text as="span" fontWeight="bold">
                            Professional Photography
                          </Text>{" "}
                          - High-quality images that showcase your property's best features.
                        </Text>
                      </HStack>
                      <HStack align="flex-start" gap="2">
                        <Text>3.</Text>
                        <Text>
                          <Text as="span" fontWeight="bold">
                            Strategic Pricing
                          </Text>{" "}
                          - Data-driven pricing strategies to maximize occupancy and revenue.
                        </Text>
                      </HStack>
                      <HStack align="flex-start" gap="2">
                        <Text>4.</Text>
                        <Text>
                          <Text as="span" fontWeight="bold">
                            Listing Optimization
                          </Text>{" "}
                          - Compelling descriptions and optimized listings across multiple platforms.
                        </Text>
                      </HStack>
                      <HStack align="flex-start" gap="2">
                        <Text>5.</Text>
                        <Text>
                          <Text as="span" fontWeight="bold">
                            Guest Screening
                          </Text>{" "}
                          - Thorough vetting process to ensure quality guests.
                        </Text>
                      </HStack>
                      <HStack align="flex-start" gap="2">
                        <Text>6.</Text>
                        <Text>
                          <Text as="span" fontWeight="bold">
                            24/7 Support
                          </Text>{" "}
                          - Round-the-clock assistance for both owners and guests.
                        </Text>
                      </HStack>
                    </VStack>
                  </Box>
                </Box>

                {/* Premium Guest Experience */}
                <Box id="premium-experience" mb="12" scrollMarginTop="5rem">
                  <Text as="h2" fontSize="1.5rem" fontWeight="600" color="#0a2342" mb="4" lineHeight="1.2">
                    Premium Guest Experience
                  </Text>
                  <Text mb="4" color="#374151">
                    We believe that exceptional guest experiences lead to exceptional returns. Our concierge-level
                    service includes personalized check-ins, curated local recommendations, and immediate response to
                    any concerns. This attention to detail has earned us consistently high ratings across all booking
                    platforms, increasing your property's visibility and desirability.
                  </Text>

                  <Box
                    borderLeftWidth="4px"
                    borderLeftColor="#0a2342"
                    pl="6"
                    py="2"
                    bg="rgba(248, 244, 227, 0.3)"
                    borderTopRightRadius="lg"
                    borderBottomRightRadius="lg"
                    my="8"
                  >
                    <Text fontSize="lg" fontStyle="italic" color="rgba(10, 35, 66, 0.9)" lineHeight="1.625">
                      "Luxe Managements transformed our property into a sought-after destination. Their attention to
                      detail and guest-focused approach has maximized our returns beyond expectations."
                    </Text>
                    <Text textAlign="right" color="rgba(10, 35, 66, 0.7)" mt="2">
                      — Sarah J., Property Owner
                    </Text>
                  </Box>

                  <Box position="relative" h="20rem" borderRadius="lg" overflow="hidden" boxShadow="md" mb="4">
                    <Image
                      src="/placeholder.svg?height=600&width=1200"
                      alt="Luxury guest experience"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Text fontSize="sm" color="#6b7280" fontStyle="italic" textAlign="center" mb="6">
                    Our concierge-level service ensures exceptional guest experiences
                  </Text>

                  <Box mb="8">
                    <Text as="h3" fontSize="1.25rem" fontWeight="500" color="#0a2342" mb="3">
                      Key Elements of Our Guest Experience:
                    </Text>
                    <VStack align="stretch" gap="2" pl="5">
                      <HStack align="flex-start" gap="2">
                        <Text>•</Text>
                        <Text>
                          <Text as="span" fontWeight="bold">
                            Personalized Check-ins
                          </Text>{" "}
                          - Welcoming guests and providing property orientation.
                        </Text>
                      </HStack>
                      <HStack align="flex-start" gap="2">
                        <Text>•</Text>
                        <Text>
                          <Text as="span" fontWeight="bold">
                            Curated Local Recommendations
                          </Text>{" "}
                          - Insider tips on dining, activities, and attractions.
                        </Text>
                      </HStack>
                      <HStack align="flex-start" gap="2">
                        <Text>•</Text>
                        <Text>
                          <Text as="span" fontWeight="bold">
                            Immediate Response
                          </Text>{" "}
                          - Quick resolution of any concerns or questions.
                        </Text>
                      </HStack>
                      <HStack align="flex-start" gap="2">
                        <Text>•</Text>
                        <Text>
                          <Text as="span" fontWeight="bold">
                            Luxury Amenities
                          </Text>{" "}
                          - High-quality linens, toiletries, and welcome packages.
                        </Text>
                      </HStack>
                      <HStack align="flex-start" gap="2">
                        <Text>•</Text>
                        <Text>
                          <Text as="span" fontWeight="bold">
                            Detailed Property Guides
                          </Text>{" "}
                          - Comprehensive information on property features and local area.
                        </Text>
                      </HStack>
                    </VStack>
                  </Box>
                </Box>

                {/* Property Maintenance */}
                <Box id="property-maintenance" mb="12" scrollMarginTop="5rem">
                  <Stack direction={["column", "column", "row"]} gap="8">
                    <Box position="relative" minH="300px" borderRadius="lg" overflow="hidden" boxShadow="md">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="Luxury property maintenance"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <Text fontSize="sm" color="#6b7280" fontStyle="italic" textAlign="center" mt="2">
                        Regular maintenance ensures your property remains in pristine condition
                      </Text>
                    </Box>
                    <Box>
                      <Text as="h2" fontSize="1.5rem" fontWeight="600" color="#0a2342" mb="4" lineHeight="1.2">
                        Property Maintenance Excellence
                      </Text>
                      <Text mb="4" color="#374151">
                        Property care is at the heart of our service offering. Our network of trusted maintenance
                        professionals ensures your property remains in pristine condition. Regular inspections,
                        preventative maintenance, and swift resolution of any issues protect your investment and enhance
                        guest satisfaction.
                      </Text>
                      <Text mb="4" color="#374151">
                        We treat each property with the same care and attention we would give our own homes. Our
                        maintenance protocols include:
                      </Text>
                      <VStack align="stretch" gap="1" pl="5">
                        <HStack align="flex-start" gap="2">
                          <Text>•</Text>
                          <Text>Regular property inspections</Text>
                        </HStack>
                        <HStack align="flex-start" gap="2">
                          <Text>•</Text>
                          <Text>Preventative maintenance schedules</Text>
                        </HStack>
                        <HStack align="flex-start" gap="2">
                          <Text>•</Text>
                          <Text>24/7 emergency response</Text>
                        </HStack>
                        <HStack align="flex-start" gap="2">
                          <Text>•</Text>
                          <Text>Detailed condition reports</Text>
                        </HStack>
                        <HStack align="flex-start" gap="2">
                          <Text>•</Text>
                          <Text>Quality control checks after each stay</Text>
                        </HStack>
                      </VStack>
                    </Box>
                  </Stack>
                </Box>

                {/* Innovative Technology */}
                <Box id="technology" mb="12" scrollMarginTop="5rem">
                  <Text as="h2" fontSize="1.5rem" fontWeight="600" color="#0a2342" mb="4" lineHeight="1.2">
                    Innovative Technology
                  </Text>
                  <Text mb="4" color="#374151">
                    We leverage cutting-edge technology to streamline operations and enhance the guest experience. Smart
                    home features, digital guidebooks, and automated messaging ensure guests have everything they need
                    while minimizing operational overhead. Our proprietary dashboard gives you real-time insights into
                    your property's performance, bookings, and financial metrics.
                  </Text>

                  <Box position="relative" h="20rem" borderRadius="lg" overflow="hidden" boxShadow="md" mb="4">
                    <Image
                      src="/placeholder.svg?height=600&width=1200"
                      alt="Property management dashboard"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Text fontSize="sm" color="#6b7280" fontStyle="italic" textAlign="center" mb="6">
                    Our proprietary dashboard provides real-time insights into your property's performance
                  </Text>

                  <Box bg="rgba(10, 35, 66, 0.05)" p="6" borderRadius="lg" mt="6">
                    <Text as="h3" fontSize="1.25rem" fontWeight="500" color="#0a2342" mb="4">
                      Technology Features:
                    </Text>
                    <Stack direction={["column", "column", "row"]} gap="8">
                      <Box>
                        <Text as="h4" fontSize="1rem" fontWeight="500" color="#0a2342" mb="2">
                          For Property Owners
                        </Text>
                        <VStack align="stretch" gap="1" pl="5">
                          <HStack align="flex-start" gap="2">
                            <Text>•</Text>
                            <Text>Real-time booking calendar</Text>
                          </HStack>
                          <HStack align="flex-start" gap="2">
                            <Text>•</Text>
                            <Text>Financial reporting and analytics</Text>
                          </HStack>
                          <HStack align="flex-start" gap="2">
                            <Text>•</Text>
                            <Text>Maintenance request tracking</Text>
                          </HStack>
                          <HStack align="flex-start" gap="2">
                            <Text>•</Text>
                            <Text>Occupancy and revenue forecasts</Text>
                          </HStack>
                          <HStack align="flex-start" gap="2">
                            <Text>•</Text>
                            <Text>Guest review monitoring</Text>
                          </HStack>
                        </VStack>
                      </Box>
                      <Box>
                        <Text as="h4" fontSize="1rem" fontWeight="500" color="#0a2342" mb="2">
                          For Guests
                        </Text>
                        <VStack align="stretch" gap="1" pl="5">
                          <HStack align="flex-start" gap="2">
                            <Text>•</Text>
                            <Text>Digital guidebooks and check-in instructions</Text>
                          </HStack>
                          <HStack align="flex-start" gap="2">
                            <Text>•</Text>
                            <Text>Smart home integration</Text>
                          </HStack>
                          <HStack align="flex-start" gap="2">
                            <Text>•</Text>
                            <Text>Automated messaging and support</Text>
                          </HStack>
                          <HStack align="flex-start" gap="2">
                            <Text>•</Text>
                            <Text>Local recommendations app</Text>
                          </HStack>
                          <HStack align="flex-start" gap="2">
                            <Text>•</Text>
                            <Text>Contactless check-in options</Text>
                          </HStack>
                        </VStack>
                      </Box>
                    </Stack>
                  </Box>
                </Box>

                {/* Sustainability */}
                <Box id="sustainability" mb="12" scrollMarginTop="5rem">
                  <Text as="h2" fontSize="1.5rem" fontWeight="600" color="#0a2342" mb="4" lineHeight="1.2">
                    Sustainability Practices
                  </Text>
                  <Text mb="4" color="#374151">
                    We're committed to environmentally responsible property management. From energy-efficient appliances
                    and smart thermostats to eco-friendly cleaning products and waste reduction strategies, we help your
                    property minimize its environmental footprint while maximizing guest comfort. Our sustainable
                    practices not only benefit the planet but also appeal to the growing segment of eco-conscious
                    travelers.
                  </Text>

                  <Stack direction={["column", "column", "row"]} gap="4" mb="6" flexWrap="wrap">
                    <Box bg="#f8f4e3" p="4" borderRadius="lg" flex="1" minW={["100%", "100%", "45%", "22%"]}>
                      <Text as="h4" fontSize="1rem" fontWeight="500" color="#0a2342" mb="2">
                        Eco-Friendly Cleaning
                      </Text>
                      <Text fontSize="sm">
                        Non-toxic cleaning products that are safe for guests and the environment.
                      </Text>
                    </Box>
                    <Box bg="#f8f4e3" p="4" borderRadius="lg" flex="1" minW={["100%", "100%", "45%", "22%"]}>
                      <Text as="h4" fontSize="1rem" fontWeight="500" color="#0a2342" mb="2">
                        Energy Efficiency
                      </Text>
                      <Text fontSize="sm">Smart thermostats and energy-efficient appliances reduce consumption.</Text>
                    </Box>
                    <Box bg="#f8f4e3" p="4" borderRadius="lg" flex="1" minW={["100%", "100%", "45%", "22%"]}>
                      <Text as="h4" fontSize="1rem" fontWeight="500" color="#0a2342" mb="2">
                        Waste Reduction
                      </Text>
                      <Text fontSize="sm">Recycling programs and reduced single-use plastics.</Text>
                    </Box>
                    <Box bg="#f8f4e3" p="4" borderRadius="lg" flex="1" minW={["100%", "100%", "45%", "22%"]}>
                      <Text as="h4" fontSize="1rem" fontWeight="500" color="#0a2342" mb="2">
                        Water Conservation
                      </Text>
                      <Text fontSize="sm">Low-flow fixtures and water-efficient landscaping.</Text>
                    </Box>
                  </Stack>

                  <Text color="#374151">
                    Our sustainability initiatives are continuously evolving as we seek new ways to reduce the
                    environmental impact of our managed properties. We provide regular updates on sustainability
                    performance and recommendations for eco-friendly upgrades that can enhance your property's appeal to
                    environmentally conscious travelers.
                  </Text>
                </Box>

                {/* Conclusion */}
                <Box id="conclusion" mb="12" scrollMarginTop="5rem">
                  <Box bg="#f8f4e3" p="8" borderRadius="lg" mt="10">
                    <Text as="h2" fontSize="1.5rem" fontWeight="600" color="#0a2342" mb="4" lineHeight="1.2">
                      Why Choose Luxe Managements
                    </Text>
                    <Text mb="4" color="#374151">
                      Partnering with Luxe Managements means choosing peace of mind. Our transparent reporting,
                      proactive communication, and dedication to excellence have made us the preferred choice for
                      discerning property owners. We don't just manage properties—we nurture investments and build
                      lasting relationships based on trust and exceptional results.
                    </Text>

                    <Box mb="8">
                      <Text as="h3" fontSize="1.25rem" fontWeight="500" color="#0a2342" mb="3">
                        Key Benefits Summary:
                      </Text>
                      <VStack align="stretch" gap="2" pl="5">
                        <HStack align="flex-start" gap="2">
                          <Text>•</Text>
                          <Text>
                            <Text as="span" fontWeight="bold">
                              Maximized Revenue
                            </Text>{" "}
                            - Data-driven pricing strategies and marketing expertise.
                          </Text>
                        </HStack>
                        <HStack align="flex-start" gap="2">
                          <Text>•</Text>
                          <Text>
                            <Text as="span" fontWeight="bold">
                              Reduced Stress
                            </Text>{" "}
                            - Comprehensive management of all aspects of your rental property.
                          </Text>
                        </HStack>
                        <HStack align="flex-start" gap="2">
                          <Text>•</Text>
                          <Text>
                            <Text as="span" fontWeight="bold">
                              Property Protection
                            </Text>{" "}
                            - Regular maintenance and quality guest screening.
                          </Text>
                        </HStack>
                        <HStack align="flex-start" gap="2">
                          <Text>•</Text>
                          <Text>
                            <Text as="span" fontWeight="bold">
                              Time Savings
                            </Text>{" "}
                            - We handle everything so you don't have to.
                          </Text>
                        </HStack>
                        <HStack align="flex-start" gap="2">
                          <Text>•</Text>
                          <Text>
                            <Text as="span" fontWeight="bold">
                              Enhanced Guest Experience
                            </Text>{" "}
                            - Leading to better reviews and repeat bookings.
                          </Text>
                        </HStack>
                        <HStack align="flex-start" gap="2">
                          <Text>•</Text>
                          <Text>
                            <Text as="span" fontWeight="bold">
                              Transparent Reporting
                            </Text>{" "}
                            - Clear insights into your property's performance.
                          </Text>
                        </HStack>
                      </VStack>
                    </Box>

                    <Box textAlign="center">
                      <Box
                        as="a"
                        href="#"
                        display="inline-block"
                        bg="#0a2342"
                        color="white"
                        py="3"
                        px="6"
                        borderRadius="lg"
                        fontWeight="500"
                        _hover={{ bg: "rgba(10, 35, 66, 0.9)", textDecoration: "none" }}
                      >
                        Schedule a Consultation
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

// Table of Contents Component
function TableOfContents({ sections }) {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -80% 0px" },
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) observer.unobserve(element)
      })
    }
  }, [sections])

  return (
    <Box
      bg="rgba(248, 244, 227, 0.5)"
      borderRadius="lg"
      p="6"
      position="sticky"
      top="6"
      borderWidth="1px"
      borderColor="rgba(10, 35, 66, 0.1)"
    >
      <Text as="h3" fontSize="1.25rem" fontWeight="500" color="#0a2342" mb="3">
        Table of Contents
      </Text>
      <VStack align="stretch" gap="2">
        {sections.map((section) => (
          <HStack key={section.id} gap="2" align="flex-start">
            <Text>•</Text>
            <Box
              as="a"
              href={`#${section.id}`}
              color={activeSection === section.id ? "#0a2342" : "#374151"}
              fontWeight={activeSection === section.id ? "500" : "normal"}
              _hover={{ color: "#0a2342", textDecoration: "none" }}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              {section.title}
            </Box>
          </HStack>
        ))}
      </VStack>
    </Box>
  )
}
