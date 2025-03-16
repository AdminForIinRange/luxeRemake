"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useListingCreationContext } from "@/context/ListingCreationContext";
import {
  Box,
  Flex,
  Button,
  Heading,
  Text,
  Card,
  IconButton,
  VStack,
  HStack,
  Tabs,
} from "@chakra-ui/react";
import {
  Star,
  Users,
  Bed,
  Bath,
  Share,
  Heart,
  Home,
  StarIcon,
  Award,
  TrendingUp,
  MessageCircle,
  Package,
  Plus,
  Minus,
  DoorOpen,
  CigaretteOff,
  Music,
  Clock,
  PawPrint,
  Moon,
  Share2,
} from "lucide-react";
import { Rating } from "@/components/chakra-snippets/rating";
import { ChatBubbleIcon, Share1Icon } from "@radix-ui/react-icons";
import AboutSummary from "./summaryComponents/summaryTabs/AboutSummary";
import PaymentCard from "./summaryComponents/PaymentCard";
import LoactionSummary from "./summaryComponents/summaryTabs/LocationSummary";
import AmenitiesSummary from "./summaryComponents/summaryTabs/AmenitiesSummary";
import ReviewsSummary from "./summaryComponents/summaryTabs/ReviewsSummary";
import Pricing from "./summaryComponents/summaryTabs/Pricing";

