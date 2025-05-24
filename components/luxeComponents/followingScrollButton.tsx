import { Box, HStack, Icon } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";

const FollowingScrollButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // To track visibility of the button

  // Detect scroll event and check for 'get-started-button' visibility
  useEffect(() => {
    const handleScroll = () => {
      const getStartedElement = document.getElementById("get-started-button");
      if (getStartedElement) {
        const rect = getStartedElement.getBoundingClientRect();

        // Check if 'get-started-button' is within the viewport
        // If it is, hide the button entirely
        if (rect.top <= window.innerHeight) {
          setIsVisible(false); // Hide button once the 'get-started-button' is in view
        } else {
          setIsVisible(true); // Show button when it's not in view
        }
      }

      // Track scroll position
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && ( // Button will only be rendered if isVisible is true
        <HStack
          justify={"center"}
          align={"center"}
          w={"100%"}
          zIndex={3}
          position={"sticky"}
          left={0}
          top={isScrolled ? 870 : 700}
          transition="all 1s ease-in-out"
        >
          <Box
            transition="all 1s ease-in-out"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="15px"
            fontFamily="arial"
            cursor="pointer"
            _hover={{
              scale: isScrolled ? 1.3 : 1.1,
              fontWeight: "700",
              px: isScrolled ? 4 : "80px",
              bg: "#0A0F29",
            }}
            p={4}
            bg="#0A0F29"
            color="white"
            rounded={isScrolled ? "100px" : "30px"}
            px={isScrolled ? 4 : "8"}
            fontWeight="500"
            onClick={() => {
              const element = document.getElementById("get-started-button");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {!isScrolled && "Get Started"}{" "}
            {/* Only show text when not scrolled */}
            <Icon
              as={ArrowRight}
              transform={isScrolled ? "rotate(90deg)" : "rotate(0deg)"} // Rotate the icon
              transition="all 0.5s ease-in-out" // Smooth rotation transition
            />
          </Box>
        </HStack>
      )}
    </>
  );
};

export default FollowingScrollButton;
