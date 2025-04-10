import React from "react";
import { Box, HStack, VStack, Text } from "@chakra-ui/react";

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
      align={"start"}
      px={["4%", "4%", "6%", "6%", "6%", "10%"]}
      flexWrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
      fontFamily={"raleway"}
      gap={["20px", "20px", "20px", "20px", "20px", "20px"]}

    >
      {cardsData.map((card, index) => (
        <VStack key={index} w={"100%"}>
          <Box
            backgroundImage={`linear-gradient(to top,rgb(39,44,66), transparent), url(${card.imgUrl})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            transition={"all 0.3s"}
            w={["100%", "100%", "100%", "100%", "100%", "100%"]}
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
              <VStack w={"100%"} h={"100%"} justify={"Start"} align={"Start"}>
                <HStack w={"100%"} h={"100%"} justify={"start"} align={"end"}>
                  <Text
                    textAlign={"start"}
                    color={"white"}
                    fontSize={["26px", "26px", "26px", "26px", "26px", "26px"]}
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
            fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
            w={["100%", "100%", "100%", "100%", "100%", "100%"]}
            pt={"5px"}
            mb={"10px"}
          >
            <Text textAlign={"start"}>{card.description}</Text>
          </Box>
        </VStack>
      ))}
    </HStack>
  );
};

export default ServicesThreeCards;
