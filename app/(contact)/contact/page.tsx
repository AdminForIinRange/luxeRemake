"use client";

import React, { useEffect } from "react";
import { Box, Stack, Text, Flex, HStack } from "@chakra-ui/react";
import TitleSubheading from "@/components/luxeComponents/Text/titleSubheading";
import Aos from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
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
        px={{ base: "5%", md: "10%" }}
        py={"60px"}
        gap={"60px"}
      >
        {/* Contact Info */}
        <Box w={{ base: "100%", md: "40%" }}>
          <Text
            fontSize={{ base: "28px", md: "36px" }}
            fontWeight={700}
            fontFamily={"Raleway"}
            color={"black"}
            mb={"20px"}
          >
            Contact Information
          </Text>
          <Stack spacing={"18px"} fontSize={"16px"} fontFamily={"Raleway"}>
            <Text fontWeight={500}>Email: contact@luxemanagements.com</Text>
            <Text fontWeight={500}>Phone: (123) 456-7890</Text>
            <Text fontWeight={500}>Location:X</Text>
          </Stack>
        </Box>

        {/* Contact Message Placeholder */}
        <Box
          w={{ base: "100%", md: "50%" }}
          h={"300px"}
          borderRadius={"20px"}
          border={"1px solid #e0e0e0"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
          px={"20px"}
        >
          <Text
            fontSize={{ base: "16px", md: "18px" }}
            fontFamily={"Raleway"}
            fontWeight={400}
            color={"gray.600"}
          >
            Contact form coming soon. In the meantime, reach out to us at the
            provided contact info.
          </Text>
        </Box>
      </Flex>

    </>
  );
};

export default Contact;
