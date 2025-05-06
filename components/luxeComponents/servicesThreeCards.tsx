import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";

interface CardData {
  imgUrl: string;
  title: string;
  description: string;
}

interface CardDataHeader {
  mainTitle: string;
  mainDescription: string;
}

const ServicesThreeCards = ({
  cardsData,
  CardDataHeader,
}: {
  cardsData: CardData[];
  CardDataHeader: CardDataHeader[];
}) => {
  return (
    <Box
      mt={["80px", "90px", "90px", "0px", "0px", "0px"]}
      w="100%"
      px={["4%", "4%", "6%", "6%", "6%", "10%"]}
      fontFamily="raleway"
      position="relative"
    >
      {/* Section Header */}
      <Box
        mb={["40px", "50px", "60px"]}
        maxWidth="800px"
        mx="auto"
        textAlign="center"
      >
        <Box
          width="40px"
          height="4px"
          bg="black"
          mx="auto"
          mb="16px"
          borderRadius="2px"
        />
        <Text
          fontSize={["28px", "32px", "36px", "40px"]}
          fontWeight="700"
          mb="16px"
          lineHeight="1.2"
        >
          {CardDataHeader[0].mainTitle}
        </Text>
        <Text
          fontSize={["16px", "17px", "18px"]}
          color="#4A5568"
          lineHeight="1.6"
        >
          {CardDataHeader[0].mainDescription}
        </Text>
      </Box>

      {/* Decorative element */}
      <Box
        position="absolute"
        top="-20px"
        right="5%"
        width="120px"
        height="120px"
        borderRadius="50%"
        bg="rgba(49, 130, 206, 0.05)"
        zIndex="-1"
        display={["none", "none", "block"]}
      />

      <Box
        display="flex"
        flexDirection={["column", "column", "column", "row"]}
        justifyContent="center"
        alignItems="stretch"
        gap={["32px", "32px", "36px", "40px"]}
        width="100%"
        position="relative"
      >
        {cardsData.map((card, index) => (
          <Box
            key={index}
            width={["100%", "100%", "100%", `${100 / 3}%`]}
            display="flex"
            flexDirection="column"
            position="relative"
            _hover={{
              transform: "translateY(-8px)",
              transition: "all 0.4s ease",
            }}
            transition="all 0.3s ease"
          >
            {/* Number indicator */}

            {/* Card image */}
            <Box
              backgroundImage={`linear-gradient(to top, rgba(23,25,35,0.7) 0%, rgba(23,25,35,0.5) 40%, rgba(23,25,35,0.2) 80%, rgba(23,25,35,0.1) 100%), url(${card.imgUrl})`}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              height={["240px", "260px", "280px", "300px"]}
              borderRadius="16px"
              cursor="pointer"
              position="relative"
              overflow="hidden"
              boxShadow="0 4px 20px rgba(0,0,0,0.08)"
              _hover={{
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              {/* Accent line */}

              <Box
                position="absolute"
                bottom="0"
                left="0"
                p={["20px", "24px", "28px"]}
                width="100%"
              >
                <Text
                  color="white"
                  fontSize={["24px", "26px", "28px", "30px"]}
                  fontWeight="700"
                  lineHeight="1.2"
                  mb="8px"
                >
                  {card.title}
                </Text>

                {/* Small preview text */}
                <Text
                  color="rgba(255,255,255,0.8)"
                  fontSize="15px"
                  fontWeight="500"
                  display={["none", "none", "block"]}
                >
                  Discover our approach
                </Text>
              </Box>
            </Box>

            {/* Card content */}
            <Box pt="20px" pb="24px" px="4px">
              <Text
                fontSize={["15px", "16px", "16px", "17px"]}
                color="#2D3748"
                lineHeight="1.7"
                mb="16px"
              >
                {card.description}
              </Text>

              {/* Learn more link */}
            </Box>

            {/* Bottom accent */}
          </Box>
        ))}
      </Box>

      {/* Additional decorative element */}
      <Box
        position="absolute"
        bottom="-60px"
        left="5%"
        width="80px"
        height="80px"
        borderRadius="12px"
        transform="rotate(45deg)"
        bg="rgba(49, 130, 206, 0.05)"
        zIndex="-1"
        display={["none", "none", "block"]}
      />
    </Box>
  );
};

export default ServicesThreeCards;
