"use client";

import React, { useEffect, useState } from "react";
import { Box, Stack, Text, Flex, Group, HStack } from "@chakra-ui/react";
import { signOutUser } from "@/lib/actions/user.actions";
import { useUser } from "@/context/UserContext";
import Image from "next/image";
import luxeLogo from "../../public/png/LuxeLogo.png";
import { FlipWords } from "@/components/ui/flip-words";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
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
          <Flex
            direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
            w={"100%"}
            h={"100%"}
            justifyContent={"center"}
            align={"center"}
            gap={{
              base: "25px",
              sm: "25px",
              md: "25px",
              lg: "200px",
              xl: "500px",
            }}
          >
            <HStack fontSize={"30px"}>
              <Box
                w={"70px"}
                h={"100%"}
                cursor={"pointer"}
                _hover={{
                  scale: 1.1,
                  fontWeight: "700",
                }}
                transition={"all 0.2s ease-in-out"}
                onClick={() => router.push("/")}
              >
                <Image src={luxeLogo} alt="logo" />
              </Box>
              <Text
                fontFamily={"raleway"}
                fontWeight={"700"}
                onClick={() => router.push("/")}
              >
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
                onClick={() => router.push("/Home")}
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
                onClick={() => router.push("/About")}
              >
                {" "}
                About
              </Box>
              <Box
                cursor={"pointer"}
                _hover={{
                  scale: 1.1,
                  fontWeight: "700",
                }}
                transition={"all 0.2s ease-in-out"}
                onClick={() => router.push("/services")}
              >
                Services
              </Box>
              <Box
                cursor={"pointer"}
                _hover={{
                  scale: 1.1,
                  fontWeight: "700",
                }}
                transition={"all 0.2s ease-in-out"}
                onClick={() => router.push("/Pricing")}
              >
                Pricing
              </Box>
              <Box
                cursor={"pointer"}
                _hover={{
                  scale: 1.1,
                  fontWeight: "700",
                }}
                transition={"all 0.2s ease-in-out"}
                onClick={() => router.push("/Contact")}
              >
                Contact
              </Box>
            </HStack>
          </Flex>
        </HStack>
      </Box>
    </>
  );
};

export default Navbar;
