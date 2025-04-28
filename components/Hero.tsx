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

} from "@chakra-ui/react";

import { FlipWords } from "@/components/ui/flip-words";
import { ArrowRight } from "lucide-react";

import { DialogContent, DialogRoot } from "@/components/chakra-snippets/dialog";

import Aos from "aos";
import "aos/dist/aos.css";


const HouseHeroParallax = dynamic(
  () => import("./customUI/Parallax/HouseHeroParallax"),
  { ssr: false },
);

const Hero = () => {

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
            fontSize={["30px", "30px", "30px", "50px", "50px", "50px"]}
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
    </>
  );
};

export default Hero;
