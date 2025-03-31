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
import { Check, Cog, PersonStandingIcon, TrendingUp } from "lucide-react";
const PropertyManagement = () => {
  return (
    <>
      <Box
        w={"100%"}
        h={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          backgroundImage={`linear-gradient(to top,rgb(39,44,66), transparent), url(https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg)`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          transition={"all 0.3s"}
          w={"95%"}
          h={"600px"}
          borderRadius={"16px"}
          _hover={{
            transform: "scale(1.01)",
          }}
          cursor={"pointer"}
          p={"30px"}
          display={"flex"}
          fontFamily={"raleway"}
        >
          <VStack
            color={"white"}
            mt={"20px"}
            w={"100%"}
            h={"100%"}
            display={"flex"}
            justifyContent={"start"}
            alignItems={"start"}
            p={"32px"}
          >
            <VStack justify={"center"} align={"START"} w={"100%"} h={"100%"}>
              <Text
                fontSize={{
                  base: "40px",
                  sm: "40px",
                  md: "40px",
                  lg: "60px",
                  xl: "80px",
                }}
                fontWeight={700}
                bgClip="text"
                color={"white"}
                bgGradient="linear(to-r, teal, blue)"
                lineHeight={1}
              >
                Property <br></br> Management
              </Text>
              <Text
                w={["90%", "90%", "90%", "50%", "50%", "50%"]}
                fontSize={["16px", "16px", "16px", "26px", "26px", "26px"]}
                // mt={["20px", "20px", "20px", "20px", "20px", "20px"]}

                fontWeight={300}
              >
                Elevate your investment with our comprehensive suite of premium
                services designed to maximize returns and enhance guest
                experiences.
              </Text>
            </VStack>
          </VStack>
        </Box>
      </Box>

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
          w={"90%"}
          h={"100%"}
          borderRadius={"30px"}
          p={"25px"}
          py={"65px"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Text
            color={"black"}
            fontWeight={"700"}
            fontSize={["24px", "24px", "24px", "35px", "35px", "40px"]}
            fontFamily={"raleway"}
            mb={"10px"}
          >
            Our Methodology
          </Text>

          <HStack
            justify={"center"}
            align={"start"}
            w={"100%"}
            transition={"all 0.2s ease-in-out"}
            zIndex={3}
            gap={["25px", "25px", "25px", "25px", "25px", "25px"]}
            wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
            mt={"50px"}
            color={"black"}
            fontFamily={"raleway"}
          >
            {" "}
            <Box p={4} rounded={"15px"} w={"300px"} h={"280px"} shadow={"lg"}>
              <HStack justify={"center"} align={"center"} my={"20px"}>
                <PersonStandingIcon size={50} />
              </HStack>

              <Text fontSize={"24px"} fontWeight={"700"}>
                Bespoke Service
              </Text>
              <Text pt={"15px"}>
                Tailored management solutions designed specifically for your
                unique property and investment goals.
              </Text>
            </Box>
            <Box p={4} rounded={"15px"} w={"300px"} h={"280px"} shadow={"lg"}>
              <HStack justify={"center"} align={"center"} my={"20px"}>
                <Cog size={50} />
              </HStack>

              <Text fontSize={"24px"} fontWeight={"700"}>
                Innovative Technology
              </Text>
              <Text pt={"15px"}>
                Advanced systems and tools that streamline operations and
                enhance guest satisfaction.
              </Text>
            </Box>
            <Box p={4} rounded={"15px"} w={"300px"} h={"280px"} shadow={"lg"}>
              <HStack justify={"center"} align={"center"} my={"20px"}>
                <TrendingUp size={50} />
              </HStack>

              <Text fontSize={"24px"} fontWeight={"700"}>
                Revenue Maximization
              </Text>
              <Text pt={"15px"}>
                Dynamic pricing and targeted marketing strategies that optimize
                your property's earning potential.
              </Text>
            </Box>
          </HStack>
        </Box>
      </HStack>

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
          w={"90%"}
          h={"100%"}
          borderRadius={"30px"}
          p={"25px"}
          py={"65px"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Text
            color={"black"}
            fontWeight={"700"}
            fontSize={["24px", "24px", "24px", "35px", "35px", "40px"]}
            fontFamily={"raleway"}
            mb={"10px"}
          >
            All-Inclusive Services
          </Text>
        </Box>
      </HStack>

      <HStack
        fontFamily={"raleway"}
        mt={["100px", "100px", "100px", "100px", "100px", "100px"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
        h={"100%"}
      >
        <HStack justify={"center"} align={"start"} w={"100%"} gap={"100px"}    flexWrap={["wrap", ""]}>
          <Box
            w={"500px"}
            h={"100%"}
            textAlign={["start", "start", "start", "start", "start", "start"]}
          >
            <Text fontSize={"24px"} fontWeight={"700"}>
              Innovative Technology
            </Text>
            <Text pt={"15px"}>
              Advanced systems and tools that streamline operations and enhance
              guest satisfaction.
            </Text>
            <HStack
              align={["start", "start", "start", "start", "start", "start"]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              mt={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>24/7 Guest Communication</Text>
            </HStack>
            <HStack
              align={["start", "start", "start", "start", "start", "start"]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              mt={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>24/7 Guest Communication</Text>
            </HStack>
            <HStack
              align={["start", "start", "start", "start", "start", "start"]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              mt={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>24/7 Guest Communication</Text>
            </HStack>
            <HStack
              align={["start", "start", "start", "start", "start", "start"]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              mt={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>24/7 Guest Communication</Text>
            </HStack>
          </Box>
          <Box
            backgroundImage={`linear-gradient(to top,rgb(39,44,66), transparent), url(https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg)`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            transition={"all 0.3s"}
            w={["90%", "90%", "500px", "500px", "500px", "500px"]}
            h={"500px"}
            borderRadius={"16px"}
            _hover={{
              transform: "scale(1.01)",
            }}
            cursor={"pointer"}
            p={"30px"}
            display={"flex"}
          ></Box>
        </HStack>
      </HStack>

      <HStack
        fontFamily={"raleway"}
        mt={["100px", "100px", "100px", "100px", "100px", "100px"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
        h={"100%"}
      >
        <HStack
          justify={"center"}
          align={"start"}
          w={"100%"}
          gap={"100px"}
          flexWrap={"wrap"}
        >
          <Box
            backgroundImage={`linear-gradient(to top,rgb(39,44,66), transparent), url(https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg)`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            transition={"all 0.3s"}
            w={["90%", "90%", "500px", "500px", "500px", "500px"]}
            h={"500px"}
            borderRadius={"16px"}
            _hover={{
              transform: "scale(1.01)",
            }}
            cursor={"pointer"}
            p={"30px"}
            display={"flex"}
          ></Box>
          <Box
            w={"500px"}
            h={"100%"}
            textAlign={["start", "start", "start", "start", "start", "start"]}
          >
            <Text fontSize={"24px"} fontWeight={"700"}>
              Innovative Technology
            </Text>
            <Text pt={"15px"}>
              Advanced systems and tools that streamline operations and enhance
              guest satisfaction.
            </Text>
            <HStack
              align={["start", "start", "start", "start", "start", "start"]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              mt={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>24/7 Guest Communication</Text>
            </HStack>
            <HStack
              align={["start", "start", "start", "start", "start", "start"]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              mt={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>24/7 Guest Communication</Text>
            </HStack>
            <HStack
              align={["start", "start", "start", "start", "start", "start"]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              mt={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>24/7 Guest Communication</Text>
            </HStack>
            <HStack
              align={["start", "start", "start", "start", "start", "start"]}
              justify={["start", "start", "start", "start", "start", "start"]}
              w={"100%"}
              gap={"10px"}
              mt={"20px"}
            >
              <Box p={2} bg={"gray.200"} borderRadius={"50%"}>
                <Check size={20} />{" "}
              </Box>
              <Text>24/7 Guest Communication</Text>
            </HStack>
          </Box>
        </HStack>
      </HStack>
    </>
  );
};

export default PropertyManagement;
