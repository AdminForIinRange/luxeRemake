"use client";

import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
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
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import houseOneImg1 from "@/public/images/dalts/houseOne/WEB/1.jpg";
import houseOneImg2 from "@/public/images/dalts/houseOne/WEB/2.jpg";
import houseOneImg3 from "@/public/images/dalts/houseOne/WEB/3.jpg";
import houseOneImg4 from "@/public/images/dalts/houseOne/WEB/4.jpg";
import houseOneImg5 from "@/public/images/dalts/houseOne/WEB/5.jpg";
import houseOneImg6 from "@/public/images/dalts/houseOne/WEB/6.jpg";
import houseOneImg7 from "@/public/images/dalts/houseOne/WEB/7.jpg";
import houseOneImg8 from "@/public/images/dalts/houseOne/WEB/8.jpg";
import houseOneImg9 from "@/public/images/dalts/houseOne/WEB/9.jpg";
import houseOneImg10 from "@/public/images/dalts/houseOne/WEB/10.jpg";

import houseTwoImg1 from "@/public/images/dalts/houseTwo/WEB/1.jpg";
import houseTwoImg2 from "@/public/images/dalts/houseTwo/WEB/2.jpg";
import houseTwoImg3 from "@/public/images/dalts/houseTwo/WEB/3.jpg";
import houseTwoImg4 from "@/public/images/dalts/houseTwo/WEB/4.jpg";
import houseTwoImg5 from "@/public/images/dalts/houseTwo/WEB/5.jpg";
import houseTwoImg6 from "@/public/images/dalts/houseTwo/WEB/6.jpg";
import houseTwoImg7 from "@/public/images/dalts/houseTwo/WEB/7.jpg";
import houseTwoImg8 from "@/public/images/dalts/houseTwo/WEB/8.jpg";
import houseTwoImg9 from "@/public/images/dalts/houseTwo/WEB/9.jpg";
import houseTwoImg10 from "@/public/images/dalts/houseTwo/WEB/10.jpg";

import houseThreeImg1 from "@/public/images/dalts/houseThree/WEB/1.jpg";
import houseThreeImg2 from "@/public/images/dalts/houseThree/WEB/2.jpg";
import houseThreeImg3 from "@/public/images/dalts/houseThree/WEB/3.jpg";
import houseThreeImg4 from "@/public/images/dalts/houseThree/WEB/4.jpg";
import houseThreeImg5 from "@/public/images/dalts/houseThree/WEB/5.jpg";
import houseThreeImg6 from "@/public/images/dalts/houseThree/WEB/6.jpg";
import houseThreeImg7 from "@/public/images/dalts/houseThree/WEB/7.jpg";
import houseThreeImg8 from "@/public/images/dalts/houseThree/WEB/8.jpg";
import houseThreeImg9 from "@/public/images/dalts/houseThree/WEB/9.jpg";
import houseThreeImg10 from "@/public/images/dalts/houseThree/WEB/10.jpg";

import houseFourImg1 from "@/public/images/dalts/houseFour/WEB/1.jpg";
import houseFourImg2 from "@/public/images/dalts/houseFour/WEB/2.jpg";
import houseFourImg3 from "@/public/images/dalts/houseFour/WEB/3.jpg";
import houseFourImg4 from "@/public/images/dalts/houseFour/WEB/4.jpg";
import houseFourImg5 from "@/public/images/dalts/houseFour/WEB/5.jpg";
import houseFourImg6 from "@/public/images/dalts/houseFour/WEB/6.jpg";
import houseFourImg7 from "@/public/images/dalts/houseFour/WEB/7.jpg";
import houseFourImg8 from "@/public/images/dalts/houseFour/WEB/8.jpg";
import houseFourImg9 from "@/public/images/dalts/houseFour/WEB/9.jpg";
import houseFourImg10 from "@/public/images/dalts/houseFour/WEB/10.jpg";

