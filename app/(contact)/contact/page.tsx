"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Text,
  Flex,
  HStack,
  DialogCloseTrigger,
} from "@chakra-ui/react";
import TitleSubheading from "@/components/luxeComponents/Text/titleSubheading";
import Aos from "aos";
import "aos/dist/aos.css";
import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation";
import { DialogContent, DialogRoot } from "@/components/chakra-snippets/dialog";
const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <TitleSubheading
        title={"Let's Get in Touch"}
        subheading={"We’d love to hear from you."}
      />

      <Flex
        direction={{ base: "column", md: "row" }}
        justify={"center"}
        align={"start"}
        px={{ base: "6%", md: "10%" }}
        py={{ base: "40px", md: "80px" }}
        gap={"30px"}
        data-aos="fade-up"
      >
        {/* Contact Info */}
        <Box w={{ base: "100%", md: "40%" }}>
          <Text
            fontSize={{ base: "26px", md: "34px" }}
            fontWeight={700}
            fontFamily={"Raleway"}
            color={"#0A0F29"}
            mb={"24px"}
          >
            Contact Information
          </Text>

          <Stack gap={"20px"} fontSize={"16px"} fontFamily={"Raleway"}>
            <Text fontWeight={500} color={"#333"}>
              Email:{" "}
              <span style={{ fontWeight: 400 }}>
                luxemanagements.info@gmail.com
              </span>
            </Text>
            <Text fontWeight={500} color={"#333"}>
              Phone: <span style={{ fontWeight: 400 }}>(123) 456-7890</span>
            </Text>
            <Text fontWeight={500} color={"#333"}>
              Location: <span style={{ fontWeight: 400 }}>South Australia</span>
            </Text>
          </Stack>
        </Box>

        {/* Contact Placeholder */}
        <Box w={"100%"} h={"100%"} borderRadius={"20px"} data-aos="fade-up">
          <HStack
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
              textAlign={"center"}
            >
              <Text
                color={"white"}
                fontWeight={"700"}
                fontSize={["40px", "40px", "40px", "40px", "40px", "40px"]}
                fontFamily={"raleway"}
                mb={"10px"}
              >
                Ready to transfrom your property management?
              </Text>
              <Text
                color={"white"}
                fontSize={["18px", "18px", "18px", "18px6px", "18px", "18px"]}
                fontFamily={"raleway"}
              >
                Get a full consulation, market analysis in under 24 hours for
                free
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
                src="https://calendly.com/luxemanagements-info"
              ></iframe>

              <DialogCloseTrigger />
            </DialogContent>
          </DialogRoot>
        </Box>
      </Flex>
   
    </>
  );
};

export default Contact;
