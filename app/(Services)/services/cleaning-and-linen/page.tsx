"use client";
import React, { useEffect } from "react";
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

import {
  Check,
  ChevronRight,
  Cog,
  PersonStandingIcon,
  TrendingUp,
} from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation";
import CleaningLinenCardLists from "@/components/luxeComponents/CleaningLinenCardLists";
const CleaningAndLinen = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

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
            mt={"10px"}
            w={"100%"}
            h={"100%"}
            display={"flex"}
            justifyContent={"start"}
            alignItems={"start"}
            p={"32px"}
          >
            <VStack justify={"end"} align={"start"} w={"100%"} h={"100%"}>
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
                Cleaning &<br></br>Linen
              </Text>
              <Text
                w={["90%", "90%", "90%", "50%", "50%", "50%"]}
                fontSize={["16px", "16px", "16px", "26px", "26px", "26px"]}
                // mt={["20px", "20px", "20px", "20px", "20px", "20px"]}

                fontWeight={300}
              >
                Elevate your space with our meticulous cleaning process and
                premium linen service.
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
          <HStack
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
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              textAlign={"center"}
            >
              <Text
                w={["100%", "100%", "100%", "100%", "100%", "100%"]}
                mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
                fontSize={["35px", "35px", "35px", "50px", "50px", "50px"]}
                fontWeight={600}
                fontFamily={"Raleway"}
                bgClip="text"
                textAlign={[
                  "center",
                  "center",
                  "center",
                  "center",
                  "center",
                  "center",
                ]}
                color={"black"}
                bgGradient="linear(to-r, teal, blue)"
              >
                Redefining Cleanliness
              </Text>

              <Text
                fontSize={["18px", "18px", "18px", "18px", "18px", "18px"]}
                mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
                textAlign={[
                  "center",
                  "center",
                  "center",
                  "center",
                  "center",
                  "center",
                ]}
                fontFamily={"Raleway"}
                color={"black"}
                w={["90%", "90%", "90%", "50%", "50%", "50%"]}
                fontWeight={300}
              >
                Elevate your property's performance and reputation with Luxe
                Managements' comprehensive approach. We combine meticulous
                attention to detail with market expertise to create a
                distinguished destination.
              </Text>
            </Box>
          </HStack>
          <HStack
            mt={["100px", "100px", "100px", "100px", "100px", "100px"]}
            w={"100%"}
            h={"100%"}
            justify={"center"}
            align={"center"}
            px={["4%", "4%", "6%", "6%", "6%", "10%"]}
            flexWrap={["wrap", "wrap", "wrap", "wrap", "wrap", "wrap"]}
            fontFamily={"raleway"}
            gap={"25px"}
          >
            {/* {uploadedFiles.length > 0 ? ( */}

            <VStack>
              <Box
                backgroundImage={`linear-gradient(to top,rgb(39,44,66), transparent), url(https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg)`}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                transition={"all 0.3s"}
                w={["100%", "250px", "250px", "400px", "400px", "400px"]}
                h={"300px"}
                borderRadius={"16px"}
                _hover={{
                  transform: "scale(1.01)",
                }}
                cursor={"pointer"}
                p={"30px"}
                display={"flex"}
              >
                <VStack
                  color={"white"}
                  mt={"20px"}
                  w={"100%"}
                  h={"100%"}
                  display={"flex"}
                  justifyContent={"end"}
                  alignItems={"end"}
                >
                  <VStack
                    w={"100%"}
                    h={"100%"}
                    justify={"Start"}
                    align={"Start"}
                  >
                    <HStack
                      w={"100%"}
                      h={"100%"}
                      justify={"start"}
                      align={"end"}
                    >
                      {" "}
                      <PersonStandingIcon size={50} />{" "}
                    </HStack>
                    <Text
                      textAlign={"start"}
                      color={"white"}
                      fontSize={[
                        "26px",
                        "26px",
                        "26px",
                        "26px",
                        "26px",
                        "26px",
                      ]}
                      fontFamily={"Raleway"}
                      fontWeight={700}
                    >
                      Premium Products
                    </Text>
                  </VStack>
                </VStack>
              </Box>
              <Box
                fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
                w={["100%", "250px", "250px", "400px", "400px", "400px"]}
                pt={"15px"}
              >
                <Text textAlign={"start"}>
                  We use only the finest, eco-friendly cleaning products to
                  protect your property and the environment.
                </Text>
              </Box>
            </VStack>

            <VStack>
              <Box
                backgroundImage={`linear-gradient(to top,rgb(39,44,66), transparent), url(https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg)`}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                transition={"all 0.3s"}
                w={["100%", "250px", "250px", "400px", "400px", "400px"]}
                h={"300px"}
                borderRadius={"16px"}
                _hover={{
                  transform: "scale(1.01)",
                }}
                cursor={"pointer"}
                p={"30px"}
                display={"flex"}
              >
                <VStack
                  color={"white"}
                  mt={"20px"}
                  w={"100%"}
                  h={"100%"}
                  display={"flex"}
                  justifyContent={"end"}
                  alignItems={"end"}
                >
                  <VStack
                    w={"100%"}
                    h={"100%"}
                    justify={"Start"}
                    align={"Start"}
                  >
                    <HStack
                      w={"100%"}
                      h={"100%"}
                      justify={"start"}
                      align={"end"}
                    >
                      {" "}
                      <Cog size={50} />{" "}
                    </HStack>
                    <Text
                      textAlign={"start"}
                      color={"white"}
                      fontSize={[
                        "26px",
                        "26px",
                        "26px",
                        "26px",
                        "26px",
                        "26px",
                      ]}
                      fontFamily={"Raleway"}
                      fontWeight={700}
                    >
                      Expert Team
                    </Text>
                  </VStack>
                </VStack>
              </Box>
              <Box
                fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
                w={["100%", "250px", "250px", "400px", "400px", "400px"]}
                pt={"15px"}
              >
                <Text textAlign={"start"}>
                  Our highly trained professionals bring years of experience in
                  luxury property care.
                </Text>
              </Box>
            </VStack>

            <VStack>
              <Box
                backgroundImage={`linear-gradient(to top,rgb(39,44,66), transparent), url(https://images.pexels.com/photos/16282306/pexels-photo-16282306.jpeg)`}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                transition={"all 0.3s"}
                w={["100%", "250px", "250px", "400px", "400px", "400px"]}
                h={"300px"}
                borderRadius={"16px"}
                _hover={{
                  transform: "scale(1.01)",
                }}
                cursor={"pointer"}
                p={"30px"}
                display={"flex"}
              >
                <VStack
                  color={"white"}
                  mt={"20px"}
                  w={"100%"}
                  h={"100%"}
                  display={"flex"}
                  justifyContent={"end"}
                  alignItems={"end"}
                >
                  <VStack
                    w={"100%"}
                    h={"100%"}
                    justify={"Start"}
                    align={"Start"}
                  >
                    <HStack
                      w={"100%"}
                      h={"100%"}
                      justify={"start"}
                      align={"end"}
                    >
                      {" "}
                      <TrendingUp size={50} />{" "}
                    </HStack>
                    <Text
                      textAlign={"start"}
                      color={"white"}
                      fontSize={[
                        "26px",
                        "26px",
                        "26px",
                        "26px",
                        "26px",
                        "26px",
                      ]}
                      fontFamily={"Raleway"}
                      fontWeight={700}
                    >
                      Impeccable Detail
                    </Text>
                  </VStack>
                </VStack>
              </Box>
              <Box
                fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
                w={["100%", "250px", "250px", "400px", "400px", "400px"]}
                pt={"15px"}
              >
                <Text textAlign={"start"}>
                  We meticulously clean every corner, ensuring no detail is
                  overlooked.
                </Text>
              </Box>
            </VStack>
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
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Text
            w={["100%", "100%", "100%", "100%", "100%", "100%"]}
            mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
            fontSize={["35px", "35px", "35px", "50px", "50px", "50px"]}
            fontWeight={600}
            fontFamily={"Raleway"}
            bgClip="text"
            textAlign={[
              "center",
              "center",
              "center",
              "center",
              "center",
              "center",
            ]}
            color={"black"}
            bgGradient="linear(to-r, teal, blue)"
          >
            Our Cleaning Symphony
          </Text>
        </Box>
      </HStack>

      <CleaningLinenCardLists />

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

export default CleaningAndLinen;
