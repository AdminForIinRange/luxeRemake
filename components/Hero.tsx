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
import { useUser } from "@/context/UserContext";
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
const Hero = () => {
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

  const words = [
    "Stress-Free",
    "Effortless",
    "Simple",
    "Efficient",
    "Professional",
    "Effective",
  ];
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





    
      <Stack  overflow={"hidden"}
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
          base: "34px",
          sm: "40px",
          md: "50px",
          lg: "76px",
          xl: "96px",
        }}
        fontWeight={{ base: "400", sm: "400", md: "400", lg: "400", xl: "400" }}
        fontFamily={"raleway"}
      >
        <Box color={"#222222"} fontWeight={"600"} width={"70%"}>
          Luxe Managements <br />
          <Box fontWeight={"400"}  >
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

      <Box overflowX={"hidden"} >
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
            src="https://calendly.com/bhattaraianjesh123"
          ></iframe>

          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>




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
    <Box w={["95%", "95%", "70%", "60%", "50%", "50%"]}>
    

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
          <VStack key={id} w={"100%"} align={"center"} justify={"start"} >
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
                    h={"70px"}
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
          p={"50px"}
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
            fontSize={"52px"}
            fontFamily={"raleway"}
            mb={"10px"}
          >
            Ready to transfrom your property management?
          </Text>
          <Text color={"white"} fontSize={"24px"} fontFamily={"raleway"}>
            Get a full consulation, market analysis in under 24 hours for free
          </Text>

          <HStack
            justify={"center"}
            align={"center"}
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
                bg: "white",
              }}
              p={4}
              bg={"White"}
              color={"black"}
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
      </HStack>








    





    </>
  );
};

export default Hero;
