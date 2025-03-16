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
} from "@chakra-ui/react";
import { signOutUser } from "@/lib/actions/user.actions";
import { useUser } from "@/context/UserContext";
import Image from "next/image";

import { FlipWords } from "@/components/ui/flip-words";
import { ArrowRight } from "lucide-react";
import HouseHeroParallax from "./customUI/Parallax/HouseHeroParallax";
import {} from "@chakra-ui/react";
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

  return (
    <>
      <Stack
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
          onClick={() => setIsDialogOpen(true)}
        >
          Get Started
          <Icon as={ArrowRight}> </Icon>
        </Box>
      </HStack>

      <Box mt={"-500px"}>
        <HouseHeroParallax />
      </Box>

      {/* Add New Pack Button */}

      {/* New Dialog Component */}
      <DialogRoot
        size={"xl"}
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

      g
    </>
  );
};

export default Hero;
