import { Box, HStack, Icon } from '@chakra-ui/react';
import { ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import 'animate.css'; // Importing animate.css

const FollowingScrollButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // To track visibility of the button
  const [isRotated, setIsRotated] = useState(false); // To track the icon's rotation
  const [animationClass, setAnimationClass] = useState('');

  // Detect scroll event and check for 'get-started-button' visibility
  useEffect(() => {
    const handleScroll = () => {
      const getStartedElement = document.getElementById("get-started-button");
      if (getStartedElement) {
        const rect = getStartedElement.getBoundingClientRect();
        // Check if 'get-started-button' is within the viewport
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(false); // Hide button once the 'get-started-button' is in view
        } else {
          setIsVisible(true); // Show button when it's not in view
        }

        // Rotate the icon based on whether the get-started-button is below the viewport
        if (rect.top < 0) {
          setIsRotated(true); // Rotate icon upwards when below
        } else {
          setIsRotated(false); // Reset icon when above
        }
      }

      // Track scroll position
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Apply the animate.css classes based on visibility and rotation
    if (!isVisible) {
      setAnimationClass('animate__fadeOut'); // Fade out animation when button goes out of view
    } else {
      setAnimationClass(isScrolled ? 'animate__rotateIn' : 'animate__fadeIn'); // Rotate and fade animations based on scroll position
    }

    // Reset the animation class when the animation ends
    const timeout = setTimeout(() => {
      setAnimationClass('');
    }, 1000); // Duration of the animation

    return () => clearTimeout(timeout);
  }, [isVisible, isScrolled]);

  return (
    <>
      {isVisible && (  // Button will only be rendered if isVisible is true
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
            className={`animate__animated ${animationClass}`} // Apply animation class
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
            {!isScrolled && "Get Started"} {/* Only show text when not scrolled */}
            <Icon
              as={ArrowRight}
              transform={
                isRotated ? "rotate(-90deg)" : isScrolled ? "rotate(90deg)" : "rotate(0deg)"
              } // Rotate icon based on scroll and position
              transition="all 0.5s ease-in-out" // Smooth rotation transition
            />
          </Box>
        </HStack>
      )}
    </>
  );
};

export default FollowingScrollButton;
