import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  Check,
  Calendar,
  Award,
  TrendingUp,
  Home,
  Zap,
  Users,
  Globe,
  Briefcase,
} from "lucide-react";
import { useRouter } from "next/navigation"

const AboutJourneyCardLists = () => {
  const journey = [
    {
      id: 1,
      title: "Early 2023",
      subtitle: "The Beginning",
      description:
        "Founder Habibur started his own Airbnb, experiencing firsthand the frustrations and hidden costs of hosting. Unable to find an affordable, effective management solution, he identified a major gap in the market—and Luxe Managements was born.",
      icon: <Calendar size={20} />,
      stats: [
        { label: "Problem Identified", value: "Hidden Hosting Costs" },
        { label: "Market Gap", value: "Affordable Management" },
      ],
      category: "ORIGINS",
      img: "https://images.pexels.com/photos/5077042/pexels-photo-5077042.jpeg",
    },
    {
      id: 2,
      title: "December 2023 – Official Launch",
      subtitle: "First Steps",
      description:
        "Luxe Managements officially opened and secured its first client, beginning the journey toward a better, smarter hosting experience. This milestone marked the transition from concept to reality, validating our business model and approach to property management.",
      icon: <Briefcase size={20} />,
      stats: [
        { label: "Properties Managed", value: "1" },
        { label: "Team Members", value: "2" },
      ],
      category: "MILESTONE",
      img: "https://images.pexels.com/photos/261679/pexels-photo-261679.jpeg",
    },
    {
      id: 3,
      title: "February 2024 – Innovation in Operations",
      subtitle: "Operational Excellence",
      description:
        "After recognizing inefficiencies in cleaning and turnover management, Luxe developed a proprietary amenity and bedding system, cutting maintenance costs by over 50%. This innovation allowed us to deliver higher quality service while maintaining competitive pricing for our clients.",
      icon: <Zap size={20} />,
      stats: [
        { label: "Cost Reduction", value: "50%" },
        { label: "Process Efficiency", value: "↑ 35%" },
      ],
      category: "INNOVATION",
      img: "https://images.pexels.com/photos/5816299/pexels-photo-5816299.jpeg",
    },
    {
      id: 4,
      title: "April 2024 – Elevating Property Presentation",
      subtitle: "Visual Excellence",
      description:
        "Luxe built an in-house system for styling, photography, and furnishing, delivering higher-quality, cost-effective setups compared to external providers. Our dedicated design team now creates bespoke interiors that maximize appeal and booking rates for each unique property.",
      icon: <Home size={20} />,
      stats: [
        { label: "Booking Conversion", value: "↑ 28%" },
        { label: "Design Cost Savings", value: "40%" },
      ],
      category: "DESIGN",
      img: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    },
    {
      id: 5,
      title: "June 2024 – Proven Guest Excellence",
      subtitle: "Customer Satisfaction",
      description:
        "Through the introduction of a leading guest satisfaction system, Luxe achieved an average review score of 4.98 stars and hosted over 1,000 nights across their portfolio. Our commitment to exceptional guest experiences has become our hallmark, driving repeat bookings and referrals.",
      icon: <Users size={20} />,
      stats: [
        { label: "Guest Satisfaction", value: "98%" },
        { label: "Nights Hosted", value: "1,000+" },
      ],
      category: "SERVICE",
      img: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
    },
    {
      id: 6,
      title: "Mid-2024 – Full Independence",
      subtitle: "Vertical Integration",
      description:
        "Luxe became fully independent of third-party vendors, offering clients a 100% bespoke, better-quality, and more affordable management solution. By bringing all services in-house, we've created a seamless end-to-end experience that maximizes property performance while minimizing owner hassle.",
      icon: <Award size={20} />,
      stats: [
        { label: "Vendor Reduction", value: "100%" },
        { label: "Client Savings", value: "↑ 25%" },
      ],
      category: "GROWTH",
      img: "https://images.pexels.com/photos/4108797/pexels-photo-4108797.jpeg",
    },
    {
      id: 7,
      title: "September 2024 – Expansion Beyond Adelaide",
      subtitle: "Regional Growth",
      description:
        "Luxe expanded services to suburbs outside Adelaide, bringing its premium offering to more homeowners. This strategic expansion allowed us to serve a broader market while maintaining our high standards of personalized service and local expertise in each new area.",
      icon: <TrendingUp size={20} />,
      stats: [
        { label: "New Regions", value: "5" },
        { label: "Market Position", value: "#1 Luxury" },
      ],
      category: "EXPANSION",
      img: "https://images.pexels.com/photos/31457993/pexels-photo-31457993.jpeg",
    },
    {
      id: 8,
      title: "December 2025 – Interstate Growth",
      subtitle: "National Presence",
      description:
        "Luxe officially expanded to cities outside South Australia, setting the foundation for a national presence. Our carefully planned interstate expansion brings our proven management model to new markets, creating opportunities for property owners across Australia to benefit from our expertise.",
      icon: <Globe size={20} />,
      stats: [
        { label: "New States", value: "3" },
        { label: "Growth Projection", value: "150%" },
      ],
      category: "VISION",
      img: "https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg",
    },
  ];
 const router = useRouter()

  return (
    <Box width="100%" position="relative" paddingY="120px">
      {/* Introduction Section */}
      <Box
        width="100%"
        maxWidth="1200px"
        margin="0 auto"
        paddingX={["30px", "40px", "60px"]}
        marginBottom="120px"
        textAlign="center"
      >
        <Text
          fontSize={["40px", "48px", "56px", "64px"]}
          fontWeight="800"
          fontFamily="arial"
          color="black"
          lineHeight="1.1"
          marginBottom="40px"
        >
          Our Journey
        </Text>

        <Text
          fontSize={["18px", "20px", "22px"]}
          lineHeight="1.8"
          fontFamily="arial"
          color="#555"
          fontWeight="400"
          maxWidth="900px"
          margin="0 auto"
        >
          From a single property to a growing portfolio across Australia, follow
          the Luxe Managements story as we revolutionize property management
          through innovation, quality, and exceptional service.
        </Text>
      </Box>

      {/* Timeline Container with Central Line */}
      <Box
        width="100%"
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: "0",
          bottom: "0",
          left: ["30px", "30px", "30px", "50%"],
          width: "2px",
          backgroundColor: "#f0f0f0",
          transform: ["none", "none", "none", "translateX(-1px)"],
          zIndex: "0",
        }}
      >
        {journey.map((item, index) => (
          <Box
            key={index}
            data-aos="fade-up"
            position="relative"
            width="100%"
            maxWidth="1600px"
            margin="0 auto"
            paddingBottom={index === journey.length - 1 ? "0" : "180px"}
          >
            {/* Timeline Node */}
            <Box
              position="absolute"
              left={["30px", "30px", "30px", "50%"]}
              top="0"
              width="50px"
              height="50px"
              borderRadius="50%"
              backgroundColor="white"
              border="2px solid #e0e0e0"
              transform={[
                "translateX(-50%)",
                "translateX(-50%)",
                "translateX(-50%)",
                "translateX(-50%)",
              ]}
              display="flex"
              alignItems="center"
              justifyContent="center"
              zIndex="2"
              _hover={{
                backgroundColor: "#f8f8f8",
                boxShadow: "0 0 0 8px rgba(0,0,0,0.03)",
                transition: "all 0.3s ease",
              }}
            >
              <Box color="#333">{item.icon}</Box>
            </Box>

            {/* Content Container */}
            <Box
              display="flex"
              flexDirection={[
                "column",
                "column",
                "column",
                index % 2 === 0 ? "row" : "row-reverse",
              ]}
              paddingLeft={["80px", "80px", "80px", "0"]}
              paddingTop={["0", "0", "0", "60px"]}
            >
              {/* Text Content */}
              <Box
                width={["100%", "100%", "100%", "50%"]}
                paddingRight={["0", "0", "0", index % 2 === 0 ? "120px" : "0"]}
                paddingLeft={["0", "0", "0", index % 2 === 0 ? "0" : "120px"]}
                textAlign={[
                  "left",
                  "left",
                  "left",
                  index % 2 === 0 ? "left" : "left",
                ]}
              >
                {/* Category Tag */}
                <Box
                  display="inline-block"
                  backgroundColor="#f5f5f5"
                  paddingX="16px"
                  paddingY="8px"
                  borderRadius="6px"
                  marginBottom="24px"
                >
                  <Text
                    fontSize="14px"
                    fontWeight="600"
                    letterSpacing="1px"
                    color="#555"
                  >
                    {item.category}
                  </Text>
                </Box>

                {/* Title */}
                <Text
                  fontSize={["32px", "36px", "40px"]}
                  fontWeight="700"
                  fontFamily="arial"
                  color="black"
                  lineHeight="1.2"
                  marginBottom="16px"
                >
                  {item.title}
                </Text>

                {/* Subtitle */}
                <Text
                  fontSize={["20px", "22px", "24px"]}
                  fontWeight="500"
                  fontFamily="arial"
                  color="#555"
                  marginBottom="30px"
                >
                  {item.subtitle}
                </Text>

                {/* Description */}
                <Text
                  fontSize={["16px", "17px", "18px"]}
                  lineHeight="1.8"
                  fontFamily="arial"
                  color="#333"
                  fontWeight="400"
                  marginBottom="40px"
                >
                  {item.description}
                </Text>

                {/* Stats */}
                <Box
                  display="flex"
                  flexDirection="row"
                  flexWrap="wrap"
                  gap="20px"
                  justifyContent={[
                    "flex-start",
                    "flex-start",
                    "flex-start",
                    index % 2 === 0 ? "flex-start" : "flex-start",
                  ]}
                >
                  {item.stats &&
                    item.stats.map((stat, statIndex) => (
                      <Box
                        key={statIndex}
                        backgroundColor="white"
                        border="1px solid #e0e0e0"
                        borderRadius="12px"
                        paddingX="24px"
                        paddingY="20px"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        minWidth="150px"
                        _hover={{
                          boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                          transform: "translateY(-3px)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <Text
                          fontSize="24px"
                          fontWeight="700"
                          color="#333"
                          marginBottom="8px"
                        >
                          {stat.value}
                        </Text>
                        <Text fontSize="14px" fontWeight="500" color="#777">
                          {stat.label}
                        </Text>
                      </Box>
                    ))}
                </Box>
              </Box>

              {/* Image Container */}
              <Box
                width={["100%", "100%", "100%", "50%"]}
                marginTop={["50px", "50px", "50px", "0"]}
                position="relative"
                paddingX={["0", "0", "0", "30px"]}
              >
                <Box
                  width="100%"
                  height={["300px", "350px", "400px"]}
                  borderRadius="20px"
                  overflow="hidden"
                  position="relative"
                  backgroundImage={`url(${item.img})`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  boxShadow="0 12px 40px rgba(0, 0, 0, 0.12)"
                  _before={{
                    content: '""',
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.4) 100%)",
                    zIndex: "1",
                  }}
                  _hover={{
                    transform: "scale(1.02)",
                    transition: "transform 0.5s ease",
                    boxShadow: "0 16px 50px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  {/* Optional image overlay content */}
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    padding="30px"
                    zIndex="2"
                    width="100%"
                  >
                    <Text
                      fontSize="16px"
                      fontWeight="600"
                      color="white"
                      textShadow="0 1px 2px rgba(0,0,0,0.3)"
                    >
                      {item.id === 1
                        ? "Where it all began"
                        : item.id === 2
                          ? "First client signing"
                          : item.id === 3
                            ? "Operational innovation"
                            : item.id === 4
                              ? "Property styling excellence"
                              : item.id === 5
                                ? "Guest experience focus"
                                : item.id === 6
                                  ? "Full-service independence"
                                  : item.id === 7
                                    ? "Regional expansion"
                                    : "National growth strategy"}
                    </Text>
                  </Box>
                </Box>

                {/* Decorative elements */}
                <Box
                  position="absolute"
                  top="-20px"
                  right={index % 2 === 0 ? "-20px" : "auto"}
                  left={index % 2 === 0 ? "auto" : "-20px"}
                  width="100px"
                  height="100px"
                  borderRadius="16px"
                  border="2px solid #f0f0f0"
                  backgroundColor="rgba(255,255,255,0.8)"
                  display={["none", "none", "none", "block"]}
                  zIndex="-1"
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Footer Section */}
      <Box
        width="100%"
        maxWidth="1200px"
        margin="0 auto"
        marginTop="160px"
        paddingX={["30px", "40px", "60px"]}
        textAlign="center"
      >
        <Text
          fontSize={["28px", "32px", "36px"]}
          fontWeight="700"
          fontFamily="arial"
          color="black"
          marginBottom="30px"
        >
          Join Us on Our Journey
        </Text>

        <Text
          fontSize={["17px", "18px", "20px"]}
          lineHeight="1.8"
          fontFamily="arial"
          color="#555"
          fontWeight="400"
          maxWidth="800px"
          margin="0 auto"
          marginBottom="50px"
        >
          As we continue to grow and innovate, we're looking for property owners
          who share our vision for exceptional hospitality and management
          excellence.
        </Text>

        <Box
          display="inline-block"
          backgroundColor="#000"
          color="white"
          paddingX="40px"
          paddingY="20px"
          borderRadius="12px"
          fontWeight="600"
          fontSize="18px"
          cursor="pointer"
          _hover={{
            backgroundColor: "#222",
            transform: "translateY(-3px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
          }}
          onClick={() => {
            router.push("/contact");
          }}
        >
          <Text>Partner With Us</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutJourneyCardLists;
