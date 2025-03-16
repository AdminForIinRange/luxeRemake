"use client";

import React, { useEffect, useState } from "react";
import { useListingCreationContext } from "@/context/ListingCreationContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import {
  Box,
  Button,
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogFooter,
  Input,
  Text,
} from "@chakra-ui/react";
import {
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/chakra-snippets/dialog";
import { Tabs } from "@chakra-ui/react";
import ListingHeader from "../reuseableComps/listingHeader";

// Register Chart.js components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
);

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

const getDaysInMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate();

const AvailabilityCalendar: React.FC = () => {
  const {
    prices,
    setPrices,
    selectedDates,
    setSelectedDates,
    loadingInsights,
    setLoadingInsights,
    insights,
    setInsights,
    editRate,
    setEditRate,
  } = useListingCreationContext();

  const [value, setValue] = useState<string | null>("calendar");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentDate, setCurrentDate] = useState(new Date().getDate());

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
  const toggleDateSelection = (day: number) => {
    const today = new Date();
    const selectedDate = new Date(currentYear, currentMonth, day);

    // Prevent selecting past dates
    if (selectedDate < today) return;

    setSelectedDates((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };

  // Clear all selected days
  const clearSelection = () => {
    setSelectedDates([]);
  };

  // Save edited rates
  const saveEditedRates = () => {
    if (editRate !== "") {
      const updatedPrices = [...prices];
      selectedDates.forEach((date) => {
        updatedPrices[date - 1] = Number(editRate);
      });
      setPrices(updatedPrices);
      setSelectedDates([]);
    }
  };

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
    <Box
      rounded="lg"
      p={0}
      mb={8}
      textAlign={{
        base: "center",
        sm: "center",
        md: "center",
        lg: "start",
        xl: "start",
      }}
    >
      <ListingHeader
        title="Organize availability"
        description="Enter the address of your property to show it on the map."
      />

      <Tabs.Root
        mt="50px"
        variant={"plain"}
        value={value}
        onValueChange={(details) => setValue(details.value)}
        defaultValue="calendar"
        borderRadius="lg"
      >
        <Tabs.List
          display="flex"
          justifyContent="space-between"
          w="100%"
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
            value="calendar"
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
            Calendar
          </Tabs.Trigger>
          <Tabs.Trigger
            textAlign={"center"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            w={"100%"}
            value="insights"
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
            Insights
          </Tabs.Trigger>
          <Tabs.Trigger
            textAlign={"center"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            w={"100%"}
            value="settings"
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
            Settings
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content mt={"16px"} value="calendar">
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
            <Box
              className="grid grid-cols-7  w-full text-center"
              gap={{
                base: "0",
                sm: "0",
                md: "2",
                lg: "2",
                xl: "2",
              }}
            >
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
                    onClick={() => !isPast && toggleDateSelection(day)} // Prevent past date clicks
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

          <Box textAlign="center" mt={6}>
            <DialogRoot
              open={isDialogOpen}
              onOpenChange={(details) => setIsDialogOpen(details.open)}
            >
              <DialogTrigger asChild>
                <Button
                  transition="all 0.3s"
                  as="button"
                  w={"100%"}
                  h={"50px"}
                  bg={"white"}
                  p={2}
                  color={"black"}
                  border="1px solid"
                  borderRadius="16px"
                  borderColor={"gray.300"}
                  _hover={{
                    bg: "black",
                    color: "white",

                    transition: "all 0.3s",
                  }}
                  disabled={selectedDates.length === 0}
                  onClick={() => setIsDialogOpen(true)}
                >
                  Chnage Rates
                </Button>
              </DialogTrigger>
            </DialogRoot>
          </Box>
          {/* Add New Pack Button */}

          {/* New Dialog Component */}
          <DialogRoot
            open={isDialogOpen}
            onOpenChange={(details) => setIsDialogOpen(details.open)}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle fontSize="xl" fontWeight="semibold">
                  Add New Pack
                </DialogTitle>
              </DialogHeader>
              <DialogBody>
                <Box display="flex" flexDirection="column" gap={3}>
                  <Input
                    value={editRate}
                    onChange={(e) => setEditRate(Number(e.target.value) || "")}
                    variant="subtle"
                    textIndent={2}
                    autoFocus
                    type="number"
                    width="100%"
                    height="50px"
                    border="1px solid #E2E8F0"
                    _focus={{
                      border: "1px solid #E2E8F0", // Keeps the border color unchanged
                      boxShadow: "none", // Removes the default blue glow
                      outline: "none", // Ensures no additional focus outline
                    }}
                    placeholder="Items (comma-separated)"
                  />
                </Box>
              </DialogBody>
              <DialogFooter
                display={"flex"}
                justifyContent={"center"}
                w={"100%"}
              >
                <DialogActionTrigger asChild>
                  <Button
                    transition="all 0.3s"
                    as="button"
                    w={"225px"}
                    bg={"white"}
                    p={4}
                    color={"black"}
                    border="1px solid"
                    borderRadius="32px"
                    borderColor={"gray.300"}
                    _hover={{
                      bg: "black",
                      color: "white",

                      transition: "all 0.3s",
                    }}
                    variant="outline"
                    onClick={() => {
                      setIsDialogOpen(false);
                      clearSelection();
                    }}
                  >
                    Cancel
                  </Button>
                </DialogActionTrigger>
                <Button
                  transition="all 0.3s"
                  as="button"
                  w={"225px"}
                  bg={"white"}
                  p={4}
                  color={"black"}
                  border="1px solid"
                  borderRadius="32px"
                  borderColor={"gray.300"}
                  _hover={{
                    bg: "black",
                    color: "white",

                    transition: "all 0.3s",
                  }}
                  variant="outline"
                  colorScheme="blue"
                  disabled={editRate === ""}
                  onClick={() => {
                    saveEditedRates();
                    setIsDialogOpen(false);
                  }}
                >
                  Save Pack
                </Button>
              </DialogFooter>
              <DialogCloseTrigger />
            </DialogContent>
          </DialogRoot>
        </Tabs.Content>

        {/* INSIGHTS TAB */}
        <Tabs.Content mt={"16px"} value="insights" className="mt-4">
          <Text fontSize={["16px", "20px"]} color="gray.600" mb={2}>
            Revenue Insights
          </Text>
          {loadingInsights ? (
            <p>Loading insights...</p>
          ) : (
            insights && (
              <div className="w-full">
                <Bar
                  data={{
                    labels: insights.labels,
                    datasets: [
                      {
                        label: "Revenue ($)",
                        data: insights.revenue,
                        backgroundColor: "rgba(75, 192, 192, 0.5)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
                      },
                    ],
                  }}
                />
              </div>
            )
          )}
        </Tabs.Content>

        {/* SETTINGS TAB */}
        <Tabs.Content mt={"16px"} value="settings" className="mt-4">
          <Text fontSize={["16px", "20px"]} color="gray.600" mb={2}>
            Pricing Settings
          </Text>
          <div className="space-y-3">
            <Input
              variant="subtle"
              textIndent={2}
              autoFocus
              width="100%"
              height="50px"
              border="1px solid #E2E8F0"
              _focus={{
                border: "1px solid #E2E8F0", // Keeps the border color unchanged
                boxShadow: "none", // Removes the default blue glow
                outline: "none", // Ensures no additional focus outline
              }}
              type="number"
              placeholder="Default Daily Rate ($)"
            />
            <Input
              variant="subtle"
              textIndent={2}
              autoFocus
              width="100%"
              height="50px"
              border="1px solid #E2E8F0"
              _focus={{
                border: "1px solid #E2E8F0", // Keeps the border color unchanged
                boxShadow: "none", // Removes the default blue glow
                outline: "none", // Ensures no additional focus outline
              }}
              type="number"
              placeholder="Default Weekend Rate (%)"
            />
            <Input
              variant="subtle"
              textIndent={2}
              autoFocus
              width="100%"
              height="50px"
              border="1px solid #E2E8F0"
              _focus={{
                border: "1px solid #E2E8F0", // Keeps the border color unchanged
                boxShadow: "none", // Removes the default blue glow
                outline: "none", // Ensures no additional focus outline
              }}
              type="text"
              placeholder="Blackout Dates (e.g., 2025-01-01, 2025-01-02)"
            />
           
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
};

export default AvailabilityCalendar;
