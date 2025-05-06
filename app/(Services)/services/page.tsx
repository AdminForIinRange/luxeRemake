"use client";
import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  Camera,
  ChevronRight,
  HomeIcon,
  Sofa,
  Sparkle,
  Star,
  ArrowRight,
  Play,
  Quote,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

import { useRouter } from "next/navigation";
import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation";

const Services = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const serviceItems = [
    {
      img: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg",
      title: "Property Management",
      logo: <HomeIcon size={22} color="white" />,
      link: "services/property-management",
      subheading:
        "Comprehensive management service including all our offerings.",
      description:
        "Our property management service takes care of everything from tenant screening to maintenance, ensuring your investment is in good hands. We handle day-to-day operations so you can enjoy passive income without the stress.",
      benefits: [
        "24/7 maintenance support",
        "Tenant screening & placement",
        "Rent collection & accounting",
        "Regular property inspections",
      ],
    },
    {
      img: "https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg",
      title: "Cleaning & Linen",
      logo: <Sparkle size={22} color="white" />,
      link: "services/cleaning-and-linen",
      subheading:
        "Ensure a pristine, hotel-quality experience for every guest.",
      description:
        "Our professional cleaning and linen service ensures your property maintains the highest standards of cleanliness. We use eco-friendly products and premium linens to create a luxurious experience for your guests.",
      benefits: [
        "Deep cleaning between stays",
        "Premium quality linens",
        "Eco-friendly cleaning products",
        "Attention to detail",
      ],
    },
    {
      img: "https://images.pexels.com/photos/5570226/pexels-photo-5570226.jpeg",
      title: "Furnishing & Styling",
      logo: <Sofa size={22} color="white" />,
      link: "services/furnishing-and-styling",
      subheading:
        "Transform your space into a stunning, Instagram-worthy retreat.",
      description:
        "Our expert designers will transform your property into a stylish, inviting space that guests will love. We source quality furniture and décor that enhances your property's unique character while maximizing appeal.",
      benefits: [
        "Professional interior design",
        "Curated furniture selection",
        "Custom artwork & accessories",
        "Trend-aware styling",
      ],
    },
    {
      img: "https://images.pexels.com/photos/30670960/pexels-photo-30670960.jpeg",
      title: "Photography",
      logo: <Camera size={22} color="white" />,
      link: "services/photography",
      subheading:
        "Capture your property's best features with professional photography.",
      description:
        "Professional photography is essential for showcasing your property. Our photographers use advanced techniques and equipment to highlight your property's best features, helping you attract more bookings.",
      benefits: [
        "High-resolution images",
        "Virtual tours",
        "Drone aerial photography",
        "Optimized for listing platforms",
      ],
    },
  ];

  const testimonials = [
    {
      name: "John Carter",
      role: "Property Owner",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      quote:
        "Working with this team has been transformative for my property business. Their attention to detail and exceptional service has significantly increased my bookings and guest satisfaction.",
      rating: 5,
    },
    {
      name: "Sophia Moore",
      role: "Real Estate Investor",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      quote:
        "I've been working with them for over two years now, and they've consistently exceeded my expectations. My properties have never looked better, and the management is seamless.",
      rating: 5,
    },
    {
      name: "Matt Carson",
      role: "Vacation Rental Host",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      quote:
        "The photography service transformed my listing. Bookings increased by 40% after updating with their professional photos. Their eye for detail is unmatched.",
      rating: 5,
    },
  ];

  const router = useRouter();

  return (
    <Box bg="white">
      {/* Header Section with subtle background */}
      <Box
        position="relative"
        overflow="hidden"
        pt={["80px", "100px", "120px"]}
        pb={["60px", "80px", "100px"]}
      >
        {/* Subtle background element */}

        <Box
          position="relative"
          zIndex="1"
          maxWidth="1200px"
          mx="auto"
          px={["20px", "40px", "60px"]}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <Text
              fontSize={["36px", "48px", "56px"]}
              fontWeight={700}
              fontFamily="Raleway"
              color="#111"
              mb="24px"
              lineHeight="1.1"
            >
              Our Services
            </Text>
            <Text
              fontSize={["16px", "18px", "20px"]}
              fontFamily="raleway"
              color="#555"
              fontWeight={400}
              maxWidth="700px"
              lineHeight="1.6"
              mb={["40px", "60px", "80px"]}
            >
              We offer a complete suite of services to help you manage your
              property with ease, ensuring every aspect is both beautiful and
              functional.
            </Text>
          </Box>

          {/* Services Grid */}
          <Box
            display="grid"
            gridTemplateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
            gap={["40px", "40px", "32px"]}
          >
            {serviceItems.map((service, index) => (
              <Box key={service.title} position="relative">
                {/* Card */}
                <Box
                  position="relative"
                  borderRadius="16px"
                  overflow="hidden"
                  height={["280px", "320px", "360px"]}
                  cursor="pointer"
                  onClick={() => router.push(`/${service.link}`)}
                  boxShadow="0 8px 30px rgba(0,0,0,0.06)"
                  transition="all 0.4s ease"
                  _hover={{
                    transform: "translateY(-8px)",
                    boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Background Image */}
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    backgroundImage={`url(${service.img})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    zIndex="0"
                    transition="transform 0.8s ease"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                  />

                  {/* Gradient Overlay */}
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    background="linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)"
                    zIndex="1"
                  />

                  {/* Content */}
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    padding="28px"
                    zIndex="2"
                  >
                    {/* Icon */}
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      width="40px"
                      height="40px"
                      mb="16px"
                    >
                      {service.logo}
                    </Box>

                    {/* Title */}
                    <Text
                      color="white"
                      fontSize={["22px", "24px", "28px"]}
                      fontFamily="Raleway"
                      fontWeight={600}
                      lineHeight="1.2"
                    >
                      {service.title}
                    </Text>
                  </Box>
                </Box>

                {/* Description */}
                <Box mt="24px" mb={["40px", "50px", "60px"]}>
                  <Text
                    fontSize={["15px", "16px", "17px"]}
                    color="#333"
                    mb="16px"
                    lineHeight="1.6"
                  >
                    {service.subheading}
                  </Text>

                  {/* Service benefits */}
                  <Box mb="20px">
                    {service.benefits.map((benefit, i) => (
                      <Box key={i} display="flex" alignItems="center" mb="8px">
                        <Box
                          width="6px"
                          height="6px"
                          borderRadius="full"
                          bg="#555"
                          mr="10px"
                        />
                        <Text fontSize="14px" color="#555">
                          {benefit}
                        </Text>
                      </Box>
                    ))}
                  </Box>

                  {/* Explore Service Link */}
                  <Box
                    display="flex"
                    alignItems="center"
                    cursor="pointer"
                    onClick={() => router.push(`/${service.link}`)}
                    transition="all 0.3s ease"
                    _hover={{
                      transform: "translateX(8px)",
                    }}
                    width="fit-content"
                  >
                    <Text
                      fontSize={["14px", "15px", "16px"]}
                      fontWeight={600}
                      color="#000"
                      mr="8px"
                    >
                      Explore service
                    </Text>
                    <Box display="flex" alignItems="center">
                      <ChevronRight size={16} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" width="100%" py="40px">
        <Box width="90%" height="1px" backgroundColor="#e0e0e0" />
      </Box>

      <ScheduleConsultation />
    </Box>
  );
};

export default Services;
