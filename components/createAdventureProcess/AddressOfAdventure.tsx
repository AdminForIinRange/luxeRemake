"use client";
import React, { useEffect, useState } from "react";
import { Box, Text, Input, Stack, Textarea } from "@chakra-ui/react";
import { Field } from "@/components/chakra-snippets/field";
import { useListingCreationContext } from "@/context/ListingCreationContext";
import ListingHeader from "../reuseableComps/listingHeader";
import { Home } from "lucide-react";

const AddressOfAdventure = () => {
  const { address, setAddress, mapUrl, setMapUrl } =
    useListingCreationContext();

  useEffect(() => {
    if (address) {
      const encodedAddress = encodeURIComponent(address);
      setMapUrl(
        `https://maps.google.com/maps?q=${encodedAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`,
      );
    }
  }, [address]);

  return (
    <>
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
          title="The Location of Your Property"
          description="Enter the address of your property to show it on the map."
        />

        <Text
          fontSize={["16px", "16px", "16px", "16px", "20px"]}
          color="gray.600"
          mt={{
            base: "24px",
            sm: "50px",
            md: "50px",
            lg: "50px",
            xl: "50px",
          }}
        >
          Where will this Adventure be hosted
        </Text>

        <Box
          display="flex"
          flexWrap="wrap"
          gap={{
            base: "10px",
            sm: "10px",
            md: "16px",
            lg: "16px",
            xl: "16px",
          }}
          mt="50px"
          alignItems={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "start",
            xl: "start",
          }}
          justifyContent={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "start",
            xl: "start",
          }}
        >
          <Box
            as="button"
            // onClick={() => setSelectedProperty(property.value)}
            p="18px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderRadius="32px"
            width={{
              base: "115px",
              sm: "115px",
              md: "155px",
              lg: "155px",
              xl: "255px",
            }}
            height="140px"
            border="1px solid"
            borderColor={"gray.300"}
            bg={"white"}
            transition="all 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
              bg: "blue.50",
              borderColor: "blue.400",
            }}
            fontWeight={"normal"}
          >
            <Home size={28} color="black" />
            <Text fontSize="sm" mt="8px">
              Physical Address
            </Text>
          </Box>

          <Box
            as="button"
            // onClick={() => setSelectedProperty(property.value)}
            p="18px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderRadius="32px"
            width={{
              base: "115px",
              sm: "115px",
              md: "155px",
              lg: "155px",
              xl: "255px",
            }}
            height="140px"
            border="1px solid"
            borderColor={"gray.300"}
            bg={"white"}
            transition="all 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
              bg: "blue.50",
              borderColor: "blue.400",
            }}
            fontWeight={"normal"}
          >
            <Home size={28} color="black" />
            <Text fontSize="sm" mt="8px">
              Online
            </Text>
          </Box>
        </Box>

        <Box flexWrap="wrap" gap="16px" mt="50px">
          <Text  mt={"24px"}
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
            Adress
          </Text>
          <Input 
            variant="subtle"
            textIndent={2}
            autoFocus
            type="text"
            placeholder="Enter your address"
            width="100%"
            height="50px"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            border="1px solid #E2E8F0"
            _focus={{
              border: "1px solid #E2E8F0", // Keeps the border color unchanged
              boxShadow: "none", // Removes the default blue glow
              outline: "none", // Ensures no additional focus outline
            }}
          />
          <Text mt={"24px"}
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
            height="50px"
            border="1px solid #E2E8F0"
            _focus={{
              border: "1px solid #E2E8F0", // Keeps the border color unchanged
              boxShadow: "none", // Removes the default blue glow
              outline: "none", // Ensures no additional focus outline
            }}
          />
          <Box
            mt={4}
            bg="gray.200"
            borderRadius="15px"
            display="flex"
            alignItems={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "center",
              xl: "center",
            }}
            justifyContent={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "center",
              xl: "center",
            }}
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="400px"
              style={{ border: 0, borderRadius: "32px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddressOfAdventure;
