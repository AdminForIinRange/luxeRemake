import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Textarea, // Kept in case you need it elsewhere
  Stack,
  Text,
} from "@chakra-ui/react";

const Requirements = () => {
  const [requirements, setRequirements] = useState([
    { label: "Must know how to swim", toggled: false },
    { label: "Good physical fitness", toggled: false },
    { label: "Valid ID required", toggled: false },
    { label: "Minimum age requirement", toggled: false },
    { label: "No fear of heights", toggled: false },
    { label: "Signed waiver necessary", toggled: false },
  ]);
  const [newRequirement, setNewRequirement] = useState("");

  const handleToggle = (label) => {
    setRequirements((prev) =>
      prev.map((req) =>
        req.label === label ? { ...req, toggled: !req.toggled } : req
      )
    );
  };

  const handleAddRequirement = () => {
    if (!newRequirement.trim()) return;
    setRequirements((prev) => [
      ...prev,
      { label: newRequirement.trim(), toggled: false },
    ]);
    setNewRequirement("");
  };

  // Simple two-column split
  const leftColumn = requirements.slice(0, 3);
  const rightColumn = requirements.slice(3);

  return (
    <Box p={6} borderRadius="lg">
      <Flex justify="space-between" align="center" mb={6}>
        <Text fontSize="2xl" fontWeight="bold" color="gray.700">
          Participant Requirements
        </Text>
      </Flex>

      <Flex justify="space-between" mb={6}>
        {/* Left column */}
        <Stack spacing={4} flex="1" mr={4}>
          {leftColumn.map((req) => (
            <Flex align="center" key={req.label}>
              {/* Checkbox-like toggle */}
              <Box
                as="button"
                w="24px"
                h="24px"
                borderRadius="sm"
                border="2px solid"
                borderColor={req.toggled ? "green.400" : "gray.300"}
                bg={req.toggled ? "green.400" : "transparent"}
                display="flex"
                alignItems="center"
                justifyContent="center"
                mr={3}
                cursor="pointer"
                onClick={() => handleToggle(req.label)}
              >
                {req.toggled && (
                  <Text fontSize="sm" color="white" lineHeight="1">
                    ✓
                  </Text>
                )}
              </Box>
              <Text>{req.label}</Text>
            </Flex>
          ))}
        </Stack>

        {/* Right column */}
        <Stack spacing={4} flex="1">
          {rightColumn.map((req) => (
            <Flex align="center" key={req.label}>
              {/* Same checkbox-like toggle */}
              <Box
                as="button"
                w="24px"
                h="24px"
                borderRadius="sm"
                border="2px solid"
                borderColor={req.toggled ? "green.400" : "gray.300"}
                bg={req.toggled ? "green.400" : "transparent"}
                display="flex"
                alignItems="center"
                justifyContent="center"
                mr={3}
                cursor="pointer"
                onClick={() => handleToggle(req.label)}
              >
                {req.toggled && (
                  <Text fontSize="sm" color="white" lineHeight="1">
                    ✓
                  </Text>
                )}
              </Box>
              <Text>{req.label}</Text>
            </Flex>
          ))}
        </Stack>
      </Flex>

      {/* Other Requirements */}
      <Text fontSize="lg" fontWeight="bold" color="gray.700" mb={2}>
        Other Requirements
      </Text>
      <Flex>
        <Input
          placeholder="Add custom requirement"
          value={newRequirement}
          onChange={(e) => setNewRequirement(e.target.value)}
          mr={2}
        />
        <Button onClick={handleAddRequirement}>Add</Button>
      </Flex>
    </Box>
  );
};

export default Requirements;
