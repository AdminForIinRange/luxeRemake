"use client";
import React from "react";
import { Box, Icon, Input, Stack, Text } from "@chakra-ui/react";
import {
  Home,
  Building2,
  Hotel,
  Warehouse,
  Tent,
  TreePine,
  Sailboat,
  Caravan,
  Castle,
  TreePalm as PalmTree,
  Mountain,
  Building,
  LandPlot,
  Building as Barn,
  Building as Bungalow,
  Umbrella,
  Cone as Condo,
  Castle as Cottage,
  BedDouble,
  Home as Farmhouse,
  Space as Loft,
  Home as MobileHome,
  Ribbon as Ranch,
  Space as Studio,
  Building as Townhouse,
  Hotel as Villa,
} from "lucide-react";

import { useListingCreationContext } from "@/context/ListingCreationContext";
import {
  ColorModeButton,
  useColorModeValue,
} from "../chakra-snippets/color-mode";
import ListingHeader from "../reuseableComps/listingHeader";

const AdventureCategory = () => {
  const { selectedProperty } = useListingCreationContext();
  const result = useColorModeValue("<light-mode-value>", "<dark-mode-value>");
  console.log(result);
  const propertyTypes = [
    { value: "house", label: "House", icon: Home },
    { value: "apartment", label: "Apartment", icon: Building2 },
    { value: "guesthouse", label: "Guesthouse", icon: Hotel },
    { value: "hotel", label: "Hotel", icon: Building },
    { value: "cabin", label: "Cabin", icon: Warehouse },
    { value: "tent", label: "Tent", icon: Tent },
    { value: "treehouse", label: "Treehouse", icon: TreePine },
    { value: "boat", label: "Boat", icon: Sailboat },
    { value: "rv", label: "RV", icon: Caravan },
    { value: "castle", label: "Castle", icon: Castle },
    { value: "tropical", label: "Tropical", icon: PalmTree },
    { value: "countryside", label: "Countryside", icon: Mountain },
    { value: "barn", label: "Barn", icon: Barn },
    { value: "bungalow", label: "Bungalow", icon: Bungalow },
    { value: "chalet", label: "Chalet", icon: Castle },
    { value: "beachhouse", label: "Beach House", icon: Umbrella },
    { value: "condo", label: "Condo", icon: Condo },
    { value: "cottage", label: "Cottage", icon: Cottage },
    { value: "duplex", label: "Duplex", icon: BedDouble },
    { value: "farmhouse", label: "Farmhouse", icon: Farmhouse },
    { value: "loft", label: "Loft", icon: Loft },
    { value: "mobilehome", label: "Mobile Home", icon: MobileHome },
    { value: "ranch", label: "Ranch", icon: Ranch },
    { value: "studio", label: "Studio", icon: Studio },
    { value: "townhouse", label: "Townhouse", icon: Townhouse },
    { value: "villa", label: "Villa", icon: Villa },
    { value: "other", label: "Other", icon: LandPlot },
  ];

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
        title={`What type of category is your ${selectedProperty}`}
        description="Choose the category that best describes your Adventure."
      />

      {/* Property Type Selection */}

      <Box flexWrap="wrap" gap="16px" mt="50px">
        <Input
          variant="subtle"
          textIndent={2}
          autoFocus
          type="text"
          placeholder="Enter your adventure category"
          width="100%"
          height="50px"
          // value={address}
          // onChange={(e) => setAddress(e.target.value)}
          border="1px solid #E2E8F0"
          _focus={{
            border: "1px solid #E2E8F0", // Keeps the border color unchanged
            boxShadow: "none", // Removes the default blue glow
            outline: "none", // Ensures no additional focus outline
          }}
        />
      </Box>

      {/* <Box
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
        {propertyTypes.map((property) =>
          property.value === selectedProperty ? (
            <Box
            //   bg={"gray.100"}
              key={property.value}
              as="button"
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
                xl: "155px",
              }}
              height="120px"
              transition="all 0.3s ease-in-out"
              fontWeight="semibold"
            >
              <property.icon size={28} color="black" />
            </Box>
          ) : null,
        )}
      </Box> */}

    

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
        Subcategory
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
        {propertyTypes.map((property) => (
          <Box
            key={property.value}
            as="button"
            onClick={() => setSelectedProperty(property.value)}
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
              xl: "155px",
            }}
            height="120px"
            border="1px solid"
            borderColor={
              property.value === selectedProperty ? "blue.400" : "gray.300"
            }
            bg={property.value === selectedProperty ? "blue.50" : "white"}
            transition="all 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
              bg: "blue.50",
              borderColor: "blue.400",
            }}
            fontWeight={
              property.value === selectedProperty ? "semibold" : "normal"
            }
          >
            <property.icon size={28} color="black" />
            <Text fontSize="sm" mt="8px">
              {property.label}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AdventureCategory;
