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
  Textarea,
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
import { Slider } from "@/components/chakra-snippets/slider";
import ItineraryPlanner from "./ActivityDetailsTabs/ItineraryPlanner";
import Requirements from "./ActivityDetailsTabs/Requirements";
import Policy from "./ActivityDetailsTabs/Policy";
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

const AdventureActivityDetails: React.FC = () => {
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
        title="Activity Details"
        description="Let's make your adventure come to life!"
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
            value="Basics"
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
            Basics
          </Tabs.Trigger>
          <Tabs.Trigger
            textAlign={"center"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            w={"100%"}
            value="Itinerary"
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
            Itinerary
          </Tabs.Trigger>
          <Tabs.Trigger
            textAlign={"center"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            w={"100%"}
            value="Requirements"
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
            Requirements
          </Tabs.Trigger>

          <Tabs.Trigger
            textAlign={"center"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            w={"100%"}
            value="Policy"
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
            Policy
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content mt={"16px"} value="Basics">
          <Text
            mt={"24px"}
            textAlign={{
              base: "start",
              sm: "start",
              md: "start",
              lg: "start",
              xl: "start",
            }}
            fontSize={["16px", "16px", "16px", "16px", "20px"]}
            color="gray.600"
            mb={2}
          >
            Meeting Instruction
          </Text>
          <Textarea
            // value={imageDetails[index]?.description || ""}
            // onChange={(e) =>
            //   handleDescriptionChange(index, e.target.value)
            // }
            variant="subtle"
            textIndent={2}
            autoFocus
            placeholder="Enter your description"
            width="100%"
            height="100px"
            border="1px solid #E2E8F0"
            _focus={{
              border: "1px solid #E2E8F0", // Keeps the border color unchanged
              boxShadow: "none", // Removes the default blue glow
              outline: "none", // Ensures no additional focus outline
            }}
          />

          <Slider
            // value={[Price]}
            min={0}
            max={500}
            step={10}
            defaultValue={[60]}
            // onValueChange={(details: { value: [ number] }) => {
            //   setMinPrice(details.value[0]);

            // }}
            className="mt-4"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>Minimum Price: </span>
            <span>Maximum Price: </span>
          </div>

          <Slider
            // value={[minAge, maxAge]}
            min={0}
            max={99}
            step={10}
            defaultValue={[18, 60]}
            // onValueChange={(details: { value: [ number, number] }) => {
            //   setMinAge(details.value[0]);

            // }}
            className="mt-4"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>Minimum Age: </span>
            <span>Maximum Age: </span>
          </div>
          {/* Add New Pack Button */}

          {/* New Dialog Component */}
        </Tabs.Content>

        <Tabs.Content mt={"16px"} value="Itinerary">
          <ItineraryPlanner />
        </Tabs.Content>

        <Tabs.Content mt={"16px"} value="Requirements">
          <Requirements />
        </Tabs.Content>

        <Tabs.Content mt={"16px"} value="Policy">
          <Policy />
        </Tabs.Content>

        {/* INSIGHTS TAB */}
      </Tabs.Root>
    </Box>
  );
};

export default AdventureActivityDetails;
