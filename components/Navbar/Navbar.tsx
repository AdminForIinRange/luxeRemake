"use client";

import React, { useEffect, useState } from "react";
import { Box, Stack, Text, Flex, Group, HStack } from "@chakra-ui/react";
import { signOutUser } from "@/lib/actions/user.actions";
import { useUser } from "@/context/UserContext";
import Image from "next/image";
import luxeLogo from "../../public/png/LuxeLogo.png";
import { FlipWords } from "@/components/ui/flip-words";

const Navbar = () => {
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
      <Box w={"100%"} p={4} fontFamily={"raleway"}>
        <HStack borderBottom={"1px solid #e0e0e0"} pb={"4"}>
          <HStack
            w={"100%"}
            h={"100%"}
            justifyContent={"center"}
            align={"center"}
            gap={"500px"}
          >
            <HStack fontSize={"30px"} gap={"10px"}>
              <Box
                w={"70px"}
                h={"100%"}
                cursor={"pointer"}
                _hover={{
                  scale: 1.1,
                  fontWeight: "700",
                }}
                transition={"all 0.2s ease-in-out"}
              >
                <Image src={luxeLogo} alt="logo" />
              </Box>
              <Text fontFamily={"raleway"} fontWeight={"700"}>
                Luxe Management
              </Text>
            </HStack>
            <HStack
              fontSize={"16px"}
              gap={"36px"}
              fontWeight={"500"}
              transition={"all 0.2s ease-in-out"}
            >
              <Box
                cursor={"pointer"}
                _hover={{
                  scale: 1.1,
                  fontWeight: "700",
                }}
                transition={"all 0.2s ease-in-out"}
              >
                Home
              </Box>
              <Box
                cursor={"pointer"}
                _hover={{
                  scale: 1.1,
                  fontWeight: "700",
                }}
                transition={"all 0.2s ease-in-out"}
              >
                {" "}
                Search
              </Box>
              <Box
                cursor={"pointer"}
                _hover={{
                  scale: 1.1,
                  fontWeight: "700",
                }}
                transition={"all 0.2s ease-in-out"}
              >
                Profile
              </Box>
              <Box
                cursor={"pointer"}
                _hover={{
                  scale: 1.1,
                  fontWeight: "700",
                }}
                transition={"all 0.2s ease-in-out"}
              >
                Sign Out
              </Box>
            </HStack>
          </HStack>
        </HStack>
      </Box>


      <Stack
        mt={"200px"}
        mb={{
          xs: "500px",
          sm: "500px",
          md: "500px",
          lg: "500px",
          xl: "100px",
        }}
        textAlign={"center"}
        width={"100%"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={{
          xs: "34px",
          sm: "40px",
          md: "40px",
          lg: "76px",
          xl: "96px",
        }}
        fontWeight={{ xs: "400", sm: "400", md: "400", lg: "400", xl: "400" }}
      >
        <Box color={"#222222"} fontWeight={"600"} width={"70%"}>
          Luxe Managements <br />
          <Box fontWeight={"400"}>
            Be <FlipWords words={words} />
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Navbar;
