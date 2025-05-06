import React, { useEffect, useState, useRef } from "react";
import { EmblaOptionsType } from "embla-carousel";
import Carousel, {
  Slider,
  SliderContainer,
  ThumsSlider,
} from "@/components/core/carousel";
import Image, { StaticImageData } from "next/image";
import { Box, HStack } from "@chakra-ui/react";

import houseOneImg1 from "@/public/images/dalts/houseOne/WEB/1.jpg";
import houseOneImg2 from "@/public/images/dalts/houseOne/WEB/2.jpg";
import houseOneImg3 from "@/public/images/dalts/houseOne/WEB/3.jpg";
import houseOneImg4 from "@/public/images/dalts/houseOne/WEB/4.jpg";
import houseOneImg5 from "@/public/images/dalts/houseOne/WEB/5.jpg";
import houseOneImg6 from "@/public/images/dalts/houseOne/WEB/6.jpg";
import houseOneImg7 from "@/public/images/dalts/houseOne/WEB/7.jpg";
import houseOneImg8 from "@/public/images/dalts/houseOne/WEB/8.jpg";
import houseOneImg9 from "@/public/images/dalts/houseOne/WEB/9.jpg";
import houseOneImg10 from "@/public/images/dalts/houseOne/WEB/10.jpg";

import houseTwoImg1 from "@/public/images/dalts/houseTwo/WEB/1.jpg";
import houseTwoImg2 from "@/public/images/dalts/houseTwo/WEB/2.jpg";
import houseTwoImg3 from "@/public/images/dalts/houseTwo/WEB/3.jpg";
import houseTwoImg4 from "@/public/images/dalts/houseTwo/WEB/4.jpg";
import houseTwoImg5 from "@/public/images/dalts/houseTwo/WEB/5.jpg";
import houseTwoImg6 from "@/public/images/dalts/houseTwo/WEB/6.jpg";
import houseTwoImg7 from "@/public/images/dalts/houseTwo/WEB/7.jpg";
import houseTwoImg8 from "@/public/images/dalts/houseTwo/WEB/8.jpg";
import houseTwoImg9 from "@/public/images/dalts/houseTwo/WEB/9.jpg";
import houseTwoImg10 from "@/public/images/dalts/houseTwo/WEB/10.jpg";

import houseThreeImg1 from "@/public/images/dalts/houseThree/WEB/1.jpg";
import houseThreeImg2 from "@/public/images/dalts/houseThree/WEB/2.jpg";
import houseThreeImg3 from "@/public/images/dalts/houseThree/WEB/3.jpg";
import houseThreeImg4 from "@/public/images/dalts/houseThree/WEB/4.jpg";
import houseThreeImg5 from "@/public/images/dalts/houseThree/WEB/5.jpg";
import houseThreeImg6 from "@/public/images/dalts/houseThree/WEB/6.jpg";
import houseThreeImg7 from "@/public/images/dalts/houseThree/WEB/7.jpg";
import houseThreeImg8 from "@/public/images/dalts/houseThree/WEB/8.jpg";
import houseThreeImg9 from "@/public/images/dalts/houseThree/WEB/9.jpg";
import houseThreeImg10 from "@/public/images/dalts/houseThree/WEB/10.jpg";

import houseFourImg1 from "@/public/images/dalts/houseFour/WEB/1.jpg";
import houseFourImg2 from "@/public/images/dalts/houseFour/WEB/2.jpg";
import houseFourImg3 from "@/public/images/dalts/houseFour/WEB/3.jpg";
import houseFourImg4 from "@/public/images/dalts/houseFour/WEB/4.jpg";
import houseFourImg5 from "@/public/images/dalts/houseFour/WEB/5.jpg";
import houseFourImg6 from "@/public/images/dalts/houseFour/WEB/6.jpg";
import houseFourImg7 from "@/public/images/dalts/houseFour/WEB/7.jpg";
import houseFourImg8 from "@/public/images/dalts/houseFour/WEB/8.jpg";
import houseFourImg9 from "@/public/images/dalts/houseFour/WEB/9.jpg";
import houseFourImg10 from "@/public/images/dalts/houseFour/WEB/10.jpg";

