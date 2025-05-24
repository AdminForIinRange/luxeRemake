import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { Camera, Cog, Phone, User, ChartArea } from "lucide-react";
import { useRouter } from "next/navigation";
import { BoxScrollMoveDown } from "./BoxScrollMoveDown";
import Image from "next/image";

const HowWeCanGetYouStarted = () => {
  const gettingStarted = [
    {
      id: 1,
      title: "Get In Touch with Our Team",
      description:
        "Click 'Get In Touch' to discuss your property’s needs. We'll guide you through the next steps and answer any questions.",
      icon: <Phone size={20} />,
      stats: [],
      category: "Step 1",
      img: "https://images.pexels.com/photos/5292227/pexels-photo-5292227.jpeg",
    },
    {
      id: 2,
      title: "Meet Your Local Hosting Partner",
      description:
        "We'll visit your property for an inspection to gather key details, personalizing our management approach for a seamless partnership.",
      icon: <User size={20} />,
      stats: [],
      category: "Step 2",
      img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    },
    {
      id: 3,
      title: "Onboarding and Listing Creation",
      description:
        "We’ll take care of professional photos and create detailed listings on platforms like Airbnb, ensuring your property attracts the right guests.",
      icon: <Camera size={20} />,
      stats: [],
      category: "Step 3",
      img: "https://images.pexels.com/photos/5082576/pexels-photo-5082576.jpeg",
    },
    {
      id: 4,
      title: "Enjoy Hassle-Free Management",
      description:
        "Sit back and relax while we handle bookings, pricing, guest communication, cleaning, and maintenance to ensure smooth operations.",
      icon: <Cog size={20} />,
      stats: [],
      category: "Step 4",
      img: "https://images.pexels.com/photos/7513208/pexels-photo-7513208.jpeg",
    },
    {
      id: 5,
      title: "Track Your Property’s Progress",
      description:
        "Get real-time updates on booking rates, revenue, and guest feedback to ensure your goals are being met.",
      icon: <ChartArea size={20} />,
      stats: [],
      category: "Step 5",
      img: "https://images.pexels.com/photos/6483619/pexels-photo-6483619.jpeg",
    },
  ];

  const router = useRouter();

  return (
    <Box
      width="100%"
      position="relative"
      my={"50px"}
      px={["8%", "8%", "6%", "0%", "0%", "0%"]}
    >
      {/* Introduction Section */}
      <HStack
        my={["50px", "50px", "100px", "100px", "100px", "100px"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
      >
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>

      {/* The image box scroll move down ----------------------------- */}
      <BoxScrollMoveDown />
      {/* The image box scroll move down ----------------------------- */}
      <Box
        mt={["-100px", "-100px", "-150px", "-150px", "-150px", "-150px"]}
        width="100%"
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: "0",
          bottom: "0",
          left: ["30px", "30px", "30px", "50%"],
          width: "2px",
          backgroundColor: "#f0f0f0",
          transform: ["none", "none", "none", "translateX(-1px)"],
          zIndex: "0",
        }}
      >
        {gettingStarted.map((item, index) => (
          <Box
            key={index}
            data-aos="fade-up"
            position="relative"
            width={["100%", "100%", "100%", "100%", "100%", "100%"]}
            px={["4%", "4%", "6%", "6%", "6%", "10%"]}
            margin="0 auto"
            paddingBottom={index === gettingStarted.length - 1 ? "0" : "180px"}
          >
            {/* Timeline Node */}
            <Box
              position="absolute"
              left={["30px", "30px", "30px", "50%"]}
              top="0"
              width="50px"
              height="50px"
              borderRadius="50%"
              backgroundColor="white"
              border="2px solid #e0e0e0"
              transform={[
                "translateX(-50%)",
                "translateX(-50%)",
                "translateX(-50%)",
                "translateX(-50%)",
              ]}
              display="flex"
              alignItems="center"
              justifyContent="center"
              zIndex="2"
              _hover={{
                backgroundColor: "#f8f8f8",
                boxShadow: "0 0 0 8px rgba(0,0,0,0.03)",
                transition: "all 0.3s ease",
              }}
            >
              <Box color="#333">{item.icon}</Box>
            </Box>

            {/* Content Container */}
            <Box
              display="flex"
              flexDirection={[
                "column",
                "column",
                "column",
                index % 2 === 0 ? "row" : "row-reverse",
              ]}
              paddingLeft={["50px", "50px", "80px", "0"]}
              paddingTop={["0", "0", "0", "60px"]}
            >
              {/* Text Content */}
              <Box
                width={["100%", "100%", "100%", "50%"]}
                paddingRight={["0", "0", "0", index % 2 === 0 ? "120px" : "0"]}
                paddingLeft={["0", "0", "0", index % 2 === 0 ? "0" : "120px"]}
                textAlign={[
                  "left",
                  "left",
                  "left",
                  index % 2 === 0 ? "left" : "left",
                ]}
              >
                {/* Category Tag */}
                <Box
                  ml={["16px", "16px", "0", "0"]}
                  display="inline-block"
                  backgroundColor="#f5f5f5"
                  paddingX="18px"
                  paddingY="8px"
                  borderRadius="6px"
                  marginBottom="24px"
                >
                  <Text
                    fontSize="14px"
                    fontWeight="600"
                    letterSpacing="1px"
                    color="#555"
                  >
                    {item.category}
                  </Text>
                </Box>

                {/* Title */}
                <Text
                  fontSize={["32px", "36px", "40px"]}
                  fontWeight="700"
                  fontFamily="arial"
                  color="black"
                  lineHeight="1.2"
                  marginBottom="16px"
                >
                  {item.title}
                </Text>

                {/* Subtitle */}
                <Text
                  fontSize={["20px", "22px", "24px"]}
                  fontWeight="500"
                  fontFamily="arial"
                  color="#555"
                  marginBottom="30px"
                >
                  {item.subtitle}
                </Text>

                {/* Description */}
                <Text
                  fontSize={["16px", "17px", "18px"]}
                  lineHeight="1.8"
                  fontFamily="arial"
                  color="#333"
                  fontWeight="400"
                  marginBottom="40px"
                >
                  {item.description}
                </Text>

                {/* Stats */}
                <Box
                  display="flex"
                  flexDirection="row"
                  flexWrap="wrap"
                  gap="20px"
                  justifyContent={[
                    "flex-start",
                    "flex-start",
                    "flex-start",
                    index % 2 === 0 ? "flex-end" : "flex-start",
                  ]}
                >
                  {item.stats &&
                    item.stats.map((stat, statIndex) => (
                      <Box
                        key={statIndex}
                        backgroundColor="white"
                        border="1px solid #e0e0e0"
                        borderRadius="12px"
                        paddingX="24px"
                        paddingY="20px"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        minWidth="150px"
                        _hover={{
                          boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                          transform: "translateY(-3px)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <Text
                          fontSize="24px"
                          fontWeight="700"
                          color="#333"
                          marginBottom="8px"
                        >
                          {stat.value}
                        </Text>
                        <Text fontSize="14px" fontWeight="500" color="#777">
                          {stat.label}
                        </Text>
                      </Box>
                    ))}
                </Box>
              </Box>

              {/* Image Container */}
              <Box
                width={["100%", "100%", "100%", "50%"]}
                marginTop={["50px", "50px", "50px", "0"]}
                position="relative"
                paddingX={["0", "0", "0", "30px"]}
              >
                <Box
                  position="relative" // establish containing block for the Image
                  width="100%"
                  height={["300px", "350px", "400px"]}
                  borderRadius="20px"
                  overflow="hidden" // clip the Image and overlay
                  boxShadow="0 12px 40px rgba(0, 0, 0, 0.12)"
                  _before={{
                    content: '""',
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.4) 100%)",
                    zIndex: "1",
                  }}
                  _hover={{
                    transform: "scale(1.02)",
                    transition: "transform 0.5s ease",
                    boxShadow: "0 16px 50px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <Image
                    quality={70}
                    loading="lazy"
                    src={item.img} // your original src untouched
                    alt={item.alt ?? ""} // or provide a meaningful alt
                    fill // makes the img fill the Box
                    style={{
                      objectFit: "cover", // replicates background-size: cover
                      objectPosition: "center", // replicates background-position: center
                    }}
                  />

                  {/* Optional image overlay content */}
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    padding="30px"
                    zIndex="2"
                    width="100%"
                  >
                    <Text
                      fontSize="16px"
                      fontWeight="600"
                      color="white"
                      textShadow="0 1px 2px rgba(0,0,0,0.3)"
                    >
                      {item.id === 1
                        ? "Feel free to contact"
                        : item.id === 2
                          ? "Lets discuss startegy"
                          : item.id === 3
                            ? "Open to the public"
                            : item.id === 4
                              ? "Relax and enjoy"
                              : item.id === 5
                                ? "Track growth"
                                : item.id === 6
                                  ? "Full-service independence"
                                  : ""}
                    </Text>
                  </Box>
                </Box>

                {/* Decorative elements */}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        width="100%"
        maxWidth="1200px"
        margin="0 auto"
        marginTop="160px"
        paddingX={["30px", "40px", "60px"]}
        textAlign="center"
      >
        <Text
          fontSize={["28px", "32px", "36px"]}
          fontWeight="700"
          fontFamily="arial"
          color="black"
          marginBottom="30px"
        >
          Join Us on Our Journey
        </Text>

        <Text
          fontSize={["17px", "18px", "20px"]}
          lineHeight="1.8"
          fontFamily="arial"
          color="#555"
          fontWeight="400"
          maxWidth="800px"
          margin="0 auto"
          marginBottom="50px"
        >
          As we continue to grow and innovate, we're looking for property owners
          who share our vision for exceptional hospitality and management
          excellence.
        </Text>

        <Box
          display="inline-block"
          backgroundColor=" #0A0F29"
          color="white"
          paddingX="40px"
          paddingY="20px"
          borderRadius="12px"
          fontWeight="600"
          fontSize="18px"
          cursor="pointer"
          _hover={{
            backgroundColor: "#222",
            transform: "translateY(-3px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
          }}
          onClick={() => {
            router.push("/contact");
          }}
        >
          <Text>Partner With Us</Text>
        </Box>
      </Box>
      {/* Footer Section */}
      <HStack
        my={["50px", "50px", "100px", "100px", "100px", "100px"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
      >
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>
    </Box>
  );
};

export default HowWeCanGetYouStarted;
