import React, { useEffect, useState, useRef } from "react";
import { EmblaOptionsType } from "embla-carousel";
import Carousel, {
  Slider,
  SliderContainer,
  ThumsSlider,
} from "@/components/core/carousel";
import Image, { StaticImageData } from "next/image";
import { Box, HStack } from "@chakra-ui/react";

import houseOneImg2 from "@/public/images/dalts/houseOne/WEB/2.jpg";
import houseOneImg10 from "@/public/images/dalts/houseOne/WEB/10.jpg";
import houseTwoImg1 from "@/public/images/dalts/houseTwo/WEB/1.jpg";
import houseTwoImg2 from "@/public/images/dalts/houseTwo/WEB/2.jpg";
import houseThreeImg1 from "@/public/images/dalts/houseThree/WEB/1.jpg";
import houseThreeImg2 from "@/public/images/dalts/houseThree/WEB/2.jpg";
import houseFourImg1 from "@/public/images/dalts/houseFour/WEB/1.jpg";
import houseFourImg2 from "@/public/images/dalts/houseFour/WEB/2.jpg";
import houseFourImg7 from "@/public/images/dalts/houseFour/WEB/7.jpg";
import houseFourImg10 from "@/public/images/dalts/houseFour/WEB/10.jpg";

type ImgPreview = {
  [key: string]: StaticImageData;
};

function ThumnailSlider() {
  const imgPreview: ImgPreview = {
    img1: houseOneImg10,
    img2: houseOneImg2,
    img3: houseOneImg2,
    img4: houseOneImg10,
    img5: houseTwoImg1,
    img6: houseTwoImg2,
    img7: houseTwoImg1,
    img8: houseTwoImg2,
    img9: houseThreeImg1,
    img10: houseThreeImg2,
    img11: houseThreeImg1,
    img12: houseThreeImg2,
    img13: houseFourImg1,
    img14: houseFourImg2,
    img15: houseFourImg1,
    img16: houseFourImg2,
    img17: houseFourImg7,
    img18: houseFourImg10,
  };

  const OPTIONS: EmblaOptionsType = { loop: false };

  // Use IntersectionObserver for lazy loading images
  const useIntersectionObserver = (ref: React.RefObject<HTMLElement>, rootMargin = "0px") => {
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
    <Box w="100%" bg="gray.100" p={["8px", "8px", "8px", "24px", "24px", "24px"]} borderRadius="16px">
      <Carousel options={OPTIONS} className="relative" isAutoPlay={true}>
        <SliderContainer className="gap-2">
          {Object.keys(imgPreview).map((key, index) => (
            <Slider
              key={index}
              className="xl:h-[500px] sm:h-[500px] h-[200px] w-full rounded-2xl"
              style={{borderRadius: "40px"}}
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
