import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const HeroServices = () => {
  const router = useRouter();
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
              Maximize Your AirBnB Earnings
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
              Optimize your earnings and ease your mind with our Adelaide-based experienced
              Airbnb Management team.
            </Text>
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
                onClick={() => router.push("/services")}
              >
                Learn More
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
            >
              {" "}
              <Image
              priority={true}
quality={75}                 src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg"
                alt="Property"
                layout="fill"
                objectFit="cover"
                quality={75} // Adjust quality for performance
              />
            </Box>
            {/* Bottom-right label */}
            <Box
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
            </Box>
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
              Professional AirBnB Management
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
              Experience stress-free AirBnB management with our dedicated Adelaide-based team gcg
              of professionals.
            </Text>
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
                onClick={() => router.push("/services")}
              >
                Learn More
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
            >
              <Image
              priority={true}
quality={75}                 src="https://images.pexels.com/photos/2826787/pexels-photo-2826787.jpeg"
                alt="Property"
                layout="fill"
                objectFit="cover"
                quality={75} // Adjust quality for performance
              />
            </Box>
            {/* Bottom-right label */}

            <Box
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
            </Box>
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
              Professional AirBnB Property Management
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
              Experience stress-free AirBnB management with our dedicated Adelaide-based team
              of professionals.
            </Text>
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
                onClick={() => router.push("/services")}
              >
                Learn More
                {/* <Icon as={ArrowRight}> </Icon> */}
              </Box>
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
              Comprehensive Guest Services
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
              From seamless check-ins to bespoke services, we ensure
              guest satisfaction at every step.
            </Text>
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
                onClick={() => router.push("/services")}
              >
                Learn More
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
            >
              <Image
              priority={true}
quality={75}                 src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
                alt="Property"
                layout="fill"
                objectFit="cover"
                quality={75} // Adjust quality for performance
              />
            </Box>
            {/* Bottom-right label */}
            <Box
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
            </Box>
          </Box>
        </HStack>
      </HStack>
    </>
  );
};

export default HeroServices;