import houseFiveImg1 from "@/public/images/dalts/houseFive/WEB/1.jpg";
import houseFiveImg2 from "@/public/images/dalts/houseFive/WEB/2.jpg";
import houseFiveImg3 from "@/public/images/dalts/houseFive/WEB/3.jpg";
import houseFiveImg4 from "@/public/images/dalts/houseFive/WEB/4.jpg";
import houseFiveImg5 from "@/public/images/dalts/houseFive/WEB/5.jpg";
import houseFiveImg6 from "@/public/images/dalts/houseFive/WEB/6.jpg";
import houseFiveImg7 from "@/public/images/dalts/houseFive/WEB/7.jpg";
import houseFiveImg8 from "@/public/images/dalts/houseFive/WEB/8.jpg";
import houseFiveImg9 from "@/public/images/dalts/houseFive/WEB/9.jpg";
import houseFiveImg10 from "@/public/images/dalts/houseFive/WEB/10.jpg";

import houseSixImg1 from "@/public/images/dalts/houseSix/WEB/1.jpg";
import houseSixImg2 from "@/public/images/dalts/houseSix/WEB/2.jpg";
import houseSixImg3 from "@/public/images/dalts/houseSix/WEB/3.jpg";
import houseSixImg4 from "@/public/images/dalts/houseSix/WEB/4.jpg";
import houseSixImg5 from "@/public/images/dalts/houseSix/WEB/5.jpg";
import houseSixImg6 from "@/public/images/dalts/houseSix/WEB/6.jpg";
import houseSixImg7 from "@/public/images/dalts/houseSix/WEB/7.jpg";
import houseSixImg8 from "@/public/images/dalts/houseSix/WEB/8.jpg";
import houseSixImg9 from "@/public/images/dalts/houseSix/WEB/9.jpg";


type ImgPreview = {
  [key: string]: StaticImageData;
};

function ThumnailSlider() {
  const imgPreview: ImgPreview = {
    img1: houseOneImg10,
    img2: houseOneImg2,
    img3: houseOneImg5,
    img4: houseOneImg3,
    img5: houseTwoImg1,
    img6: houseTwoImg2,
    img7: houseTwoImg10,
    img8: houseTwoImg4,
    img9: houseThreeImg1,
    img10: houseThreeImg5,
    img11: houseThreeImg7,
    img12: houseThreeImg2,
    img13: houseFourImg1,
    img14: houseFourImg9,
    img15: houseFourImg5,
    img16: houseFourImg2,
    img17: houseFourImg7,
    img18: houseFourImg10,
  };

  const OPTIONS: EmblaOptionsType = { loop: false };

  // Use IntersectionObserver for lazy loading images
  const useIntersectionObserver = (
    ref: React.RefObject<HTMLElement>,
    rootMargin = "0px",
  ) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing once the image is loaded
          }
        },
        { rootMargin },
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [ref]);

    return isVisible;
  };

  // Memoized Image with Lazy Loading
  const ImageWithLazyLoading = React.memo(({ src, alt, width, height }) => {
    const imgRef = useRef(null);
    const isVisible = useIntersectionObserver(imgRef, "200px");
    const placeholder =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy5zdmcuY29tLz4KPC9zdmc+Cg=="; // Transparent placeholder

    return (
      <div ref={imgRef}>
        <Image
          src={isVisible ? src : placeholder} // Use placeholder until image is visible
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          style={{
            backgroundPosition: "bottom",
            height: "100%",
            width: "100%",
            objectFit: "contain",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "40px",
          }}
        />
      </div>
    );
  });

  // Ensure display name for debugging purposes
  ImageWithLazyLoading.displayName = "ImageWithLazyLoading";

  return (
    <Box
      w="100%"
      bg="gray.100"
      p={["8px", "8px", "8px", "24px", "24px", "24px"]}
      borderRadius="16px"
    >
      <Carousel options={OPTIONS} className="relative" isAutoPlay={true}>
        <SliderContainer className="gap-2">
          {Object.keys(imgPreview).map((key, index) => (
            <Slider
              key={index}
              className="xl:h-[500px] sm:h-[500px] h-[200px] w-full rounded-2xl"
              style={{ borderRadius: "40px" }}
              thumnailSrc={imgPreview[key as keyof ImgPreview]}
            >
              <HStack justify="center" align="center" h="100%" w="100%">
                <ImageWithLazyLoading
                  src={imgPreview[key as keyof ImgPreview]}
                  alt={`image ${key}`}
                  width={1400}
                  height={800}
                />
              </HStack>
            </Slider>
          ))}
        </SliderContainer>
        <ThumsSlider />
      </Carousel>
    </Box>
  );
}

export default ThumnailSlider;
