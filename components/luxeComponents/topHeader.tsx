import { Box, Text } from "@chakra-ui/react";

interface TopHeaderProps {
  imgUrl: string;
  wordOne: string;
  wordTwo: string;
  description: string;
  and: boolean;
}

const TopHeader = ({
  imgUrl,
  wordOne,
  wordTwo,
  description,
  and,
}: TopHeaderProps) => {
  // Badges for each service
  const badges = {
    Property: ["Luxury Service", "Comprehensive Care", "24/7 Support"],
    Cleaning: ["Premium Quality", "Eco-Friendly", "Fast & Reliable"],
    Furnishing: ["Creative Designs", "Custom Interiors", "Stylish & Functional"],
    Photography: ["High Resolution", "Expertly Framed", "Perfect Lighting"],
  };

  // Get the badges for the current service (wordOne)
  const currentBadges = badges[wordOne] || [];

  return (
    <Box
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      py={["50px", "60px", "70px", "80px"]}
      position="relative"
    >
      {/* Background accent element */}
      <Box
        position="absolute"
        right={["5%", "8%", "10%", "15%"]}
        top={["15%", "15%", "20%"]}
        width={["80px", "100px", "120px", "150px"]}
        height={["80px", "100px", "120px", "150px"]}
        borderRadius="full"
        bg="rgba(0, 210, 255, 0.08)"
        filter="blur(40px)"
        zIndex="0"
      />

      {/* Main container */}
      <Box
        backgroundImage={`linear-gradient(135deg, rgba(0,0,0,0.52), rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.1)), url(${imgUrl})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        w="95%"
        h={["380px", "420px", "480px", "520px", "580px"]}
        borderRadius="20px"
        overflow="hidden"
        position="relative"
        transition="transform 0.4s ease, box-shadow 0.4s ease"
        _hover={{
          transform: "scale(1.01)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        }}
        cursor="pointer"
        boxShadow="0 10px 30px rgba(0,0,0,0.2)"
      >
        {/* Decorative elements */}
    
        
      

        {/* Aperture icon simulation using nested boxes */}
     
       

        {/* Content Container */}
        <Box
          position="absolute"
          bottom="0"
          left="0"
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          p={["30px", "40px", "50px", "60px", "70px"]}
        >
          {/* Subtle label */}
          <Box mb="16px">
            <Text
              fontSize={["12px", "13px", "14px"]}
              fontWeight="600"
              color="rgba(255,255,255,0.7)"
              letterSpacing="1.5px"
              textTransform="uppercase"
              position="relative"
              display="inline-block"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-6px",
                left: "0",
                width: "30px",
                height: "2px",
                bg: "rgba(255,255,255,0.5)",
              }}
            >
              Premium Service
            </Text>
          </Box>

          {/* Title */}
          <Box mb={["20px", "24px", "28px"]} position="relative">
            <Text
              fontSize={["42px", "48px", "56px", "64px", "76px"]}
              fontWeight="800"
              color="white"
              lineHeight="1"
              letterSpacing="-0.02em"
              position="relative"
              zIndex="1"
              textShadow="0 2px 10px rgba(0,0,0,0.2)"
            >
              {wordOne}
            </Text>
            <Text
              fontSize={["42px", "48px", "56px", "64px", "76px"]}
              fontWeight="800"
              color="white"
              lineHeight="1"
              letterSpacing="-0.02em"
              mt={and ? "-5px" : "0"}
              position="relative"
              zIndex="1"
              textShadow="0 2px 10px rgba(0,0,0,0.2)"
            >
              {and && <Box as="span" color="rgba(255,255,255,0.9)" mr="8px">{"&"}</Box>}
              {wordTwo}
            </Text>
            
            {/* Accent element behind text */}
            <Box
              position="absolute"
              bottom="10%"
              left="-10px"
              width="120px"
              height="12px"
              bg="rgba(0, 210, 255, 0.2)"
              borderRadius="full"
              filter="blur(10px)"
              zIndex="0"
            />
          </Box>
          
          {/* Description */}
          <Box mb="30px">
            <Text
              fontSize={["16px", "17px", "18px", "20px", "22px"]}
              fontWeight="300"
              color="white"
              maxW={["100%", "90%", "80%", "60%", "50%"]}
              lineHeight={["1.6", "1.6", "1.5"]}
              opacity="0.9"
            >
              {description}
            </Text>
          </Box>

          {/* Badges */}
          <Box 
            display="flex" 
            flexWrap="wrap" 
            gap={["10px", "12px", "15px"]} 
            mt="10px"
          >
            {currentBadges.map((badge, index) => (
              <Box 
                key={index}
                bg="rgba(255,255,255,0.1)" 
                borderRadius="full" 
                px={["12px", "14px", "16px"]} 
                py={["6px", "7px", "8px"]}
                border="1px solid rgba(255,255,255,0.15)"
              >
                <Text 
                  fontSize={["12px", "13px", "14px"]} 
                  color="white" 
                  fontWeight="500"
                >
                  {badge}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TopHeader;
