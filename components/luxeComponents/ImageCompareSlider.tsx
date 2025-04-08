import React, { useState, useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import badImg from "@/public/images/houseImg/badhouse.png";
import goodImg from "@/public/images/houseImg/goodHouse.png";
const ImageCompareSlider = () => {
  // Define the image URLs as plain strings.
  const leftImage = goodImg.src;  // Use .src to get the URL
  const rightImage = badImg.src;
  

  const containerRef = useRef(null);
  const [sliderX, setSliderX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  // Set initial container width and slider position; update on window resize.
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerWidth(width);
        setSliderX(width / 2);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Mouse and touch event handlers to update the slider's position.
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let newX = e.clientX - rect.left;
    if (newX < 0) newX = 0;
    if (newX > containerWidth) newX = containerWidth;
    setSliderX(newX);
  };
  const handleMouseUp = () => setIsDragging(false);
  const handleTouchStart = () => setIsDragging(true);
  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let newX = e.touches[0].clientX - rect.left;
    if (newX < 0) newX = 0;
    if (newX > containerWidth) newX = containerWidth;
    setSliderX(newX);
  };
  const handleTouchEnd = () => setIsDragging(false);

  return (
    <Box
      ref={containerRef}
      position="relative"
      width="100%"
      overflow="hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      cursor={isDragging ? "grabbing" : "grab"}
      // Prevent user selection in the container.
      style={{ userSelect: "none" }}
    >
      {/* Base image */}
      <Box
        as="img"
        src={leftImage}
        width="100%"
        height="100%"
        display="block"
        objectFit={"cover"}
        draggable={false}
        style={{ userSelect: "none", pointerEvents: "none" }}
      />

      {/* Overlay image with dynamic clipping */}
      <Box
        as="img"
        src={rightImage}
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        objectFit="cover"
        draggable={false}
        style={{
          clipPath: `inset(0 ${containerWidth - sliderX - 5}px 0 0)`,
          userSelect: "none",
          pointerEvents: "none",
          filter: "blur(1px)",
        }}
      />

      {/* Before and After Labels */}
      <Box
        position="absolute"
        top="10px"
        left="10px"
        zIndex="3"
        bg="rgba(255, 255, 255, 0.8)"
        px="3"
        py="1"
        borderRadius="20px"
        fontSize="sm"
        fontWeight="bold"
      >
        Before
      </Box>
      <Box
        position="absolute"
        top="10px"
        right="10px"
        zIndex="3"
        bg="rgba(255, 255, 255, 0.8)"
        px="3"
        py="1"
  borderRadius="20px"
        fontSize="sm"
        fontWeight="bold"
      >
        After
      </Box>

      {/* Draggable slider handle */}
      <Box
        position="absolute"
        top="0"
        left={`${sliderX}px`}
        height="100%"
        width="4px"
        bg="white"
        zIndex="2"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        cursor="ew-resize"
      >
        <Box
          position="absolute"
          top="50%"
          left="-15px"
          transform="translateY(-50%)"
          width="30px"
          height="30px"
          bg="white"
          borderRadius="full"
          border="2px solid teal"
          boxShadow="lg"
          _hover={{ transform: "translateY(-50%) scale(1.1)" }}
          transition="transform 0.2s ease"
        />
      </Box>
    </Box>
  );
};

export default ImageCompareSlider;
