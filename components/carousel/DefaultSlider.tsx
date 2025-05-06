"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
  SliderNextButton,
  SliderPrevButton,
} from "@/components/core/carousel";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Box, HStack } from "@chakra-ui/react";

interface DefaultSliderProps {
  items: Record<string, StaticImageData>;
}

const DefaultSlider: React.FC<DefaultSliderProps> = ({ items }) => {
  const OPTIONS: EmblaOptionsType = { loop: false };
  const imageDatas = Object.values(items) as StaticImageData[];

  return (
    <Carousel options={OPTIONS}>
      <SliderContainer className="w-full gap-[26px]">
        {imageDatas.map((imgData, idx) => (
          <Slider key={idx} className="w-full gap-[16px]">
            <HStack justify="center" align="center" w="100%" h="100%">
              <Box
                position="relative"
                w="100%"
                h="650px"
                borderRadius="16px"
                overflow="hidden"
              >
                <Image
                  src={imgData}
                  alt={`Slide ${idx + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                  priority={idx === 0} // optionally prioritize the first image
                />
              </Box>
            </HStack>
          </Slider>
        ))}
      </SliderContainer>

      <SliderPrevButton className="absolute top-[50%] left-4 p-2 border-2 rounded-full bg-white/25 backdrop-blur-sm dark:bg-black/25 dark:border-white text-primary disabled:opacity-20">
        <ChevronLeft className="w-8 h-8" />
      </SliderPrevButton>

      <SliderNextButton className="absolute top-[50%] right-4 p-2 border-2 rounded-full bg-white/25 backdrop-blur-sm dark:bg-black/25 dark:border-white text-primary disabled:opacity-20">
        <ChevronRight className="w-8 h-8" />
      </SliderNextButton>

      <div className="flex justify-center py-8 mb-[50px]">
        <SliderDotButton />
      </div>
    </Carousel>
  );
};

export default DefaultSlider;
