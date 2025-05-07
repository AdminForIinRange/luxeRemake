"use client";
import React, { useEffect } from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";

import Aos from "aos";
import "aos/dist/aos.css";
import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation";
import PropertyManagementCardLists from "@/components/luxeComponents/PropertyManagementCardLists";
import ServicesThreeCards from "@/components/luxeComponents/servicesThreeCards";
import TopHeader from "@/components/luxeComponents/topHeader";
const PropertyManagement = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const servicesBoxes = [
    {
      header: "40%+",
      title: "  Average Revenue Increase",
    },
    {
      header: "75%+",
      title: "Average Occupancy Increase",
    },
    {
      header: "4.98/5",
      title: "  Star Rating",
    },
  ];

  return (
    <>
      <TopHeader
        imgUrl="https://images.pexels.com/photos/23224995/pexels-photo-23224995.jpeg"
        wordOne="Property"
        wordTwo="Management"
        description="Elevate your investment with our comprehensive suite of premium services designed to maximize returns and enhance guest experiences."
        and={false}
      />

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
          <ServicesThreeCards
            CardDataHeader={[
              {
                mainTitle: "Visual Excellence",
                mainDescription:
                  "Elevate your property's performance and reputation with Luxe Managements' comprehensive approach. We combine meticulous attention to detail with market expertise to create a distinguished destination.",
              },
            ]}
            cardsData={[
              {
                imgUrl:
                  "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
                title: "Bespoke Service",
                description:
                  "  Tailored management solutions designed specifically for your unique property and investment goals.",
              },
              {
                imgUrl:
                  "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
                title: "Innovative Technology",
                description:
                  "Advanced systems and tools that streamline operations and enhance guest satisfaction.",
              },
              {
                imgUrl:
                  "https://images.pexels.com/photos/16282306/pexels-photo-16282306.jpeg",
                title: "Revenue Maximization",
                description:
                  "Dynamic pricing and targeted marketing strategies that optimize your property's earning potential.",
              },
            ]}
       
          />
        </Box>
      </HStack>

      <VStack
        data-aos="fade-up"
        zIndex={3}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
        my={["50px", "50px", "50px", "50px", "50px", "100px"]}
      >
        <Box
          w={["90%", "90%", "90%", "50%", "50%", "50%"]}
          mb={["50px", "50px", "50px", "50px", "50px", "50px"]}
        >
          <Text
            w={["100%", "100%", "100%", "100%", "100%", "100%"]}
            mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
            fontSize={["30px", "30px", "30px", "50px", "50px", "50px"]}
            fontWeight={600}
            fontFamily={"arial"}
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
            All Inclusive Services
          </Text>
          <Text
            fontSize={["18px", "18px", "18px", "18px", "18px", "18px"]}
            mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
            textAlign={[
              "center",
              "center",
              "center",
              "center",
              "center",
              "center",
            ]}
            fontFamily={"arial"}
            color={"black"}
            w={["100%", "100%", "100%", "100%", "100%", "100%"]}
            fontWeight={300}
          >
            At Luxe, we do more than manage—we elevate. From premium cleaning
            and linen services to expert styling, guest communication, emergency
            support, and everything in between, we handle it all with unmatched
            attention to detail.
          </Text>
        </Box>

        <Box
          position="relative"
          h={["350px", "350px", "350px", "500px", "500px", "500px"]}
          w={["100%", "100%", "100%", "100%", "100%", "100%"]}
          borderRadius="30px"
          bgPos="center"
          bgSize="cover"
          // Change this to any background you want
          // Change this to any background you want
          overflow="hidden"
          display={"flex"}
          justifyContent={"end"}
          mb={"15px"}
        >
          {/* Horizontal line for crosshair */}
          <Box
            position="relative"
            h={["350px", "350px", "350px", "500px", "500px", "500px"]}
            w={["100%", "100%", "100%", "100%", "100%", "100%"]}
            borderRadius="30px"
            bg="gray.200" // Change this to any background you want
            overflow="hidden"
            backgroundImage={` url(https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg)`}
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundSize="cover"
          ></Box>
          {/* Bottom-right label */}
          {/* <Box
            p={"4"}
            position={"absolute"}
            display={"flex"}
            w={"100%"}
            h={"100%"}
            justifyContent={[
              "start",
              "start",
              "start",
              "start",
              "start",
              "start",
            ]}
            alignItems={["start", "start", "start", "center", "center"]}
          >
            <Box
              fontFamily={"arial"}
              zIndex={1}
              bg="white"
              borderRadius="md"
              p={[
                "10px 10px",
                "10px 10px",
                "10px 10px",
                "15px 15px",
                "15px 15px",
                "15px 15px",
              ]}
              boxShadow="md"
              fontWeight="semibold"
              textAlign={"left"}
            >
              <HStack>
                <Text
                  fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
                  fontWeight={"700"}
                  color={"black"}
                >
                  40%
                </Text>
                <Text
                  fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
                >
                  {" "}
                  Average Revenue Increase
                </Text>
              </HStack>
            </Box>
          </Box> */}
        </Box>

        <HStack
          justify="space-between"
          align={["center", "center", "start", "start", "start", "start"]}
          w="100%"
          h="100%"
          gap={["15px", "15px", "15px", "50px", "50px", "50px"]}
          wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        >
          {servicesBoxes.map(({ header, title }, index) => (
            <Box
              key={index}
              border="1px solid #e0e0e0"
              transition="all 0.3s ease"
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              h="150px"
              borderRadius="16px"
              bgGradient="linear(to-r, teal.100, blue.100)"
              cursor="pointer"
              p="30px"
              display="flex"
              _hover={{
                transform: "scale(1.03)",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                borderColor: "#ccc",
              }}
            >
              <VStack w="100%" h="100%" justify="center" align="center">
                <Text
                  textAlign="center"
                  color="gray.800"
                  fontSize={["24px", "26px", "26px", "28px", "28px", "28px"]}
                  fontFamily="arial"
                  fontWeight="700"
                  mb={1}
                >
                  {header}
                </Text>
                <Text
                  textAlign="center"
                  color="gray.600"
                  fontSize={["16px", "18px", "18px", "20px", "20px", "20px"]}
                  fontFamily="arial"
                  fontWeight="500"
                >
                  {title}
                </Text>
              </VStack>
            </Box>
          ))}
        </HStack>
      </VStack>

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
