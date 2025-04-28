"use client";

import React from "react";

import Hero from "@/components/Hero";

import FAQ from "@/components/FAQ";

import { Box, HStack } from "@chakra-ui/react";

import ReactLenis from "lenis/react";
import Testimonials from "@/components/testimonials";
import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation";
import HowWeCanGetYouStarted from "@/components/luxeComponents/HowWeCanGetYouStarted";
import OurServices from "@/components/luxeComponents/OurServices";
import GalleryHeroSection from "@/components/luxeComponents/GalleryHeroSection";

const Home = () => {
  return (
    <>
      <ReactLenis
        root
        options={{
          duration: 1.2,
          touchMultiplier: 2,
        }}
      />

      <Hero />
      <HowWeCanGetYouStarted />
      <OurServices />
      <GalleryHeroSection />
      <Testimonials />
      <HStack
        justify={"center"}
        align={"center"}
        w={"100%"}
        id="get-started-button"
        my={["50px", "50px", "50px", "50px", "50px", "50px"]}
      >
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>
      <ScheduleConsultation />
      <HStack justify={"center"} align={"center"} w={"100%"}>
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>
      <FAQ />
    </>
  );
};

export default Home;
