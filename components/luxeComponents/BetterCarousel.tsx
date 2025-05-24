"use client";

import { useState } from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react"; // Importing Cheka UI Box
import { motion, AnimatePresence } from "framer-motion";

// Importing images
import houseOneImg2 from "@/public/images/dalts/houseOne/WEB/2.jpg";
import houseOneImg10 from "@/public/images/dalts/houseOne/WEB/10.jpg";
import houseTwoImg1 from "@/public/images/dalts/houseTwo/WEB/1.jpg";
import houseTwoImg2 from "@/public/images/dalts/houseTwo/WEB/2.jpg";
import houseThreeImg1 from "@/public/images/dalts/houseThree/WEB/1.jpg";
import houseThreeImg2 from "@/public/images/dalts/houseThree/WEB/2.jpg";
import houseFourImg1 from "@/public/images/dalts/houseFour/WEB/1.jpg";
import houseFourImg2 from "@/public/images/dalts/houseFour/WEB/2.jpg";
import houseFourImg7 from "@/public/images/dalts/houseFour/WEB/7.jpg";
import houseFourImg10 from "@/public/images/dalts/houseFour/WEB/10.jpg";

// Main component
// eslint-disable-next-line import/no-unused-modules
export default function ImageCarousel() {
  const images = [
    houseOneImg10,
    houseOneImg2,
    houseTwoImg1,
    houseTwoImg2,
    houseThreeImg1,
    houseThreeImg2,
    houseFourImg1,
    houseFourImg2,
    houseFourImg7,
    houseFourImg10,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      padding="20px"
      bg="gray.100"
      position="relative"
      rounded={"16px"}
      h={["350px", "350px", "350px", "500px", "500px", "600px"]}
    >
      {/* Main image carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", height: "500px", position: "relative" }}
        >
          <Box width="100%" height="100%" position="relative" overflow="hidden">
            <Image
loading="lazy"
              src={images[currentImage] || "/placeholder.svg"}
              alt={`carousel-image-${currentImage}`}
              fill
              className="object-cover"
              priority={true}
quality={75}             />
          </Box>
        </motion.div>
      </AnimatePresence>

      {/* Thumbnails */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        padding="10px"
        display="flex"
        justifyContent="center"
        zIndex="10"
        gap={2}
      >
        {images.map((img, index) => (
          <Box
            key={index}
            onClick={() => handleThumbnailClick(index)}
            cursor="pointer"
            padding="8px"
            borderRadius="4px"
            transition="all 0.3s"
            _hover={{ transform: "scale(1.1)" }}
            border={
              currentImage === index
                ? "2px solid white"
                : "2px solid transparent"
            }
          >
            <Box>
              {" "}
              <Image
loading="lazy"
                style={{ borderRadius: "4px" }}
                src={img || "/placeholder.svg"}
                alt={`thumbnail-${index}`}
                width={100}
                height={50}
                objectFit="cover"
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
