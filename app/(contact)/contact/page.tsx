"use client";

import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import TitleSubheading from "@/components/luxeComponents/Text/titleSubheading";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  DialogContent,
  DialogCloseTrigger,
  DialogRoot,
} from "@/components/chakra-snippets/dialog";
import HowWeCanGetYouStarted from "@/components/luxeComponents/HowWeCanGetYouStarted";

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
    <Box bg="white" position="relative">
      {/* Decorative elements */}

      <Box maxWidth="1400px" mx="auto" position="relative" zIndex="1">
        <Box
          textAlign="center"
          pt={{ base: "60px", md: "80px" }}
          data-aos="fade-up"
        >
          <TitleSubheading
            title={"Let's Get in Touch"}
            subheading={"We'd love to hear from you."}
          />

          {/* Subtitle with more context */}
          <Text
            fontSize={{ base: "16px", md: "18px" }}
            color="#666"
            maxWidth="700px"
            mx="auto"
            mt="16px"
            px={{ base: "20px", md: "0" }}
            fontFamily="arial"
          >
            Our property management experts are ready to help you maximize your
            investment potential with personalized solutions.
          </Text>
        </Box>

        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ base: "center", md: "stretch" }}
          px={{ base: "6%", md: "8%" }}
          py={{ base: "60px", md: "100px" }}
          gap={{ base: "20px", md: "20px" }}
          data-aos="fade-up"
        >
          {/* Contact Info Section */}
          <Box
            p={{ base: "20px", md: "40px" }}
            rounded={"2xl"}
            bg={"gray.50"}
            border={"1px solid lightgray"}
            width={{ base: "100%", md: "40%" }}
            textAlign={{ base: "center", md: "left" }}
            position="relative"
          >
            {/* Accent line */}

            <Text
              fontSize={{ base: "28px", md: "32px" }}
              fontWeight={700}
              fontFamily="arial"
              color="#0A0F29"
              mt="20px"
              mb="30px"
              lineHeight="1.2"
            >
              Contact Information
            </Text>

            <Box display="flex" flexDirection="column" gap="24px">
              <Box
                display="flex"
                flexDirection={{ base: "column", sm: "row" }}
                alignItems={{ base: "center", md: "flex-start" }}
                gap="10px"
              >
                <Box>
                  <Text
                    fontWeight={600}
                    color="#0A0F29"
                    fontSize="16px"
                    fontFamily="arial"
                    mb="4px"
                  >
                    Email
                  </Text>
                  <Text
                    fontWeight={400}
                    color="#555"
                    fontSize="16px"
                    fontFamily="arial"
                  >
                    luxemanagements.info@gmail.com
                  </Text>
                </Box>
              </Box>

              <Box
                display="flex"
                flexDirection={{ base: "column", sm: "row" }}
                alignItems={{ base: "center", md: "flex-start" }}
                gap="10px"
              >
                <Box>
                  <Text
                    fontWeight={600}
                    color="#0A0F29"
                    fontSize="16px"
                    fontFamily="arial"
                    mb="4px"
                  >
                    Phone
                  </Text>
                  <Text
                    fontWeight={400}
                    color="#555"
                    fontSize="16px"
                    fontFamily="arial"
                  >
                    +61 406 631 461
                  </Text>
                </Box>
              </Box>

              <Box
                display="flex"
                flexDirection={{ base: "column", sm: "row" }}
                alignItems={{ base: "center", md: "flex-start" }}
                gap="10px"
              >
                <Box>
                  <Text
                    fontWeight={600}
                    color="#0A0F29"
                    fontSize="16px"
                    fontFamily="arial"
                    mb="4px"
                  >
                    Location
                  </Text>
                  <Text
                    fontWeight={400}
                    color="#555"
                    fontSize="16px"
                    fontFamily="arial"
                  >
                    South Australia
                  </Text>
                </Box>
              </Box>
            </Box>

            {/* Office hours section */}
            <Box mt="40px">
              <Text
                fontSize="18px"
                fontWeight={600}
                fontFamily="arial"
                color="#0A0F29"
                mb="16px"
              >
                Office Hours
              </Text>

              <Box display="flex" flexDirection="column" gap="8px">
                <Box
                  display="flex"
                  justifyContent={{ base: "center", md: "space-between" }}
                >
                  <Text fontFamily="arial" color="#555" fontSize="15px">
                    Monday - Friday
                  </Text>
                  <Text
                    fontFamily="arial"
                    color="#555"
                    fontSize="15px"
                    fontWeight={500}
                  >
                    9:00 AM - 5:00 PM
                  </Text>
                </Box>
                <Box
                  display="flex"
                  justifyContent={{ base: "center", md: "space-between" }}
                >
                  <Text fontFamily="arial" color="#555" fontSize="15px">
                    Saturday
                  </Text>
                  <Text
                    fontFamily="arial"
                    color="#555"
                    fontSize="15px"
                    fontWeight={500}
                  >
                    10:00 AM - 2:00 PM
                  </Text>
                </Box>
                <Box
                  display="flex"
                  justifyContent={{ base: "center", md: "space-between" }}
                >
                  <Text fontFamily="arial" color="#555" fontSize="15px">
                    Sunday
                  </Text>
                  <Text
                    fontFamily="arial"
                    color="#555"
                    fontSize="15px"
                    fontWeight={500}
                  >
                    Closed
                  </Text>
                </Box>
              </Box>
            </Box>

            {/* Social media indicators */}
          </Box>

          {/* Contact Card */}
          <Box
            width={{ base: "100%", md: "60%" }}
            data-aos="fade-up"
            display="flex"
            justifyContent="center"
            position="relative"
          >
            {/* Decorative accent */}

            <Box
              bg="#0A0F29"
              width="100%"
              borderRadius="20px"
              p={{ base: "35px", md: "45px" }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              boxShadow="0px 15px 40px rgba(0, 0, 0, 0.15)"
              position="relative"
              zIndex="1"
            >
              <Text
                color="white"
                fontWeight="700"
                fontSize={{ base: "28px", md: "36px" }}
                fontFamily="arial"
                mb="20px"
                lineHeight="1.2"
              >
                Ready to transform your property management?
              </Text>

              <Text
                color="rgba(255, 255, 255, 0.9)"
                fontSize={{ base: "16px", md: "18px" }}
                fontFamily="arial"
                mb="16px"
                maxWidth="600px"
                lineHeight="1.6"
              >
                Get a full consultation, market analysis in under 24 hours for
                free
              </Text>

              {/* Benefits list */}
              <Box
                display="flex"
                flexDirection="column"
                gap="12px"
                mb="30px"
                mt="10px"
                width="100%"
                maxWidth="500px"
              >
                {[
                  "Personalized property management strategy",
                  "Detailed market analysis and pricing recommendations",
                  "Tenant acquisition and screening process overview",
                  "Maintenance and property care solutions",
                ].map((benefit, index) => (
                  <Box
                    key={index}
                    display="flex"
                    alignItems="center"
                    justifyContent={{ base: "center", sm: "flex-start" }}
                    textAlign={{ base: "center", sm: "left" }}
                    gap="10px"
                  >
                    <Box
                      width="20px"
                      height="20px"
                      borderRadius="50%"
                      bg="rgba(255, 255, 255, 0.2)"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text color="white" fontSize="12px">
                        ✓
                      </Text>
                    </Box>
                    <Text
                      color="rgba(255, 255, 255, 0.9)"
                      fontSize="15px"
                      fontFamily="arial"
                    >
                      {benefit}
                    </Text>
                  </Box>
                ))}
              </Box>

              <Box display="flex" justifyContent="center" width="100%">
                <Box
                  bg="white"
                  color="#0A0F29"
                  borderRadius="30px"
                  py="18px"
                  px={{ base: "30px", md: "40px" }}
                  fontFamily="arial"
                  fontWeight="600"
                  fontSize="16px"
                  cursor="pointer"
                  transition="all 0.3s ease"
                  position="relative"
                  _hover={{
                    transform: "translateY(-3px)",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                  }}
                  onClick={() => setIsDialogOpen(true)}
                >
                  <Text>Schedule a consultation</Text>
                </Box>
              </Box>

              {/* Testimonial snippet */}
            </Box>
          </Box>
        </Box>

        {/* FAQ Section */}
      </Box>

      <DialogRoot
        size={"cover"}
        open={isDialogOpen}
        onOpenChange={({ open }) => setIsDialogOpen(open)}
      >
        <DialogContent
          p={0}
          bg={"white"}
          color={"white"}
          rounded={"16px"}
          boxShadow="0px 20px 40px rgba(0, 0, 0, 0.2)"
        >
          <Box position="relative" width="100%" height="100%">
            {/* Header for the dialog */}
            <Box
              bg="#0A0F29"
              p="20px"
              borderTopLeftRadius="16px"
              borderTopRightRadius="16px"
            >
              <Text
                color="white"
                fontWeight="600"
                fontSize="20px"
                fontFamily="arial"
              >
                Schedule Your Free Consultation
              </Text>
            </Box>

            <iframe
              loading="lazy"
              className="calendly-frame"
              src="https://calendly.com/luxemanagements-info"
              title="Schedule Consultation"
            ></iframe>

            <DialogCloseTrigger
              rounded="full"
              color="black"
              w="40px"
              h="40px"
              border="1px black solid"
              position="absolute"
              top="10px"
              right="20px"
              onClick={() => setIsDialogOpen(false)}
              _focus={{ outline: "none" }}
              bg="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
            />
          </Box>
        </DialogContent>
      </DialogRoot>

      <style jsx>{`
        .calendly-frame {
          width: 100%;
          height: 800px;
          border: none;
          border-radius: 0 0 16px 16px;
        }
      `}</style>

<HowWeCanGetYouStarted />

    </Box>
  );
};

export default Contact;
