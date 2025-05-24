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
quality={70} 
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

      <SliderPrevButton className="absolute left-4 top-[50%] rounded-full border-2 bg-white/25 p-2 text-primary backdrop-blur-sm disabled:opacity-20 dark:border-white dark:bg-black/25">
        <ChevronLeft className="h-8 w-8" />
      </SliderPrevButton>

      <SliderNextButton className="absolute right-4 top-[50%] rounded-full border-2 bg-white/25 p-2 text-primary backdrop-blur-sm disabled:opacity-20 dark:border-white dark:bg-black/25">
        <ChevronRight className="h-8 w-8" />
      </SliderNextButton>

      <div className="mb-[50px] flex justify-center py-8">
        <SliderDotButton />
      </div>
    </Carousel>
  );
};

export default DefaultSlider;