import houseFiveImg1 from "@/public/images/dalts/houseFive/WEB/1.jpg";
import houseFiveImg2 from "@/public/images/dalts/houseFive/WEB/2.jpg";
import houseFiveImg3 from "@/public/images/dalts/houseFive/WEB/3.jpg";
import houseFiveImg4 from "@/public/images/dalts/houseFive/WEB/4.jpg";
import houseFiveImg5 from "@/public/images/dalts/houseFive/WEB/5.jpg";
import houseFiveImg6 from "@/public/images/dalts/houseFive/WEB/6.jpg";
import houseFiveImg7 from "@/public/images/dalts/houseFive/WEB/7.jpg";
import houseFiveImg8 from "@/public/images/dalts/houseFive/WEB/8.jpg";
import houseFiveImg9 from "@/public/images/dalts/houseFive/WEB/9.jpg";
import houseFiveImg10 from "@/public/images/dalts/houseFive/WEB/10.jpg";

import houseSixImg1 from "@/public/images/dalts/houseSix/WEB/1.jpg";
import houseSixImg2 from "@/public/images/dalts/houseSix/WEB/2.jpg";
import houseSixImg3 from "@/public/images/dalts/houseSix/WEB/3.jpg";
import houseSixImg4 from "@/public/images/dalts/houseSix/WEB/4.jpg";
import houseSixImg5 from "@/public/images/dalts/houseSix/WEB/5.jpg";
import houseSixImg6 from "@/public/images/dalts/houseSix/WEB/6.jpg";
import houseSixImg7 from "@/public/images/dalts/houseSix/WEB/7.jpg";
import houseSixImg8 from "@/public/images/dalts/houseSix/WEB/8.jpg";
import houseSixImg9 from "@/public/images/dalts/houseSix/WEB/9.jpg";
import Image from "next/image";

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
    location?: string;
    bedrooms?: number;
    bathrooms?: number;
    carasoleImg?: any;
  } | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");

  // STATES FOR FILTER & SEARCH
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(true);

  // Category list
  const categories = [
    "All",
    "Property Management",
    "Interior Design",
    "Styling",
    "Renovation",
  ];

  // Toggle a category
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setSelectedCategories([]);
    } else {
      setSelectedCategories([category]);
    }
  };

  // Enhanced gallery items with more details
  const galleryItems = [
    {
      img: houseOneImg10,
      title: "Modern Beachside Villa",
      subheading: "Luxury property with ocean views and premium amenities",
      categories: ["Property Management"],
      brand: "Luxe Properties",
      location: "Bondi Beach",
      bedrooms: 4,
      bathrooms: 3,
      carasoleImg: [
        {
          img1: houseOneImg10,
          img2: houseOneImg2,
          img3: houseOneImg3,
          img4: houseOneImg4,
          img5: houseOneImg5,
          img6: houseOneImg6,
          img7: houseOneImg7,
          img8: houseOneImg8,
          img9: houseOneImg9,
          img10: houseOneImg1,
        },
      ],
    },
    {
      img: houseTwoImg10,
      title: "Contemporary Apartment",
      subheading: "Urban living with designer finishes and city views",
      categories: ["Interior Design", "Styling"],
      brand: "Urban Dwellings",
      location: "CBD",
      bedrooms: 2,
      bathrooms: 2,
      carasoleImg: [
        {
          img1: houseTwoImg10,
          img2: houseTwoImg2,
          img3: houseTwoImg3,
          img4: houseTwoImg4,
          img5: houseTwoImg5,
          img6: houseTwoImg6,
          img7: houseTwoImg7,
          img8: houseTwoImg8,
          img9: houseTwoImg9,
          img10: houseTwoImg1,
        },
      ],
    },
    {
      img: houseThreeImg10,
      title: "Renovated Heritage Home",
      subheading: "Classic architecture with modern interior updates",
      categories: ["Renovation", "Interior Design"],
      brand: "Heritage Renovations",
      location: "Paddington",
      bedrooms: 3,
      bathrooms: 2,
      carasoleImg: [
        {
          img1: houseThreeImg10,
          img2: houseThreeImg2,
          img3: houseThreeImg3,
          img4: houseThreeImg4,
          img5: houseThreeImg5,
          img6: houseThreeImg6,
          img7: houseThreeImg7,
          img8: houseThreeImg8,
          img9: houseThreeImg9,
          img10: houseThreeImg1,
        },
      ],
    },
    {
      img: houseFourImg10,
      title: "Luxury Penthouse",
      subheading: "Exclusive top-floor residence with panoramic views",
      categories: ["Property Management", "Styling"],
      brand: "Elite Properties",
      location: "Darling Harbour",
      bedrooms: 3,
      bathrooms: 3,
      carasoleImg: [
        {
          img1: houseFourImg10,
          img2: houseFourImg2,
          img3: houseFourImg3,
          img4: houseFourImg4,
          img5: houseFourImg5,
          img6: houseFourImg6,
          img7: houseFourImg7,
          img8: houseFourImg8,
          img9: houseFourImg9,
          img10: houseFourImg1,
        },
      ],
    },
    {
      img: houseFiveImg1,
      title: "Waterfront Estate",
      subheading: "Expansive property with private dock and landscaped gardens",
      categories: ["Property Management"],
      brand: "Prestige Homes",
      location: "Rose Bay",
      bedrooms: 5,
      bathrooms: 4,
      carasoleImg: [
        {
          img1: houseFiveImg1,
          img2: houseFiveImg2,
          img3: houseFiveImg3,
          img4: houseFiveImg4,
          img5: houseFiveImg5,
          img6: houseFiveImg6,
          img7: houseFiveImg7,
          img8: houseFiveImg8,
          img9: houseFiveImg9,
          img10: houseFiveImg10,
        },
      ],
    },
    {
      img: houseSixImg1,
      title: "Minimalist Townhouse",
      subheading: "Clean lines and thoughtful design in a central location",
      categories: ["Interior Design", "Renovation"],
      brand: "Modern Living",
      location: "Surry Hills",
      bedrooms: 3,
      bathrooms: 2,
      carasoleImg: [
        {
          img1: houseSixImg1,
          img2: houseSixImg2,
          img3: houseSixImg3,
          img4: houseSixImg4,
          img5: houseSixImg5,
          img6: houseSixImg6,
          img7: houseSixImg7,
          img8: houseSixImg8,
          img9: houseSixImg9,
          img10: houseSixImg9,
        },
      ],
    },
  ];

  // Filtering logic based on search term and selected categories
  const filteredGalleryItems = galleryItems.filter((item) => {
    const lowerSearch = searchTerm.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(lowerSearch) ||
      item.subheading.toLowerCase().includes(lowerSearch) ||
      (item.location && item.location.toLowerCase().includes(lowerSearch));

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((cat) => item.categories.includes(cat));

    return matchesSearch && matchesCategory;
  });

  // Items per page
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredGalleryItems.length / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredGalleryItems.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      {/* Enhanced Header Section with Decorative Elements */}
      <Box
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        width="100%"
        paddingY={["60px", "70px", "80px"]}
        overflow="hidden"
      >
        {/* Decorative elements */}
        <Box
          position="absolute"
          top="20px"
          left="10%"
          width="40px"
          height="40px"
          borderTop="2px solid #e0e0e0"
          borderLeft="2px solid #e0e0e0"
          opacity="0.6"
          data-aos="fade-right"
        />
        <Box
          position="absolute"
          bottom="20px"
          right="10%"
          width="40px"
          height="40px"
          borderBottom="2px solid #e0e0e0"
          borderRight="2px solid #e0e0e0"
          opacity="0.6"
          data-aos="fade-left"
        />

        {/* Main heading with enhanced typography */}
        <Box position="relative" data-aos="fade-up">
          <Text
            as="h1"
            fontSize={["42px", "48px", "56px"]}
            fontWeight="700"
            fontFamily="arial"
            letterSpacing="-0.02em"
            marginBottom="6px"
            color="#000"
          >
            Gallery
          </Text>
          <Box
            width="40px"
            height="3px"
            backgroundColor="#000"
            margin="0 auto"
            marginBottom="20px"
          />
          <Text
            fontSize={["16px", "18px", "20px"]}
            fontWeight="400"
            fontFamily="arial"
            color="#666"
            maxWidth="600px"
            lineHeight="1.6"
          >
            Check out our latest work showcasing premium properties and
            exceptional interior design.
          </Text>
        </Box>
      </Box>

      {/* Category Filter Tabs */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        marginBottom="40px"
        paddingX={["20px", "30px"]}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={["10px", "15px", "20px"]}
        >
          {categories.map((category) => (
            <Box
              key={category}
              onClick={() => handleCategoryChange(category)}
              cursor="pointer"
              paddingX={["12px", "16px", "20px"]}
              paddingY={["8px", "10px", "12px"]}
              borderRadius="30px"
              backgroundColor={
                activeCategory === category ? "#000" : "transparent"
              }
              border="1px solid"
              borderColor={activeCategory === category ? "#000" : "#e0e0e0"}
              transition="all 0.3s ease"
              _hover={{
                backgroundColor:
                  activeCategory === category ? "#000" : "#f5f5f5",
              }}
            >
              <Text
                fontSize={["14px", "15px", "16px"]}
                fontWeight={activeCategory === category ? "600" : "400"}
                color={activeCategory === category ? "#fff" : "#333"}
                fontFamily="arial"
              >
                {category}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Main Gallery Container with Enhanced Layout */}
      <Box
        width="100%"
        maxWidth="1400px"
        margin="0 auto"
        paddingX={["20px", "30px", "40px", "60px"]}
        paddingBottom="80px"
      >
        {/* Gallery Grid with Improved Visual Appeal */}
        <Box
          display="grid"
          gridTemplateColumns={[
            "1fr",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={["24px", "30px", "40px"]}
          width="100%"
        >
          {currentItems.map((item, index) => (
            <Box
              key={index}
              position="relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Property Image with Enhanced Hover Effects */}
              <Box
                position="relative"
                onClick={() => {
                  setClickedImage(item);
                  setModalOpen(true);
                }}
                cursor="pointer"
                overflow="hidden"
                borderRadius="16px"
                boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                height={["280px", "300px", "320px"]}
                width="100%"
              >
                {/* Main Image */}
                <Box
                  position="relative" // establish containing block for the Image
                  overflow="hidden" // crop image when scaling
                  height="100%"
                  width="100%"
                  transition="transform 0.5s ease"
                  _hover={{ transform: "scale(1.05)" }}
                >
                  <Image
                    quality={70}
                    loading="lazy"
                    src={item.img.src}
                    alt={item.img.alt ?? ""}
                    fill // makes the image cover the Box entirely
                    style={{
                      objectFit: "cover", // replicate background-size: cover
                      objectPosition: "center", // replicate background-position: center
                    }}
                    sizes="(max-width: 768px) 100vw, 100vw" // adjust as needed for responsiveness
                  />
                </Box>

                {/* Hover Overlay with Property Details */}
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  padding="20px"
                  background="linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)"
                  color="white"
                  opacity="0"
                  transition="opacity 0.3s ease"
                  _groupHover={{
                    opacity: 1,
                  }}
                  borderBottomRadius="16px"
                  height="70%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  pointerEvents="none"
                />

                {/* Category Tag */}
                <Box
                  position="absolute"
                  top="16px"
                  left="16px"
                  paddingX="12px"
                  paddingY="6px"
                  backgroundColor="rgba(0,0,0,0.7)"
                  borderRadius="20px"
                  zIndex="1"
                >
                  <Text
                    fontSize="12px"
                    fontWeight="600"
                    color="white"
                    textTransform="uppercase"
                    letterSpacing="0.5px"
                  >
                    {item.categories[0]}
                  </Text>
                </Box>
              </Box>

              {/* Property Information Below Image */}
              <Box paddingTop="16px" paddingX="4px">
                <Text
                  fontSize={["18px", "20px"]}
                  fontWeight="600"
                  color="#000"
                  marginBottom="4px"
                  fontFamily="arial"
                >
                  {item.title}
                </Text>

                <Box display="flex" alignItems="center" marginBottom="8px">
                  <Text fontSize="14px" color="#666" fontFamily="arial">
                    {item.location}
                  </Text>
                </Box>

                <Box display="flex" alignItems="center" gap="16px">
                  <Box display="flex" alignItems="center">
                    <Text fontSize="14px" fontWeight="500" color="#333">
                      {item.bedrooms} Beds
                    </Text>
                  </Box>

                  <Box display="flex" alignItems="center">
                    <Text fontSize="14px" fontWeight="500" color="#333">
                      {item.bathrooms} Baths
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="60px"
            gap="8px"
          >
            {Array.from({ length: totalPages }).map((_, index) => (
              <Box
                key={index}
                onClick={() => paginate(index + 1)}
                cursor="pointer"
                width="10px"
                height="10px"
                borderRadius="50%"
                backgroundColor={currentPage === index + 1 ? "#000" : "#e0e0e0"}
                transition="all 0.3s ease"
                _hover={{
                  backgroundColor: currentPage === index + 1 ? "#000" : "#aaa",
                }}
              />
            ))}
          </Box>
        )}
      </Box>

      {/* Enhanced Modal Dialog for Clicked Image */}
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
          {clickedImage && (
            <Box
              position="relative"
              width="100%"
              height="100%"
              display="flex"
              flexDirection="column"
            >
              {/* Property Details Header */}
              <Box
                padding="20px"
                borderBottom="1px solid #eee"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                backgroundColor="white"
                color="black"
              >
                <Box>
                  <Text
                    fontSize={["20px", "24px"]}
                    fontWeight="700"
                    fontFamily="arial"
                  >
                    {clickedImage.title}
                  </Text>
                  <Text fontSize="16px" color="#666" fontFamily="arial">
                    {clickedImage.location}
                  </Text>
                </Box>

                <Box display="flex" alignItems="center" gap="16px">
                  <Box display="flex" alignItems="center" gap="4px">
                    <Text fontSize="14px" fontWeight="500" color="#333">
                      {clickedImage.bedrooms} Beds
                    </Text>
                  </Box>

                  <Box display="flex" alignItems="center" gap="4px">
                    <Text fontSize="14px" fontWeight="500" color="#333">
                      {clickedImage.bathrooms} Baths
                    </Text>
                  </Box>
                </Box>
              </Box>

              {/* Slider Container */}
              <Box
                flex="1"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
                position="relative"
                backgroundColor="#f5f5f5"
              >
                <Box width={["95%", "95%", "95%", "90%", "85%", "80%"]}>
                  <DefaultSlider items={clickedImage.carasoleImg?.[0]} />
                </Box>

                {/* Navigation Arrows */}
              </Box>

              {/* Property Description Footer */}
              <Box
                padding="20px"
                borderTop="1px solid #eee"
                backgroundColor="white"
                color="black"
              >
                <Text
                  fontSize="16px"
                  lineHeight="1.6"
                  color="#333"
                  fontFamily="arial"
                >
                  {clickedImage.subheading}
                </Text>
              </Box>
            </Box>
          )}

          {/* Enhanced Close Button */}
          <DialogCloseTrigger
            as={Box}
            position="absolute"
            top="100px"
            right="16px"
            width="40px"
            height="40px"
            borderRadius="50%"
            backgroundColor="rgba(255,255,255,0.9)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            boxShadow="0 2px 10px rgba(0,0,0,0.1)"
            zIndex="10"
            onClick={() => setModalOpen(false)}
            _hover={{
              backgroundColor: "white",
            }}
            _focus={{ outline: "none" }}
          >
            <X size={20} color="#000" />
          </DialogCloseTrigger>
        </DialogContent>
      </DialogRoot>

      {/* Enhanced Separator with Design Element */}
      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        marginY={["60px", "80px", "100px"]}
        paddingX="20px"
      >
        <Box width="100%" height="1px" backgroundColor="#e0e0e0" />
        <Box position="absolute" backgroundColor="white" paddingX="20px">
          <Box
            width="40px"
            height="40px"
            borderRadius="50%"
            border="1px solid #e0e0e0"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              width="20px"
              height="20px"
              borderRadius="50%"
              backgroundColor="#000"
            />
          </Box>
        </Box>
      </Box>

      <ScheduleConsultation />
    </>
  );
};

export default Gallery;
