import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Carousel, {
  Slider,
  SliderContainer,
  ThumsSlider,
} from "@/components/core/carousel";
import Image from "next/image";
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

function ThumnailSlider() {
  const imgPreview = {
    img1: houseOneImg10,
    img2: houseOneImg2,
    img3: houseOneImg3,
    img4: houseOneImg1,
    img5: houseTwoImg1,
    img6: houseTwoImg2,
    img7: houseTwoImg3,
    img8: houseTwoImg4,
    img9: houseThreeImg1,
    img10: houseThreeImg2,
    img11: houseThreeImg3,
    img12: houseThreeImg4,
    img13: houseFourImg1,
    img14: houseFourImg2,
    img15: houseFourImg3,
    img16: houseFourImg4,
    img17: houseFourImg7,
    img18: houseFourImg10,
  };
  const OPTIONS: EmblaOptionsType = { loop: false };
  return (
    <>
      <Box
        className=" 2xl:w-[100%] bg-background sm:w-[100%] w-[100%] mx-auto"
        bg={"gray.100"}
        p={"24px"}
        borderRadius={"32px"}
      >
        <Carousel options={OPTIONS} className=" relative" isAutoPlay={true}>
          <SliderContainer className="gap-2">
            <Slider
              className="xl:h-[500px] sm:h-[500px] h-[500px] w-full"
              thumnailSrc={imgPreview.img1}
            >
              <HStack justify={"center"} align={"center"} h={"100%"} w={"100%"}>
                <Image
                  src={imgPreview.img1}
                  width={1400}
                  height={100}
                  alt="image"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                    backgroundSize: "cover",

                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",

                    borderRadius: "30px",
                  }}
                />
              </HStack>{" "}
            </Slider>
            <Slider
              className="xl:h-[500px] sm:h-[500px] h-[500px] w-full"
              thumnailSrc={imgPreview.img2}
            >
              <Image
                src={imgPreview.img2}
                width={1400}
                height={800}
                alt="image"
                style={{
                  backgroundPosition: "bottom",
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  backgroundSize: "cover",

                  backgroundRepeat: "no-repeat",
                  borderRadius: "30px",
                }}
              />
            </Slider>
            <Slider
              className="xl:h-[500px] sm:h-[500px] h-[500px] w-full"
              thumnailSrc={imgPreview.img3}
            >
              <Image
                src={imgPreview.img3}
                width={1400}
                height={800}
                alt="image"
                style={{
                  backgroundPosition: "bottom",
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  backgroundSize: "cover",

                  backgroundRepeat: "no-repeat",
                  borderRadius: "30px",
                }}
              />
            </Slider>
            <Slider
              className="xl:h-[500px] sm:h-[500px] h-[500px] w-full"
              thumnailSrc={imgPreview.img4}
            >
              <Image
                src={imgPreview.img4}
                width={1400}
                height={800}
                alt="image"
                style={{
                  backgroundPosition: "bottom",
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  backgroundSize: "cover",

                  backgroundRepeat: "no-repeat",
                  borderRadius: "30px",
                }}
              />
            </Slider>
            <Slider
              className="xl:h-[500px] sm:h-[500px] h-[500px] w-full"
              thumnailSrc={imgPreview.img5}
            >
              <Image
                src={imgPreview.img5}
                width={1400}
                height={800}
                alt="image"
                style={{
                  backgroundPosition: "bottom",
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  backgroundSize: "cover",

                  backgroundRepeat: "no-repeat",
                  borderRadius: "30px",
                }}
              />
            </Slider>
            <Slider
              className="xl:h-[500px] sm:h-[500px] h-[500px] w-full"
              thumnailSrc={imgPreview.img6}
            >
              <Image
                src={imgPreview.img6}
                width={1400}
                height={800}
                alt="image"
                style={{
                  backgroundPosition: "bottom",
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  backgroundSize: "cover",

                  backgroundRepeat: "no-repeat",
                  borderRadius: "30px",
                }}
              />
            </Slider>
            <Slider
              className="xl:h-[500px] sm:h-[500px] h-[500px] w-full"
              thumnailSrc={imgPreview.img7}
            >
              <Image
                src={imgPreview.img7}
                width={1200}
                height={800}
                alt="image"
                style={{
                  backgroundPosition: "bottom",
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  backgroundSize: "cover",

                  backgroundRepeat: "no-repeat",
                  borderRadius: "30px",
                }}
              />
            </Slider>
            <Slider
              className="xl:h-[500px] sm:h-[500px] h-[500px] w-full"
              thumnailSrc={imgPreview.img8}
            >
              <Image
                src={imgPreview.img8}
                width={1200}
                height={800}
                alt="image"
                style={{
                  backgroundPosition: "bottom",
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  backgroundSize: "cover",

                  backgroundRepeat: "no-repeat",
                  borderRadius: "30px",
                }}
              />
            </Slider>
            <Slider
              className=" xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={imgPreview.img9}
            >
              <Image
                src={imgPreview.img9}
                width={1200}
                height={800}
                alt="image"
                style={{
                  backgroundPosition: "bottom",
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  backgroundSize: "cover",

                  backgroundRepeat: "no-repeat",
                  borderRadius: "30px",
                }}
              />
            </Slider>
            <Slider
              className=" xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={imgPreview.img10}
            >
              <Image
                src={imgPreview.img10}
                width={1200}
                height={800}
                alt="image"
                style={{
                  backgroundPosition: "bottom",
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  backgroundSize: "cover",

                  backgroundRepeat: "no-repeat",
                  borderRadius: "30px",
                }}
              />
            </Slider>
          </SliderContainer>
          <ThumsSlider />
        </Carousel>
      </Box>
    </>
  );
}

export default ThumnailSlider;
