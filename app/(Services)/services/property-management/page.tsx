"use client";
import React, { useEffect } from "react";
import {
  Box,
  Stack,
  Flex,
  Group,
  HStack,
  Icon,
  Button,
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogFooter,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  Check,
  ChevronRight,
  Cog,
  PersonStandingIcon,
  TrendingUp,
} from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation";
import PropertyManagementCardLists from "@/components/luxeComponents/PropertyManagementCardLists";
const PropertyManagement = () => {
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

  const rightImg = [
    {
      title: "Guest Experience",
      description:
        "We create memorable experiences for your guests, ensuring satisfaction and stellar reviews.",
      features: [
        "24/7 concierge support",
        "Curated welcome packages",
        "Personalized local recommendations",
        "Immediate issue resolution",
      ],
    },
    {
      title: "Financial Intelligence",
      description:
        "We provide comprehensive financial management and transparent reporting.",
      features: [
        "Detailed monthly statements",
        "Revenue optimization strategies",
        "Tax-ready documentation",
        "Performance analytics",
      ],
    },
  ];

  return (
    <>
      <Box
        w={"100%"}
        h={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          backgroundImage={`linear-gradient(to top,rgb(39,44,66), transparent), url(https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg)`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          transition={"all 0.3s"}
          w={"95%"}
          h={"600px"}
          borderRadius={"16px"}
          _hover={{
            transform: "scale(1.01)",
          }}
          cursor={"pointer"}
          p={"30px"}
          display={"flex"}
          fontFamily={"raleway"}
        >
          <VStack
            color={"white"}
            mt={"20px"}
            w={"100%"}
            h={"100%"}
            display={"flex"}
            justifyContent={"start"}
            alignItems={"start"}
            p={"32px"}
          >
            <VStack justify={"center"} align={"START"} w={"100%"} h={"100%"}>
              <Text
                fontSize={{
                  base: "40px",
                  sm: "40px",
                  md: "40px",
                  lg: "60px",
                  xl: "80px",
                }}
                fontWeight={700}
                bgClip="text"
                color={"white"}
                bgGradient="linear(to-r, teal, blue)"
                lineHeight={1}
              >
                Property <br></br> Management
              </Text>
              <Text
                w={["90%", "90%", "90%", "50%", "50%", "50%"]}
                fontSize={["16px", "16px", "16px", "26px", "26px", "26px"]}
                // mt={["20px", "20px", "20px", "20px", "20px", "20px"]}

                fontWeight={300}
              >
                Elevate your investment with our comprehensive suite of premium
                services designed to maximize returns and enhance guest
                experiences.
              </Text>
            </VStack>
          </VStack>
        </Box>
      </Box>

      <HStack
        my={["50px", "50px", "50px", "50px", "50px", "100px"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
        transition={"all 0.2s ease-in-out"}
        zIndex={3}
        id="get-started-button"
      >
        <Box
          w={"100%"}
          h={"100%"}
          borderRadius={"30px"}
          py={"65px"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <HStack
           
            justify={"center"}
            align={"center"}
            w={"100%"}
            transition={"all 0.2s ease-in-out"}
            zIndex={3}
            id="get-started-button"
          >
            <Box
              w={"90%"}
              h={"100%"}
              borderRadius={"30px"}
              p={"25px"}
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              textAlign={"center"}
            >
              <Text
                w={["100%", "100%", "100%", "100%", "100%", "100%"]}
                mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
                fontSize={["35px", "35px", "35px", "50px", "50px", "50px"]}
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
       Our Methodology
              </Text>
            </Box>
          </HStack>
          <HStack
            mt={["100px", "100px", "100px", "100px", "100px", "100px"]}
            w={"100%"}
            h={"100%"}
            justify={"center"}
            align={"center"}
            px={["4%", "4%", "6%", "6%", "6%", "10%"]}
            flexWrap={["wrap", "wrap", "wrap", "wrap", "wrap", "wrap"]}
            fontFamily={"raleway"}
            gap={"25px"}
          >
            {/* {uploadedFiles.length > 0 ? ( */}

            <VStack>
              <Box
                backgroundImage={`linear-gradient(to top,rgb(39,44,66), transparent), url(https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg)`}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                transition={"all 0.3s"}
                w={["100%", "250px", "250px", "400px", "400px", "400px"]}
                h={"300px"}
                borderRadius={"16px"}
                _hover={{
                  transform: "scale(1.01)",
                }}
                cursor={"pointer"}
                p={"30px"}
                display={"flex"}
              >
                <VStack
                  color={"white"}
                  mt={"20px"}
                  w={"100%"}
                  h={"100%"}
                  display={"flex"}
                  justifyContent={"end"}
                  alignItems={"end"}
                >
                  <VStack
                    w={"100%"}
                    h={"100%"}
                    justify={"Start"}
                    align={"Start"}
                  >
                    <HStack
                      w={"100%"}
                      h={"100%"}
                      justify={"start"}
                      align={"end"}
                    >
                      {" "}
                      <PersonStandingIcon size={50} />{" "}
                    </HStack>
                    <Text
                      textAlign={"start"}
                      color={"white"}
                      fontSize={[
                        "26px",
                        "26px",
                        "26px",
                        "26px",
                        "26px",
                        "26px",
                      ]}
                      fontFamily={"Raleway"}
                      fontWeight={700}
                    >
                      Bespoke Service
                    </Text>
                  </VStack>
                </VStack>
              </Box>
              <Box
                fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
                w={["100%", "250px", "250px", "400px", "400px", "400px"]}
                pt={"15px"}
              >
                <Text textAlign={"start"}>
                  Tailored management solutions designed specifically for your
                  unique property and investment goals.
                </Text>
              </Box>
            </VStack>

            <VStack>
              <Box
                backgroundImage={`linear-gradient(to top,rgb(39,44,66), transparent), url(https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg)`}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                transition={"all 0.3s"}
                w={["100%", "250px", "250px", "400px", "400px", "400px"]}
                h={"300px"}
                borderRadius={"16px"}
                _hover={{
                  transform: "scale(1.01)",
                }}
                cursor={"pointer"}
                p={"30px"}
                display={"flex"}
              >
                <VStack
                  color={"white"}
                  mt={"20px"}
                  w={"100%"}
                  h={"100%"}
                  display={"flex"}
                  justifyContent={"end"}
                  alignItems={"end"}
                >
                  <VStack
                    w={"100%"}
                    h={"100%"}
                    justify={"Start"}
                    align={"Start"}
                  >
                    <HStack
                      w={"100%"}
                      h={"100%"}
                      justify={"start"}
                      align={"end"}
                    >
                      {" "}
                      <Cog size={50} />{" "}
                    </HStack>
                    <Text
                      textAlign={"start"}
                      color={"white"}
                      fontSize={[
                        "26px",
                        "26px",
                        "26px",
                        "26px",
                        "26px",
                        "26px",
                      ]}
                      fontFamily={"Raleway"}
                      fontWeight={700}
                    >
                      Innovative Technology
                    </Text>
                  </VStack>
                </VStack>
              </Box>
              <Box
                fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
                w={["100%", "250px", "250px", "400px", "400px", "400px"]}
                pt={"15px"}
              >
                <Text textAlign={"start"}>
                  Advanced systems and tools that streamline operations and
                  enhance guest satisfaction.
                </Text>
              </Box>
            </VStack>

            <VStack>
              <Box
                backgroundImage={`linear-gradient(to top,rgb(39,44,66), transparent), url(https://images.pexels.com/photos/16282306/pexels-photo-16282306.jpeg)`}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                transition={"all 0.3s"}
                w={["100%", "250px", "250px", "400px", "400px", "400px"]}
                h={"300px"}
                borderRadius={"16px"}
                _hover={{
                  transform: "scale(1.01)",
                }}
                cursor={"pointer"}
                p={"30px"}
                display={"flex"}
              >
                <VStack
                  color={"white"}
                  mt={"20px"}
                  w={"100%"}
                  h={"100%"}
                  display={"flex"}
                  justifyContent={"end"}
                  alignItems={"end"}
                >
                  <VStack
                    w={"100%"}
                    h={"100%"}
                    justify={"Start"}
                    align={"Start"}
                  >
                    <HStack
                      w={"100%"}
                      h={"100%"}
                      justify={"start"}
                      align={"end"}
                    >
                      {" "}
                      <TrendingUp size={50} />{" "}
                    </HStack>
                    <Text
                      textAlign={"start"}
                      color={"white"}
                      fontSize={[
                        "26px",
                        "26px",
                        "26px",
                        "26px",
                        "26px",
                        "26px",
                      ]}
                      fontFamily={"Raleway"}
                      fontWeight={700}
                    >
                      Revenue Maximization
                    </Text>
                  </VStack>
                </VStack>
              </Box>
              <Box
                fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
                w={["100%", "250px", "250px", "400px", "400px", "400px"]}
                pt={"15px"}
              >
                <Text textAlign={"start"}>
                  Dynamic pricing and targeted marketing strategies that
                  optimize your property's earning potential.
                </Text>
              </Box>
            </VStack>
          </HStack>
        </Box>
      </HStack>

      <HStack
        my={["50px", "50px", "50px", "50px", "50px", "100px"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
        transition={"all 0.2s ease-in-out"}
        zIndex={3}
        id="get-started-button"
      >
        <Box
          w={"90%"}
          h={"100%"}
          borderRadius={"30px"}
          p={"25px"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Text
            w={["100%", "100%", "100%", "100%", "100%", "100%"]}
            mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
            fontSize={["35px", "35px", "35px", "50px", "50px", "50px"]}
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
            All Inclisive Services
          </Text>
        </Box>
      </HStack>

      <PropertyManagementCardLists />

      <HStack
        mt={["100px", "100px", "100px", "100px", "100px", "100px"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
      >
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>
      <ScheduleConsultation />
    </>
  );
};

export default PropertyManagement;
