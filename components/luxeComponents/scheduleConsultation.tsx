import { Box, Text } from "@chakra-ui/react";
import {
  DialogContent,
  DialogCloseTrigger,
  DialogRoot,
} from "@/components/chakra-snippets/dialog";
import React, { useState } from "react";
import { Calendar } from "lucide-react";

const ScheduleConsultation = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Box
        my={["60px", "70px", "80px", "90px", "100px"]}
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={["16px", "24px", "32px"]}
        zIndex={3}
        id="get-started-section"
      >
        <Box
          bg="#0A0F29"
          width={["100%", "100%", "100%", "90%"]}
          borderRadius="24px"
          py={["40px", "50px", "60px"]}
          px={["24px", "32px", "40px", "50px"]}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="0px 12px 30px rgba(0, 0, 0, 0.15)"
          position="relative"
          overflow="hidden"
        >
          {/* Background accent elements for visual interest */}
          <Box
            position="absolute"
            top="-100px"
            right="-100px"
            width="200px"
            height="200px"
            borderRadius="full"
            bg="rgba(255, 255, 255, 0.03)"
            zIndex={0}
          />
          <Box
            position="absolute"
            bottom="-80px"
            left="-80px"
            width="160px"
            height="160px"
            borderRadius="full"
            bg="rgba(255, 255, 255, 0.02)"
            zIndex={0}
          />

          {/* Content container */}
          <Box width="100%" maxWidth="1000px" zIndex={1} textAlign="center">
            {/* Heading */}
            <Text
              color="white"
              fontWeight="700"
              fontSize={["28px", "32px", "40px", "48px", "56px"]}
              fontFamily="raleway"
              lineHeight={["1.2", "1.1"]}
              letterSpacing="-0.02em"
              mb={["16px", "20px"]}
            >
              Ready to transform your property management?
            </Text>

            {/* Subtitle */}
            <Text
              color="rgba(255, 255, 255, 0.9)"
              fontSize={["14px", "16px", "18px", "20px", "22px"]}
              fontFamily="raleway"
              maxWidth="800px"
              mx="auto"
              lineHeight="1.5"
              mb={["30px", "35px", "40px"]}
            >
              Get a full consultation, market analysis in under 24 hours for
              free
            </Text>

            {/* Button */}
            <Box
              display="flex"
              justifyContent="center"
              width="100%"
              mt={["10px", "15px"]}
            >
              <Box
                as="button"
                bg="white"
                color="#0A0F29"
                py={["12px", "14px", "16px"]}
                px={["24px", "32px", "40px"]}
                borderRadius="full"
                fontFamily="raleway"
                fontSize={["14px", "15px", "16px"]}
                fontWeight={isHovered ? "600" : "500"}
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="all 0.3s ease"
                cursor="pointer"
                boxShadow={
                  isHovered
                    ? "0px 6px 20px rgba(0, 0, 0, 0.2)"
                    : "0px 4px 12px rgba(0, 0, 0, 0.1)"
                }
                transform={isHovered ? "translateY(-2px)" : "none"}
                onClick={() => setIsDialogOpen(true)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                _focus={{ outline: "none" }}
              >
                <Box as={Calendar} size={18} mr="10px" display="inline-block" />
                <Text>Schedule a consultation</Text>
              </Box>
            </Box>

            {/* Additional benefits list */}
            <Box
              display="flex"
              flexDirection={["column", "column", "row"]}
              justifyContent="center"
              alignItems="center"
              mt={["30px", "40px"]}
              width="100%"
              maxWidth="800px"
              mx="auto"
              gap={["16px", "20px", "40px"]}
            >
              {[
                "Personalized property assessment",
                "Market rate analysis",
                "ROI optimization strategies",
              ].map((benefit, index) => (
                <Box key={index} display="flex" alignItems="center">
                  <Box
                    width="6px"
                    height="6px"
                    borderRadius="full"
                    bg="rgba(255, 255, 255, 0.6)"
                    mr="10px"
                  />
                  <Text
                    color="rgba(255, 255, 255, 0.8)"
                    fontSize={["12px", "13px", "14px"]}
                    fontFamily="raleway"
                  >
                    {benefit}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
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
                fontFamily="raleway"
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
    </>
  );
};

export default ScheduleConsultation;
