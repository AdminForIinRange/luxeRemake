"use client";
import React, { useState } from "react";
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
import { ChevronRight, Home, HomeIcon, House } from "lucide-react";
import { IconLeft } from "react-day-picker";
import { IconArrowRightFromArc } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import {
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/chakra-snippets/dialog";
import Footer from "@/components/Footer";
const Services = () => {
  const serviceItems = [
    {
      img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg",
      title: "Property Management",
      logo: <HomeIcon />,
      link: "Explore service",
      subheading:
        "Comprehensive management service including all our offerings.",
    },
    {
      img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg",
      title: "Cleaning & Linen",
      logo: <HomeIcon />,
      link: "Explore service",
      subheading:
        "Ensure a pristine, hotel-quality experience for every guest.",
    },
    {
      img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg",
      title: "Furnishing & Styling",
      logo: <HomeIcon />,
      link: "Explore service",
      subheading:
        "Transform your space into a stunning, Instagram-worthy retreat.",
    },
    {
      img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg",
      title: "Photography",
      logo: <HomeIcon />,
      link: "Explore service",
      subheading:
        "Capture your property's best features with professional photography.",
    },
  ];

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <VStack
        mt={["50px", "50px", "50px", "50px", "50px", "50px"]}
        w={["100%", "100%", "100%", "100%", "100%", "100"]}
        textAlign={["center", "center", "center", "center", "center", "center"]}
        color={"black"}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
      >
        <Text
          fontSize={{
            base: "60px",
            sm: "60px",
            md: "60px",
            lg: "60px",
            xl: "60px",
          }}
          fontWeight={700}
          fontFamily={"Poppins"}
          bgClip="text"
          color={"black"}
          bgGradient="linear(to-r, teal, blue)"
        >
          Our Services
        </Text>
        <Text
          w={"50%"}
          fontSize={["26px", "26px", "26px", "26px", "26px", "26px"]}
          // mt={["20px", "20px", "20px", "20px", "20px", "20px"]}

          fontFamily={"Poppins"}
          color={"black"}
          fontWeight={300}
        >
          We offer a full suite of services to help you manage your property
          with ease.
        </Text>
      </VStack>

      <HStack
        mt={["100px", "100px", "100px", "100px", "100px", "100px"]}
        w={"100%"}
        h={"100%"}
        justify={"start"}
        align={"center"}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        flexWrap={["wrap", "wrap", "wrap", "wrap", "wrap", "wrap"]}
        fontFamily={"raleway"}
        gap={"25px"}
      >
        {/* {uploadedFiles.length > 0 ? ( */}
        {serviceItems.map(({ img, title, logo, link, subheading }) => (
          <VStack key={title}>
            <Box
              backgroundImage={`linear-gradient(to top,rgb(39,44,66), transparent), url(${img})`}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              transition={"all 0.3s"}
              w={"450px"}
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
                <VStack w={"100%"} h={"100%"} justify={"Start"} align={"Start"}>
                  <HStack w={"100%"} h={"100%"} justify={"start"} align={"end"}>
                    {logo}
                  </HStack>
                  <Text
                    color={"white"}
                    fontSize={["26px", "26px", "26px", "26px", "26px", "26px"]}
                    fontFamily={"Poppins"}
                    fontWeight={700}
                  >
                    {title}
                  </Text>
                </VStack>
              </VStack>
            </Box>
            <Box fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}>
              <Text w={"450px"} h={"50px"} mt={"10px"}>
                {subheading}
              </Text>
              <HStack
                cursor={"pointer"}
                w={"450px"}
                align={"start"}
                justify={"start"}
                fontWeight={500}
                mt={"5px"}
                _hover={{ transform: "translateX(5px)" }}
                transition={"all 0.3s"}
                onClick={() => router.push(`/${link}`)}
              >
                <Text>Explore service</Text>

                <ChevronRight />
              </HStack>
            </Box>
          </VStack>
        ))}
      </HStack>

      <HStack
        mt={["100px", "100px", "100px", "100px", "100px", "100px"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
      >
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
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
          bg={"#0A0F29"}
          w={"90%"}
          h={"100%"}
          borderRadius={"30px"}
          p={"25px"}
          py={"35px"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          boxShadow={"0px 10px 20px rgba(0, 0, 0, 0.1)"}
          textAlign={"center"}
        >
          <Text
            color={"white"}
            fontWeight={"700"}
            fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
            fontFamily={"raleway"}
            mb={"10px"}
          >
            Ready to transfrom your property management?
          </Text>
          <Text
            color={"white"}
            fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
            fontFamily={"raleway"}
          >
            Get a full consulation, market analysis in under 24 hours for free
          </Text>

          <HStack
            justify={"center"}
            align={"center"}
            w={"100%"}
            transition={"all 0.2s ease-in-out"}
            zIndex={3}
          >
            <Box
              my={"25px"}
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
                bg: "white",
              }}
              p={4}
              bg={"White"}
              color={"black"}
              rounded={"30px"}
              px={"12"}
              fontWeight={"500"}
              onClick={() => setIsDialogOpen(true)}
            >
              Schedule a consultation
              {/* <Icon as={ArrowRight}> </Icon> */}
            </Box>
          </HStack>
        </Box>
      </HStack>

      <DialogRoot
        size={"cover"}
        open={isDialogOpen}
        onOpenChange={(details) => setIsDialogOpen(details.open)}
      >
        <DialogContent
          p={0}
          bg={"white"}
          color={"white"}
          rounded={"10px"}
          borderRadius={"10px"}
        >
          <iframe
            style={{
              width: "100%",
              height: "800px",
              border: "none",
              borderRadius: "10px",
            }}
            src="https://calendly.com/bhattaraianjesh123"
          ></iframe>

          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>

      <Footer />
    </>
  );
};

export default Services;
