import React from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  Card,
  Heading,
  Stack,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@chakra-ui/react";
import {
  AirVent,
  AlarmCheck,
  CarFront,
  ChefHat,
  ChevronDown,
  Gamepad,
  HeaterIcon,
  Lock,
  MapPin,
  Tv,
  Wifi,
} from "lucide-react";
import { IconFirstAidKit, IconGrill, IconPool } from "@tabler/icons-react";
import { useListingCreationContext } from "@/context/ListingCreationContext";
const AmenitiesSummary = () => {
  // const selectedAmenities = [
  //   "Wi-Fi",
  //   "Smart TV",
  //   "Streaming services",
  //   "Work space",
  //   "Charging station",
  //   "Air conditioning",
  //   "Heating",
  //   "Washer",
  //   "Iron",
  //   "Dryer",
  //   "Microwave",
  //   "Coffee maker",
  //   "Barbecue grill",
  //   "Kitchen",
  //   "Free parking",
  //   "EV charger",
  //   "Pool",
  //   "Hot tub",
  //   "Garden",
  //   "Patio",
  //   "Yoga mat",
  //   "Elevator",
  //   "Wheelchair",
  //   "Step-free",
  //   "Gym",
  // ];

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

  const items = [
    {
      value: "a",
      title: "Rooms",
      content: (
        <>
          <HStack
            direction="row"
            gap={6}
            justifyContent="start"
            alignItems="start"
            flexWrap="wrap"
          >
            {" "}
            <HStack
              direction="row"
              gap={6}
              justifyContent="start"
              alignItems="start"
              flexWrap="wrap"
            >
              {addedRooms.map((room, index) => (
                <Box key={index}>
                  <Card.Root
                    borderRadius={"16px"}
                    w={{
                      base: "100%",
                      sm: "300px",
                      md: "300px",
                      lg: "300px",
                      xl: "300px",
                    }}
                    border={"1px solid lightgray"}
                    overflow="hidden"
                  >
                    {/* Optional Image Placeholder */}

                    <Card.Body gap={4}>
                      <Text fontSize="xl" fontWeight="semibold">
                        {room.roomType} : {room.generatedRoomName}
                      </Text>

                      {/* Room Amenities */}
                      <Box>
                        <Heading as="h4" size="sm" mb={2}>
                          {room.roomType} Amenities
                        </Heading>
                        <Stack direction="row" flexWrap="wrap" gap={2}>
                          {room.chooseAmenities.length > 0 ? (
                            room.chooseAmenities.map((amenity, i) => (
                              <Box
                                key={i}
                                border={"1px solid lightgray"}
                                bg={"gray.50"}
                                p={1}
                                px={2}
                                fontSize={"sm"}
                                rounded={"xl"}
                                color={"gray.600"}
                              >
                                {amenity}
                              </Box>
                            ))
                          ) : (
                            <Text fontSize="sm" color="gray.500">
                              No amenities selected.
                            </Text>
                          )}
                        </Stack>
                      </Box>

                      {/* Ensuite Amenities */}
                      <Box>
                        <Heading as="h4" size="sm" mb={2}>
                          Ensuite Amenities
                        </Heading>
                        <Stack direction="row" flexWrap="wrap" gap={2}>
                          {room.chooseAmenitiesEnsuite.length > 0 ? (
                            room.chooseAmenitiesEnsuite.map((ensuite, i) => (
                              <Box
                                key={i}
                                border={"1px solid lightgray"}
                                bg={"gray.50"}
                                p={1}
                                px={2}
                                fontSize={"sm"}
                                rounded={"xl"}
                                color={"gray.600"}
                              >
                                {ensuite}
                              </Box>
                            ))
                          ) : (
                            <Text fontSize="sm" color="gray.500">
                              No ensuite amenities selected.
                            </Text>
                          )}
                        </Stack>
                      </Box>
                    </Card.Body>
                  </Card.Root>
                </Box>
              ))}
            </HStack>
          </HStack>
        </>
      ),
    },
    {
      value: "b",
      title: " Indulge in These Amenities",
      content: (
        <>
          <HStack
            mt={"16px"}
            w={"100%"}
            justify={"space-between"}
            align={"start"}
          >
            <Stack direction="row" flexWrap="wrap" gap={2} mt={3}>
              {" "}
              {selectedAmenities.map((amenity, index) => (
                <Box
                  key={index}
                  border={"1px solid lightgray"}
                  bg={"gray.50"}
                  p={2}
                  px={3}
                  rounded={"xl"}
                >
                  {amenity}
                </Box>
              ))}
            </Stack>
          </HStack>
          <Box
            as={"button"}
            gap={2}
            w={"100%"}
            h={"50px"}
            mt={"24px"}
            bg={"black"}
            borderRadius={"16px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            transition={"all 0.3s"}
            _hover={{
              bg: "gray.700",
              color: "black",
            }}
          >
            <Text color={"white"} fontWeight={"semibold"} fontSize={"14px"}>
              {" "}
              Expand Amenities
            </Text>
          </Box>
        </>
      ),
    },
    
    
  ];

  return (
    <Box>
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

  
      
    </Box>
  );
};

export default AmenitiesSummary;
