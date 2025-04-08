import React from "react";
import {
  Box,
  Stack,
  Flex,
  Group,
  HStack,
  Icon,
  Button,
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogFooter,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
const FurnishingStylingCardLists = () => {
  const router = useRouter();

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

  const GettingStartedSteps = [
    {
      id: 1,
      title: "Get In Touch",
      description:
        'Connect with our team to discuss your goals, vision, and expectations for the space',
    },
    {
      id: 2,
      title: "Onsite Design Consultation",
      description:
        "Your local Luxe partner visits the property to assess layout, lighting, and style potential.",
    },
    {
      id: 3,
      title: "Budget & Scope Alignment",
      description:
        "We collaborate with you to define the ideal budget and scale of transformation.",
    },
    {
      id: 4,
      title: "Design Proposal",
      description:
        "Receive a tailored styling plan with curated furniture, décor selections, and layout concepts.",
    },
    {
      id: 5,
      title: "Furnish, Style & Shoot",
      description:
        "We manage everything—purchasing, delivery and installation",
    },
   
  ];

  return (
    <>
      <HStack
        zIndex={3}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
        my={["100px", "100px", "100px", "100px", "100px", "100px"]}
      >
        <HStack
          justify={["center", "center", "center", "center", "center", "center"]}
          align={["center", "center", "start", "start", "start", "start"]}
          w={"100%"}
          h={"100%"}
          gap={["5px", "5px", "5px", "5px", "5px", "5px"]}
          wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["100%", "100%", "100%", "60%", "50%", "50%"]}>
            <Text
              data-aos="fade-up"
              w={["100%", "100%", "80%", "80%", "80%", "80%"]}
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              fontSize={["35px", "35px", "35px", "50px", "50px", "50px"]}
              fontWeight={700}
              fontFamily={"Raleway"}
              bgClip="text"
              textAlign={["center", "center", "left", "left", "left", "left"]}
              color={"black"}
              bgGradient="linear(to-r, teal, blue)"
            >
              Our Design Process
            </Text>
            <Text
               data-aos="fade-up"
              fontSize={["18px", "18px", "18px", "18px", "18px", "18px"]}
              mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
              textAlign={["center", "center", "left", "left", "left", "left"]}
              fontFamily={"Raleway"}
              color={"black"}
              w={["100%", "100%", "80%", "80%", "80%", "80%"]} // !important
              fontWeight={300}
            >
              We transform ordinary spaces into extraordinary experiences
              through a meticulous, collaborative process designed to capture
              your vision and exceed expectations.
            </Text>
            <HStack
              data-aos="fade-up"
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
                mt={"50px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"15px"}
                fontFamily={"raleway"}
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
              >
                Get in Touch
                {/* <Icon as={ArrowRight}> </Icon> */}
              </Box>
            </HStack>
          </Box>

          <Box
            mt={["50px", "50px", "50px", "50px", "50px", "50px"]}
            display={["block", "block", "block", "block", "block", "block"]}
            // border={"1px solid rgb(0, 0, 0,0.25)"}
            h={["500px", "500px", "500px", "500px", "500px", "500px"]}
            w={["100%", "100%", "100%", "450px", "550px", "550px"]}
            backdropFilter="blur(1.5px)"
            borderRadius={"30px"}
            bgPos={"center"}
            bgSize={"cover"}
            data-aos="fade-up"
          >
            {" "}
            {GettingStartedSteps.slice(0, 5).map(
              ({ id, title, description }, index) => (
                <VStack key={id} w={"100%"} align={"center"} justify={"start"}>
                  <HStack
                    w={"100%"}
                    h={"100%"}
                    justify={"start"}
                    align={"start"}
                    gap={2}
                  >
                    <VStack justify={"center"} gap={0}>
                      <Box
                        w={"50px"}
                        h={"50px"}
                        borderRadius={"15px"}
                        bg={"white"}
                        border={"1px solid rgb(0, 0,0,0.25)"}
                      >
                        <HStack
                          w={"100%"}
                          justify={"center"}
                          h={"100%"}
                          align={"center"}
                        >
                          <Text
                            fontSize={[
                              "14px",
                              "18px",
                              "16px",
                              "16px",
                              "18px",
                              "18px",
                            ]}
                            fontWeight={500}
                            color={"black"}
                          >
                            {id}
                          </Text>
                        </HStack>
                      </Box>
                      {index < 4 && (
                        <Box
                          transition={"transform 0.3s ease"}
                          zIndex={-1}
                          w={"5px"}
                          h={"100px"}
                          bg={"#BFBFBF"}
                        ></Box>
                      )}
                    </VStack>

                    <Box>
                      <Text
                        fontSize={[
                          "14px",
                          "14px",
                          "16px",
                          "16px",
                          "18px",
                          "18px",
                        ]}
                        fontWeight={500}
                        textAlign={"left"}
                        fontFamily={"Raleway"}
                        color={"black"}
                        w={"100%"} // !important
                      >
                        {title}
                      </Text>
                      <Text
                        fontSize={[
                          "13px",
                          "13px",
                          "15px",
                          "15px",
                          "17px",
                          "17px",
                        ]}
                        textAlign={"left"}
                        fontFamily={"Raleway"}
                        color={"black"}
                        w={"100%"}
                        fontWeight={300}
                      >
                        {description}
                      </Text>
                    </Box>
                  </HStack>
                </VStack>
              ),
            )}
            {/* <Image src={collage} />   //!cool */}
          </Box>
        </HStack>
      </HStack>
    </>
  );
};

export default FurnishingStylingCardLists;
