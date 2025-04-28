"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  HStack,
  Icon,
  DialogCloseTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";

import { FlipWords } from "@/components/ui/flip-words";
import { ArrowRight } from "lucide-react";

import { DialogContent, DialogRoot } from "@/components/chakra-snippets/dialog";

import Aos from "aos";
import "aos/dist/aos.css";


import { useRouter } from "next/navigation";

import HeroServices from "./luxeComponents/heroServices";
import TitleSubheading from "./luxeComponents/Text/titleSubheading";

const ThumnailSlider = dynamic(() => import("./carousel/ThumnailSlider"), { ssr: false });
const HouseHeroParallax = dynamic(() => import("./customUI/Parallax/HouseHeroParallax"), { ssr: false });

const Hero = () => {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  useEffect(() => {
    Aos.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const words = [
    "Effortless ",
    "Stress-free",
    "Efficient",
    "Simple",
    "Effective",
    "Easy",
  ];
  // redce font size for moible
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
        mt={{ base: "25px", sm: "25px", md: "25px", lg: "100px", xl: "100px" }}
        mb={{ base: "25px", sm: "25px", md: "25px", lg: "25px", xl: "25px" }}
        textAlign={"center"}
        width={"100%"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={{
          base: "40px",
          sm: "40px",
          md: "50px",
          lg: "76px",
          xl: "96px",
        }}
        fontWeight={{ base: "400", sm: "400", md: "400", lg: "400", xl: "400" }}
        fontFamily={"raleway"}
      >
        <Box color={"#222222"} fontWeight={"600"} width={"90%"}>
          Luxe Managements <br />
          <Box fontWeight={"400"}>
            Made <FlipWords words={words} />
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
  display="flex"
  alignItems="center"
  justifyContent="center"
  gap="15px"
  fontFamily="raleway"
  cursor="pointer"
  _hover={{
    scale: 1.1,
    fontWeight: "700",
    px: "80px",
    bg: "#0A0F29",
  }}
  p={4}
  bg="#0A0F29"
  color="white"
  rounded="30px"
  px="8"
  fontWeight="500"
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
            fontSize={["35px", "35px", "35px", "50px", "50px", "50px"]}
            fontWeight={700}
            fontFamily={"Raleway"}
            bgClip="text"
            textAlign={["center", "center", "left", "left", "left", "left"]}
            color={"black"}
            bgGradient="linear(to-r, teal, blue)"
          >
            The Future of Real Estate
          </Text>
          <Text
            fontSize={["18px", "18px", "24px", "24px", "24px", "24px"]}
            mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
            textAlign={["center", "center", "left", "left", "left", "left"]}
            fontFamily={"Raleway"}
            color={"black"}
            w={["100%", "100%", "80%", "80%", "80%", "80%"]} // !important
            fontWeight={300}
          >
            We're transforming the way people interact with real estate. Check
            out some of our stuff.
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
           loading="lazy"
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
        my={["155px", "155px", "155px", "155px", "155px", "155px"]}
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
              data-aos="fade-up"
              w={["100%", "100%", "80%", "80%", "80%", "80%"]}
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              fontSize={["35px", "35px", "35px", "50px", "50px", "50px"]}
              fontWeight={700}
              fontFamily={"Raleway"}
              bgClip="text"
              textAlign={["center", "center", "left", "left", "left", "left"]}
              color={"black"}
              bgGradient="linear(to-r, teal, blue)"
            >
              How We Can Get You Get Started
            </Text>
            <Text
              fontSize={["18px", "18px", "18px", "18px", "18px", "18px"]}
              mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
              textAlign={["center", "center", "left", "left", "left", "left"]}
              fontFamily={"Raleway"}
              color={"black"}
              w={["100%", "100%", "80%", "80%", "80%", "80%"]} // !important
              fontWeight={300}
            >
              Learn how we can help you get started with personalized guidance
              and expert support every step of the way.
            </Text>
            <HStack
              data-aos="fade-up"
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
                Get in Touch
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
                <VStack         data-aos="fade-up" key={id} w={"100%"} align={"center"} justify={"start"}>
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
                          "14px",
                          "14px",
                          "16px",
                          "16px",
                          "18px",
                          "18px",
                        ]}
                        fontWeight={500}
                        textAlign={"left"}
                        fontFamily={"Raleway"}
                        color={"black"}
                        w={"100%"} // !important
                      >
                        {title}
                      </Text>
                      <Text
                        fontSize={[
                          "13px",
                          "13px",
                          "15px",
                          "15px",
                          "17px",
                          "17px",
                        ]}
                        textAlign={"left"}
                        fontFamily={"Raleway"}
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
      <TitleSubheading
        title={"Our Services"}
        subheading={
          "We offer a full suite of services to help you manage your property with ease."
        }
      />

      <HeroServices />
      {/* GALLERY SECTION */}

      <HStack
        mt={["50px", "50px", "50px", "50px", "50px", "50px"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
      >
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>

      <HStack
        id="gallery-section"
        w="100%"
        justify="center"
        align="center"
        mt="100px" // Adjust spacing as desired
      >
        <Box
          w="90%"
          bg="white"
          borderRadius="md"
          p={["20px", "30px"]}
          textAlign="center"
        >
          {/* Title & Subtitle */}
          <Text
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="bold"
            fontFamily="Raleway"
            mb="10px"
          >
            Check Out Our Gallery
          </Text>
          <Text fontSize={["md", "lg"]} color="gray.600" fontFamily="Raleway">
            A glimpse into some of our most stunning properties and interiors.
          </Text>
          <HStack
            data-aos="fade-up"
            justify={[
              "center",
              "center",
              "center",
              "center",
              "center",
              "center",
            ]}
            align={"start"}
            w={"100%"}
            transition={"all 0.2s ease-in-out"}
            zIndex={3}
          >
            <Box
              my={"40px"}
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
              onClick={() => router.push("/gallery")}
            >
              Go to Gallery
              {/* <Icon as={ArrowRight}> </Icon> */}
            </Box>
          </HStack>
          {/* Images Container */}

          <HStack
            gap={["10px", "20px", "40px"]}
            justify="center"
            align="center"
            flexWrap="wrap"
          >
            {/* Image 1: Rotated 45° */}
            <ThumnailSlider />
          </HStack>
        </Box>
      </HStack>
    </>
  );
};

export default Hero;
