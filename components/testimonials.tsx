"use client";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { FaAngleRight, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([
    {
      text: "I highly recommend. They were attentive to our needs and worked tirelessly to find us a client for our holiday house property. We couldn't be happier with our new place!",
      name: "Danny L.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/31966004/pexels-photo-31966004.jpeg",
    },
    {
      text: "Their professionalism and dedication were truly exceptional. They made the entire process seamless and stress-free.",
      name: "Cristy D.",
      rating: 4,
      image:
        "https://images.pexels.com/photos/31971996/pexels-photo-31971996.jpeg",
    },
    {
      text: "Fantastic service! They took the time to understand exactly what I was looking for and found the perfect match. I couldn't be happier!",
      rating: 5,
      name: "Sam B.",
      image:
        "https://images.pexels.com/photos/31968521/pexels-photo-31968521.jpeg",
    },
    {
      text: "Great experience from start to finish. They kept us informed and made sure we got the best deal possible. I would recommend them to anyone!",
      rating: 5,
      name: "Christian R.",
      image:
        "https://images.pexels.com/photos/31934179/pexels-photo-31934179.jpeg",
    },
    {
      text: "Very responsive and professional. They helped us find a great property in a short amount of time. Definitely recommend their services!",
      name: "John M.",
      rating: 4,
      image:
        "https://images.pexels.com/photos/19512726/pexels-photo-19512726.jpeg",
    },
    {
      text: "They were patient and helped us every step of the way. We appreciated their attention to detail and ability to handle any challenge that came up.",
      name: "Michael T.",
      rating: 4,
      image:
        "https://images.pexels.com/photos/31921683/pexels-photo-31921683.jpeg",
    },
  ]);

  const [currentSlide, setCurrentSlide] = useState(2);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === reviews.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? reviews.length - 1 : currentSlide - 1);
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Box
          as={FaStar}
          key={i}
          color={i < rating ? "gold" : "gray.200"}
          display="inline-block"
          marginRight="2px"
          fontSize={{ base: "14px", md: "16px" }}
        />,
      );
    }
    return stars;
  };
  return (
    <>
      <HStack
        my={["50px", "50px", "100px", "100px", "100px", "100px"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
      >
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>
      <HStack
        fontFamily={"arial"}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
        h={"100%"}
      >
        <HStack
          justify={["center", "center", "center", "center", "center", "center"]}
          align={["center", "center", "start", "start", "start", "start"]}
          w={"100%"}
          h={"100%"}
          gap={["5px", "5px", "5px", "5px", "5px", "5px"]}
          wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["95%", "95%", "70%", "60%", "50%", "50%"]}>
            <Text
              data-aos="fade-up"
              w={["100%", "100%", "80%", "80%", "80%", "80%"]}
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              fontSize={["25px", "25px", "25px", "50px", "50px", "50px"]}
              fontWeight={700}
              fontFamily={"arial"}
              bgClip="text"
              textAlign={["center", "center", "left", "left", "left", "left"]}
              color={"black"}
              bgGradient="linear(to-r, teal, blue)"
            >
              Look What Our Customers Say!
            </Text>
            <Text
              fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}
              mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
              textAlign={["center", "center", "left", "left", "left", "left"]}
              fontFamily={"arial"}
              color={"black"}
              w={["100%", "100%", "80%", "80%", "80%", "80%"]}
              fontWeight={300}
            >
              Check out our numerous positive reviews from satisfied clients.
            </Text>

            <HStack
              w={["100%", "100%", "80%", "80%", "80%", "80%"]}
              justify={["center", "center", "start", "start", "start", "start"]}
              align={"center"}
            >
              <HStack
                as={"button"}
                mt={["25px", "25px", "50px", "25px", "25px", "25px"]}
                w={["225px", "225px", "170px", "170px", "200px", "125px"]}
                h={["50px", "50px", "50px", "50px", "50px", "50px"]}
                transition={"transform 0.3s ease"}
                _hover={{
                  transform: "translateX(-10px)",
                }}
                justify={"center"}
                align={"center"}
                borderRadius={"100px"}
                border={"1px solid rgb(0, 0,0,0.25)"}
                color={"black"}
                onClick={() => {
                  prevSlide();
                }}
              >
                <Text cursor={"pointer"} fontSize={"40px"}>
                  <FaAngleRight
                    style={{ transform: "rotate(180deg)" }}
                    color="black"
                  />
                </Text>
              </HStack>
              <HStack
                as={"button"}
                mt={["25px", "25px", "50px", "25px", "25px", "25px"]}
                w={["225px", "225px", "170px", "170px", "200px", "125px"]}
                h={["50px", "50px", "50px", "50px", "50px", "50px"]}
                transition={"transform 0.3s ease"}
                _hover={{
                  transform: "translateX(10px)",
                }}
                justify={"center"}
                align={"center"}
                borderRadius={"100px"}
                bg={"white"}
                color={"black"}
                border={"1px solid rgb(0, 0,0,0.25)"}
                onClick={() => {
                  nextSlide();
                }}
              >
                <Text cursor={"pointer"} fontSize={"40px"}>
                  <FaAngleRight color="black" />
                </Text>
              </HStack>
            </HStack>
          </Box>

          <Box
            mt={["25px", "25px", "0", "0", "0", "0"]}
            width={{ base: "100%", md: "60%" }}
            maxWidth={{ base: "500px", md: "600px" }}
            border="1px solid rgba(0,0,0,0.1)"
            borderRadius="16px"
            padding={{ base: "32px 24px", md: "40px" }}
            backgroundColor="white"
            position="relative"
            transition="all 0.3s ease"
            _hover={{
              boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
              transform: "translateY(-5px)",
            }}
          >
            {/* Quote mark */}
            <Box
              position="absolute"
              top="24px"
              right="30px"
              fontSize="80px"
              fontFamily="serif"
              color="rgba(0,0,0,0.05)"
              lineHeight="1"
              fontWeight="bold"
            >
              "
            </Box>

            {/* Star rating */}
            <Box display="flex" marginBottom="20px">
              {renderStars(reviews[currentSlide].rating)}
            </Box>

            {/* Testimonial text */}
            <Box
              minHeight={{ base: "160px", md: "180px" }}
              display="flex"
              alignItems="flex-start"
            >
              <Text
                fontSize={{ base: "18px", md: "20px" }}
                lineHeight="1.6"
                color="rgba(0,0,0,0.8)"
                fontFamily="arial"
                fontStyle="italic"
                position="relative"
                zIndex="1"
              >
                {reviews[currentSlide].text}
              </Text>
            </Box>

            {/* Separator line */}
            <Box
              height="1px"
              backgroundColor="rgba(0,0,0,0.1)"
              margin="24px 0"
            />

            {/* Author info */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              paddingTop="8px"
            >
              {/* Author image */}
              <Box
      position="relative"            // establish containing block for the Image
      width="50px"
      height="50px"
      borderRadius="50%"             // circle
      marginRight="16px"
      overflow="hidden"              // clip the Image to the circle
      border="2px solid rgba(0,0,0,0.1)"
    >
      <Image
loading="lazy"
        src={reviews[currentSlide].image}
        alt=""                       // you can add a meaningful alt if needed
        fill                         // makes the img fill the Box
        style={{
          objectFit: 'cover',        // replicates background-size: cover
          objectPosition: 'top'      // replicates background-position: top
        }}
      />
    </Box>
    

              {/* Author name */}
              <Box>
                <Text
                  fontSize={{ base: "16px", md: "18px" }}
                  fontWeight="700"
                  color="black"
                  fontFamily="arial"
                >
                  {reviews[currentSlide].name}
                </Text>
                <Text
                  fontSize={{ base: "14px", md: "15px" }}
                  color="rgba(0,0,0,0.6)"
                  fontFamily="arial"
                >
                  Verified Customer
                </Text>
              </Box>
            </Box>
          </Box>
        </HStack>
      </HStack>
    </>
  );
};

export default Testimonials;
