import {
  Box,
  HStack,
  Text,
} from "@chakra-ui/react";
import {
  DialogContent,
  DialogCloseTrigger,
  DialogRoot,
} from "@/components/chakra-snippets/dialog";
import React, { useState } from "react";

const ScheduleConsultation = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
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
            fontSize={["30px", "30px", "30px", "60px", "60px", "60px"]}
            fontFamily={"raleway"}
            mb={"10px"}
          >
            Ready to transform your property management?
          </Text>
          <Text
            color={"white"}
            fontSize={["14px", "14px", "14px", "26px", "26px", "26px"]}
            fontFamily={"raleway"}
          >
            Get a full consultation, market analysis in under 24 hours for free
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
            </Box>
          </HStack>
        </Box>
      </HStack>

      <DialogRoot
        size={"cover"}
        open={isDialogOpen}
        onOpenChange={({ open }) => setIsDialogOpen(open)}
      >
        <DialogContent
          p={0}
          bg={"white"}
          color={"white"}
          rounded={"10px"}
        >
          <iframe
            loading="lazy"
            className="calendly-frame"
            src="https://calendly.com/luxemanagements-info"
          ></iframe>

          <DialogCloseTrigger
            rounded="full"
            color="black"
            w="40px"
            h="40px"
            border="1px black solid"
            position="absolute"
            top="10px"
            right="10px"
            onClick={() => setIsDialogOpen(false)}
            _focus={{ outline: "none" }}
          />
        </DialogContent>
      </DialogRoot>

      <style jsx>{`
        .calendly-frame {
          width: 100%;
          height: 800px;
          border: none;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default ScheduleConsultation;