const Summary = () => {
  const {
    season,
    setSeason,
    progress,
    setProgress,
    selectedProperty,
    setSelectedProperty,
    title,
    setTitle,
    description,
    setDescription,
    address,
    setAddress,
    mapUrl,
    setMapUrl,
    addedRooms,
    setAddedRooms,
    addRoomProgress,
    setAddRoomProgress,
    uploadedFiles,
    setUploadedFiles,
    imageDetails,
    setImageDetails,
    basePrice,
    setBasePrice,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    weekendAdjustment,
    setWeekendAdjustment,
    seasonalAdjustment,
    setSeasonalAdjustment,
    packageDiscounts,
    setPackageDiscounts,
    rules,
    setRules,
    recommendations,
    setRecommendations,
    packs,
    setPacks,
    selectedAmenities,
    setSelectedAmenities,
    customAmenity,
    setCustomAmenity,
    selectedTab,
    setSelectedTab,
    prices,
    setPrices,
    selectedDates,
    setSelectedDates,
    loadingInsights,
    setLoadingInsights,
    insights,
    setInsights,
    editDialogOpen,
    setEditDialogOpen,
    editRate,
    setEditRate,
  } = useListingCreationContext();
  const [value, setValue] = useState<string | null>("About");

  const [heartColor, setHeartColor] = useState<boolean>(false);
  return (
    <Box 
      rounded={"lg"}
      p={0}
      mb={8}
      className="animate__animated animate__fadeIn"
      textAlign={{ base: "center", lg: "start" }}
    >
      <Text fontSize={["24px", "30px", "36px"]} fontWeight="bold" mb="8px">
        Summary
      </Text>
      <Text fontSize={["16px", "20px"]} color="gray.600">
        Here&apos;s a summary of your listing.
      </Text>

      <Box mt={"50px"}>
        <Text fontSize={["24px", "30px", "36px"]} fontWeight="bold" mb="8px">
          {title}
        </Text>

        <HStack w={"100%"} justify={"space-between"} >
          <HStack
            w={"100%"}
            width={"fit-content"}
            //   border={"1px solid lightgray"}
            //  px={3}
            //   p={2}
            rounded={"full"}
          >
            <Rating
              defaultValue={3.5}
              allowHalf
              colorPalette="yellow"
              readOnly
              size="md"
            />
            <Text fontSize={["16px", "18px"]} color="gray.600">
              {" "}
              4.9 186 reviews
            </Text>

            <Box
              rounded={"full"}
              width={"fit-content"}
              // border={"1px solid lightgray"}
              // px={3}
              // p={2}
              fontSize={["16px", "18px"]}
              color="gray.600"
            >
              {address}
            </Box>
          </HStack>
        </HStack>

        <Flex  gap={2} w={"100%"} h={"500px"} mb={8} mt={8} flexWrap={{
          base: "wrap",
          md: "nowrap",
        }}>
          {/* {uploadedFiles.length > 0 ? ( */}

          <Box
            backgroundImage={
              imageDetails[0]
                ? `url(${URL.createObjectURL(imageDetails[0].file)})`
                : undefined
            }
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            transition={"all 0.3s"}
            w={"100%"}
            h={"100%"}
            borderRadius={"16px"}
            _hover={{
              scale: 1.01,
            }}
            cursor={"pointer"}
          >
            <Box p={2}>
              <Box
                width={"fit-content"}
                border={"1px solid lightgray"}
                bg={"gray.50"}
                p={2}
                px={3}
                rounded={"full"}
              >
                {imageDetails[0]?.tag || "Other"}
              </Box>
            </Box>
          </Box>

          <Box
            w={"100%"}
            h={"100%"}
            borderRadius={"16px"}
            display={"flex"}
            justifyContent={"start"}
          >
            <VStack
              w={"100%"}
              h={"100%"}
              borderRadius={"16px"}
              display={"flex"}
              justifyContent={"start"}
            >
              <Box w={"100%"} h={"100%"} borderRadius={"16px"}>
                <HStack w={"100%"} h={"100%"} borderRadius={"16px"}>
                  <Box
                    backgroundImage={
                      imageDetails[1]
                        ? `url(${URL.createObjectURL(imageDetails[1].file)})`
                        : undefined
                    }
                    backgroundSize="cover"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    transition={"all 0.3s"}
                    cursor={"pointer"}
                    w={"100%"}
                    h={"100%"}
                    borderRadius={"16px"}
                    // bg={"gray.400"}

                    _hover={{
                      scale: 1.025,
                    }}
                  >
                    {" "}
                    <Box p={2}>
                      <Box 
                        width={"fit-content"}
                        border={"1px solid lightgray"}
                        bg={"gray.50"}
                        p={2}
                        px={3}
                        rounded={"full"}
                      >
                        {imageDetails[1]?.tag || "Other"}
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    backgroundImage={
                      imageDetails[2]
                        ? `url(${URL.createObjectURL(imageDetails[2].file)})`
                        : undefined
                    }
                    backgroundSize="cover"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    transition={"all 0.3s"}
                    cursor={"pointer"}
                    w={"100%"}
                    h={"100%"}
                    borderRadius={"16px"}
                    // bg={"gray.400"}
                    _hover={{
                      scale: 1.025,
                    }}
                  >
                    {" "}
                    <Box p={2}>
                      <Box
                        width={"fit-content"}
                        border={"1px solid lightgray"}
                        bg={"gray.50"}
                        p={2}
                        px={3}
                        rounded={"full"}
                      >
                        {imageDetails[2]?.tag || "Other"}
                      </Box>
                    </Box>
                  </Box>
                </HStack>
              </Box>
              <Box w={"100%"} h={"100%"} borderRadius={"16px"}>
                <HStack w={"100%"} h={"100%"} borderRadius={"16px"}>
                  <Box
                    backgroundImage={
                      imageDetails[3]
                        ? `url(${URL.createObjectURL(imageDetails[3].file)})`
                        : undefined
                    }
                    backgroundSize="cover"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    transition={"all 0.3s"}
                    cursor={"pointer"}
                    w={"100%"}
                    h={"100%"}
                    borderRadius={"16px"}
                    // bg={"gray.400"}
                    _hover={{
                      scale: 1.025,
                    }}
                  >
                    {" "}
                    <Box p={2}>
                      <Box
                        width={"fit-content"}
                        border={"1px solid lightgray"}
                        bg={"gray.50"}
                        p={2}
                        px={3}
                        rounded={"full"}
                      >
                        {imageDetails[3]?.tag || "Other"}
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    backgroundImage={
                      imageDetails[4]
                        ? `url(${URL.createObjectURL(imageDetails[4].file)})`
                        : undefined
                    }
                    backgroundSize="cover"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    transition={"all 0.3s"}
                    cursor={"pointer"}
                    w={"100%"}
                    h={"100%"}
                    borderRadius={"16px"}
                    // bg={"gray.400"}
                    _hover={{
                      scale: 1.025,
                    }}
                  >
                    {" "}
                    <Box p={2}>
                      <Box
                        width={"fit-content"}
                        border={"1px solid lightgray"}
                        bg={"gray.50"}
                        p={2}
                        px={3}
                        rounded={"full"}
                      >
                        {imageDetails[4]?.tag || "Other"}
                      </Box>
                    </Box>
                  </Box>
                </HStack>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Box>
      {/* Image Gallery */}

      {/* Main Content */}
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={8}
        align={"start"}
        justify={"start"}
        mt={{
          base: "550px",
          sm: "550px",
          md: "50px",
          lg: "50px",
          xl: "50px",
        }}
    
      >
        {/* Left Column */}
        <Box flex={2} mb={8} w={"100%"} >
          <Tabs.Root
        
            variant={"plain"}
            value={value}
            onValueChange={(details) => setValue(details.value)}
            defaultValue="calendar"
            borderRadius="lg"
            
          >
            <Tabs.List
              display="flex"
              justifyContent="center"
              alignItems={"center"}
             
              gap="20px"
              bg={"gray.200"}
              p={2}
              borderRadius={"16px"}
            >
              <Tabs.Trigger
                textAlign={"center"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                w={"100%"}
                value="About"
                px="4"
                py="2"
                borderRadius="md"
                fontWeight="medium"
                color={"gray.600"}
                _selected={{
                  bg: "white",
                  color: "black",
                }}
              >
                About
              </Tabs.Trigger>
              <Tabs.Trigger
                textAlign={"center"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                w={"100%"}
                value="Amenities"
                px="4"
                py="2"
                borderRadius="md"
                fontWeight="medium"
                color={"gray.600"}
                _selected={{
                  bg: "white",
                  color: "black",
                }}
              >
                Rooms
              </Tabs.Trigger>

          
              <Tabs.Trigger
                textAlign={"center"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                w={"100%"}
                value="Pricing"
                px="4"
                py="2"
                borderRadius="md"
                fontWeight="medium"
                color={"gray.600"}
                _selected={{
                  bg: "white",
                  color: "black",
                }}
              >
                Pricing
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content mt={"16px"} value="About" className="mt-4">
              <AboutSummary />
            </Tabs.Content>
            {/* <Tabs.Indicator /> */}


            <Tabs.Content mt={"16px"} value="Amenities" className="mt-4">
              <AmenitiesSummary />
            </Tabs.Content>

            <Tabs.Content mt={"16px"} value="Reviews" className="mt-4">
              <ReviewsSummary />
            </Tabs.Content>

            <Tabs.Content mt={"16px"} value="Pricing" className="mt-4">
              <Pricing />
            </Tabs.Content>
          </Tabs.Root>
        </Box>

        {/* Right Column: Pricing / Reserve */}
      </Flex>
    </Box>
  );
};

export default Summary;
