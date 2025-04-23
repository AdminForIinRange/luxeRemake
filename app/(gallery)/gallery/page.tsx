"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import TitleSubheading from "@/components/luxeComponents/Text/titleSubheading";
import Aos from "aos";
import "aos/dist/aos.css";
import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation";
import {
  DialogContent,
  DialogCloseTrigger,
  DialogRoot,
} from "@/components/chakra-snippets/dialog";
import DefaultSlider from "@/components/carousel/DefaultSlider";

import houseOneImg1 from "@/public/images/dalts/houseOne/WEB/1.jpg"
import houseOneImg2 from "@/public/images/dalts/houseOne/WEB/2.jpg"
import houseOneImg3 from "@/public/images/dalts/houseOne/WEB/3.jpg"
import houseOneImg4 from "@/public/images/dalts/houseOne/WEB/4.jpg"
import houseOneImg5 from "@/public/images/dalts/houseOne/WEB/5.jpg"
import houseOneImg6 from "@/public/images/dalts/houseOne/WEB/6.jpg"
import houseOneImg7 from "@/public/images/dalts/houseOne/WEB/7.jpg"
import houseOneImg8 from "@/public/images/dalts/houseOne/WEB/8.jpg"
import houseOneImg9 from "@/public/images/dalts/houseOne/WEB/9.jpg"
import houseOneImg10 from "@/public/images/dalts/houseOne/WEB/10.jpg"

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false, mirror: true });
  }, []);

  // STATES FOR THE GALLERY & MODAL
  const [clickedImage, setClickedImage] = useState<{
    img: string;
    title: string;
    subheading: string;
    categories: string[];
    brand: string;
    carasoleImg?: { img1: string; img2: string; img3: string }[];
  } | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // STATES FOR FILTER & SEARCH (lifted from v0 FilterSearch)
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(true);

  // Category list (from v0)
  const categories = [
    "Cleaning",
    "Linen",
    "Property Management",
    "Furnishing",
    "Styling",
    "Interior",
    "Photography",
  ];

  // Toggle a category on/off
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  // Clear filters
  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchTerm("");
  };

  // Toggle expand/collapse for the categories list

  // Gallery items (sample data)
  const galleryItems = [
    {
      img: houseOneImg10,
      title: "Property Management",
      subheading:
        "Comprehensive management service including all our offerings.",
      categories: ["Property Management"],
      brand: "BrandX",
      carasoleImg: [
        {
          img1:houseOneImg10,
          img2:houseOneImg2,
          img3:houseOneImg3,
          img4:houseOneImg4,
          img5:houseOneImg5,
          img6:houseOneImg6,
          img7:houseOneImg7,
          img8:houseOneImg8,
          img9:houseOneImg9,
          img10:houseOneImg1,
        },
      ],
    },
 
  
    // Add more items as needed...
  ];

  // Filtering logic based on search term and selected categories
  const filteredGalleryItems = galleryItems.filter((item) => {
    const lowerSearch = searchTerm.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(lowerSearch) ||
      item.subheading.toLowerCase().includes(lowerSearch);
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((cat) => item.categories.includes(cat));
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <TitleSubheading
        title="Gallery"
        subheading="Check out our latest work."
      />

      <HStack
        mt={["100px", "100px", "100px", "100px", "100px", "100px"]}
        w="100%"
        h="100%"
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        fontFamily="raleway"
        gap="20px"
        align="start"
        justify="center"
        flexWrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
      >
        {/* LEFT SIDEBAR: Integrated Filter & Search (v0 style) */}
     
      

        {/* RIGHT COLUMN: Gallery Grid */}
        <HStack
          w="100%"
          h="100%"
          justify="center"
          align="center"
          flexWrap="wrap"
          gap={["25px", "25px", "25px", "25px", "25px", "25px"]}
        >
{filteredGalleryItems.map((item, index) => (
  <VStack key={index}>
    <Box
      onClick={() => {
        setClickedImage(item);
        setModalOpen(true);
      }}
      /* ★ HERE ★ */
      backgroundImage={`url(${item.img.src})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      transition="all 0.3s"
      w={["250px", "300px", "350px"]}
      h={["250px", "300px", "350px"]}
      borderRadius="16px"
      _hover={{ transform: "scale(1.01)" }}
      cursor="pointer"
      display="flex"
      p="30px"
    >
      <VStack
        color="white"
        mt="20px"
        w="100%"
        h="100%"
        justifyContent="end"
        alignItems="end"
      >
        {/* overlay text, etc. */}
      </VStack>
    </Box>
  </VStack>
))}

        </HStack>
      </HStack>

      {/* Modal Dialog for Clicked Image */}
      <DialogRoot
        size="full"
        open={modalOpen}
        onOpenChange={(details) => setModalOpen(details.open)}
      >
        <DialogContent
          bg="white"
          color="white"
          rounded="10px"
        
          w={["100%", "100%", "100%", "100%", "100%", "100%"]}
          h={["100%", "100%", "100%", "100%", "100%", "100%"]}
          borderRadius="10px"
        >
          <HStack justify="center" align="center" w="100%" h="100%">
            {clickedImage && (
              <Box  w={["100%", "100%", "100%", "100%", "100%", "100%"]} >
                <DefaultSlider items={clickedImage.carasoleImg?.[0]} />
              </Box>
            )}
          </HStack>
          <DialogCloseTrigger
            rounded="full"
            color="black"
            w="40px"
            h="40px"
            border="1px black solid"
            position="absolute"
            top="10px"
            right="10px"
            onClick={() => setModalOpen(false)}
            _focus={{ outline: "none" }}
          />
        </DialogContent>
      </DialogRoot>

      {/* Separator */}
      <HStack
        mt={["100px", "100px", "100px", "100px", "100px", "100px"]}
        justify="center"
        align="center"
        w="100%"
      >
        <Box w="90%" borderTop="1px solid #e0e0e0" />
      </HStack>

      <ScheduleConsultation />
    </>
  );
};

export default Gallery;
