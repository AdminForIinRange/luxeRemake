import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";

import { Check } from "lucide-react";
import Image from "next/image";
const PropertyManagementCardLists = () => {
  const leftImg = [
    {
      title: "Listing & Marketing",
      description:
        "We craft compelling listings and implement strategic marketing to maximize visibility and occupancy rates.",
      features: [
        "Professional photography and copywriting",
        "SEO-optimized descriptions",
        "Multi-platform presence",
        "Dynamic pricing algorithm",
      ],
    },
    {
      title: "Property Care",
      description:
        "We maintain your property in impeccable condition, preserving its value and appeal.",
      features: [
        "Professional cleaning after each stay",
        "Preventative maintenance",
        "Rapid response for repairs",
        "Inventory and supply management",
      ],
    },
  ];

  const rightImg = [
    {
      title: "Guest Experience",
      description:
        "We create memorable experiences for your guests, ensuring satisfaction and stellar reviews.",
      features: [
        "24/7 concierge support",
        "Curated welcome packages",
        "Personalized local recommendations",
        "Immediate issue resolution",
      ],
    },
    {
      title: "Financial Intelligence",
      description:
        "We provide comprehensive financial management and transparent reporting.",
      features: [
        "Detailed monthly statements",
        "Revenue optimization strategies",
        "Tax-ready documentation",
        "Performance analytics",
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
              fontFamily={"arial"}
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
              fontFamily={"arial"}
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
      bg="gray.200"       // fallback background color
      overflow="hidden"   // clip the Image to the container
    >
      <Image
quality={70} loading="lazy"
        src="https://images.pexels.com/photos/7213549/pexels-photo-7213549.jpeg"
        alt=""
        fill                // makes the image fill the Box entirely
        style={{
          objectFit: 'cover',      // replicates background-size: cover
          objectPosition: 'center' // replicates background-position: center
        }}
               
              // optional: preload if above the fold
      />
    </Box>
    
            {/* Bottom-right label */}
            {/* <Box
              p={"4"}
              position={"absolute"}
              display={"flex"}
              w={"100%"}
              h={"100%"}
              justifyContent={[
                "start",
                "start",
                "start",
                "start",
                "start",
                "start",
              ]}
              alignItems={["start", "start", "start", "center", "center"]}
            >
              <Box
                fontFamily={"arial"}
                zIndex={1}
                bg="white"
                borderRadius="md"
                p={[
                  "10px 10px",
                  "10px 10px",
                  "10px 10px",
                  "15px 15px",
                  "15px 15px",
                  "15px 15px",
                ]}
                boxShadow="md"
                fontWeight="semibold"
                textAlign={"left"}
              >
                <HStack>
                  <Text
                    fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
                    fontWeight={"700"}
                    color={"black"}
                  >
                    40%
                  </Text>
                  <Text
                    fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
                  >
                    {" "}
                    Average Revenue Increase
                  </Text>
                </HStack>
              </Box>
            </Box> */}
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
              fontFamily={"arial"}
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
              fontFamily={"arial"}
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
      bg="gray.200"       // fallback background color
      overflow="hidden"   // clip the Image to the container
    >
      <Image
quality={70} loading="lazy"
        src="https://images.pexels.com/photos/5667613/pexels-photo-5667613.jpeg"
        alt=""
        fill                // makes the image fill the Box entirely
        style={{
          objectFit: 'cover',      // replicates background-size: cover
          objectPosition: 'center' // replicates background-position: center
        }}
               
            // optional: preload if above the fold
      />
    </Box>
            {/* Bottom-right label */}

            {/* <Box
              p={"4"}
              position={"absolute"}
              display={"flex"}
              w={"100%"}
              h={"100%"}
              justifyContent={["start", "start", "start", "end", "end", "end"]}
              alignItems={["start", "start", "start", "center", "center"]}
            >
              {" "}
              <Box
                fontFamily={"arial"}
                zIndex={1}
                bottom={["20px", "20px", "20px", "80px", "10px", "80px"]}
                right={["0px", "0px", "0px", "10px", "10px", "10px"]}
                bg="white"
                borderRadius="md"
                p={[
                  "10px 10px",
                  "10px 10px",
                  "10px 10px",
                  "15px 15px",
                  "15px 15px",
                  "15px 15px",
                ]}
                boxShadow="md"
                fontWeight="semibold"
                textAlign={"left"}
              >
                <HStack>
                  <Text
                    fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
                    fontWeight={"700"}
                    color={"black"}
                  >
                    35%
                  </Text>
                  <Text
                    fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
                  >
                    {" "}
                    Higher Profit Margins
                  </Text>
                </HStack>
              </Box>
            </Box> */}
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
              fontFamily={"arial"}
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
              fontFamily={"arial"}
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
              fontFamily={"arial"}
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
              fontFamily={"arial"}
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
      bg="gray.200"       // fallback background color
      overflow="hidden"   // clip the Image to the container
    >
      <Image
quality={70} loading="lazy"
        src="https://images.pexels.com/photos/6195131/pexels-photo-6195131.jpeg"
        alt=""
        fill                // makes the image fill the Box entirely
        style={{
          objectFit: 'cover',      // replicates background-size: cover
          objectPosition: 'center' // replicates background-position: center
        }}
               
             // optional: preload if above the fold
      />
    </Box>
            {/* Bottom-right label */}
            {/* <Box
              p={"4"}
              position={"absolute"}
              display={"flex"}
              w={"100%"}
              h={"100%"}
              justifyContent={[
                "start",
                "start",
                "start",
                "start",
                "start",
                "start",
              ]}
              alignItems={["start", "start", "start", "center", "center"]}
            >
              <Box
                fontFamily={"arial"}
                zIndex={1}
                bg="white"
                borderRadius="md"
                p={[
                  "10px 10px",
                  "10px 10px",
                  "10px 10px",
                  "15px 15px",
                  "15px 15px",
                  "15px 15px",
                ]}
                boxShadow="md"
                fontWeight="semibold"
                textAlign={"left"}
              >
                <HStack>
                  <Text
                    fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
                    fontWeight={"700"}
                    color={"black"}
                  >
                    25%
                  </Text>
                  <Text
                    fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
                  >
                    {" "}
                    Reduced Operating Expenses
                  </Text>
                </HStack>
              </Box>
            </Box> */}
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
              fontFamily={"arial"}
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
              fontFamily={"arial"}
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
      bg="gray.200"       // fallback background color
      overflow="hidden"   // clip the Image to the container
    >
      <Image
quality={70} loading="lazy"
        src="https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg"
        alt=""
        fill                // makes the image fill the Box entirely
        style={{
          objectFit: 'cover',      // replicates background-size: cover
          objectPosition: 'center' // replicates background-position: center
        }}
               
      // optional: preload if this is above the fold
      />
    </Box>
            {/* Bottom-right label */}

            {/* <Box
              p={"4"}
              position={"absolute"}
              display={"flex"}
              w={"100%"}
              h={"100%"}
              justifyContent={["start", "start", "start", "end", "end", "end"]}
              alignItems={["start", "start", "start", "center", "center"]}
            >
              {" "}
              <Box
                fontFamily={"arial"}
                zIndex={1}
                bottom={["20px", "20px", "20px", "80px", "10px", "80px"]}
                right={["0px", "0px", "0px", "10px", "10px", "10px"]}
                bg="white"
                borderRadius="md"
                p={[
                  "10px 10px",
                  "10px 10px",
                  "10px 10px",
                  "15px 15px",
                  "15px 15px",
                  "15px 15px",
                ]}
                boxShadow="md"
                fontWeight="semibold"
                textAlign={"left"}
              >
                <HStack>
                  <Text
                    fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
                    fontWeight={"700"}
                    color={"black"}
                  >
                    35%
                  </Text>
                  <Text
                    fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
                  >
                    {" "}
                    Higher Profit Margins
                  </Text>
                </HStack>
              </Box>
            </Box> */}
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
              fontFamily={"arial"}
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
              fontFamily={"arial"}
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

export default PropertyManagementCardLists;
