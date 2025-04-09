import React from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";

interface CardData {
  imgUrl: string;
  title: string;
  description: string;
}

const ServicesThreeCards = ({ cardsData }: { cardsData: CardData[] }) => {
  return (
    <HStack
      mt={["100px", "100px", "100px", "100px", "100px", "100px"]}
      w={"100%"}
      h={"100%"}
      justify={"center"}
      align={"center"}
      px={["4%", "4%", "6%", "6%", "6%", "10%"]}
      flexWrap={["wrap", "wrap", "wrap", "wrap", "wrap", "wrap"]}
      fontFamily={"raleway"}
      gap={"25px"}
    >
      {cardsData.map((card, index) => (
        <VStack key={index}>
          <Box
            backgroundImage={`linear-gradient(to top,rgb(39,44,66), transparent), url(${card.imgUrl})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            transition={"all 0.3s"}
            w={["100%", "250px", "250px", "400px", "400px", "400px"]}
            h={"300px"}
            borderRadius={"16px"}
            _hover={{
              transform: "scale(1.01)",
            }}
            cursor={"pointer"}
            p={"30px"}
            display={"flex"}
          >
            <VStack
              color={"white"}
              mt={"20px"}
              w={"100%"}
              h={"100%"}
              display={"flex"}
              justifyContent={"end"}
              alignItems={"end"}
            >
              <VStack
                w={"100%"}
                h={"100%"}
                justify={"Start"}
                align={"Start"}
              >
                <HStack
                  w={"100%"}
                  h={"100%"}
                  justify={"start"}
                  align={"end"}
                >
                  <Text
                    textAlign={"start"}
                    color={"white"}
                    fontSize={[
                      "26px",
                      "26px",
                      "26px",
                      "26px",
                      "26px",
                      "26px",
                    ]}
                    fontFamily={"Raleway"}
                    fontWeight={700}
                  >
                    {card.title}
                  </Text>
                </HStack>
              </VStack>
            </VStack>
          </Box>
          <Box
            fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
            w={["100%", "250px", "250px", "400px", "400px", "400px"]}
            pt={"15px"}
          >
            <Text textAlign={"start"}>
              {card.description}
            </Text>
          </Box>
        </VStack>
      ))}
    </HStack>
  );
};

export default ServicesThreeCards;
