"use client";

import React, { Suspense } from "react";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import { Box, HStack } from "@chakra-ui/react";
import ReactLenis from "lenis/react";
import Testimonials from "@/components/testimonials";
import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation";
import HowWeCanGetYouStarted from "@/components/luxeComponents/HowWeCanGetYouStarted";
import OurServices from "@/components/luxeComponents/OurServices";
import CaluProperty from "@/components/luxeComponents/CaluProperty";
import StickyGallery from "@/components/houseScrollDown/StickyGallery";
import { BoxScrollMoveDown } from "@/components/luxeComponents/BoxScrollMoveDown";

// Lazy load the GalleryHeroSection component
const GalleryHeroSection = React.lazy(
  () => import("@/components/luxeComponents/GalleryHeroSection"),
);



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

      {/* Render Hero and other components normally */}
      <Hero />


      <CaluProperty />



      <OurServices />

      <HowWeCanGetYouStarted />
      
      <StickyGallery />

      {/* Use Suspense to lazy-load GalleryHeroSection */}
      <Suspense fallback={<div>Loading gallery...</div>}>
        <GalleryHeroSection />
      </Suspense>




      <Testimonials />

      {/* Horizontal dividers for spacing */}
      <HStack
        justify={"center"}
        align={"center"}
        w={"100%"}
        id="get-started-button"
        my={["50px", "50px", "100px", "100px", "100px", "100px"]}
      >
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>

      <ScheduleConsultation />

      {/* Horizontal dividers for spacing */}
      <HStack justify={"center"} align={"center"} w={"100%"}>
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>

      <FAQ type="general" />
    </>
  );
};

export default Home;
