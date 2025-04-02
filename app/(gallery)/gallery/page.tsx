"use client";

import React, { useEffect, useState } from "react";
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
import TitleSubheading from "@/components/luxeComponents/Text/titleSubheading";
import Aos from "aos";
import "aos/dist/aos.css";
import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation";
import { ChevronRight } from "lucide-react";

import {
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/chakra-snippets/dialog";
import Image from "next/image";

const Gallery = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const [clickedImage, setClickedImage] = useState<{
      size: number | `${number}` | undefined; img: string 
} | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const galleryItems = [
    {
      img: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg",
      title: "Property Management",

      link: "services/property-management",
      subheading:
        "Comprehensive management service including all our offerings.",
        size:1000
    },
    {
      img: "https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg",
      title: "Cleaning & Linen",

      link: "Explore service",
      subheading:
        "Ensure a pristine, hotel-quality experience for every guest.",
    },
    {
      img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg",
      title: "Furnishing & Styling",

      link: "Explore service",
      subheading:
        "Transform your space into a stunning, Instagram-worthy retreat.",
    },
    {
      img: "https://images.pexels.com/photos/30670960/pexels-photo-30670960.jpeg",
      title: "Photography",

      link: "Explore service",
      subheading:
        "Capture your property's best features with professional photography.",
    },

    {
      img: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg",
      title: "Property Management",

      link: "services/property-management",
      subheading:
        "Comprehensive management service including all our offerings.",
    },
    {
      img: "https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg",
      title: "Cleaning & Linen",

      link: "Explore service",
      subheading:
        "Ensure a pristine, hotel-quality experience for every guest.",
    },
    {
      img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg",
      title: "Furnishing & Styling",

      link: "Explore service",
      subheading:
        "Transform your space into a stunning, Instagram-worthy retreat.",
    },
    {
      img: "https://images.pexels.com/photos/30670960/pexels-photo-30670960.jpeg",
      title: "Photography",

      link: "Explore service",
      subheading:
        "Capture your property's best features with professional photography.",
    },
  ];

  return (
    <>
      <TitleSubheading
        title={"Gallery"}
        subheading={"Check out our latest work."}
      />

      <HStack
        mt={["100px", "100px", "100px", "100px", "100px", "100px"]}
        w={"100%"}
        h={"100%"}
        justify={"center"}
        align={"center"}
        px={"4%"}
        flexWrap={["wrap", "wrap", "wrap", "wrap", "wrap", "wrap"]}
        fontFamily={"raleway"}
        gap={"25px"}
      >
        {/* {uploadedFiles.length > 0 ? ( */}
        {galleryItems.map(({ img, title, subheading }, index) => (
          <VStack key={index}>
            <Box
              onClick={() => {
                setClickedImage(galleryItems[index]);
                setModalOpen(true);
              }}
              backgroundImage={`linear-gradient(to top,rgb(39,44,66), transparent), url(${img})`}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              transition={"all 0.3s"}
              w={["350px", "350px", "350px", "550px", "550px", "550px"]}
              h={"400px"}
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
                  {/* <Text
                    color={"white"}
                    fontSize={["26px", "26px", "26px", "26px", "26px", "26px"]}
                    fontFamily={"Raleway"}
                    fontWeight={700}
                  >
                    {title}
                  </Text> */}
                </VStack>
              </VStack>
            </Box>
            {/* <Box
              fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
              w={["350px", "350px", "350px", "550px", "550px", "550px"]}
            >
              <Text mt={"10px"}>{subheading}</Text>
              <HStack
                cursor={"pointer"}
                align={"start"}
                justify={"start"}
                fontWeight={500}
                mt={"5px"}
                _hover={{ transform: "translateX(5px)" }}
                transition={"all 0.3s"}
              
              >
                <Text>Explore service</Text>

                <ChevronRight />
              </HStack>
            </Box> */}
          </VStack>
        ))}
      </HStack>

      <DialogRoot
        size={"cover"}
        open={modalOpen}
        onOpenChange={(details) => setModalOpen(details.open)}
      >
        <DialogContent
          p={10}
          bg={"white"}
          color={"white"}
          rounded={"10px"}
          borderRadius={"10px"}
        >
          <HStack justify={"center"} align={"center"} w={"100%"} h={"100%"}>


            {/* {clickedImage && (
              <Image style={{borderRadius:"10px"}} width={clickedImage.size} height={1000} src={clickedImage.img} alt={""} />
            )} */}
 <Box
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              h={"100%"}
              borderRadius="30px"
   
              overflow="hidden"
              backgroundImage={` url(${clickedImage.img})`}
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
              backgroundSize="contain"
            ></Box> 
          </HStack>

          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>

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

export default Gallery;
