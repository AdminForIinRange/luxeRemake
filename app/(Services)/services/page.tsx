"use client";
import React, { useState } from "react";
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
import { ChevronRight, Home, HomeIcon, House } from "lucide-react";
import { IconLeft } from "react-day-picker";
import { IconArrowRightFromArc } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation";

const Services = () => {
  const serviceItems = [
    {
      img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg",
      title: "Property Management",
      logo: <HomeIcon />,
      link: "Explore service",
      subheading:
        "Comprehensive management service including all our offerings.",
    },
    {
      img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg",
      title: "Cleaning & Linen",
      logo: <HomeIcon />,
      link: "Explore service",
      subheading:
        "Ensure a pristine, hotel-quality experience for every guest.",
    },
    {
      img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg",
      title: "Furnishing & Styling",
      logo: <HomeIcon />,
      link: "Explore service",
      subheading:
        "Transform your space into a stunning, Instagram-worthy retreat.",
    },
    {
      img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg",
      title: "Photography",
      logo: <HomeIcon />,
      link: "Explore service",
      subheading:
        "Capture your property's best features with professional photography.",
    },
  ];

  const router = useRouter();
  return (
    <>
      <VStack
        mt={["50px", "50px", "50px", "50px", "50px", "50px"]}
        w={["100%", "100%", "100%", "100%", "100%", "100"]}
        textAlign={["center", "center", "center", "center", "center", "center"]}
        color={"black"}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
      >
        <Text
          fontSize={{
            base: "40px",
            sm: "40px",
            md: "40px",
            lg: "60px",
            xl: "60px",
          }}
          fontWeight={700}
          fontFamily={"Raleway"}
          bgClip="text"
          color={"black"}
          bgGradient="linear(to-r, teal, blue)"
        >
          Our Services
        </Text>
        <Text
          w={["90%", "90%", "90%", "50%", "50%", "50%"]}
          fontSize={["16px", "16px", "16px", "26px", "26px", "26px"]}
          // mt={["20px", "20px", "20px", "20px", "20px", "20px"]}

          fontFamily={"raleway"}
          color={"black"}
          fontWeight={300}
        >
          We offer a full suite of services to help you manage your property
          with ease.
        </Text>
      </VStack>

      <HStack
        mt={["100px", "100px", "100px", "100px", "100px", "100px"]}
        w={"100%"}
        h={"100%"}
        justify={"start"}
        align={"center"}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        flexWrap={["wrap", "wrap", "wrap", "wrap", "wrap", "wrap"]}
        fontFamily={"raleway"}
        gap={"25px"}
      >
        {/* {uploadedFiles.length > 0 ? ( */}
        {serviceItems.map(({ img, title, logo, link, subheading }) => (
          <VStack key={title}>
            <Box
              backgroundImage={`linear-gradient(to top,rgb(39,44,66), transparent), url(${img})`}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              transition={"all 0.3s"}
              w={"450px"}
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
                <VStack w={"100%"} h={"100%"} justify={"Start"} align={"Start"}>
                  <HStack w={"100%"} h={"100%"} justify={"start"} align={"end"}>
                    {logo}
                  </HStack>
                  <Text
                    color={"white"}
                    fontSize={["26px", "26px", "26px", "26px", "26px", "26px"]}
                    fontFamily={"Raleway"}
                    fontWeight={700}
                  >
                    {title}
                  </Text>
                </VStack>
              </VStack>
            </Box>
            <Box fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}>
              <Text w={"450px"} h={"50px"} mt={"10px"}>
                {subheading}
              </Text>
              <HStack
                cursor={"pointer"}
                w={"450px"}
                align={"start"}
                justify={"start"}
                fontWeight={500}
                mt={"5px"}
                _hover={{ transform: "translateX(5px)" }}
                transition={"all 0.3s"}
                onClick={() => router.push(`/${link}`)}
              >
                <Text>Explore service</Text>

                <ChevronRight />
              </HStack>
            </Box>
          </VStack>
        ))}
      </HStack>

     

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

export default Services;
