"use client";

import React, { useEffect, useState } from "react";
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
import { signOutUser } from "@/lib/actions/user.actions";
// import { useUser } from "@/context/UserContext";
import Image from "next/image";

import { FlipWords } from "@/components/ui/flip-words";
import { ArrowRight } from "lucide-react";
import HouseHeroParallax from "./customUI/Parallax/HouseHeroParallax";
// import {} from "@chakra-ui/react";
import {
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/chakra-snippets/dialog";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import SmoothScroll from "./customUI/SmoothScroll/SmoothScroll";
import { useRouter } from "next/navigation";
import ScheduleConsultation from "./luxeComponents/scheduleConsultation";
const Hero = () => {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const { user } = useUser();

  // const [loading, setLoading] = useState(true);

  // const handleSignOut = async () => {
  //   try {
  //     await signOutUser();
  //   } catch (error) {
  //     console.error("Error signing out:", error);
  //   }
  // };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const words = ["Calm", "Easy", "Simple", "Fast", "Pro", "Sharp"];
  const GettingStartedSteps = [
    {
      id: 1,
      title: "Get Started",
      description:
        'Click "Get In Touch" with our team to discuss your property.',
    },
    {
      id: 2,
      title: "Meet Your Local Hosting Partner",
      description:
        "Meet at your property for an inspection. We'll gather details and start our partnership.",
    },
    {
      id: 3,
      title: "Onboarding and Listing Creation",
      description:
        "We handle photos and listing creation. Your property will shine on Airbnb and Booking.com.",
    },
    {
      id: 4,
      title: "Enjoy Hassle-Free Management",
      description:
        "Relax while we manage everything. Bookings, pricing, guest management, and cleaning are all covered.",
    },
  ];
  return (
    <>
      <Stack
        overflow={"hidden"}
        mt={{
          base: "25px",
          sm: "25px",
          md: "25px",
          lg: "100px",
          xl: "100px",
        }}
        mb={{
          base: "25px",
          sm: "25px",
          md: "25px",
          lg: "25px",
          xl: "25px",
        }}
        textAlign={"center"}
        width={"100%"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={{
          base: "50px",
          sm: "50px",
          md: "60px",
          lg: "76px",
          xl: "96px",
        }}
        fontWeight={{ base: "400", sm: "400", md: "400", lg: "400", xl: "400" }}
        fontFamily={"raleway"}
      >
        <Box color={"#222222"} fontWeight={"600"} width={"90%"}>
          Luxe Managements <br />
          <Box fontWeight={"400"}>
            Be <FlipWords words={words} />
          </Box>
        </Box>
      </Stack>

      <HStack
        justify={"center"}
        align={"center"}
        w={"100%"}
        transition={"all 0.2s ease-in-out"}
        zIndex={3}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"15px"}
          fontFamily={"raleway"}
          transition={"all 0.2s ease-in-out"}
          cursor={"pointer"}
          _hover={{
            transition: "all 0.2s ease-in-out",
            scale: 1.1,
            fontWeight: "700",
            px: "80px",
            bg: "#0A0F29",
          }}
          p={4}
          bg={"#0A0F29"}
          color={"white"}
          rounded={"30px"}
          px={"8"}
          fontWeight={"500"}
          onClick={() => {
            const element = document.getElementById("get-started-button");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Get Started
          <Icon as={ArrowRight}> </Icon>
        </Box>
      </HStack>

      <Box overflowX={"hidden"} mt={"350px"}>
        <Box
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
          pb={"50px"}
          data-aos="fade-up"
        >
          <Text
            w={["100%", "100%", "80%", "80%", "80%", "80%"]}
            mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
            fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
            fontWeight={700}
            fontFamily={"Poppins"}
            bgClip="text"
            textAlign={["center", "center", "left", "left", "left", "left"]}
            color={"black"}
            bgGradient="linear(to-r, teal, blue)"
          >
            The Future of Real Estate
          </Text>
          <Text
            fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
            mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
            textAlign={["center", "center", "left", "left", "left", "left"]}
            fontFamily={"Poppins"}
            color={"black"}
            w={["100%", "100%", "80%", "80%", "80%", "80%"]} // !important
            fontWeight={300}
          >
            We're transforming the way people interact with real estate. With
            our innovative platform,
          </Text>
        </Box>

        <HouseHeroParallax />
      </Box>

      {/* Add New Pack Button */}

      {/* New Dialog Component */}
      <DialogRoot
        size={"cover"}
        open={isDialogOpen}
        onOpenChange={(details) => setIsDialogOpen(details.open)}
      >
        <DialogContent
          p={0}
          bg={"white"}
          color={"white"}
          rounded={"10px"}
          borderRadius={"10px"}
        >
          <iframe
            style={{
              width: "100%",
              height: "800px",
              border: "none",
              borderRadius: "10px",
            }}
            src="https://calendly.com/luxemanagements-info"
          ></iframe>

          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>

      <HStack justify={"center"} align={"center"} w={"100%"}>
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>

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
          justify={["center", "center", "center", "center", "center", "center"]}
          align={["center", "center", "start", "start", "start", "start"]}
          w={"100%"}
          h={"100%"}
          gap={["5px", "5px", "5px", "5px", "5px", "5px"]}
          wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["100%", "100%", "100%", "60%", "50%", "50%"]}>
            <Text
              w={["100%", "100%", "80%", "80%", "80%", "80%"]}
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
              fontWeight={700}
              fontFamily={"Poppins"}
              bgClip="text"
              textAlign={["center", "center", "left", "left", "left", "left"]}
              color={"black"}
              bgGradient="linear(to-r, teal, blue)"
            >
              How We Can Get You Get Started
            </Text>
            <Text
              fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
              mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
              textAlign={["center", "center", "left", "left", "left", "left"]}
              fontFamily={"Poppins"}
              color={"black"}
              w={["100%", "100%", "80%", "80%", "80%", "80%"]} // !important
              fontWeight={300}
            >
              Learn how we can help you get started with personalized guidance
              and expert support every step of the way.
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
                mt={"50px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
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
                onClick={() => setIsDialogOpen(true)}
              >
                Schedule a consultation
                {/* <Icon as={ArrowRight}> </Icon> */}
              </Box>
            </HStack>
          </Box>

          <Box
            mt={["50px", "50px", "50px", "50px", "50px", "50px"]}
            display={["block", "block", "block", "block", "block", "block"]}
            // border={"1px solid rgb(0, 0, 0,0.25)"}
            h={["500px", "500px", "500px", "500px", "500px", "500px"]}
            w={["100%", "100%", "100%", "450px", "550px", "550px"]}
            backdropFilter="blur(1.5px)"
            borderRadius={"30px"}
            bgPos={"center"}
            bgSize={"cover"}
          >
            {" "}
            {GettingStartedSteps.slice(0, 4).map(
              ({ id, title, description }, index) => (
                <VStack key={id} w={"100%"} align={"center"} justify={"start"}>
                  <HStack
                    w={"100%"}
                    h={"100%"}
                    justify={"start"}
                    align={"start"}
                    gap={2}
                  >
                    <VStack justify={"center"} gap={0}>
                      <Box
                        w={"50px"}
                        h={"50px"}
                        borderRadius={"15px"}
                        bg={"white"}
                        border={"1px solid rgb(0, 0,0,0.25)"}
                      >
                        <HStack
                          w={"100%"}
                          justify={"center"}
                          h={"100%"}
                          align={"center"}
                        >
                          <Text
                            fontSize={[
                              "14px",
                              "18px",
                              "16px",
                              "16px",
                              "18px",
                              "18px",
                            ]}
                            fontWeight={500}
                            fontFamily={"Poppins"}
                            color={"black"}
                          >
                            {id}
                          </Text>
                        </HStack>
                      </Box>
                      {index < 3 && (
                        <Box
                          transition={"transform 0.3s ease"}
                          zIndex={-1}
                          w={"5px"}
                          h={"100px"}
                          bg={"#BFBFBF"}
                        ></Box>
                      )}
                    </VStack>

                    <Box>
                      <Text
                        fontSize={[
                          "12px",
                          "16px",
                          "14px",
                          "14px",
                          "16px",
                          "16px",
                        ]}
                        fontWeight={500}
                        textAlign={"left"}
                        fontFamily={"Poppins"}
                        color={"black"}
                        w={"100%"} // !important
                      >
                        {title}
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
                        textAlign={"left"}
                        fontFamily={"Poppins"}
                        color={"black"}
                        w={"100%"}
                        fontWeight={300}
                      >
                        {description}
                      </Text>
                    </Box>
                  </HStack>
                </VStack>
              ),
            )}
            {/* <Image src={collage} />   //!cool */}
          </Box>
        </HStack>
      </HStack>

      <HStack
        mt={["50px", "50px", "50px", "50px", "50px", "50px"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
      >
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>
      <VStack
        mt={["50px", "50px", "50px", "50px", "50px", "100px"]}
        w={["100%", "100%", "100%", "100%", "100%", "100"]}
        textAlign={["center", "center", "center", "center", "center", "center"]}
        color={"black"}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
      >
        <Text
          fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
          fontWeight={700}
          fontFamily={"Poppins"}
          bgClip="text"
          color={"black"}
          bgGradient="linear(to-r, teal, blue)"
        >
          Our Services
        </Text>
        <Text
          fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
          // mt={["20px", "20px", "20px", "20px", "20px", "20px"]}

          fontFamily={"Poppins"}
          color={"black"}
          fontWeight={300}
        >
          We offer a full suite of services to help you manage your property
          with ease.
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
          <Box w={["95%", "95%", "95%", "60%", "50%", "50%"]}>
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
              Maximize Your Rental Income
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
              Optimize your income and ease your mind with our experienced
              Airbnb Management team. Learn More
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
                onClick={() => router.push("/services")}
              >
                Learn More
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
            <Box
              fontFamily={"raleway"}
              zIndex={1}
              position="absolute"
              bottom={["20px", "20px", "20px", "80px", "10px", "80px"]}
              right={["20px", "20px", "20px", "190px", "280px", "300px"]}
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
          </Box>
        </HStack>
      </HStack>

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
              Professional Property Management
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
              Experience stress-free property management with our dedicated team
              of professionals.
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
                onClick={() => router.push("/services")}
              >
                Learn More
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
            <Box
              zIndex={1}
              position="absolute"
              bottom={["20px", "20px", "20px", "80px", "10px", "80px"]}
              right={["20px", "20px", "20px", "190px", "280px", "300px"]}
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
              fontFamily={"raleway"}
            >
              <HStack>
                <Text
                  fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
                  fontWeight={"700"}
                  color={"black"}
                >
                  24/7
                </Text>
                <Text
                  fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
                >
                  {" "}
                  Support & Monitoring
                </Text>
              </HStack>
            </Box>
          </Box>
        </HStack>
      </HStack>

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
              Comprehensive Guest Services
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
              From seamless check-ins to personalized experiences, we ensure
              guest satisfaction at every step.
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
                onClick={() => router.push("/services")}
              >
                Learn More
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
            <Box
              zIndex={1}
              position="absolute"
              bottom={["20px", "20px", "20px", "80px", "10px", "80px"]}
              right={["20px", "20px", "20px", "190px", "280px", "300px"]}
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
              fontFamily={"raleway"}
            >
              <HStack>
                <Text
                  fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
                  fontWeight={"700"}
                  color={"black"}
                >
                  98%
                </Text>
                <Text
                  fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
                >
                  {" "}
                  Guest Satisfaction Rate
                </Text>
              </HStack>
            </Box>
          </Box>
        </HStack>
      </HStack>
          
      <ScheduleConsultation />
      <HStack justify={"center"} align={"center"} w={"100%"}>
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>
    </>
  );
};

export default Hero;
