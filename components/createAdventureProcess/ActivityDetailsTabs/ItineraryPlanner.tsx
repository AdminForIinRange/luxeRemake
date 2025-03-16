import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Textarea,
  Stack,
  Text,
} from "@chakra-ui/react";

const timeSlots = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

function ItineraryPlanner() {
  const [activityTitle, setActivityTitle] = useState("New Activity");
  const [activityDescription, setActivityDescription] = useState("");
  const [location, setLocation] = useState("Activity location");
  const [capacity, setCapacity] = useState(1);
  const [bookings, setBookings] = useState([]);
  const [days, setDays] = useState([[]]);

  const handleSave = () => {
    if (days.every((day) => day.length === 0)) return;
    // Flatten days array to get selections from all days
    const daySelections = days.flat().map((sel, index) => ({
      ...sel,
      title: activityTitle,
      description: activityDescription,
      location,
      capacity,
      id: index,
    }));
    setBookings([...bookings, ...daySelections]);
    setDays([[]]);
    setActivityTitle("New Activity");
    setActivityDescription("");
    setLocation("Activity location");
    setCapacity(1);
  };

  const handleAddDay = () => {
    setDays([...days, []]);
  };

  const handleTimeClick = (dayIndex, time) => {
    if (isSelected(dayIndex, time)) {
      // Remove selection if it exists.
      setDays((prevDays) => {
        const newDays = [...prevDays];
        newDays[dayIndex] = newDays[dayIndex].filter(({ start, end }) => {
          const startIndex = timeSlots.indexOf(start);
          const endIndex = timeSlots.indexOf(end);
          const timeIndex = timeSlots.indexOf(time);
          return timeIndex < startIndex || timeIndex > endIndex;
        });
        return newDays;
      });
    } else {
      // Add the selected time slot.
      setDays((prevDays) => {
        const newDays = [...prevDays];
        newDays[dayIndex] = [...newDays[dayIndex], { start: time, end: time }];
        return newDays;
      });
    }
  };

  const isSelected = (dayIndex, time) => {
    return days[dayIndex].some(({ start, end }) => {
      if (!start || !end) return false;
      const startIndex = timeSlots.indexOf(start);
      const endIndex = timeSlots.indexOf(end);
      const currentIndex = timeSlots.indexOf(time);
      return currentIndex >= startIndex && currentIndex <= endIndex;
    });
  };

  return (
    <Box p={6} bg="gray.50" borderRadius="lg" boxShadow="md">
      <Flex justify="space-between" align="center" mb={6}>
        <Text fontSize="2xl" fontWeight="extrabold" color="gray.700">
          Create Your Adventure Itinerary
        </Text>
        <Button
          colorScheme="red"
          size="sm"
          variant="outline"
          onClick={() => setDays([[]])}
        >
          Reset Selection
        </Button>
      </Flex>
      {days.map((day, dayIndex) => (
        <Flex key={dayIndex} mb={8} direction={{ base: "column", md: "row" }}>
          <Box flex={2} mr={{ md: 4 }} mb={{ base: 4, md: 0 }}>
            <Text fontSize="lg" fontWeight="bold" mb={3} color="gray.600">
              {`Day ${dayIndex + 1}`}
            </Text>
            <Stack spacing={1}>
              {timeSlots.map((time) => (
                <Box
                  key={time}
                  p={2}
                  bg={isSelected(dayIndex, time) ? "blue.100" : "white"}
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  justifyContent="start"
                  cursor="pointer"
                  _hover={{ bg: "blue.50" }}
                  onClick={() => handleTimeClick(dayIndex, time)}
                >
                  {time}
                </Box>
              ))}
            </Stack>
          </Box>
          <Box
            flex={1}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            borderColor="gray.300"
            bg="white"
          >
            <Text fontSize="lg" fontWeight="bold" mb={3} color="gray.600">
              Activity Details
            </Text>
            <Box mb={4}>
              <Text fontSize="md" fontWeight="semibold" mb={2} color="gray.700">
                Selected Time Slots:
              </Text>
              {days.map((day, dayIndex) => (
                <Box key={dayIndex} mb={2}>
                  <Text
                    fontSize="sm"
                    fontWeight="bold"
                    color="gray.600"
                  >{`Day ${dayIndex + 1}:`}</Text>
                  {day.length > 0 ? (
                    day.map((sel, idx) => (
                      <Text key={idx} fontSize="sm" color="gray.500">
                        {sel.start} - {sel.end}
                      </Text>
                    ))
                  ) : (
                    <Text fontSize="sm" color="gray.400">
                      No selection
                    </Text>
                  )}
                </Box>
              ))}
            </Box>
            <Stack spacing={3}>
              <Input
                placeholder="Title"
                value={activityTitle}
                onChange={(e) => setActivityTitle(e.target.value)}
                variant="filled"
                bg="gray.100"
              />
              <Textarea
                placeholder="Description"
                value={activityDescription}
                onChange={(e) => setActivityDescription(e.target.value)}
                variant="filled"
                bg="gray.100"
              />
              <Input
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                variant="filled"
                bg="gray.100"
              />
              <Input
                type="number"
                min="1"
                value={capacity}
                onChange={(e) => setCapacity(Number(e.target.value))}
                variant="filled"
                bg="gray.100"
              />
              <Flex justify="space-between">
                <Button variant="outline" onClick={() => setDays([[]])}>
                  Cancel
                </Button>
                <Button
                  colorScheme="blackAlpha"
                  bg="black"
                  color="white"
                  onClick={handleSave}
                >
                  Save
                </Button>
              </Flex>
            </Stack>
          </Box>
        </Flex>
      ))}
      <Button
        mt={6}
        width="full"
        colorScheme="blackAlpha"
        bg="black"
        color="white"
        onClick={handleAddDay}
      >
        Add Day
      </Button>
    </Box>
  );
}

export default ItineraryPlanner;
