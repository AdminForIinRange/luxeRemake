"use client";
import React, { useEffect } from "react";
import { Box, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import TitleSubheading from "@/components/luxeComponents/Text/titleSubheading";
import { Check } from "lucide-react";

const Pricing = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const leftImg = [
    {
      title: "Listing & Marketing",
      description:
        "We craft compelling listings and implement strategic marketing to maximize visibility and occupancy rates.",
      features: [
        "Professional photography and copywriting",
        "SEO-optimized descriptions",
        "Multi-platform presence",
        "Dynamic pricing algorithm",
      ],
    },
    {
      title: "Property Care",
      description:
        "We maintain your property in impeccable condition, preserving its value and appeal.",
      features: [
        "Professional cleaning after each stay",
        "Preventative maintenance",
        "Rapid response for repairs",
        "Inventory and supply management",
      ],
    },
  ];

  const detailFeatures = [
    "Dynamic pricing algorithms",
    "24/7 guest communication & support",
    "Proactive 5-star review acquisition",
    "Preventative maintenance coordination",
    "Professional styling & photography",
    "30% discount on premium cleaning services",
  ];

  // Helper component for a feature list item
  const FeatureItem = ({ feature }) => (
    <HStack
      align="center"
      justify="start"
      w="100%"
      gap="10px"
      borderBottom="1px solid #e0e0e0"
      py="20px"
      _hover={{ bg: "gray.50" }}
    >
      <Box p={2} bg="gray.200" borderRadius="50%">
        <Check size={20} />
      </Box>
      <Text fontFamily="Raleway">{feature}</Text>
    </HStack>
  );

  return (
    <>
      <TitleSubheading
        title="Pricing Plans"
        subheading="Choose a plan that fits your needs."
      />

      {/* Transparent Pricing Card */}
      <HStack
        my={["50px", "50px", "50px", "50px", "50px", "100px"]}
        justify="center"
        align="center"
        w="100%"
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        data-aos="fade-up"
      >
        <Box
          w="100%"
          borderRadius="30px"
          p="25px"
          py="65px"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
          textAlign="center"
          bg="white"
          transition="all 0.3s ease"
          _hover={{ boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)" }}
        >
          <Text
            color="black"
            fontWeight="700"
            fontSize={["30px", "30px", "30px", "50px", "50px", "50px"]}
            fontFamily="Raleway"
            mb="10px"
          >
            TRANSPARENT PRICING
          </Text>
          <Text
            w={["90%", "90%", "90%", "50%", "50%", "50%"]}
            color="black"
            fontSize={["16px", "16px", "16px", "16px", "18px", "18px"]}
            fontFamily="Raleway"
          >
            No hidden fees. Just smart, simple pricing designed to maximize your
            rental income. Get a Custom Quote.
          </Text>

          <HStack
            justify="center"
            align="center"
            w="100%"
            gap={["25px", "25px", "25px", "25px", "25px", "25px"]}
            wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
            mt="50px"
            fontFamily="Raleway"
          >
            <Box
              as="button"
              p={4}
              rounded="15px"
              w="250px"
              h="80px"
              bg="white"
              border="2px solid #23273F"
              transition="all 0.3s ease"
              _hover={{
                background: "#23273F",
                color: "white",
                border: "2px solid white",
              }}
            >
              <Text
                fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}
                fontWeight="700"
              >
                Talk to Our Team
              </Text>
            </Box>
            <Box
              as="button"
              p={4}
              rounded="15px"
              w="250px"
              h="80px"
              bg="#23273F"
              color="white"
              transition="all 0.3s ease"
              _hover={{
                background: "white",
                color: "#23273F",
                border: "2px solid #23273F",
              }}
            >
              <Text
                fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}
                fontWeight="700"
              >
                Get a Custom Quote
              </Text>
            </Box>
          </HStack>
        </Box>
      </HStack>

      {/* Comprehensive Management Header */}
      <VStack
        mt={["50px", "50px", "50px", "50px", "50px", "50px"]}
        w="100%"
        textAlign="center"
        color="black"
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        data-aos="fade-up"
      >
        <Text
          fontSize={{
            base: "40px",
            sm: "40px",
            md: "40px",
            lg: "60px",
            xl: "60px",
          }}
          fontWeight="700"
          fontFamily="Raleway"
          bgClip="text"
          color="black"
          bgGradient="linear(to-r, teal, blue)"
        >
          Comprehensive Management
        </Text>
        <Text
          w={["90%", "90%", "90%", "50%", "50%", "50%"]}
          fontSize={["16px", "16px", "16px", "26px", "26px", "26px"]}
          fontFamily="Raleway"
          color="black"
          fontWeight="300"
        >
          18% of booking profit (profit = total revenue minus platform fees,
          cleaning, utilities)
        </Text>
      </VStack>

      {/* Detailed Pricing & Services Section */}
      <HStack
        my={["50px", "50px", "50px", "50px", "50px", "100px"]}
        justify="center"
        align="center"
        w="100%"
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        data-aos="fade-up"
      >
        <HStack
          w="100%"
          borderRadius="30px"
          p={["25px", "25px", "25px", "50px", "50px", "50px"]}
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          border={"1px solid #e0e0e0"}
    
          textAlign="center"
          bg="white"
          transition="all 0.3s ease"
          _hover={{ boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)" }}
        >
          <HStack
            justify="center"
            align={["center", "center", "start", "start", "start", "start"]}
            w="100%"
            gap={["15px", "15px", "15px", "50px", "50px", "100px"]}
            wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
          >
            {/* Left Column: Service Details */}
            <Box w={["95%", "95%", "95%", "600px", "600px", "600px"]}>
              <Text
                mt="15px"
                fontSize={["25px", "25px", "25px", "50px", "50px", "50px"]}
                fontWeight="600"
                fontFamily="Raleway"
                textAlign={[
                  "center",
                  "center",
                  "center",
                  "left",
                  "left",
                  "left",
                ]}
                color="black"
              >
                {leftImg[0].title}
              </Text>
              <Text
                mt="15px"
                fontSize={["35px", "35px", "35px", "50px", "50px", "28px"]}
                fontWeight="600"
                fontFamily="Raleway"
                textAlign={[
                  "center",
                  "center",
                  "center",
                  "left",
                  "left",
                  "left",
                ]}
                color="black"
              >
                18% of booking profit
              </Text>
              <Text
                mt="15px"
                fontSize={["18px", "20px", "20px", "20px", "20px", "20px"]}
                fontWeight="500"
                fontFamily="Raleway"
                textAlign={[
                  "center",
                  "center",
                  "center",
                  "left",
                  "left",
                  "left",
                ]}
                color="gray.600"
              >
                (profit = total revenue minus platform fees, cleaning,
                utilities)
              </Text>
              <Text
                mt="15px"
                fontSize={["24px", "24px", "24px", "24px", "24px", "24px"]}
                fontWeight="600"
                fontFamily="Raleway"
                textAlign={[
                  "center",
                  "center",
                  "center",
                  "left",
                  "left",
                  "left",
                ]}
                color="black"
              >
                Curated Services Include:
              </Text>
              <Text
                mt="20px"
                fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}
                textAlign={[
                  "center",
                  "center",
                  "center",
                  "left",
                  "left",
                  "left",
                ]}
                fontFamily="Raleway"
                color="black"
                fontWeight="300"
              >
                {leftImg[0].description}
              </Text>

              {detailFeatures.map((feature, index) => (
                <FeatureItem key={index} feature={feature} />
              ))}

              <Box
                mt="20px"
                border="1px solid #e0e0e0"
                transition="all 0.3s ease"
                w="100%"
                h={["200px", "200px", "200px", "150px", "150px", "150px"]}
                borderRadius="16px"
                bgGradient="linear(to-r, teal.100, blue.100)"
                p="30px"
                _hover={{
                  transform: "scale(1.03)",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  borderColor: "#ccc",
                }}
              >
                <VStack w="100%" h="100%" justify="center" align="center">
                  <Text
                    textAlign="center"
                    color="gray.600"
                    fontSize={["16px", "18px", "18px", "20px", "20px", "20px"]}
                    fontFamily="Raleway"
                    fontWeight="500"
                    fontStyle="italic"
                  >
                    We believe in complete transparency. Our team will walk you
                    through all costs and projections before you commit,
                    ensuring you have a clear understanding of your investment
                    potential.
                  </Text>
                </VStack>
              </Box>
            </Box>

            {/* Right Column: Revenue Increase Image */}
            <Box
              position="relative"
              h={["350px", "350px", "350px", "500px", "500px", "1000px"]}
              w={["95%", "95%", "95%", "70%", "70%", "40%"]}
              borderRadius="30px"
              overflow="hidden"
              display="flex"
              justifyContent="end"
            >
              <Box
                position="relative"
                h="100%"
                w="100%"
                borderRadius="30px"
                bg="gray.200"
                overflow="hidden"
                backgroundImage="url(https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg)"
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundSize="cover"
              />
              <Box
                p="4"
                position="absolute"
                w="100%"
                h="100%"
                display="flex"
                justifyContent="center"
                alignItems="flex-end"
              >
                <Box
                  fontFamily="Raleway"
                  bg="white"
                  borderRadius="md"
                  p={["10px", "10px", "50px 10px", "50px 50px"]}
                  boxShadow="md"
                  fontWeight="semibold"
                  textAlign="left"
                  zIndex={1}
                >
                  <HStack gap="5px">
                    <Text
                      fontSize={[
                        "30px",
                        "30px",
                        "35px",
                        "35px",
                        "35px",
                        "40px",
                      ]}
                      fontWeight="700"
                      color="black"
                    >
                      40%
                    </Text>
                    <Text
                      fontSize={[
                        "12px",
                        "16px",
                        "14px",
                        "14px",
                        "16px",
                        "16px",
                      ]}
                    >
                      Average Revenue Increase
                    </Text>
                  </HStack>
                </Box>
              </Box>
            </Box>
          </HStack>
        </HStack>
      </HStack>

      {/* Three Additional Boxes Underneath */}
      <Box py="5%" minH="100vh" px={["4%", "4%", "6%", "6%", "6%", "10%"]} >
        {/* Page Header */}
        <VStack textAlign="center" mb="60px" >
          <Text
            w={["100%", "100%", "100%", "100%", "100%", "100%"]}
            mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
            fontSize={["30px", "30px", "30px", "50px", "50px", "50px"]}
            fontWeight={600}
            fontFamily={"Raleway"}
            bgClip="text"
            textAlign={[
              "center",
              "center",
              "center",
              "center",
              "center",
              "center",
            ]}
            color={"black"}
            bgGradient="linear(to-r, teal, blue)"
          >
            Premium Property Services
          </Text>
          <Text
            fontSize={["18px", "18px", "18px", "18px", "18px", "18px"]}

            textAlign={[
              "center",
              "center",
              "center",
              "center",
              "center",
              "center",
            ]}
            fontFamily={"Raleway"}
            color={"black"}
            w={["100%", "100%", "100%", "100%", "100%", "100%"]}
            fontWeight={300}
          >
            Elevate your property with our professional services tailored to
            maximize appeal and value
          </Text>
        </VStack>

        {/* Cards Container using Grid */}
        <Grid
          templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]}
          gap="40px"
          maxW="1200px"
          mx="auto" 
        >
          {/* Card 1: Styling & Photography */}
          <Box
            bg="white"
            borderRadius="16px"
            overflow="hidden"
   
            transition="all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)"
            _hover={{
              transform: "translateY(-10px)",
              boxShadow: "0 15px 60px rgba(0,0,0,0.15)",
            }}
            border={"1px solid #e0e0e0"}
          >
            {/* Card Header with Gradient & Badge */}
            <Box p="25px 30px" position="relative" color="black">
              <Text
                fontSize="1.8rem"
                fontWeight="700"
                color="black"
                mb="5px"
                lettergap="-0.5px"
                fontFamily="Raleway, sans-serif"
              >
                Styling & Photography
              </Text>
              <Text color="black" fontSize="0.95rem" fontWeight="500">
                Capture your property's best angles
              </Text>
            </Box>

            {/* Card Body */}
            <Box p="30px" display="flex" flexDirection="column" flex="1">
              {/* Pricing Section */}
              <VStack gap="12px" align="stretch" mb="25px">
                <Flex
                  justify="space-between"
                  pb="12px"
                  borderBottom="1px solid #e9ecef"
                >
                  <Text fontWeight="500" color="#6c757d" fontSize="0.95rem">
                    Small Properties
                  </Text>
                  <Text fontWeight="700" color="#212529" fontSize="1.1rem">
                    $250
                  </Text>
                </Flex>
                <Flex justify="space-between">
                  <Text fontWeight="500" color="#6c757d" fontSize="0.95rem">
                    Larger Properties
                  </Text>
                  <Text fontWeight="700" color="#212529" fontSize="1.1rem">
                    $350
                  </Text>
                </Flex>
              </VStack>

              {/* Feature List */}
              <VStack as="ul" align="start" gap="10px" mb="30px" pl="0">
                {[
                  "Professional photographer",
                  "Expert styling consultation",
                  "High-resolution images",
                  "24-hour turnaround",
                ].map((feature) => (
                  <Text
                    as="li"
                    key={feature}
                    listStyleType="none"
                    pl="25px"
                    position="relative"
                    color="#6c757d"
                    fontSize="0.9rem"
                    _before={{
                      content: '"✓"',
                      position: "absolute",
                      left: 0,

                      fontWeight: "bold",
                    }}
                  >
                    {feature}
                  </Text>
                ))}
              </VStack>

              <Text
                color="#6c757d"
                fontSize="0.95rem"
                lineHeight="1.7"
                flex="1"
              >
                Elevate your property's visual appeal with expert styling and
                magazine-quality professional photography that captures your
                space's unique character.
              </Text>
            </Box>

            {/* Card Footer */}
          </Box>

          {/* Card 2: Furnishing & Setup */}
          <Box
            as="article"
            bg="white"
            borderRadius="16px"
            overflow="hidden"
           
            transition="all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)"
            _hover={{
              transform: "translateY(-10px)",
              boxShadow: "0 15px 60px rgba(0,0,0,0.15)",
            }}
            border={"1px solid #e0e0e0"}
          >
            <Box p="25px 30px" color="black">
              <Text
                fontSize="1.8rem"
                fontWeight="700"
                mb="5px"
                lettergap="-0.5px"
                fontFamily="Raleway, sans-serif"
              >
                Furnishing & Setup
              </Text>
              <Text fontSize="0.95rem" fontWeight="500">
                Transform empty spaces into homes
              </Text>
            </Box>

            <Box p="30px" display="flex" flexDirection="column" flex="1">
              <VStack gap="12px" align="stretch" mb="25px">
                <Flex justify="space-between">
                  <Text fontWeight="500" color="#6c757d" fontSize="0.95rem">
                    Total Item Value
                  </Text>
                  <Text fontWeight="700" color="#212529" fontSize="1.1rem">
                    8%
                  </Text>
                </Flex>
              </VStack>

              <VStack as="ul" align="start" gap="10px" mb="30px" pl="0">
                {[
                  "Curated furniture selection",
                  "Professional installation",
                  "Designer consultation",
                  "Flexible rental options",
                ].map((feature) => (
                  <Text
                    as="li"
                    key={feature}
                    listStyleType="none"
                    pl="25px"
                    position="relative"
                    color="#6c757d"
                    fontSize="0.9rem"
                    _before={{
                      content: '"✓"',
                      position: "absolute",
                      left: 0,

                      fontWeight: "bold",
                    }}
                  >
                    {feature}
                  </Text>
                ))}
              </VStack>

              <Text
                color="#6c757d"
                fontSize="0.95rem"
                lineHeight="1.7"
                flex="1"
              >
                Transform your space with our curated furnishing services. We
                source, deliver, and artfully arrange premium furnishings that
                embody the Luxe aesthetic and elevate your property's appeal.
              </Text>
            </Box>
          </Box>

          {/* Card 3: Premium Cleaning */}
          <Box
            as="article"
            bg="white"
            borderRadius="16px"
            overflow="hidden"
            border={"1px solid #e0e0e0"}
            transition="all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)"
            _hover={{
              transform: "translateY(-10px)",
              boxShadow: "0 15px 60px rgba(0,0,0,0.15)",
            }}
          >
            <Box
              p="25px 30px"
              bgGradient="linear(135deg, #4895ef, #3a0ca3)"
              color="black"
            >
              <Text
                fontSize="1.8rem"
                fontWeight="700"
                mb="5px"
                lettergap="-0.5px"
                fontFamily="Raleway, sans-serif"
              >
                Premium Cleaning
              </Text>
              <Text fontSize="0.95rem" fontWeight="500">
                Immaculate spaces, every time
              </Text>
            </Box>

            <Box p="30px" display="flex" flexDirection="column" flex="1">
              <VStack gap="12px" align="stretch" mb="25px">
                <Flex justify="space-between">
                  <Text fontWeight="500" color="#6c757d" fontSize="0.95rem">
                    Per Service
                  </Text>
                  <Text fontWeight="700" color="#212529" fontSize="1.1rem">
                    $90–$350
                  </Text>
                </Flex>
                <Flex justify="space-between">
                  <Text fontWeight="500" color="#6c757d" fontSize="0.95rem">
                    With Management
                  </Text>
                  <Text fontWeight="700" color="#212529" fontSize="1.1rem">
                    30% Off
                  </Text>
                </Flex>
              </VStack>

              <VStack as="ul" align="start" gap="10px" mb="30px" pl="0">
                {[
                  "Deep cleaning services",
                  "Premium linen change",
                  "Quality inspection",
                  "Eco-friendly products",
                ].map((feature) => (
                  <Text
                    as="li"
                    key={feature}
                    listStyleType="none"
                    pl="25px"
                    position="relative"
                    color="#6c757d"
                    fontSize="0.9rem"
                    _before={{
                      content: '"✓"',
                      position: "absolute",
                      left: 0,

                      fontWeight: "bold",
                    }}
                  >
                    {feature}
                  </Text>
                ))}
              </VStack>

              <Text
                color="#6c757d"
                fontSize="0.95rem"
                lineHeight="1.7"
                flex="1"
              >
                Experience our meticulous turnover service with premium linen
                change and comprehensive quality inspections that ensure your
                property always presents its absolute best.
              </Text>
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Pricing;
