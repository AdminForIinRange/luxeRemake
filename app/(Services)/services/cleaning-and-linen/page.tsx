"use client";
import React, { useEffect } from "react";
import {
  Box,

  HStack,
 
  Text,

} from "@chakra-ui/react";


import Aos from "aos";
import "aos/dist/aos.css";
import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation";
import CleaningLinenCardLists from "@/components/luxeComponents/CleaningLinenCardLists";
import ServicesThreeCards from "@/components/luxeComponents/servicesThreeCards";
import TopHeader from "@/components/luxeComponents/topHeader";
const CleaningAndLinen = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>

<TopHeader
  imgUrl="https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg"
  wordOne="Cleaning"
  wordTwo="Linen"
  description="Elevate your space with our meticulous cleaning process and premium linen service."
  and={true}
/>

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
          w={"100%"}
          h={"100%"}
          borderRadius={"30px"}
          py={"65px"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
        >
       
      
          <ServicesThreeCards
        cardsData={[
          {
            imgUrl:
              "https://images.pexels.com/photos/8467975/pexels-photo-8467975.jpeg",
            title: "Premium Products",
            description:
              "We use only the finest, eco-friendly cleaning products to protect your property and the environment.",
          },
          {
            imgUrl:
              "https://images.pexels.com/photos/4239142/pexels-photo-4239142.jpeg",
            title: "        Expert Team",
            description:
              "Our highly trained professionals bring years of experience in luxury property care.",
          },
          {
            imgUrl:
              "https://images.pexels.com/photos/4239130/pexels-photo-4239130.jpeg",
            title: "  Impeccable Detail",
            description:
              "We meticulously clean every corner, ensuring no detail is overlooked.",
          },
        ]}

        CardDataHeader={[
          {
            mainTitle: "Redefining Cleanliness",
            mainDescription:
              "From sparkling floors to spotless surfaces, we take pride in leaving your space feeling refreshed and revitalized.",
          },
        ]}
      />
        </Box>
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
          w={"90%"}
          h={"100%"}
          borderRadius={"30px"}
          p={"25px"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Text
            w={["100%", "100%", "100%", "100%", "100%", "100%"]}
            mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
            fontSize={["30px", "30px", "30px", "50px", "50px", "50px"]}
            fontWeight={600}
            fontFamily={"Raleway"}
            bgClip="text"
            textAlign={[
              "center",
              "center",
              "center",
              "center",
              "center",
              "center",
            ]}
            color={"black"}
            bgGradient="linear(to-r, teal, blue)"
          >
            Our Cleaning Symphony
          </Text>
        </Box>
      </HStack>

      <CleaningLinenCardLists />

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

export default CleaningAndLinen;
