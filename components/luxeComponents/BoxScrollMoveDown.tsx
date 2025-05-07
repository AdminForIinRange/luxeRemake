
"use client";
import React from "react";
import { ContainerScroll } from "@/components/ScrollBoxMove/container-scroll-animation";
import Image from "next/image";
import GalleryImgScreenShot from "@/public/images/webImages/GalleryImgScreenShot.png";
import { Box, HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation"
export function BoxScrollMoveDown() {
    const router = useRouter()
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
              <Box w={["100%", "100%", "100%", "100%", "100%", "100%"]} mb={["20px", "20px", "20px", "20px", "20px", "50px"]}>
                      <Text
                        data-aos="fade-up"
                        w={["100%", "100%", "100%", "100%", "100%", "100%"]}
                        mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
                        fontSize={["25px", "25px", "25px", "50px", "50px", "50px"]}
                        fontWeight={700}
                        fontFamily={"arial"}
                        bgClip="text"
                        textAlign={["center", "center", "center", "center", "center", "center"]}
                        color={"black"}
                        bgGradient="linear(to-r, teal, blue)"
                      >
                        How We Can Get You Get Started
                      </Text>
                      <Text
                        fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}
                        mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
                        textAlign={["center", "center", "center", "center", "center", "center"]}
                        fontFamily={"arial"}
                        color={"black"}
                        w={["100%", "100%", "100%", "100%", "100%", "100%"]} // !important
                        fontWeight={300}
                      >
                        Learn how we can help you get started with personalized guidance
                        and expert support every step of the way.
                      </Text>
                      <HStack
                        data-aos="fade-up"
                        justify={[
                          "center",
                          "center",
                          "center",
                          "center",
                          "center",
                          "center",
                        ]}
                        align={"center"}
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
                          onClick={() => {
                            
                            router.push("/contact")

                          }}
                        >
                          Get in Touch
                          {/* <Icon as={ArrowRight}> </Icon> */}
                        </Box>
                      </HStack>
                    </Box>
          </>
        }
      >
        <Image
          src={GalleryImgScreenShot}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
