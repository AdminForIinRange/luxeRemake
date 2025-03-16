import {
  Box,
  Text,
  Badge,
  Stack,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@chakra-ui/react";
// Adjust path based on your setup
import {
  Bed,
  BedDouble,
  Bath,
  Briefcase,
  Fan,
  Sofa,
  Shirt,
  Book,
  ChefHat,
  Dices,
  Flame,
  Tv,
  Utensils,
} from "lucide-react";
import { IconToiletPaper } from "@tabler/icons-react";
import React, { useEffect } from "react";

interface SelectRoomTypeProps {
  chooseAmenities: string[];
  setChooseAmenities: React.Dispatch<React.SetStateAction<string[]>>;
  chooseAmenitiesEnsuite: string[];
  setChooseAmenitiesEnsuite: React.Dispatch<React.SetStateAction<string[]>>;
  roomType: string | null;
}

const AmenitiesTypes = ({
  chooseAmenities,
  setChooseAmenities,
  chooseAmenitiesEnsuite,
  setChooseAmenitiesEnsuite,
  roomType,
}: SelectRoomTypeProps) => {
  const propertyTypes = [
    { category: "Bedroom", value: "singleBed", label: "Single Bed", icon: Bed },
    {
      category: "Bedroom",
      value: "doubleBed",
      label: "Double Bed",
      icon: BedDouble,
    },
    { category: "Bedroom", value: "queenBed", label: "Queen Bed", icon: Bed },
    { category: "Bedroom", value: "kingBed", label: "King Bed", icon: Bed },
    { category: "Bedroom", value: "bunkBed", label: "Bunk Bed", icon: Bed },
    { category: "Bedroom", value: "crib", label: "Crib", icon: Bed },
    {
      category: "Bedroom",
      value: "walkInWardrobe",
      label: "Walk-in Wardrobe",
      icon: Briefcase,
    },
    {
      category: "Bedroom",
      value: "builtInWardrobe",
      label: "Built-in Wardrobe",
      icon: Briefcase,
    },
    { category: "Bedroom", value: "desk", label: "Desk", icon: Briefcase },
    {
      category: "Bedroom",
      value: "bedsideTables",
      label: "Bedside Tables",
      icon: Sofa,
    },
    { category: "Bedroom", value: "dresser", label: "Dresser", icon: Sofa },
    { category: "Bedroom", value: "mirror", label: "Mirror", icon: Sofa },
    {
      category: "Bedroom",
      value: "blackoutCurtains",
      label: "Blackout Curtains",
      icon: Sofa,
    },
    {
      category: "Bedroom",
      value: "ceilingFan",
      label: "Ceiling Fan",
      icon: Fan,
    },
    {
      category: "Bedroom",
      value: "airConditioning",
      label: "Air Conditioning",
      icon: Fan,
    },

    {
      category: "Bathroom",
      value: "Toilet",
      label: "Toilet",
      icon: IconToiletPaper,
    },
    { category: "Bathroom", value: "Shower", label: "Shower", icon: Bath },
    { category: "Bathroom", value: "Bathtub", label: "Bathtub", icon: Bath },
    {
      category: "Bathroom",
      value: "DoubleVanity",
      label: "DoubleVanity",
      icon: Bath,
    },
    {
      category: "Bathroom",
      value: "SingleVanity",
      label: "SingleVanity",
      icon: Bath,
    },
    {
      category: "Bathroom",
      value: "Hair Dryer",
      label: "Hair Dryer",
      icon: Shirt,
    },
    {
      category: "Bathroom",
      value: "Toiletries",
      label: "Toiletries",
      icon: Bath,
    },
    { category: "Bathroom", value: "Bidet", label: "Bidet", icon: Bath },
    {
      category: "Bathroom",
      value: "HeatedTowelRail",
      label: "HeatedTowelRail",
      icon: Shirt,
    },
    {
      category: "Bathroom",
      value: "Bathrobes",
      label: "Bathrobes",
      icon: Shirt,
    },
    { category: "Bathroom", value: "Towels", label: "Towels", icon: Bath },

    {
      category: "Dining Room",
      value: "diningTable",
      label: "Dining Table",
      icon: ChefHat,
    },
    { category: "Dining Room", value: "chairs", label: "Chairs", icon: Sofa },
    {
      category: "Dining Room",
      value: "highchair",
      label: "Highchair",
      icon: Sofa,
    },
    {
      category: "Dining Room",
      value: "barStools",
      label: "Bar Stools",
      icon: Sofa,
    },
    {
      category: "Dining Room",
      value: "buffetSideboard",
      label: "Buffet/Sideboard",
      icon: ChefHat,
    },
    {
      category: "Dining Room",
      value: "wineRack",
      label: "Wine Rack",
      icon: ChefHat,
    },

    {
      category: "Kitchen",
      value: "refrigerator",
      label: "Refrigerator",
      icon: ChefHat,
    },
    { category: "Kitchen", value: "oven", label: "Oven", icon: ChefHat },
    {
      category: "Kitchen",
      value: "microwave",
      label: "Microwave",
      icon: ChefHat,
    },
    {
      category: "Kitchen",
      value: "dishwasher",
      label: "Dishwasher",
      icon: ChefHat,
    },
    {
      category: "Kitchen",
      value: "coffeeMaker",
      label: "Coffee Maker",
      icon: ChefHat,
    },
    { category: "Kitchen", value: "toaster", label: "Toaster", icon: ChefHat },
    {
      category: "Kitchen",
      value: "kitchenware",
      label: "Kitchenware",
      icon: Utensils,
    },
    {
      category: "Kitchen",
      value: "cookingUtensils",
      label: "Cooking Utensils",
      icon: Utensils,
    },
    {
      category: "Kitchen",
      value: "dishesAndSilverware",
      label: "Dishes and Silverware",
      icon: Utensils,
    },
    {
      category: "Kitchen",
      value: "diningTable",
      label: "Dining Table",
      icon: ChefHat,
    },
    { category: "Kitchen", value: "chairs", label: "Chairs", icon: ChefHat },
    {
      category: "Kitchen",
      value: "kitchenIsland",
      label: "Kitchen Island",
      icon: ChefHat,
    },
    { category: "Kitchen", value: "blender", label: "Blender", icon: ChefHat },
    {
      category: "Kitchen",
      value: "foodProcessor",
      label: "Food Processor",
      icon: ChefHat,
    },
    {
      category: "Kitchen",
      value: "electricKettle",
      label: "Electric Kettle",
      icon: ChefHat,
    },

    { category: "Office", value: "desk", label: "Desk", icon: Briefcase },
    {
      category: "Office",
      value: "officeChair",
      label: "Office Chair",
      icon: Sofa,
    },
    { category: "Office", value: "lamp", label: "Lamp", icon: Flame },
    {
      category: "Office",
      value: "bookshelf",
      label: "Bookshelf",
      icon: Book,
    },
    { category: "Office", value: "printer", label: "Printer", icon: Dices },
    { category: "Office", value: "monitor", label: "Monitor", icon: Tv },
    {
      category: "Office",
      value: "ergonomicKeyboard",
      label: "Ergonomic Keyboard",
      icon: Sofa,
    },
    {
      category: "Office",
      value: "whiteboard",
      label: "Whiteboard",
      icon: ChefHat,
    },
    {
      category: "Outdoor",
      value: "patioFurniture",
      label: "Patio Furniture",
      icon: Sofa,
    },
    {
      category: "Outdoor",
      value: "bbqGrill",
      label: "BBQ Grill",
      icon: ChefHat,
    },
    { category: "Outdoor", value: "pool", label: "Pool", icon: Bath },
    { category: "Outdoor", value: "hotTub", label: "Hot Tub", icon: Bath },
    {
      category: "Outdoor",
      value: "sunLoungers",
      label: "Sun Loungers",
      icon: Bed,
    },
    {
      category: "Outdoor",
      value: "outdoorDiningSet",
      label: "Outdoor Dining Set",
      icon: Flame,
    },
    { category: "Outdoor", value: "garden", label: "Garden", icon: Flame },
    { category: "Outdoor", value: "firePit", label: "Fire Pit", icon: Flame },

    {
      category: "Laundry",
      value: "washingMachine",
      label: "Washing Machine",
      icon: Sofa,
    },
    { category: "Laundry", value: "dryer", label: "Dryer", icon: ChefHat },
    { category: "Laundry", value: "iron", label: "Iron", icon: Bath },
    {
      category: "Laundry",
      value: "ironingBoard",
      label: "Ironing Board",
      icon: Bath,
    },
    {
      category: "Laundry",
      value: "dryingRack",
      label: "Drying Rack",
      icon: Bed,
    },
    {
      category: "Laundry",
      value: "laundryBaskets",
      label: "Laundry Baskets",
      icon: Flame,
    },
    {
      category: "Laundry",
      value: "clothesHangers",
      label: "Clothes Hangers",
      icon: Flame,
    },
    { category: "Living Room", value: "tv", label: "TV", icon: Tv },
    {
      category: "Living Room",
      value: "coffeeTable",
      label: "Coffee Table",
      icon: Sofa,
    },
    {
      category: "Living Room",
      value: "armchair",
      label: "Armchair",
      icon: Sofa,
    },
    {
      category: "Living Room",
      value: "fireplace",
      label: "Fireplace",
      icon: Flame,
    },
    {
      category: "Living Room",
      value: "bookshelf",
      label: "Bookshelf",
      icon: Book,
    },
    {
      category: "Living Room",
      value: "smartTv",
      label: "Smart TV",
      icon: Sofa,
    },
    {
      category: "Living Room",
      value: "streamingDevice",
      label: "Streaming Device",
      icon: Sofa,
    },
    {
      category: "Living Room",
      value: "soundSystem",
      label: "Sound System",
      icon: Sofa,
    },
    {
      category: "Living Room",
      value: "boardGames",
      label: "Board Games",
      icon: Dices,
    },
  ];

  const ensuites = [
    { value: "toilet", label: "Toilet", icon: Bath },
    { value: "shower", label: "Shower", icon: Bath },
    { value: "bathtub", label: "Bathtub", icon: Bath },
    { value: "doubleVanity", label: "Double Vanity", icon: Bath },
    { value: "singleVanity", label: "Single Vanity", icon: Bath },
    { value: "hairDryer", label: "Hair Dryer", icon: Shirt },
    { value: "toiletries", label: "Toiletries", icon: Bath },
    { value: "towels", label: "Towels", icon: Bath },
    { value: "bathrobes", label: "Bathrobes", icon: Shirt },
    { value: "heatedTowelRail", label: "Heated Towel Rail", icon: Shirt },
    { value: "bidet", label: "Bidet", icon: Bath },
  ];

  const togglePropertySelection = (value: string) => {
    setChooseAmenities((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value)
        : [...prevState, value],
    );
  };
  const toggleEnsuiteSelection = (value: string) => {
    setChooseAmenitiesEnsuite((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value)
        : [...prevState, value],
    );
  };

  useEffect(() => {
    if (roomType) {
      setChooseAmenities([]);
      setChooseAmenitiesEnsuite([]);
    }
  }, [roomType]);

  return (
    <>
      <Text
        display={{
          base: "flex",
          sm: "none",
          md: "none",
          lg: "none",
          xl: "none",
        }}
        flexWrap="wrap"
        gap="16px"
        w={["100%", "100%", "100%", "100%", "100%"]}
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
        fontSize={["16px", "16px", "16px", "16px", "20px"]}
        color="gray.600"
        mt={"25px"}
      >
        Choose Amenities for {roomType}
      </Text>
      <Box
        display="flex"
        flexWrap="wrap"
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
        gap={{
          base: "10px",
          sm: "10px",
          md: "16px",
          lg: "16px",
          xl: "16px",
        }}
        mt={{
          base: "10px",
          sm: "50px",
          md: "50px",
          lg: "50px",
          xl: "50px",
        }}
      >
        {propertyTypes
          .filter((property) => property.category === roomType)
          .map((property) => (
            <Box
              key={property.value}
              as="button"
              onClick={() => togglePropertySelection(property.value)}
              className="animate__animated animate__fadeIn"
              p="18px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              borderRadius="32px"
              borderColor={
                chooseAmenities.includes(property.value)
                  ? "blue.400"
                  : "gray.300"
              }
              borderWidth="1px"
              bg={
                chooseAmenities.includes(property.value) ? "blue.50" : "white"
              }
              width={{
                base: "115px",
                sm: "115px",
                md: "155px",
                lg: "155px",
                xl: "155px",
              }}
              height="120px"
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
                bg: "blue.50",
                borderColor: "blue.400",
              }}
              fontWeight={
                chooseAmenities.includes(property.value) ? "semibold" : "normal"
              }
            >
              <property.icon
                size={24}
                style={{ marginBottom: "12px", color: "black" }}
              />
              <Text fontSize="sm" textAlign="center" color="black">
                {property.label}
              </Text>
            </Box>
          ))}
      </Box>

      {/* Chakra UI Accordion */}
      <AccordionRoot collapsible>
        <AccordionItem value={""}>
          <AccordionItemTrigger>
            <Text
              transition="all 0.3s"
              width={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "200px",
                xl: "200px",
              }}
              p={4}
              bg={"white"}
              color={"black"}
              border="1px solid"
              borderRadius="16px"
              borderColor={"gray.300"}
              _hover={{
                bg: "black",
                color: "white",
              }}
            >
              Add Ensuite
            </Text>
          </AccordionItemTrigger>
          <AccordionItemContent>
            <Box
              mt={"16px"}
              display="flex"
              flexWrap="wrap"
              alignItems={{ base: "center", lg: "start" }}
              justifyContent={{ base: "center", lg: "start" }}
              gap={{
                base: "10px",
                sm: "10px",
                md: "16px",
                lg: "16px",
                xl: "16px",
              }}
              p={{
                base: "0px",
                sm: "0px",
                md: "12px",
                lg: "12px",
                xl: "12px",
              }}
            >
              {ensuites.map((ensuite) => (
                <Box
                  key={ensuite.value}
                  as="button"
                  onClick={() => toggleEnsuiteSelection(ensuite.value)}
                  className="animate__animated animate__fadeIn"
                  p="18px"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="32px"
                  borderColor={
                    chooseAmenitiesEnsuite.includes(ensuite.value)
                      ? "blue.400"
                      : "gray.300"
                  }
                  borderWidth="1px"
                  bg={
                    chooseAmenitiesEnsuite.includes(ensuite.value)
                      ? "blue.50"
                      : "white"
                  }
                  width={{
                    base: "115px",
                    sm: "115px",
                    md: "155px",
                    lg: "155px",
                    xl: "155px",
                  }}
                  height="120px"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                    bg: "blue.50",
                    borderColor: "blue.400",
                  }}
                  fontWeight={
                    chooseAmenitiesEnsuite.includes(ensuite.value)
                      ? "semibold"
                      : "normal"
                  }
                >
                  <ensuite.icon
                    size={24}
                    style={{ marginBottom: "12px", color: "black" }}
                  />
                  <Text fontSize="sm" textAlign="center" color="black">
                    {ensuite.label}
                  </Text>
                </Box>
              ))}
            </Box>
          </AccordionItemContent>
        </AccordionItem>
      </AccordionRoot>

      <Box
        mt={4}
        w={["100%", "100%", "100%", "100%", "100%"]}
        display="flex"
        flexDir={"column"}
        alignItems={{
          base: "start",
          sm: "start",
          md: "start",
          lg: "start",
          xl: "start",
        }}
        justifyContent={{
          base: "start",
          sm: "start",
          md: "start",
          lg: "start",
          xl: "start",
        }}
      >
        {/* Selected Bedroom Amenities */}
        <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
          {chooseAmenities.length > 0 ? (
            chooseAmenities.map((item, index) => (
              <Box
                key={index}
                border={"1px solid lightgray"}
                bg={"gray.50"}
                p={2}
                px={3}
                rounded={"xl"}
              >
                {propertyTypes.find((prop) => prop.value === item)?.label ||
                  item}
              </Box>
            ))
          ) : (
            <Text fontSize="sm" color="gray.500">
              No amenities selected.
            </Text>
          )}
        </Box>

        {/* Selected Ensuite Amenities */}
        <Box display="flex" flexWrap="wrap" gap={1}>
          {chooseAmenitiesEnsuite.length > 0 ? (
            chooseAmenitiesEnsuite.map((item, index) => (
              <Box
                key={index}
                border={"1px solid lightgray"}
                bg={"gray.50"}
                p={2}
                px={3}
                rounded={"xl"}
              >
                {propertyTypes.find((prop) => prop.value === item)?.label ||
                  item}
              </Box>
            ))
          ) : (
            <Text mt={2} fontSize="sm" color="gray.500">
              No ensuite amenities selected.
            </Text>
          )}
        </Box>
      </Box>
    </>
  );
};

export default AmenitiesTypes;
