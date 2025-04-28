import {
    Box,

    Text,
    VStack,
  } from "@chakra-ui/react";


interface TopHeaderProps {
  imgUrl: string;
  wordOne: string;
  wordTwo: string;
  description: string;
  and: boolean;
}

const TopHeader = ({ imgUrl, wordOne, wordTwo, description, and }: TopHeaderProps) => {
  return (
    <>
      <Box
        w={"100%"}
        h={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          backgroundImage={`linear-gradient(to top,rgb(53, 59, 84), transparent), url(${imgUrl})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          transition={"all 0.3s"}
          w={"95%"}
          h={["300px", "300px", "300px", "300px", "500px", "500px"]}
          borderRadius={"16px"}
          _hover={{
            transform: "scale(1.01)",
          }}
          cursor={"pointer"}
          p={"30px"}
          display={"flex"}
          fontFamily={"raleway"}
        >
          <VStack
            color={"white"}
            mt={"10px"}
            w={"100%"}
            h={"100%"}
            display={"flex"}
            justifyContent={"start"}
            alignItems={"start"}
            p={["8px", "8px", "8px", "32px", "32px", "32px"]}
          >
            <VStack justify={"end"} align={"start"} w={"100%"} h={"100%"}>
              <Text
                fontSize={{
                  base: "32px",
                  sm: "32px",
                  md: "40px",
                  lg: "60px",
                  xl: "80px",
                }}
                fontWeight={700}
                bgClip="text"
                color={"white"}
                bgGradient="linear(to-r, teal, blue)"
                lineHeight={1}
              >
                {wordOne} {and ? "&" : ""}<br></br>{wordTwo}
              </Text>
              <Text
                w={["100%", "100%", "100%", "50%", "50%", "50%"]}
                fontSize={["18px", "18px", "18px", "26px", "26px", "26px"]}
                // mt={["20px", "20px", "20px", "20px", "20px", "20px"]}

                fontWeight={300}
              >
                {description}
              </Text>
            </VStack>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default TopHeader;
