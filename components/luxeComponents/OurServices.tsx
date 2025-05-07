import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import TitleSubheading from "./Text/titleSubheading";
import HeroServices from "./heroServices";

const OurServices = () => {
  return (
    <>
      <HStack
               my={["50px", "50px", "100px", "100px", "100px", "100px"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
      >
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>
      <TitleSubheading
        title={"Our Services"}
        subheading={
          "We offer a full suite of services to help you manage your property with ease."
        }
      />

      <HeroServices />
    </>
  );
};

export default OurServices;
