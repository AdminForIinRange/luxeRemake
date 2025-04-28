"use client";
import React, { useEffect } from "react";
import {
  Box,

  HStack,

  Text,

} from "@chakra-ui/react";


import Aos from "aos";
import "aos/dist/aos.css";
import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation";
import FurnishingStylingCardLists from "@/components/luxeComponents/FurnishingStylingCardLists";
import ServicesThreeCards from "@/components/luxeComponents/servicesThreeCards";
import TopHeader from "@/components/luxeComponents/topHeader";

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
      <TopHeader
        imgUrl={
          "https://images.pexels.com/photos/6782574/pexels-photo-6782574.jpeg"
        }
        wordOne={"Furnishing"}
        wordTwo={"Styling"}
        and={true}
        description={
          "Transform your property into a stunning, magazine-worthy retreat with our expert design services."
        }
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
                fontSize={["25px", "25px", "25px", "50px", "50px", "50px"]}
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
