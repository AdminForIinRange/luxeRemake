import React, { useEffect, useState } from "react";
import {
  VStack,
  HStack,
  Heading,
  Stack,
  Card,
  Button,
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogFooter,
  Input,
  Text,
  Box,
} from "@chakra-ui/react";

import {
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/chakra-snippets/dialog";
import { useListingCreationContext } from "@/context/ListingCreationContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
const getDaysInMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate();
const Pricing = () => {
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

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [value, setValue] = useState<string | null>("calendar");

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());


  // Generate random prices per month
  useEffect(() => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const generatedPrices = Array.from({ length: daysInMonth }, () =>
      Math.floor(Math.random() * (500 - 100) + 100),
    );
    setPrices(generatedPrices);
  }, [currentYear, currentMonth, setPrices]);

  // Simulate loading insights when switching to insights tab
  useEffect(() => {
    if (value === "insights") {
      setLoadingInsights(true);
      setTimeout(() => {
        setInsights({
          labels: months,
          revenue: Array.from({ length: 12 }, () =>
            Math.floor(Math.random() * (3000 - 1500) + 1500),
          ),
          occupancy: Array.from({ length: 12 }, () =>
            Math.floor(Math.random() * (90 - 50) + 50),
          ),
        });
        setLoadingInsights(false);
      }, 2000);
    }
  }, [value, setLoadingInsights, setInsights]);

  // Toggle selected day
  

  // Clear all selected days
 

  // Navigate Months
  const prevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
    setCurrentYear((prev) => (currentMonth === 0 ? prev - 1 : prev));
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    setCurrentYear((prev) => (currentMonth === 11 ? prev + 1 : prev));
  };

  return (
    <Box>
      {/* Pricing Header */}
      <Box mb={6}>
        <Text fontSize={["24px", "30px", "30px"]} fontWeight="bold">
          Pricing Details
        </Text>
      </Box>
      <HStack
        justify="center"
        align="start"
        gap={8}
        flexWrap={{
          base: "wrap",
          sm: "wrap",
          md: "wrap",
          lg: "nowrap",
          xl: "nowrap",
        }}
      >
        <VStack gap={6} align="stretch">
          {/* Base Pricing Information */}
          <Card.Root
            p={5}
            borderRadius="32px"
            w={"400px"}
            border={"1px solid lightgray"}
            overflow="hidden"
          >
            <Heading size="md" mb={3}>
              Base Pricing
            </Heading>
            <Stack gap={2}>
              <Text fontSize="lg">
                {" "}
                Base Price: <strong>${basePrice}</strong>
              </Text>
              <Text fontSize="lg">
                {" "}
                Minimum Price: <strong>${minPrice}</strong>
              </Text>
              <Text fontSize="lg">
                {" "}
                Maximum Price: <strong>${maxPrice}</strong>
              </Text>
              <Text fontSize="lg">
                {" "}
                Weekend Adjustment: <strong>+${weekendAdjustment}</strong>
              </Text>
              <Text fontSize="lg">
                {" "}
                Seasonal Adjustment: <strong>+${seasonalAdjustment}</strong>
              </Text>
            </Stack>
          </Card.Root>

          {/* Package Discounts Section */}
          {packageDiscounts.length > 0 && (
            <Card.Root
              p={5}
              borderRadius="32px"
              w={"400px"}
              border={"1px solid lightgray"}
              overflow="hidden"
            >
              <Heading size="md" mb={3}>
                {" "}
                Package Discounts
              </Heading>
              <Stack>
                {packageDiscounts.map((discount, index) => (
                  <Text key={index} fontSize="lg">
                    {discount.packs} Pack(s) -{" "}
                    <strong>{discount.discount}% off</strong>
                  </Text>
                ))}
              </Stack>
            </Card.Root>
          )}

          {/* Available Packages Section */}

          {/* Price Variations Section */}
        </VStack>

        <Box
          p={5}
          borderRadius="32px"
          w={"100%"}
          border={"1px solid lightgray"}
          overflow="hidden"
        >
          <Box display="flex" justifyContent="space-between">
            <Button variant="ghost" onClick={prevMonth}>
              <ChevronLeft />
            </Button>
            <Text
              fontSize={["24px", "30px", "36px"]}
              fontWeight="semibold"
              mb="16px"
            >
              {months[currentMonth]} {currentYear}
            </Text>
            <Button variant="ghost" onClick={nextMonth}>
              <ChevronRight />
            </Button>
          </Box>

          <div className="flex items-center justify-center">
            <Box className="grid grid-cols-7 w-full text-center"  gap={{
                base: "0",
                sm: "0",
                md: "2",
                lg: "2",
                xl: "2",
              }}>
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <p key={day} className="font-bold">
                  {day}
                </p>
              ))}
              {prices.map((price, index) => {
                const day = index + 1;
                const today = new Date();
                const selectedDate = new Date(currentYear, currentMonth, day);
                const isPast =
                  selectedDate <=
                  new Date(
                    today.getFullYear(),
                    today.getMonth(),
                    today.getDate(),
                  );

                const isSelected = selectedDates.includes(day);

                return (
                  <Box
                    as="button"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius={{
                      base: "0px",
                      sm: "0px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    }}
                    width="100%"
                    height="100px"
                    border="1px solid"
                    key={index}
                    borderColor={
                      isSelected ? "blue.400" : isPast ? "gray.300" : "gray.300"
                    }
                    bg={isSelected ? "blue.50" : isPast ? "gray.100" : "white"}
                    color={isPast ? "gray.500" : "black"}
                    cursor={isPast ? "not-allowed" : "pointer"} // Change cursor for past dates
                    transition="all 0.3s ease-in-out"
                    _hover={
                      isPast
                        ? {}
                        : {
                            transform: "scale(1.05)",
                            bg: "blue.50",
                            borderColor: "blue.400",
                          }
                    }
                    fontWeight={isSelected ? "semibold" : "normal"}
                  >
                    <p>{day}</p>
                    <p className="text-sm font-semibold">${price}</p>
                  </Box>
                );
              })}
            </Box>
          </div>

          {/* Add New Pack Button */}

          {/* New Dialog Component */}
        </Box>
      </HStack>
    </Box>
  );
};

export default Pricing;
