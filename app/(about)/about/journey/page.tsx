"use client";

import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import AboutJourneyCardLists from "@/components/luxeComponents/AboutJourneyCardLists";
import { TracingBeam } from "@/components/ui/tracing-beam";
const Journey = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  const updateScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = (scrollTop / totalHeight) * 100;
    setScrollHeight(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <TracingBeam className="px-6">
        <Box w={"100%"}>
          <AboutJourneyCardLists />{" "}
        </Box>
      </TracingBeam>
    </>
  );
};

export default Journey;
