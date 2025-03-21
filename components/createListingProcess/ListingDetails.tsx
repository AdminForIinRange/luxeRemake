"use client";

import React from "react";
import { useListingCreationContext } from "@/context/ListingCreationContext";
import {
  Box,
  Stack,
  Button,
  Input,
  Heading,
  Text,
  Badge,
  SimpleGrid,
  Icon,
  Flex,
  Textarea,
} from "@chakra-ui/react";
import { Sparkles } from "lucide-react";
import ListingHeader from "../reuseableComps/listingHeader";

const ListingDetails = () => {
  const { title, setTitle, description, setDescription } =
    useListingCreationContext();

  return (
    <Box
      rounded={"lg"}
      // shadow={"md"}
      p={0}
      mb={8}
      className="animate__animated animate__fadeIn"
      textAlign={{
        base: "center",
        sm: "center",
        md: "center",
        lg: "start",
        xl: "start",
      }}
    >
      

      <ListingHeader
        title="Listing Details"
        description="Enter the details of your property here."
      />

      <Box mt={"50px"}>
        {/* Title Input */}
        <Box mt={"16px"}>
          <Text
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
            Title
          </Text>
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
            placeholder="Enter listing title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full border-gray-300 focus:border-gray-500 focus:ring focus:ring-gray-200 rounded-md"
          />
        </Box>

        {/* Description Input */}
        <Box mt={"16px"}>
          <Text
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
            Description
          </Text>
          <Textarea
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
            placeholder="Enter listing description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 w-full border-gray-300 focus:border-gray-500 focus:ring focus:ring-gray-200 rounded-md"
            rows={4}
          />
        </Box>

        {/* AI Generate Button */}
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={{
            base: "center",
            sm: "center",
            md: "start",
            lg: "start",
            xl: "start",
          }}
        >
          <Box
            mt={"16px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"8px"}
            transition="all 0.3s"
            as="button"
            w={"200px"}
            bg={"white"}
            h={"auto"}
            p={"16px"}
            rounded={"full"}
            color={"black"}
            border="1px solid"
            borderColor={"gray.300"}
            _hover={{
              bg: "black",
              color: "white",
            }}
          >
            <Sparkles /> Generate with AI
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ListingDetails;
