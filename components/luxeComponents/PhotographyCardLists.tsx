import React from "react";
import {
  Box,

  HStack,

  Text,
 
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";

const PhotographyCardLists = () => {
  const router = useRouter();

  const leftImg = [
    {
      title: "Photography Package",
      description:
        "Our comprehensive photography service is designed to showcase your property in its most flattering light, capturing the unique essence and ambiance of your space.  ",
      features: [
        "High-resolution interior and exterior photography capturing intricate details",
        "Aerial drone imagery for dramatic, expansive property views",
        "Expert lighting and staging for enhanced ambiance",
        "Detailed image composition that highlights property strengths",
      ],
    },
    {
      title: "Virtual Tours & Lifestyle Photography",
      description:
        "We bring your property to life through immersive 360° virtual tours and engaging lifestyle photography. Our approach captures authentic living moments and highlights the unique story behind your space, ",
      features: [
        "Virtual tours for interactive exploration",
        "Lifestyle shots that tell an authentic story of your property",
        "Candid moments capturing natural interactions",
        "Dynamic shots showcasing property in varied lighting conditions",
      ],
    },
  ];

  const rightImg = [
    {
      title: "Visual Post-Production",
      description:
        "Our expert post-production team meticulously enhances every image to perfection. With professional editing, precise color correction, and tailored optimization,  ",
      features: [
        "Professional editing and color correction to ensure flawless visuals",
        "Optimized images for seamless display on multiple platforms and devices",
        "Retouching and image restoration for perfection",
        "Consistent stylistic enhancements across all visuals",
      ],
    },
    {
      title: "Creative Image Distribution",
      description:
        "We ensure your images reach the right audience with strategic optimization and distribution across multiple platforms, enhancing visibility and engagement.",
      features: [
        "Social media and website integration",
        "SEO-enhanced image metadata",
        "Fast-loading, web-optimized image formats",
        "Consistent visual branding across channels",
      ],
    },
  ];
  return (
    <>
      <HStack
        data-aos="fade-up"
        zIndex={3}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
        my={["50px", "50px", "50px", "50px", "50px", "100px"]}
      >
        <HStack
          justify={"center"}
          align={["center", "center", "start", "start", "start", "start"]}
          w={"100%"}
          h={"100%"}
          gap={["15px", "15px", "15px", "50px", "50px", "50px"]}
          wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["95%", "95%", "95%", "600px", "600px", "600px"]}>
            <Text
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              fontSize={["25px", "25px", "25px", "50px", "50px", "50px"]}
              fontWeight={600}
              fontFamily={"Raleway"}
              bgClip="text"
              textAlign={["center", "center", "center", "left", "left", "left"]}
              color={"black"}
              bgGradient="linear(to-r, teal, blue)"
            >
              {leftImg[0].title}
            </Text>
            <Text
              fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}
              mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
              textAlign={["center", "center", "center", "left", "left", "left"]}
              fontFamily={"Raleway"}
              color={"black"}
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              fontWeight={300}
            >
              {leftImg[0].description}
            </Text>

            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{leftImg[0].features[0]}</Text>
            </HStack>
            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{leftImg[0].features[1]}</Text>
            </HStack>
            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{leftImg[0].features[2]}</Text>
            </HStack>
            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{leftImg[0].features[3]}</Text>
            </HStack>
            <HStack
              justify={[
                "center",
                "center",
                "center",
                "start",
                "start",
                "start",
              ]}
              align={"start"}
              w={"100%"}
              transition={"all 0.2s ease-in-out"}
              zIndex={3}
            ></HStack>
          </Box>

          <Box
            position="relative"
            h={["350px", "350px", "350px", "500px", "500px", "600px"]}
            w={["95%", "95%", "95%", "600px", "600px", "600px"]}
            borderRadius="30px"
            bgPos="center"
            bgSize="cover"
            // Change this to any background you want
            // Change this to any background you want
            overflow="hidden"
            display={"flex"}
            justifyContent={"end"}
          >
            {/* Horizontal line for crosshair */}
            <Box
              position="relative"
              h={["350px", "350px", "350px", "500px", "500px", "500px"]}
              w={["100%", "100%", "100%", "550px", "550px", "550px"]}
              borderRadius="30px"
              bg="gray.200" // Change this to any background you want
              overflow="hidden"
              backgroundImage={` url(https://images.pexels.com/photos/776908/pexels-photo-776908.jpeg)`}
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
              backgroundSize="cover"
            ></Box>
            {/* Bottom-right label */}
          </Box>
        </HStack>
      </HStack>

      <HStack
        data-aos="fade-up"
        zIndex={3}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
        mt={["155px", "155px", "155px", "155px", "155px", "155px"]}
      >
        <HStack
          justify={"center"}
          align={["center", "center", "start", "start", "start", "start"]}
          w={"100%"}
          h={"100%"}
          gap={["15px", "15px", "15px", "50px", "50px", "50px"]}
          wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box
            w={["95%", "95%", "95%", "600px", "600px", "600px"]}
            display={["block", "block", "block", "none", "none", "none"]}
          >
            <Text
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              fontSize={["25px", "25px", "25px", "50px", "50px", "50px"]}
              fontWeight={600}
              fontFamily={"Raleway"}
              bgClip="text"
              textAlign={["center", "center", "center", "left", "left", "left"]}
              color={"black"}
              bgGradient="linear(to-r, teal, blue)"
            >
              {rightImg[0].title}
            </Text>
            <Text
              fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}
              mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
              textAlign={["center", "center", "center", "left", "left", "left"]}
              fontFamily={"Raleway"}
              color={"black"}
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              fontWeight={300}
            >
              {rightImg[0].description}
            </Text>

            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{rightImg[0].features[0]}</Text>
            </HStack>
            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{leftImg[0].features[1]}</Text>
            </HStack>
            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{leftImg[0].features[2]}</Text>
            </HStack>
            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{leftImg[0].features[3]}</Text>
            </HStack>
          </Box>

          <Box
            position="relative"
            h={["350px", "350px", "350px", "500px", "500px", "600px"]}
            w={["95%", "95%", "95%", "600px", "600px", "600px"]}
            borderRadius="30px"
            bgPos="center"
            bgSize="cover"
            // Change this to any background you want
            // Change this to any background you want
            overflow="hidden"
            display={"flex"}
            justifyContent={"start"}
          >
            {/* Horizontal line for crosshair */}
            <Box
              position="relative"
              h={["350px", "350px", "350px", "500px", "500px", "500px"]}
              w={["100%", "100%", "100%", "550px", "550px", "550px"]}
              borderRadius="30px"
              bg="gray.200" // Change this to any background you want
              overflow="hidden"
              backgroundImage={` url(https://images.pexels.com/photos/1336858/pexels-photo-1336858.jpeg)`}
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
              backgroundSize="cover"
            ></Box>
            {/* Bottom-right label */}
          </Box>
          <Box
            w={["95%", "95%", "95%", "600px", "600px", "600px"]}
            display={["none", "none", "none", "block", "block", "block"]}
          >
            <Text
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              fontSize={["25px", "25px", "25px", "50px", "50px", "50px"]}
              fontWeight={600}
              fontFamily={"Raleway"}
              bgClip="text"
              textAlign={["center", "center", "center", "left", "left", "left"]}
              color={"black"}
              bgGradient="linear(to-r, teal, blue)"
            >
              {rightImg[0].title}
            </Text>
            <Text
              fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}
              mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
              textAlign={["center", "center", "center", "left", "left", "left"]}
              fontFamily={"Raleway"}
              color={"black"}
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              fontWeight={300}
            >
              {rightImg[0].description}
            </Text>

            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{rightImg[0].features[0]}</Text>
            </HStack>
            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{rightImg[0].features[1]}</Text>
            </HStack>
            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{rightImg[0].features[2]}</Text>
            </HStack>
            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{rightImg[0].features[3]}</Text>
            </HStack>
          </Box>
        </HStack>
      </HStack>

      <HStack
        data-aos="fade-up"
        zIndex={3}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
        mt={["155px", "155px", "155px", "155px", "155px", "155px"]}
      >
        <HStack
          justify={"center"}
          align={["center", "center", "start", "start", "start", "start"]}
          w={"100%"}
          h={"100%"}
          gap={["15px", "15px", "15px", "50px", "50px", "50px"]}
          wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["95%", "95%", "95%", "600px", "600px", "600px"]}>
            <Text
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              fontSize={["25px", "25px", "25px", "50px", "50px", "50px"]}
              fontWeight={600}
              fontFamily={"Raleway"}
              bgClip="text"
              textAlign={["center", "center", "center", "left", "left", "left"]}
              color={"black"}
              bgGradient="linear(to-r, teal, blue)"
            >
              {leftImg[1].title}
            </Text>
            <Text
              fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}
              mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
              textAlign={["center", "center", "center", "left", "left", "left"]}
              fontFamily={"Raleway"}
              color={"black"}
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              fontWeight={300}
            >
              {leftImg[1].description}
            </Text>
            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{leftImg[1].features[0]}</Text>
            </HStack>
            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{leftImg[1].features[1]}</Text>
            </HStack>
            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{leftImg[1].features[2]}</Text>
            </HStack>
            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{leftImg[1].features[3]}</Text>
            </HStack>
          </Box>

          <Box
            position="relative"
            h={["350px", "350px", "350px", "500px", "500px", "600px"]}
            w={["95%", "95%", "95%", "600px", "600px", "600px"]}
            borderRadius="30px"
            bgPos="center"
            bgSize="cover"
            // Change this to any background you want
            // Change this to any background you want
            overflow="hidden"
            display={"flex"}
            justifyContent={"end"}
          >
            {/* Horizontal line for crosshair */}
            <Box
              position="relative"
              h={["350px", "350px", "350px", "500px", "500px", "500px"]}
              w={["100%", "100%", "100%", "550px", "550px", "550px"]}
              borderRadius="30px"
              bg="gray.200" // Change this to any background you want
              overflow="hidden"
              backgroundImage={` url(https://images.pexels.com/photos/9125753/pexels-photo-9125753.jpeg)`}
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
              backgroundSize="cover"
            ></Box>
            {/* Bottom-right label */}
          </Box>
        </HStack>
      </HStack>
      <HStack
        data-aos="fade-up"
        zIndex={3}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
        mt={["155px", "155px", "155px", "155px", "155px", "155px"]}
      >
        <HStack
          justify={"center"}
          align={["center", "center", "start", "start", "start", "start"]}
          w={"100%"}
          h={"100%"}
          gap={["15px", "15px", "15px", "50px", "50px", "50px"]}
          wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box
            w={["95%", "95%", "95%", "600px", "600px", "600px"]}
            display={["block", "block", "block", "none", "none", "none"]}
          >
            <Text
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              fontSize={["25px", "25px", "25px", "50px", "50px", "50px"]}
              fontWeight={600}
              fontFamily={"Raleway"}
              bgClip="text"
              textAlign={["center", "center", "center", "left", "left", "left"]}
              color={"black"}
              bgGradient="linear(to-r, teal, blue)"
            >
              {rightImg[1].title}
            </Text>
            <Text
              fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}
              mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
              textAlign={["center", "center", "center", "left", "left", "left"]}
              fontFamily={"Raleway"}
              color={"black"}
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              fontWeight={300}
            >
              {rightImg[1].description}
            </Text>

            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{rightImg[1].features[0]}</Text>
            </HStack>
            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{rightImg[1].features[1]}</Text>
            </HStack>
            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{rightImg[1].features[2]}</Text>
            </HStack>
            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{rightImg[1].features[3]}</Text>
            </HStack>
          </Box>

          <Box
            position="relative"
            h={["350px", "350px", "350px", "500px", "500px", "600px"]}
            w={["95%", "95%", "95%", "600px", "600px", "600px"]}
            borderRadius="30px"
            bgPos="center"
            bgSize="cover"
            // Change this to any background you want
            // Change this to any background you want
            overflow="hidden"
            display={"flex"}
            justifyContent={"start"}
          >
            {/* Horizontal line for crosshair */}
            <Box
              position="relative"
              h={["350px", "350px", "350px", "500px", "500px", "500px"]}
              w={["100%", "100%", "100%", "550px", "550px", "550px"]}
              borderRadius="30px"
              bg="gray.200" // Change this to any background you want
              overflow="hidden"
              backgroundImage={` url(https://images.pexels.com/photos/8408537/pexels-photo-8408537.jpeg)`}
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
              backgroundSize="cover"
            ></Box>
            {/* Bottom-right label */}
          </Box>
          <Box
            w={["95%", "95%", "95%", "600px", "600px", "600px"]}
            display={["none", "none", "none", "block", "block", "block"]}
          >
            <Text
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              fontSize={["25px", "25px", "25px", "50px", "50px", "50px"]}
              fontWeight={600}
              fontFamily={"Raleway"}
              bgClip="text"
              textAlign={["center", "center", "center", "left", "left", "left"]}
              color={"black"}
              bgGradient="linear(to-r, teal, blue)"
            >
              {rightImg[1].title}
            </Text>
            <Text
              fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}
              mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
              textAlign={["center", "center", "center", "left", "left", "left"]}
              fontFamily={"Raleway"}
              color={"black"}
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              fontWeight={300}
            >
              {rightImg[1].description}
            </Text>

            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{rightImg[1].features[0]}</Text>
            </HStack>
            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{rightImg[1].features[1]}</Text>
            </HStack>
            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{rightImg[1].features[2]}</Text>
            </HStack>
            <HStack
              align={[
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
                "Center",
              ]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              borderBottom={"1px solid #e0e0e0"}
              py={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>{rightImg[1].features[3]}</Text>
            </HStack>
          </Box>
        </HStack>
      </HStack>
    </>
  );
};

export default PhotographyCardLists;
