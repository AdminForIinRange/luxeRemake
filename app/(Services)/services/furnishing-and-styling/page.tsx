"use client";
import React, { useEffect } from "react";
import { Box, HStack, Text } from "@chakra-ui/react";

import Aos from "aos";
import "aos/dist/aos.css";
import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation";
// import FurnishingStylingCardLists from "@/components/luxeComponents/FurnishingStylingCardLists";
import ServicesThreeCards from "@/components/luxeComponents/servicesThreeCards";
import TopHeader from "@/components/luxeComponents/topHeader";

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
import { title } from "process";

const FurnishingAndStyling = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const CraftedBoxes = [
    {
      title: "Transform your space",

      img: houseFiveImg3,
    },

    {
      title: "Transform your space",

      img: houseFourImg5,
    },
    {
      title: "Transform your space",

      img: houseFiveImg9,
    },

    {
      title: "Transform your space",

      img: houseTwoImg4,
    },

    {
      title: "Transform your space",

      img: houseFiveImg5,
    },
    {
      title: "Transform your space",

      img: houseSixImg4,
    },
  ];

  return (
    <>
      <TopHeader
        imgUrl={
          "https://images.pexels.com/photos/6782574/pexels-photo-6782574.jpeg"
        }
        wordOne={"Furnishing"}
        wordTwo={"Styling"}
        and={true}
        description={
          "Transform your property into a stunning, magazine-worthy retreat with our expert design services."
        }
      />

      <HStack
        my={["50px", "50px", "50px", "50px", "50px", "100px"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
        transition={"all 0.2s ease-in-out"}
        zIndex={3}
        id="get-started-button"
      >
        <Box
          w={"100%"}
          h={"100%"}
          borderRadius={"30px"}
          py={"65px"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <ServicesThreeCards
            CardDataHeader={[
              {
                mainTitle: "The Luxe Distinction",
                mainDescription:
                  "Experience the Luxe distinction: expertly curated spaces that captivate guests and exceed their expectations. ",
              },
            ]}
            cardsData={[
              {
                imgUrl:
                  "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg",
                title: "Tailored Design",
                description:
                  "We create a unique style that reflects your property's character and appeals to your target guests.",
              },
              {
                imgUrl:
                  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
                title: "Quality Furnishings",
                description:
                  "We source and install high-quality, durable furniture that looks great and stands up to frequent use.",
              },
              {
                imgUrl:
                  "https://images.pexels.com/photos/7607460/pexels-photo-7607460.jpeg",
                title: "Attention to Detail",
                description:
                  "From artwork to throw pillows, we perfect every detail to a cohesive, inviting space.",
              },
            ]}
          />
        </Box>
      </HStack>
      <HStack
        my={["100px", "100px", "100px", "100px", "100px", "100px"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
      >
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>

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
              fontSize="sm"
              fontWeight="medium"
              color="#1A365D"
              mb="2"
              letterSpacing="0.5px"
            >
              OUR PHILOSOPHY
            </Text>
            <Text
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              fontSize={["25px", "25px", "25px", "50px", "50px", "50px"]}
              fontWeight={600}
              fontFamily={"arial"}
              bgClip="text"
              textAlign={["center", "center", "center", "left", "left", "left"]}
              color={"black"}
              bgGradient="linear(to-r, teal, blue)"
            >
              Our Story
            </Text>

            <Text fontSize="md" color="#4a5568" mb="6" lineHeight="1.8">
              At Luxe Management, we believe that exceptional spaces are born
              from a perfect balance of aesthetics and functionality. Our
              furnishing and styling service transforms properties into
              captivating environments that resonate with discerning guests.
            </Text>
            <Text fontSize="md" color="#4a5568" mb="8" lineHeight="1.8">
              Each project is approached with meticulous attention to detail,
              from the selection of statement furniture pieces to the curation
              of bespoke accessories that tell a cohesive story.
            </Text>
            <Box display="flex" alignItems="center" gap="3" mb="6">
              <Box w="30px" h="2px" bg="#0a0f29"></Box>
              <Text fontSize="md" fontWeight="medium" color="#0a0f29">
                Elevating spaces. Creating experiences.
              </Text>
            </Box>
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
            >
              <Box
                my={"25px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={["center"]}
                gap={"15px"}
                fontFamily={"arial"}
                transition={"all 0.2s ease-in-out"}
                cursor={"pointer"}
                _hover={{
                  transition: "all 0.2s ease-in-out",
                  scale: 1.1,
                  fontWeight: "700",
                  px: "80px",
                  bg: "black",
                }}
                p={4}
                bg={"black"}
                color={"white"}
                rounded={"30px"}
                px={"12"}
                fontWeight={"500"}
                onClick={() => router.push("/about/journey")}
              >
                Our Journey
                {/* <Icon as={ArrowRight}> </Icon> */}
              </Box>
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
              backgroundImage={` url(https://images.pexels.com/photos/7213549/pexels-photo-7213549.jpeg)`}
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
              backgroundSize="cover"
            ></Box>
          </Box>
        </HStack>
      </HStack>

      <Box bg="#0a0f29" py="24" px={{ base: "6", md: "10" }} data-aos="fade-up">
        <Box maxW="1200px" mx="auto">
          <Text
            fontSize="sm"
            fontWeight="medium"
            color="#e2e8f0"
            textAlign="center"
            mb="2"
            letterSpacing="0.5px"
          >
            OUR APPROACH
          </Text>
          <Text
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color="white"
            textAlign="center"
            mb="6"
            lineHeight="1.2"
          >
            The Design Process
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="white"
            textAlign="center"
            maxW="800px"
            mx="auto"
            mb="20"
            lineHeight="1.7"
          >
            A refined methodology that transforms vision into reality through
            careful planning and expert execution.
          </Text>

          <Box
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            flexWrap="wrap"
            justifyContent="space-between"
            gap={{ base: "12", md: "6" }}
          >
            {/* Process Step 1 */}
            <Box flex="1" minW={{ base: "100%", md: "220px" }}>
              <Text
                fontSize={{ base: "6xl", md: "7xl" }}
                fontWeight="bold"
                color="#2d3748"
                mb="2"
                opacity="0.3"
              >
                01
              </Text>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                color="white"
                mb="4"
              >
                Consultation
              </Text>
              <Text fontSize="md" color="gray.300" lineHeight="1.7">
                We begin with an in-depth consultation to understand your
                vision, preferences, and how you use your space.
              </Text>
            </Box>

            {/* Process Step 2 */}
            <Box flex="1" minW={{ base: "100%", md: "220px" }}>
              <Text
                fontSize={{ base: "6xl", md: "7xl" }}
                fontWeight="bold"
                color="#2d3748"
                mb="2"
                opacity="0.3"
              >
                02
              </Text>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                color="white"
                mb="4"
              >
                Concept Development
              </Text>
              <Text fontSize="md" color="gray.300" lineHeight="1.7">
                Our designers create a tailored concept that reflects your style
                while optimizing your property's potential.
              </Text>
            </Box>

            {/* Process Step 3 */}
            <Box flex="1" minW={{ base: "100%", md: "220px" }}>
              <Text
                fontSize={{ base: "6xl", md: "7xl" }}
                fontWeight="bold"
                color="#2d3748"
                mb="2"
                opacity="0.3"
              >
                03
              </Text>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                color="white"
                mb="4"
              >
                Curation & Sourcing
              </Text>
              <Text fontSize="md" color="gray.300" lineHeight="1.7">
                We meticulously select each piece, from statement furniture to
                the smallest decorative elements.
              </Text>
            </Box>

            {/* Process Step 4 */}
            <Box flex="1" minW={{ base: "100%", md: "220px" }}>
              <Text
                fontSize={{ base: "6xl", md: "7xl" }}
                fontWeight="bold"
                color="#2d3748"
                mb="2"
                opacity="0.3"
              >
                04
              </Text>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                color="white"
                mb="4"
              >
                Installation & Styling
              </Text>
              <Text fontSize="md" color="gray.300" lineHeight="1.7">
                Our expert team handles delivery, placement, and the final
                styling touches that bring your space to life.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <HStack
        my={["100px", "100px", "100px", "100px", "100px", "100px"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
      >
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>
      <Box py="24" px={{ base: "6", md: "10" }} data-aos="fade-up">
        <Box maxW="1200px" mx="auto">
          <Text
            fontSize="sm"
            fontWeight="medium"
            color="#1A365D"
            textAlign="center"
            mb="2"
            letterSpacing="0.5px"
          >
            OUR PORTFOLIO
          </Text>
          <Text
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color="#0a0f29"
            textAlign="center"
            mb="6"
            lineHeight="1.2"
          >
            Crafted Environments
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="#4a5568"
            textAlign="center"
            maxW="800px"
            mx="auto"
            mb="16"
            lineHeight="1.7"
          >
            A showcase of our meticulously designed spaces, each reflecting our
            commitment to exceptional quality and timeless elegance.
          </Text>

          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            gap="8"
          >
            {/* Portfolio Item 1 */}
            {CraftedBoxes.map((box, index) => (
              <Box
                key={index}
                flex="1"
                minW={{ base: "100%", md: "300px" }}
                bg="#f2f2f2"
                borderRadius="md"
                h="400px"
                position="relative" // required for next/image with fill
                overflow="hidden" // ensures image stays within rounded corners
              >
                <Image
                  src={box.img}
                  alt={box.title}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "8px",
                  }}
                />
              </Box>
            ))}
          </Box>

          <HStack
            my={["100px", "100px", "100px", "100px", "100px", "100px"]}
            justify={"center"}
            align={"center"}
            w={"100%"}
          >
            <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
          </HStack>

          <Text
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color="#0a0f29"
            textAlign="center"
            mb="6"
            lineHeight="1.2"
            data-aos="fade-up"
          >
            Exceptional Quality
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="#4a5568"
            textAlign="center"
            maxW="800px"
            mx="auto"
            mb="16"
            lineHeight="1.7"
          >
            We source only the finest materials and work with skilled artiarial
            to create spaces of unparalleled beauty and durability.
          </Text>

          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            gap="8"
          >
            {/* Material Item 1 */}
            <Box flex="1" minW={{ base: "100%", md: "300px" }}>
              <Box
                bg="#f2f2f2"
                borderRadius="md"
                h="300px"
                mb="6"
                display="flex"
                alignItems="center"
                justifyContent="center"
                backgroundImage={
                  "url(https://images.pexels.com/photos/31902663/pexels-photo-31902663.jpeg)"
                }
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
              ></Box>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                color="#0a0f29"
                mb="2"
              >
                Premium Textiles
              </Text>
              <Text fontSize="md" color="#4a5568" lineHeight="1.7">
                Hand-selected fabrics that combine luxury with durability
              </Text>
            </Box>

            {/* Material Item 2 */}
            <Box flex="1" minW={{ base: "100%", md: "300px" }}>
              <Box
                bg="#f2f2f2"
                borderRadius="md"
                h="300px"
                mb="6"
                display="flex"
                alignItems="center"
                justifyContent="center"
                backgroundImage={
                  "url(https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg)"
                }
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
              ></Box>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                color="#0a0f29"
                mb="2"
              >
                Artisanal Furniture
              </Text>
              <Text fontSize="md" color="#4a5568" lineHeight="1.7">
                Bespoke pieces crafted by master artiarial
              </Text>
            </Box>

            {/* Material Item 3 */}
            <Box flex="1" minW={{ base: "100%", md: "300px" }}>
              <Box
                bg="#f2f2f2"
                borderRadius="md"
                h="300px"
                mb="6"
                display="flex"
                alignItems="center"
                justifyContent="center"
                backgroundImage={
                  "url(https://images.pexels.com/photos/7303902/pexels-photo-7303902.jpeg)"
                }
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
              ></Box>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                color="#0a0f29"
                mb="2"
              >
                Curated Accessories
              </Text>
              <Text fontSize="md" color="#4a5568" lineHeight="1.7">
                Thoughtfully sourced décor that elevates every space
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        data-aos="fade-up"
        py="24"
        px={{ base: "6", md: "10" }}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          border={"1px solid #e2e8f0"}
          w={"100%"}
          borderRadius={"md"}
          px={16}
          p={[4, 4, 8]}
        >
          <Box maxW="1200px" borderRadius={"md"}>
            <Text
              fontSize="sm"
              fontWeight="medium"
              color="black"
              textAlign="center"
              mb="2"
              letterSpacing="0.5px"
            >
              CLIENT EXPERIENCES
            </Text>
            <Text
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color="Black"
              textAlign="center"
              mb="16"
              lineHeight="1.2"
            >
              Testimonials
            </Text>

            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
              gap="8"
            >
              {/* Testimonial 1 */}
              <Box
                flex="1"
                minW={{ base: "100%", md: "45%" }}
                p="8"
                borderRadius="md"
                border={"1px solid #e2e8f0"}
              >
                <Text fontSize="4xl" color="#cbd5e0" mb="6">
                  "
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="#4a5568"
                  fontStyle="italic"
                  mb="8"
                  lineHeight="1.7"
                >
                  Luxe Managements transformed our property into a sophisticated
                  haven that perfectly balances luxury with comfort. The
                  attention to detail is unmatched.
                </Text>
                <Text fontSize="md" fontWeight="bold" color="#0a0f29">
                  Alexandra & James T.
                </Text>
                <Text fontSize="sm" color="#4a5568">
                  Oceanfront Villa, Malibu
                </Text>
              </Box>

              {/* Testimonial 2 */}
              <Box
                flex="1"
                minW={{ base: "100%", md: "45%" }}
                p="8"
                borderRadius="md"
                border={"1px solid #e2e8f0"}
              >
                <Text fontSize="4xl" color="#cbd5e0" mb="6">
                  "
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="#4a5568"
                  fontStyle="italic"
                  mb="8"
                  lineHeight="1.7"
                >
                  The furnishing and styling service exceeded our expectations.
                  Our rental bookings increased immediately, with guests
                  specifically mentioning the interior design.
                </Text>
                <Text fontSize="md" fontWeight="bold" color="#0a0f29">
                  Michael R.
                </Text>
                <Text fontSize="sm" color="#4a5568">
                  Urban Penthouse, New York
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <HStack
        mt={["100px", "100px", "100px", "100px", "100px", "100px"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
      >
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>
      <ScheduleConsultation />
    </>
  );
};

export default FurnishingAndStyling;
