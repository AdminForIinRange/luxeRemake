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
import {
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/chakra-snippets/dialog";
import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation";

const About = () => {
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

  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
          fontFamily={"Poppins"}
          bgClip="text"
          color={"black"}
          bgGradient="linear(to-r, teal, blue)"
        >
          About Luxe
        </Text>
        <Text
          w={["90%", "90%", "90%", "50%", "50%", "50%"]}
          fontSize={["16px", "16px", "16px", "26px", "26px", "26px"]}
          // mt={["20px", "20px", "20px", "20px", "20px", "20px"]}

          fontFamily={"Poppins"}
          color={"black"}
          fontWeight={300}
        >
          Redefining luxury in short-term rentals
        </Text>
      </VStack>

      <HStack
        zIndex={3}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
        mt={["155px", "155px", "155px", "155px", "155px", "155px"]}
      >
        <HStack
          justify={[
            "space-between",
            "space-between",
            "space-between",
            "space-between",
            "space-between",
            "space-between",
          ]}
          align={["center", "center", "start", "start", "start", "start"]}
          w={"100%"}
          h={"100%"}
          gap={["5px", "5px", "5px", "5px", "5px", "5px"]}
          wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["100%", "100%", "100%", "60%", "50%", "50%"]}>
            <Text
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
              fontWeight={600}
              fontFamily={"Poppins"}
              bgClip="text"
              textAlign={["center", "center", "center", "left", "left", "left"]}
              color={"black"}
              bgGradient="linear(to-r, teal, blue)"
            >
              Our Story
            </Text>
            <Text
              fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
              mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
              textAlign={["center", "center", "center", "left", "left", "left"]}
              fontFamily={"Poppins"}
              color={"black"}
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              fontWeight={300}
            >
              Founded in 2015, Luxe Managements began with a vision to
              revolutionize the short-term rental industry. Our founders,
              experienced in both real estate and hospitality, saw an
              opportunity to bridge the gap between property owners and guests,
              creating exceptional experiences for both. <br></br> <br></br>{" "}
              Over the years, we've grown from managing a handful of properties
              to becoming a leader in the industry, known for our attention to
              detail, innovative technology, and commitment to excellence. Our
              Journey
            </Text>
            <HStack
              justify={[
                "center",
                "center",
                "center",
                "start",
                "start",
                "start",
              ]}
              align={"start"}
              w={"100%"}
              transition={"all 0.2s ease-in-out"}
              zIndex={3}
            >
              <Box
                my={"25px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={["center"]}
                gap={"15px"}
                fontFamily={"raleway"}
                transition={"all 0.2s ease-in-out"}
                cursor={"pointer"}
                _hover={{
                  transition: "all 0.2s ease-in-out",
                  scale: 1.1,
                  fontWeight: "700",
                  px: "80px",
                  bg: "black",
                }}
                p={4}
                bg={"black"}
                color={"white"}
                rounded={"30px"}
                px={"12"}
                fontWeight={"500"}
                onClick={() => router.push("/about/journey")}
              >
                Our Journey
                {/* <Icon as={ArrowRight}> </Icon> */}
              </Box>
            </HStack>
          </Box>

          <Box
            display="block"
            position="relative"
            h={["500px", "500px", "500px", "500px", "500px", "600px"]}
            w={["100%", "100%", "100%", "650px", "650px", "650px"]}
            backdropFilter="blur(1.5px)"
            borderRadius="30px"
            bgPos="center"
            bgSize="cover"
            // Change this to any background you want
            // Change this to any background you want
            overflow="hidden"
          >
            {/* Horizontal line for crosshair */}
            <Box
              display="block"
              position="relative"
              h={["500px", "500px", "500px", "500px", "500px", "500px"]}
              w={["100%", "100%", "100%", "550px", "550px", "550px"]}
              backdropFilter="blur(1.5px)"
              borderRadius="30px"
              bgPos="center"
              bgSize="cover"
              bg="gray.200" // Change this to any background you want
              overflow="hidden"
              ml={["0px", "0px", "0px", "100px", "100px", "100px"]}
            ></Box>
            {/* Bottom-right label */}
          </Box>
        </HStack>
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
          bg={"#0A0F29"}
          w={"90%"}
          h={"100%"}
          borderRadius={"30px"}
          p={"25px"}
          py={"65px"}

          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          boxShadow={"0px 10px 20px rgba(0, 0, 0, 0.1)"}
          textAlign={"center"}
        >
          <Text
            color={"white"}
            fontWeight={"700"}
            fontSize={["24px", "24px", "24px", "35px", "35px", "40px"]}
            fontFamily={"raleway"}
            mb={"10px"}
          >
            Our Mission
          </Text>
          <Text
            w={["90%", "90%", "90%", "50%", "50%", "50%"]}
            color={"white"}
            fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
            fontFamily={"raleway"}
          >
            At Luxe Managements, our mission is to elevate the short-term rental
            experience for both property owners and guests. We strive to
            maximize returns for owners while ensuring each guest enjoys a
            five-star stay.
          </Text>

          <HStack
            justify={"center"}
            align={"start"}
            w={"100%"}
            transition={"all 0.2s ease-in-out"}
            zIndex={3}
            gap={["25px", "25px", "25px", "25px", "25px", "25px"]}
            wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
            mt={"50px"}
            color={"white"}
            fontFamily={"raleway"}
          >
            {" "}
            <Box p={4} rounded={"15px"} w={"250px"} bg={"#23273F"} h={"150px"}>
              <Text fontSize={"24px"} fontWeight={"700"}>
                Excellence
              </Text>
              <Text pt={"5px"}>
                Delivering unparalleled service quality in every interaction
              </Text>
            </Box>
            <Box p={4} rounded={"15px"} w={"250px"} bg={"#23273F"} h={"150px"}>
              <Text fontSize={"24px"} fontWeight={"700"}>
                Innovation
              </Text>
              <Text pt={"5px"}>
                Leveraging cutting-edge technology to streamline operations
              </Text>
            </Box>
            <Box p={4} rounded={"15px"} w={"250px"} bg={"#23273F"} h={"150px"}>
              {" "}
              <Text fontSize={"24px"} fontWeight={"700"}>
                Integrity
              </Text>
              <Text pt={"5px"}>
                Building trust through transparency and ethical practices
              </Text>
            </Box>
          </HStack>
        </Box>
      </HStack>

      <HStack
        zIndex={3}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
        my={["50px", "50px", "50px", "50px", "50px", "50px"]}
      >
        <VStack
          justify={"center"}
          align={["center", "center", "center", "center", "center", "center"]}
          w={"100%"}
          h={"100%"}
          gap={["5px", "5px", "5px", "5px", "5px", "5px"]}
          wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["100%", "100%", "100%", "60%", "50%", "50%"]}>
            <Text
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
              fontWeight={600}
              fontFamily={"Poppins"}
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
            Meet Our Team
            </Text>
          </Box>
          <HStack
            justify={"center"}
            align={"start"}
            w={"100%"}
            transition={"all 0.2s ease-in-out"}
            zIndex={3}
            gap={["25px", "25px", "25px", "25px", "25px", "25px"]}
            wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
            mt={"50px"}
            color={"white"}
            fontFamily={"raleway"}
          >
            <VStack color={"black"} justify={"center"} align={"center"}>
              <Box
                p={4}
                rounded={"full"}
                w={"350px"}
                bg={"#23273F"}
                h={"350px"}
              ></Box>
              <Text fontWeight={"bold"} fontSize={"24px"}>
                Jane Doe
              </Text>
              <Text fontSize={"16px"}>CEO & Co-founder</Text>
            </VStack>

            <VStack color={"black"} justify={"center"} align={"center"}>
              <Box
                p={4}
                rounded={"full"}
                w={"350px"}
                bg={"#23273F"}
                h={"350px"}
              ></Box>
              <Text fontWeight={"bold"} fontSize={"24px"}>
                Jane Doe
              </Text>
              <Text fontSize={"16px"}>CEO & Co-founder</Text>
            </VStack>
            <VStack color={"black"} justify={"center"} align={"center"}>
              <Box
                p={4}
                rounded={"full"}
                w={"350px"}
                bg={"#23273F"}
                h={"350px"}
              ></Box>
              <Text fontWeight={"bold"} fontSize={"24px"}>
                Jane Doe
              </Text>
              <Text fontSize={"16px"}>CEO & Co-founder</Text>
            </VStack>
          </HStack>
        </VStack>
      </HStack>
     <HStack justify={"center"} align={"center"} w={"100%"}>
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>
      <ScheduleConsultation />
    </>
  );
};

export default About;
