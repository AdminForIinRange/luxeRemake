"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  IconButton,
  VStack,
  HStack,
  Tabs,
  Icon,
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogFooter,
  Input,
} from "@chakra-ui/react";
import {
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@/components/chakra-snippets/dialog";

import React, { useState, useEffect } from "react";

import TempLogo from "../../public/svg/TempLogo.svg";
import Image from "next/image";
import WaitingListAuth from "../waitingListAuth/WaitingListAuth";

// Define a type for the timer state
interface TimerState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Helper function to calculate time left until targetDate
const calculateTimeLeft = (targetDate: Date): TimerState => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  if (difference > 0) {
    days = Math.floor(difference / (1000 * 60 * 60 * 24));
    hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    minutes = Math.floor((difference / (1000 * 60)) % 60);
    seconds = Math.floor((difference / 1000) % 60);
  }
  return { days, hours, minutes, seconds };
};

const WaitingList = () => {
  // Set your target launch date here
  const targetDate = new Date("2025-06-31T23:59:59");
  // Initialize state with a type-safe TimerState object
  const [time, setTime] = useState<TimerState>(calculateTimeLeft(targetDate));

  // Update the timer every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedTime = calculateTimeLeft(targetDate);
      setTime(updatedTime);
      // Stop the timer if countdown is finished
      if (
        updatedTime.days === 0 &&
        updatedTime.hours === 0 &&
        updatedTime.minutes === 0 &&
        updatedTime.seconds === 0
      ) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const { user } = useUser();

  return (
    <Box fontFamily="poppins"  color="#222222">
      <HStack
        justify={"center"}
        align={"center"}
        gap={{
          base: "5px",
          sm: "5px",
          md: "10px",
          lg: "10px",
          xl: "10px",
        }}
        w={"100%"}
        my={"50px"}
      >
        {Object.entries(time).map(([unit, value], index) => (
          <Box
            className={`animate__animated animate__flipInX animate__delay-${index + 1}s`}
            key={unit}
            as="button"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderRadius={{
              base: "15px",
              sm: "15px",
              md: "32px",
              lg: "32px",
              xl: "32px",
            }}
            width={{
              base: "70px",
              sm: "70px",
              md: "155px",
              lg: "155px",
              xl: "155px",
            }}
            height={{
              base: "70px",
              sm: "70px",
              md: "120px",
              lg: "120px",
              xl: "120px",
            }}
            border="1px solid"
            borderColor={"gray.300"}
            bg={"white"}
            transition="all 0.3s ease-in-out"
            fontFamily={"poppins"}
            fontWeight={"normal"}
            fontSize={["12px", "12px", "16px", "16px", "16px", "16px"]}
          >
            {unit.charAt(0).toUpperCase() + unit.slice(1)}
            <Box
              fontSize={["24px", "24px", "35px", "35px", "35px", "35px"]}
              fontWeight={"semibold"}
              className={`animate__animated animate__backInDown animate__delay-${index + 2}s`}
            >
              {value}
            </Box>
          </Box>
        ))}
      </HStack>

      <VStack
        my={"50px"}
        justify={"center"}
        align={"center"}
        px={"10px"}
        py={"15px"}
        transition="transform, 0.3s ease-in-out"
      >
        <VStack
          lineHeight={["45px", "50px", "65px", "75px", "75px", "80px"]}
          letterSpacing={"0px"}
          w={"100%"}
          justify={"center"}
          align={"center"}
          gap={"0px"}
        >
          <Text
            fontSize={["60px", "60px", "155px", "155px", "155px", "155px"]}
            fontWeight={700}
            textAlign={"center"}
            bgClip="text"
            color={"#222222"}
            bgGradient="linear(to-r, green, red)"
            as={"span"}
          >
            <HStack>
              <Box w={["60px", "60px", "155px", "155px", "155px", "155px"]}>
                <Image src={TempLogo} alt="logo" />
              </Box>
              <Box fontFamily={"poppins"} fontWeight={500}>
                CRIB.
              </Box>
            </HStack>
          </Text>
        </VStack>
      </VStack>  <VStack>
        {" "}
        <Box
          onClick={() => setIsDialogOpen(true)}
          as={"button"}
          p={4}
          px={"8"}
          bg={"black"}
          color={"white"}
          rounded={"10px"}
          _hover={{
            bg: "gray.700",
            color: "white",

            transition: "all 0.3s",
          }}
        >
          Join Waiting List
        </Box>
      </VStack>

      <VStack my={"50px"} justify={"center"} align={"center"}>
        {" "}
        <Box
          className="animate__animated animate__flipInX animate__delay-2s"
          border={"1px solid lightgray"}
          bg={"white"}
          p={2}
          px={12}
          rounded={"100px"}
          display={"flex"}
          gap={"2"}
          textAlign={"center"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box bg={"green.500"} w={"8px"} h={"8px"} rounded={"100px"}></Box>
          Total Visits
        </Box>
        <Text
          className="animate__animated animate__flipInX animate__delay-3s"
          fontSize={["30px", "30px", "35px", "35px", "35px", "35px"]}
          fontWeight={"semibold"}
        >
          10,000
        </Text>
      </VStack>

    

      <DialogRoot
        open={isDialogOpen}
        onOpenChange={(details) => setIsDialogOpen(details.open)}
      >
        <DialogContent>
          <WaitingListAuth />

          <DialogFooter
            display={"flex"}
            justifyContent={"center"}
            w={"100%"}
          ></DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </Box>
  );
};

export default WaitingList;
