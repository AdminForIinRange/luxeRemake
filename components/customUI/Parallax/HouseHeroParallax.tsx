// components/HouseHeroParallax.js
import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

// your full products array
const products = [
  {
    title: "",
    link: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/1590336/pexels-photo-1590336.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/262405/pexels-photo-262405.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/2480608/pexels-photo-2480608.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/2371975/pexels-photo-2371975.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/1590336/pexels-photo-1590336.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/262405/pexels-photo-262405.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/2480608/pexels-photo-2480608.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/2371975/pexels-photo-2371975.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg",
  },
  {
    title: "",
    link: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
  },

  // …and any others…
];

// custom Pexels loader (resize & compress)
const pexelsLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => `${src}?auto=compress&cs=tinysrgb&w=${width}&q=${quality || 75}`;

export default function HouseHeroParallax() {
  const chunkSize = 10;
  const chunked = [];

  for (let i = 0; i < products.length; i += chunkSize) {
    chunked.push(products.slice(i, i + chunkSize));
  }

  return (
    <ParallaxProvider scrollAxis="vertical">
      {chunked.map((chunk, idx) => (
        <Parallax key={idx} translateX={idx % 2 === 0 ? [-40, 40] : [40, -40]}>
          <VStack>
            <Box
              justifyContent="center"
              gap="25px"
              display="flex"
              w={["5000px", "5000px", "5000px", "5000px", "5000px", "5000px"]}
              h={["280px", "280px", "380px", "500px", "500px", "500px"]}
              py="25px"
            >
              {chunk.map((product, i) => (
                <Box
                  key={i}
                  w={["200px", "500px", "500px", "500px", "500px", "500px"]}
                  h={["250px", "250px", "350px", "450px", "450px", "450px"]}
                  position="relative"
                  borderRadius="30px"
                  overflow="hidden"
                  _hover={{ transform: "scale(1.05) translateY(-10px)" }}
                  transition="all 0.5s ease"
                >
                  <Image
                    loader={pexelsLoader}
                    src={product.link}
                    alt={product.title || ""}
                    layout="fill"
                    objectFit="cover"
                    quality={75} // Smaller file, still sharp
                    priority={idx === 0 && i < 2} // only first 2 images preload
                  />
                </Box>
              ))}
            </Box>
          </VStack>
        </Parallax>
      ))}
    </ParallaxProvider>
  );
}
