import React from "react";
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

import { Check } from "lucide-react";
const AboutJourneyCardLists = () => {
  const journey = [
    {
      id: 1,
      title: "2015 The Beginning",
      description:
        "Luxe Managements is founded with a vision to revolutionize short-term rentals. Our first property, a charming apartment in downtown, sets the standard for our future endeavors.",
      icon: <Check />,
      number: "1 Property Managed",
      imgTagNumber: "1",
      imgTagNumberText: "Property Managed",
    },
    {
      id: 2,
      title: "2017 Rapid Growth",
      description:
        "Our portfolio expands to over 100 properties across multiple cities. We introduce our signature 'Luxe Touch' service, ensuring every guest experiences unparalleled luxury.",
      icon: <Check />,
      number: "100+ Properties Managed",
      imgTagNumber: "100+",
      imgTagNumberText: "Property Managed",
    },
    {
      id: 3,
      title: "2019 Tech Innovation",
      description:
        "Launch of our proprietary property management software, 'LuxeConnect', setting new industry standards for efficiency and guest satisfaction.",
      icon: <Check />,
      number: "98% Guest Satisfaction Rate",
      imgTagNumber: "98%",
      imgTagNumberText: "Guest Satisfaction Rate",
    },
    {
      id: 4,
      title: "2021 Global Expansion",
      description:
        "Luxe Managements goes international, opening offices in major cities worldwide. Our unique blend of local expertise and global standards sets us apart in new markets.",
      icon: <Check />,
      number: "10 Countries Served",
      imgTagNumber: "10",
      imgTagNumberText: "Countries Served",
    },
    {
      id: 5,
      title: "2023 Industry Leader",
      description:
        "Recognized as the top luxury short-term rental management company globally. We launch our sustainability initiative, 'Luxe Green', promoting eco-friendly practices in all our properties.",
      icon: <Check />,
      number: "#1 In Luxury Rentals",
      imgTagNumber: "#1",
      imgTagNumberText: "In Luxury Rentals",
    },
  ];
  return (
    <>
      {journey.map((item, index) => (
        <HStack
          data-aos="fade-up"
          zIndex={3}
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
          justify={"center"} // !!
          align={"center"}
          w={"100%"}
          h={"100%"}
          my={["50px", "50px", "50px", "50px", "50px", "100px"]}
          key={index}
        >
          <HStack
            justify={"center"}
            align={["center", "center", "start", "start", "start", "start"]}
            w={"100%"}
            h={"100%"}
            gap={["15px", "15px", "15px", "50px", "50px", "50px"]}
            wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
          >
            <Box w={["95%", "95%", "95%", "600px", "600px", "600px"]}>
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
                  "left",
                  "left",
                  "left",
                ]}
                color={"black"}
                bgGradient="linear(to-r, teal, blue)"
              >
                {item.title}
              </Text>
              <Text
                fontSize={["18px", "18px", "18px", "18px", "18px", "18px"]}
                mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
                textAlign={[
                  "center",
                  "center",
                  "center",
                  "left",
                  "left",
                  "left",
                ]}
                fontFamily={"Raleway"}
                color={"black"}
                w={["100%", "100%", "100%", "100%", "100%", "100%"]}
                fontWeight={300}
              >
                {item.description}
              </Text>
            </Box>

            <Box
              position="relative"
              h={["350px", "350px", "350px", "500px", "500px", "600px"]}
              w={["95%", "95%", "95%", "600px", "600px", "600px"]}
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
              <Box
                position="relative"
                h={["350px", "350px", "350px", "500px", "500px", "500px"]}
                w={["100%", "100%", "100%", "550px", "550px", "550px"]}
                borderRadius="30px"
                bg="gray.200" // Change this to any background you want
                overflow="hidden"
                backgroundImage={` url(https://images.pexels.com/photos/7213549/pexels-photo-7213549.jpeg)`}
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundSize="cover"
              ></Box>
              {/* Bottom-right label */}
              <Box
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
                  fontFamily={"raleway"}
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
                      fontSize={[
                        "30px",
                        "30px",
                        "35px",
                        "35px",
                        "35px",
                        "40px",
                      ]}
                      fontWeight={"700"}
                      color={"black"}
                    >
                     {item.imgTagNumber}
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
                      {" "}
                      {item.imgTagNumberText}
                    </Text>
                  </HStack>
                </Box>
              </Box>
            </Box>
          </HStack>
        </HStack>
      ))}
    </>
  );
};

export default AboutJourneyCardLists;
