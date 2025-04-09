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
import PhotographyCardLists from "@/components/luxeComponents/PhotographyCardLists";
import ImageCompareSlider from "@/components/luxeComponents/ImageCompareSlider";
import ServicesThreeCards from "@/components/luxeComponents/servicesThreeCards";
const Photography = () => {
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
          backgroundImage={`linear-gradient(to top,rgb(39,44,66), transparent), url(https://images.pexels.com/photos/414781/pexels-photo-414781.jpeg)`}
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
                Photography
              </Text>
              <Text
                w={["90%", "90%", "90%", "50%", "50%", "50%"]}
                fontSize={["16px", "16px", "16px", "26px", "26px", "26px"]}
                // mt={["20px", "20px", "20px", "20px", "20px", "20px"]}

                fontWeight={300}
              >
                Showcase your property with stunning professional photography
                that captures its unique essence.
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
              Visual Excellence
              </Text>
            </Box>
          </HStack>
          <ServicesThreeCards
            cardsData={[
              {
                imgUrl:
                  "https://images.pexels.com/photos/7579354/pexels-photo-7579354.jpeg",
                title: "First Impressions",
                description:
                  "Stunning photos create a powerful first impression, compelling potential guests to book your property.",
              },
              {
                imgUrl:
                  "https://images.pexels.com/photos/6667212/pexels-photo-6667212.jpeg",
                title: "Feature Showcase",
                description:
                  "We expertly highlight your property's unique features and amenities, setting it apart from competitors.",
              },
              {
                imgUrl:
                  "https://images.pexels.com/photos/5077049/pexels-photo-5077049.jpeg",
                title: "Booking Catalyst",
                description:
                  "Professional imagery leads to increased views, higher booking rates, and enhanced revenue.",
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
            Capture The Essence Of Your Property
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
            fontFamily={"Raleway"}
            color={"black"}
            w={["100%", "100%", "100%", "100%", "100%", "100%"]}
            fontWeight={300}
          >
            Showcase your property with Luxe Management's professional
            photography services, capturing its unique essence to create a
            lasting impression.
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
        >
          {/* Horizontal line for crosshair */}

          <ImageCompareSlider />
        </Box>
      </VStack>
      <PhotographyCardLists />

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

export default Photography;
