"use client";

import React, { useState } from "react";

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
  Stack,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
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
  ChevronDown,
  MapPin,
} from "lucide-react";

// A reusable component for a pack card with its own quantity state and functions.
const PackCard = ({ title, description, price }) => {
  const [quantity, setQuantity] = useState(1);

  // Function to increment the pack quantity
  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  // Function to decrement the pack quantity (ensuring at least 1 is selected)
  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <Box
      w={"480px"}
      h={"350px"}
      bg={"white"}
      shadow={"md"}
      borderRadius={"16px"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"start"}
      justifyContent={"start"}
    >
      <Box
        w={"100%"}
        h={"500px"}
        bg={"gray.100"}
        borderRadius={"16px"}
        borderBottomRadius={"0px"}
      ></Box>

      <Box p={4} w={"100%"} h={"100%"}>
        <HStack align={"center"} gap={2}>
          <Package />
          <Text fontWeight={"semibold"} fontSize={"18px"}>
            {title}
          </Text>
        </HStack>
        <Box mt={2}>
          <Text fontSize={"16px"} color={"gray.600"}>
            {description}
          </Text>
        </Box>
      </Box>

      <HStack
        p={4}
        w={"100%"}
        gap={2}
        mt={8}
        align={"center"}
        justify={"space-between"}
      >
        <Text fontWeight={"semibold"} fontSize={"32px"}>
          ${price}
        </Text>
        <HStack>
          <Box
            as={"button"}
            p={1}
            border={"1px solid lightgray"}
            rounded={"6px"}
            onClick={increment}
          >
            <Plus />
          </Box>
          <Box
            as={"button"}
            p={1}
            rounded={"6px"}
            fontWeight={"semibold"}
            fontSize={"18px"}
          >
            {quantity}
          </Box>
          <Box
            as={"button"}
            p={1}
            border={"1px solid lightgray"}
            rounded={"6px"}
            onClick={decrement}
          >
            <Minus />
          </Box>
        </HStack>
      </HStack>
    </Box>
  );
};

const AboutSummary = () => {
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
  console.log({
    season,
    selectedProperty,
    title,
    description,
    address,
    mapUrl,
    addedRooms,
    addRoomProgress,
    uploadedFiles,
    imageDetails,
    basePrice,
    minPrice,
    maxPrice,
    weekendAdjustment,
    seasonalAdjustment,
    packageDiscounts,
    rules,
    recommendations,
    packs,
    selectedAmenities,
    customAmenity,
    selectedTab,
    prices,
    selectedDates,
    loadingInsights,
    insights,
    editDialogOpen,
    editRate,
  });

  const items = [
   
    {
      value: "b",
      title: "Location",
      content: (
        <>
          <Box>
            <VStack mt={"16px"}>
              <HStack w={"100%"} justify={"start"} align={"start"} h={"100%"}>
                <Box as={MapPin} boxSize={6} color="gray.600" />
                <Text
                  fontSize={["24px", "30px", "18px"]}
                  fontWeight={"semibold"}
                  mb="8px"
                >
                  {address}
                </Text>
              </HStack>

              {/* <Text fontSize={["24px", "30px", "16px"]} color={"gray.600"} mb="8px">
            Located in an exclusive neighborhood, just steps away from a
            pristine private beach. High-end restaurants and boutique shops are
            within a short drive. Enjoy breathtaking sunsets and the sound of
            waves from your private terrace.
          </Text> */}
            </VStack>
          </Box>

          {mapUrl ? (
            <Box mt={"16px"} borderRadius="xl" overflow="hidden">
              <iframe
                src={mapUrl}
                width="100%"
                height="350"
                allowFullScreen
                loading="lazy"
                style={{ border: 0 }}
              />
            </Box>
          ) : (
            <Text>No map available</Text>
          )}
        </>
      ),
    },
    {
      value: "c",
      title: "Rules",
      content: (
        <Box w={"100%"} borderRadius={"16px"} p={4} px={0}>
          <Stack direction="row" flexWrap="wrap" gap={2} mt={3}>
            {" "}
            {rules.map((rule, index) => (
              <Box
                key={index}
                border={"1px solid lightgray"}
                bg={"gray.50"}
                p={2}
                px={3}
                rounded={"xl"}
              >
                {rule.title}
              </Box>
            ))}
          </Stack>
        </Box>
      ),
    },
    {
      value: "d",
      title: "Second Item",
      content: (
        <HStack
          mt={"50px"}
          w={"100%"}
          justify={"space-between"}
          align={"start"}
          flexWrap={{ base: "wrap", md: "wrap" }}
          gap={4}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={4}
            flexWrap={"wrap"}
            justifyContent={{
              base: "start",
              sm: "start",
              md: "start",
              lg: "start",
              xl: "start",
            }}
          >
            {packs.map((pack) => (
              <Card.Root
                borderRadius="32px"
                key={pack.id}
                w={{
                  base: "100%",
                  sm: "100%",
                  md: "300px",
                  lg: "300px",
                  xl: "300px",
                }}
                border={"1px solid lightgray"}
                overflow="hidden"
              >
                {/* Optional Image Placeholder */}

                <Card.Body gap={4}>
                  <Text fontSize="2xl" fontWeight="semibold">
                    {pack.title}
                  </Text>

                  {/* Room Amenities */}
                  <Box>
                    <Heading
                      textStyle="2xl"
                      fontWeight="medium"
                      letterSpacing="tight"
                    >
                      ${pack.price}
                    </Heading>
                    <Stack direction="row" flexWrap="wrap" gap={2} mt={3}>
                      <Text fontSize="md" color="gray.500">
                        {pack.description}
                      </Text>
                      {/*  <Box>Items:</Box>{" "} */}
                    </Stack>
                    <Text fontSize="md" fontWeight={"semibold"}>
                      Items:
                    </Text>
                    <Stack direction="row" flexWrap="wrap" gap={2} mt={3}>
                      {" "}
                      {pack.items.map((item, index) => (
                        <Box
                          key={index}
                          border={"1px solid lightgray"}
                          bg={"gray.50"}
                          p={2}
                          px={3}
                          rounded={"xl"}
                        >
                          {item}
                        </Box>
                      ))}
                    </Stack>
                  </Box>

                  {/* Ensuite Amenities */}
                </Card.Body>
              </Card.Root>
            ))}
          </Box>
        </HStack>
      ),
    },
    { value: "e", title: "Third Item", content: "Some value 3..." },
  ];

  return (
    <>
      <Box>
        <Text fontSize={["24px", "30px", "30px"]} fontWeight="bold" mb="8px">
          About this crib
        </Text>
        <Text fontSize={["24px", "30px", "16px"]} color={"gray.600"} mb="8px">
          {description}
        </Text>
      </Box>

      {/* Enhance Your Stay with Packs Section */}

      {/* Unique Adventures Nearby Section */}

      {/* House Rules Section */}

      <AccordionRoot collapsible>
        {items.map((item, index) => (
          <AccordionItem key={index} value={item.value}>
        
            <AccordionItemTrigger display={"flex"}>
              <Box
                transition="all 0.3s"
                width="100%"
                bg={"white"}
                color={"black"}
                borderRadius="16px"
                textAlign={"start"}
                fontSize={"24px"}
                fontWeight="bold"
               
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                {item.title}
                <ChevronDown />
              </Box>
            </AccordionItemTrigger>

             <AccordionItemContent mt={"24px"}>{item.content}</AccordionItemContent>
                      <Box w={"100%"} bg={"lightgray"} h={"1px"}  my={"30px"}/>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </>
  );
};

export default AboutSummary;
