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

const Policy = () => {
  return (
    <Box p={6} bg="gray.50" borderRadius="lg" boxShadow="md">
      <Flex justify="space-between" align="center" mb={6}>
        <Text fontSize="2xl" fontWeight="extrabold" color="gray.700">
          Cancellation Policy
        </Text>
      </Flex>

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
    </Box>
  );
};

export default Policy;
