import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const HouseHeroParallax = () => {
  const products = [
    {
      title: "",
      link: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/1590336/pexels-photo-1590336.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/1590336/pexels-photo-1590336.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/262405/pexels-photo-262405.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/262405/pexels-photo-262405.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/2480608/pexels-photo-2480608.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/2480608/pexels-photo-2480608.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/2371975/pexels-photo-2371975.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/2371975/pexels-photo-2371975.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/1590336/pexels-photo-1590336.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/1590336/pexels-photo-1590336.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/262405/pexels-photo-262405.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/262405/pexels-photo-262405.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/2480608/pexels-photo-2480608.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/2480608/pexels-photo-2480608.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/2371975/pexels-photo-2371975.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/2371975/pexels-photo-2371975.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg",
    },
    {
      title: "",
      link: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    },
  ];

  // 1. Chunk the products array into groups of 5
  const chunkSize = 10;
  const chunkedProducts = [];
  for (let i = 0; i < products.length; i += chunkSize) {
    chunkedProducts.push(products.slice(i, i + chunkSize));
  }

  return (
    <ParallaxProvider scrollAxis={"vertical"}>
      {chunkedProducts.map((chunk, index) => {
        // 2. Alternate direction based on index (even: left->right, odd: right->left)
        const translateX = index % 2 === 0 ? [-40, 40] : [40, -40];

        return (
          <Parallax key={index} translateX={translateX}>
            <VStack>
              {/* 3. Display each chunk of 5 images in a grid */}
              <Box
                justifyContent={"center"}
                mt={"25px"}
                gap={"25px"}
                display={"flex"}
                w={"5000px"}
                h={"500px"}
              >
                {chunk.map((product, idx) => (
               
                    <Box
                      bg={"gray.100"}
                      key={idx}
                      w={"100%"}
                      h={"100%"}
                      style={{
                        backgroundImage: `url(${product.link})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",

                        borderRadius: "30px",
                      }}
                    >
                      {product.title}
                    </Box>
               
                ))}
              </Box>
            </VStack>
          </Parallax>
        );
      })}
    </ParallaxProvider>
  );
};

export default HouseHeroParallax;
