import React, { ReactNode } from "react";
import { EmblaOptionsType } from "embla-carousel";
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
  SliderNextButton,
  SliderPrevButton,
} from "@/components/core/carousel";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Box, HStack } from "@chakra-ui/react";

function DefaultSlider({ items }: { items: any }) {
    const OPTIONS: EmblaOptionsType = { loop: false };
  
    const imageUrls = Object.values(items) as string[]; // turns {img1, img2, ...} into array
  return (
    <>
      <Carousel options={OPTIONS}>
      <SliderContainer className="w-full gap-[26px]">
        {imageUrls.map((url: string, index: number) => (
          <Slider key={index} className="w-full gap-[16px]">
            <HStack justify={"center"} align={"center"}>

            <Box
              backgroundImage={`url(${url})`}
              backgroundSize="contain"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              transition="all 0.3s"
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              h={["500px", "500px", "550px", "600px", "650px", "650px"]}
              borderRadius={"16px"}
            ></Box>
            </HStack>
          </Slider>
        ))}
      </SliderContainer>

      <SliderPrevButton className="absolute top-[50%] p-2 border-2 rounded-full left-4 bg-white/25 dark:bg-black/25 dark:border-white backdrop-blur-sm text-primary disabled:opacity-20">
        <ChevronLeft className="w-8 h-8" />
      </SliderPrevButton>
      <SliderNextButton className="absolute right-4 p-2 border-2 rounded-full top-[50%] bg-white/25 dark:bg-black/25 dark:border-white backdrop-blur-sm text-primary disabled:opacity-20">
        <ChevronRight className="w-8 h-8" />
      </SliderNextButton>
      <div className="flex justify-center py-2">
        <SliderDotButton />
      </div>
    </Carousel>
    </>
  );
}

export default DefaultSlider;
