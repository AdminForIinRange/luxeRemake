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
import FurnishingStylingCardLists from "@/components/luxeComponents/FurnishingStylingCardLists";
import ServicesThreeCards from "@/components/luxeComponents/servicesThreeCards";
const FurnishingAndStyling = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

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
          backgroundImage={`linear-gradient(to top,rgb(39,44,66), transparent), url(https://images.pexels.com/photos/6782574/pexels-photo-6782574.jpeg)`}
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
            mt={"10px"}
            w={"100%"}
            h={"100%"}
            display={"flex"}
            justifyContent={"start"}
            alignItems={"start"}
            p={"32px"}
          >
            <VStack justify={"end"} align={"start"} w={"100%"} h={"100%"}>
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
                Furnishing &<br></br>Styling
              </Text>
              <Text
                w={["90%", "90%", "90%", "50%", "50%", "50%"]}
                fontSize={["16px", "16px", "16px", "26px", "26px", "26px"]}
                // mt={["20px", "20px", "20px", "20px", "20px", "20px"]}

                fontWeight={300}
              >
                Transform your property into a stunning, magazine-worthy retreat
                with our expert design services.
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
                The Luxe Distinction
              </Text>
            </Box>
          </HStack>
       

            <ServicesThreeCards
        cardsData={[
          {
            imgUrl:
              "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg",
            title: "Tailored Design",
            description:
              "We create a unique style that reflects your property's character and appeals to your target guests.",
          },
          {
            imgUrl:
              "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
            title: "Quality Furnishings",
            description:
              "We source and install high-quality, durable furniture that looks great and stands up to frequent use.",
          },
          {
            imgUrl:
              "https://images.pexels.com/photos/7607460/pexels-photo-7607460.jpeg",
            title: "Attention to Detail",
            description:
              "From artwork to throw pillows, we perfect every detail to a cohesive, inviting space.",
          },
        ]}
      />
       
        </Box>
        
      </HStack>
      <HStack
        mt={["100px", "100px", "100px", "100px", "100px", "100px"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
      >
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>
    

      <FurnishingStylingCardLists />

      <HStack
        mt={["200px", "200px", "200px", "400px", "400px", "400px"]}
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

export default FurnishingAndStyling;
