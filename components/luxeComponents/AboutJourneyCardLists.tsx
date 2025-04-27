import React from "react";
import {
  Box,

  HStack,

  Text,

} from "@chakra-ui/react";

import { Check } from "lucide-react";
const AboutJourneyCardLists = () => {
  const journey = [
    {
      id: 1,
      title: "Early 2023",
      description:
        "Founder Habibur started his own Airbnb, experiencing firsthand the frustrations and hidden costs of hosting. Unable to find an affordable, effective management solution, he identified a major gap in the market—and Luxe Managements was born.",
      icon: <Check />,
      number: null,
      imgTagNumber: null,
      imgTagNumberText: "Created Luxe Managements",
    },
    {
      id: 2,
      title: "December 2023 – Official Launch",
      description:
        "Luxe Managements officially opened and secured its first client, beginning the journey toward a better, smarter hosting experience.",
      icon: <Check />,
      number: "1 Property Managed",
      imgTagNumber: "1",
      imgTagNumberText: "Property Managed",
    },
    {
      id: 3,
      title: "February 2024 – Innovation in Operations",
      description:
        "After recognizing inefficiencies in cleaning and turnover management, Luxe developed a proprietary amenity and bedding system, cutting maintenance costs by over 50%.",
      icon: <Check />,
      number: null,
      imgTagNumber: null,
      imgTagNumberText: "Reduced maintenance costs",
    },
    {
      id: 4,
      title: "April 2024 – Elevating Property Presentation",
      description:
        "Luxe built an in-house system for styling, photography, and furnishing, delivering higher-quality, cost-effective setups compared to external providers.",
      icon: <Check />,
      number: null,
      imgTagNumber: null,
      imgTagNumberText: "In-house styling system",
    },
    {
      id: 5,
      title: "June 2024 – Proven Guest Excellence",
      description:
        "Through the introduction of a leading guest satisfaction system, Luxe achieved an average review score of 4.98 stars and hosted over 1,000 nights across their portfolio.",
      icon: <Check />,
      number: "98% Guest Satisfaction Rate",
      imgTagNumber: "98%",
      imgTagNumberText: "Guest Satisfaction Rate",
    },
    {
      id: 6,
      title: "Mid-2024 – Full Independence",
      description:
        "Luxe became fully independent of third-party vendors, offering clients a 100% bespoke, better-quality, and more affordable management solution.",
      icon: <Check />,
      number: null,
      imgTagNumber: null,
      imgTagNumberText: "Reduced third-party costs",
    },
    {
      id: 7,
      title: "September 2024 – Expansion Beyond Adelaide",
      description:
        "Luxe expanded services to suburbs outside Adelaide, bringing its premium offering to more homeowners.",
      icon: <Check />,
      number: "#1 In Luxury Rentals",
      imgTagNumber: null,
      imgTagNumberText: "Expanding suburbs",
    },
    {
      id: 8,
      title: "December 2025 – Interstate Growth",
      description:
        "Luxe officially expanded to cities outside South Australia, setting the foundation for a national presence.",
      icon: <Check />,
      number: "#1 In Luxury Rentals",
      imgTagNumber: null,
      imgTagNumberText: "Growing interstate",
    },

  ];
  return (
    <>
      {journey.map((item, index) => (
        <HStack
          data-aos="fade-up"
          zIndex={3}
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
          justify={"center"} // !!
          align={"center"}
          w={"100%"}
          h={"100%"}
          my={["50px", "50px", "50px", "50px", "50px", "100px"]}
          key={index}
        >
          <HStack
            justify={"center"}
            align={["center", "center", "start", "start", "start", "start"]}
            w={"100%"}
            h={"100%"}
            gap={["15px", "15px", "15px", "50px", "50px", "50px"]}
            wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
          >
            <Box w={["95%", "95%", "95%", "600px", "600px", "600px"]}>
              <Text
                w={["100%", "100%", "100%", "100%", "100%", "100%"]}
                mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
                fontSize={["35px", "35px", "35px", "50px", "50px", "50px"]}
                fontWeight={600}
                fontFamily={"Raleway"}
                bgClip="text"
                textAlign={[
                  "center",
                  "center",
                  "center",
                  "left",
                  "left",
                  "left",
                ]}
                color={"black"}
                bgGradient="linear(to-r, teal, blue)"
              >
                {item.title}
              </Text>
              <Text
                fontSize={["18px", "18px", "18px", "18px", "18px", "18px"]}
                mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
                textAlign={[
                  "center",
                  "center",
                  "center",
                  "left",
                  "left",
                  "left",
                ]}
                fontFamily={"Raleway"}
                color={"black"}
                w={["100%", "100%", "100%", "100%", "100%", "100%"]}
                fontWeight={300}
              >
                {item.description}
              </Text>
            </Box>

            <Box
              position="relative"
              h={["350px", "350px", "350px", "500px", "500px", "600px"]}
              w={["95%", "95%", "95%", "600px", "600px", "600px"]}
              borderRadius="30px"
              bgPos="center"
              bgSize="cover"
              // Change this to any background you want
              // Change this to any background you want
              overflow="hidden"
              display={"flex"}
              justifyContent={"end"}
            >
              {/* Horizontal line for crosshair */}
              <Box
                position="relative"
                h={["350px", "350px", "350px", "500px", "500px", "500px"]}
                w={["100%", "100%", "100%", "550px", "550px", "550px"]}
                borderRadius="30px"
                bg="gray.200" // Change this to any background you want
                overflow="hidden"
                backgroundImage={` url(https://images.pexels.com/photos/7213549/pexels-photo-7213549.jpeg)`}
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundSize="cover"
              ></Box>
              {/* Bottom-right label */}
              {/* <Box
                p={"4"}
                position={"absolute"}
                display={"flex"}
                w={"100%"}
                h={"100%"}
                justifyContent={[
                  "start",
                  "start",
                  "start",
                  "start",
                  "start",
                  "start",
                ]}
                alignItems={["start", "start", "start", "center", "center"]}
              >
                <Box
                  fontFamily={"raleway"}
                  zIndex={1}
                  bg="white"
                  borderRadius="md"
                  p={[
                    "10px 10px",
                    "10px 10px",
                    "10px 10px",
                    "15px 15px",
                    "15px 15px",
                    "15px 15px",
                  ]}
                  boxShadow="md"
                  fontWeight="semibold"
                  textAlign={"left"}
                >
                  <HStack >
                    <Text
                      fontSize={[
                        "30px",
                        "30px",
                        "35px",
                        "35px",
                        "35px",
                        "40px",
                      ]}
                      fontWeight={"700"}
                      color={"black"}
                    >
                     {item.imgTagNumber}
                    </Text>
                    <Text
                      fontSize={[
                        "12px",
                        "16px",
                        "14px",
                        "14px",
                        "16px",
                        "16px",
                      ]}
                    >
                      {" "}
                      {item.imgTagNumberText}
                    </Text>
                  </HStack>
                </Box>
              </Box> */}
            </Box>
          </HStack>
        </HStack>
      ))}
    </>
  );
};

export default AboutJourneyCardLists;
