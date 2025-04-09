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
import CleaningLinenCardLists from "@/components/luxeComponents/CleaningLinenCardLists";
import ServicesThreeCards from "@/components/luxeComponents/servicesThreeCards";
const CleaningAndLinen = () => {
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
                Cleaning &<br></br>Linen
              </Text>
              <Text
                w={["90%", "90%", "90%", "50%", "50%", "50%"]}
                fontSize={["16px", "16px", "16px", "26px", "26px", "26px"]}
                // mt={["20px", "20px", "20px", "20px", "20px", "20px"]}

                fontWeight={300}
              >
                Elevate your space with our meticulous cleaning process and
                premium linen service.
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
                Redefining Cleanliness
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
                w={["90%", "90%", "90%", "50%", "50%", "50%"]}
                fontWeight={300}
              >
                Elevate your property's performance and reputation with Luxe
                Managements' comprehensive approach. We combine meticulous
                attention to detail with market expertise to create a
                distinguished destination.
              </Text>
            </Box>
          </HStack>
      
          <ServicesThreeCards
        cardsData={[
          {
            imgUrl:
              "https://images.pexels.com/photos/8467975/pexels-photo-8467975.jpeg",
            title: "Premium Products",
            description:
              "We use only the finest, eco-friendly cleaning products to protect your property and the environment.",
          },
          {
            imgUrl:
              "https://images.pexels.com/photos/4239142/pexels-photo-4239142.jpeg",
            title: "        Expert Team",
            description:
              "Our highly trained professionals bring years of experience in luxury property care.",
          },
          {
            imgUrl:
              "https://images.pexels.com/photos/4239130/pexels-photo-4239130.jpeg",
            title: "  Impeccable Detail",
            description:
              "We meticulously clean every corner, ensuring no detail is overlooked.",
          },
        ]}
      />
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
            Our Cleaning Symphony
          </Text>
        </Box>
      </HStack>

      <CleaningLinenCardLists />

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

export default CleaningAndLinen;
