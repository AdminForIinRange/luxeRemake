"use client";
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  Check,
  MessageCircle,
  Star,
  Home,
  Sofa,
  Camera,
  Sparkles,
  Percent,
  ArrowRight,
} from "lucide-react";
import FAQ from "@/components/FAQ";

const Pricing = () => {
  return (
    <Box bg="white">
      {/* Header Section */}
      <Box
        maxWidth="1200px"
        mx="auto"
        px={["24px", "40px"]}
        pt={["60px", "80px", "100px"]}
        pb={["40px", "60px"]}
      >
        <Box textAlign="center" mb={["40px", "60px"]}>
          <Text
            fontSize={["36px", "42px", "48px"]}
            fontWeight={700}
            color="#111"
            mb="16px"
            lineHeight="1.2"
          >
            Pricing Plans
          </Text>
          <Text
            fontSize={["16px", "18px", "20px"]}
            color="#555"
            fontWeight={400}
            maxWidth="600px"
            mx="auto"
            lineHeight="1.6"
          >
            Choose a plan that fits your needs.
          </Text>
        </Box>

        {/* Transparent Pricing Section */}
        <Box
          borderWidth="1px"
          borderColor="#eaeaea"
          borderRadius="16px"
          p={["30px", "40px", "60px"]}
          mb="60px"
          boxShadow="0 4px 20px rgba(0,0,0,0.03)"
        >
          <Box textAlign="center" maxWidth="800px" mx="auto">
            <Text
              fontSize={["28px", "32px", "36px"]}
              fontWeight={700}
              color="#111"
              mb="20px"
              lineHeight="1.1"
              textTransform="uppercase"
            >
              Transparent Pricing
            </Text>
            <Text
              fontSize={["15px", "16px", "18px"]}
              color="#555"
              mb="30px"
              lineHeight="1.6"
            >
              No hidden fees. Just smart, simple pricing designed to maximize
              your rental income. Get a Custom Quote.
            </Text>
            <Box
              display="flex"
              flexDirection={["column", "row"]}
              justifyContent="center"
              gap={["12px", "16px"]}
            >
              <Box
                as="a"
                href="#"
                py="16px"
                px="32px"
                borderWidth="1px"
                borderColor="#111"
                borderRadius="8px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="all 0.3s ease"
                _hover={{ bg: "#f8f8f8" }}
              >
                <Text fontWeight={600} fontSize="16px" color="#111">
                  Talk to Our Team
                </Text>
              </Box>
              <Box
                as="a"
                href="#"
                py="16px"
                px="32px"
                bg="#1a202c"
                color="white"
                borderRadius="8px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="all 0.3s ease"
                _hover={{ bg: "#2d3748" }}
              >
                <Text fontWeight={600} fontSize="16px">
                  Get a Custom Quote
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Service Cards Section */}
        <Box
          display="grid"
          gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
          gap="30px"
          mb="60px"
        >
          {/* Listing & Marketing Card */}
          <Box
            borderWidth="1px"
            borderColor="#eaeaea"
            borderRadius="16px"
            p={["30px", "40px"]}
            boxShadow="0 4px 20px rgba(0,0,0,0.03)"
          >
            <Text
              fontSize={["26px", "28px", "32px"]}
              fontWeight={700}
              color="#111"
              mb="24px"
              lineHeight="1.2"
            >
              Listing & Marketing
            </Text>

            <Text
              fontSize={["18px", "20px", "24px"]}
              fontWeight={600}
              color="#111"
              mb="8px"
            >
              18% of booking profit
            </Text>

            <Text fontSize="16px" color="#555" mb="32px">
              (profit = total revenue minus platform fees, cleaning, utilities)
            </Text>

            <Text
              fontSize={["18px", "20px"]}
              fontWeight={600}
              color="#111"
              mb="16px"
            >
              Curated Services Include:
            </Text>

            <Text fontSize="16px" color="#555" mb="24px" lineHeight="1.6">
              We craft compelling listings and implement strategic marketing to
              maximize visibility and occupancy rates.
            </Text>

            <Box mb="32px">
              <ServiceItem
                icon={<Sparkles size={20} />}
                text="Dynamic pricing algorithms"
              />
              <ServiceItem
                icon={<MessageCircle size={20} />}
                text="24/7 guest communication & support"
              />
              <ServiceItem
                icon={<Star size={20} />}
                text="Proactive 5-star review acquisition"
              />
              <ServiceItem
                icon={<Home size={20} />}
                text="Preventative maintenance coordination"
              />
              <ServiceItem
                icon={<Camera size={20} />}
                text="Professional styling & photography"
              />
              <ServiceItem
                icon={<Percent size={20} />}
                text="30% discount on premium cleaning services"
              />
            </Box>

            <Box
              borderWidth="1px"
              borderColor="#eaeaea"
              borderRadius="12px"
              p="24px"
              bg="#f9f9f9"
            >
              <Text
                fontSize="16px"
                color="#555"
                fontStyle="italic"
                textAlign="center"
                lineHeight="1.6"
              >
                We believe in complete transparency. Our team will walk you
                through all costs and projections before you commit, ensuring
                you have a clear understanding of your investment potential.
              </Text>
            </Box>
          </Box>

          {/* Comprehensive Management Card */}
          <Box
            borderWidth="1px"
            borderColor="#eaeaea"
            borderRadius="16px"
            overflow="hidden"
            boxShadow="0 4px 20px rgba(0,0,0,0.03)"
          >
            <Box p={["30px", "40px"]}>
              <Text
                fontSize={["26px", "28px", "32px"]}
                fontWeight={700}
                color="#111"
                mb="24px"
                lineHeight="1.2"
              >
                Comprehensive Management
              </Text>

              <Text
                fontSize={["18px", "20px", "24px"]}
                fontWeight={600}
                color="#111"
                mb="8px"
              >
                18% of booking profit
              </Text>

              <Text fontSize="16px" color="#555" mb="32px">
                (profit = total revenue minus platform fees, cleaning,
                utilities)
              </Text>

              <Text
                fontSize={["18px", "20px"]}
                fontWeight={600}
                color="#111"
                mb="16px"
              >
                Full-Service Management Includes:
              </Text>

              <Box mb="32px">
                <ServiceItem
                  icon={<Sofa size={20} />}
                  text="Complete property management"
                />
                <ServiceItem
                  icon={<Home size={20} />}
                  text="Revenue optimization"
                />
                <ServiceItem
                  icon={<MessageCircle size={20} />}
                  text="Guest experience management"
                />
                <ServiceItem
                  icon={<Star size={20} />}
                  text="Quality assurance"
                />
              </Box>
            </Box>

            <Box position="relative">
              <Box height="300px" width="100%" bg="#f5f5f5" />
              <Box
                position="absolute"
                bottom="24px"
                right="24px"
                bg="white"
                borderRadius="12px"
                p="20px"
                boxShadow="0 10px 30px rgba(0,0,0,0.1)"
              >
                <Text
                  fontSize="36px"
                  fontWeight={700}
                  color="#111"
                  mb="2px"
                  lineHeight="1"
                >
                  40%
                </Text>
                <Text fontSize="14px" color="#555">
                  Average Revenue Increase
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Premium Property Services Section */}
        <Box mb="60px">
          <Box textAlign="center" mb="40px">
            <Text
              fontSize={["26px", "30px", "34px"]}
              fontWeight={700}
              color="#111"
              mb="16px"
              lineHeight="1.1"
            >
              Premium Property Services
            </Text>
            <Text
              fontSize={["15px", "16px"]}
              color="#555"
              maxWidth="700px"
              mx="auto"
              lineHeight="1.6"
            >
              Elevate your property with our professional services tailored to
              maximize appeal and value
            </Text>
          </Box>

          {/* Service Cards */}
          <Box
            display="grid"
            gridTemplateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
            gap="24px"
          >
            {/* Styling & Photography Card */}
            <ServiceCard
              title="Styling & Photography"
              subtitle="Capture your property's best angles"
              icon={<Camera size={20} />}
              pricing={[
                { label: "Small Properties", price: "$250" },
                { label: "Larger Properties", price: "$350" },
              ]}
              features={[
                "Professional photographer",
                "Expert styling consultation",
                "High-resolution images",
                "24-hour turnaround",
              ]}
              description="Elevate your property's visual appeal with expert styling and magazine-quality professional photography that captures your space's unique character."
            />

            {/* Furnishing & Setup Card */}
            <ServiceCard
              title="Furnishing & Setup"
              subtitle="Transform empty spaces into homes"
              icon={<Sofa size={20} />}
              pricing={[{ label: "Total Item Value", price: "8%" }]}
              features={[
                "Curated furniture selection",
                "Professional installation",
                "Designer consultation",
                "Flexible rental options",
              ]}
              description="Transform your space with our curated furnishing services. We source, deliver, and artfully arrange premium furnishings that embody the Luxe aesthetic."
            />

            {/* Premium Cleaning Card */}
            <ServiceCard
              title="Premium Cleaning"
              subtitle="Immaculate spaces, every time"
              icon={<Sparkles size={20} />}
              pricing={[
                { label: "Per Service", price: "$90–$350" },
                { label: "With Management", price: "30% Off" },
              ]}
              features={[
                "Deep cleaning services",
                "Premium linen change",
                "Quality inspection",
                "Eco-friendly products",
              ]}
              description="Experience our meticulous turnover service with premium linen change and comprehensive quality inspections that ensure your property always presents its absolute best."
            />
          </Box>
        </Box>

        {/* Plan Comparison Table */}
        <Box
          mb="60px"
          borderWidth="1px"
          borderColor="#eaeaea"
          borderRadius="16px"
          overflow="hidden"
          boxShadow="0 4px 20px rgba(0,0,0,0.03)"
        >
          <Box p="28px" borderBottom="1px solid #eaeaea" bg="#f9f9f9">
            <Text fontSize="22px" fontWeight={600} color="#111" mb="8px">
              Plan Comparison
            </Text>
            <Text fontSize="14px" color="#555">
              Compare our management plans to find the right fit for your
              property
            </Text>
          </Box>

          {/* Table Header */}
          <Box
            display="grid"
            gridTemplateColumns={["1fr 1fr", "1fr 1fr", "2fr 1fr 1fr 1fr"]}
            borderBottom="1px solid #eaeaea"
            bg="#f9f9f9"
          >
            <Box p="16px" borderRight="1px solid #eaeaea">
              <Text fontSize="15px" fontWeight={600} color="#111">
                Feature
              </Text>
            </Box>
            <Box
              p="16px"
              display={["none", "none", "block"]}
              borderRight="1px solid #eaeaea"
              textAlign="center"
            >
              <Text fontSize="15px" fontWeight={600} color="#111">
                Essential
              </Text>
            </Box>
            <Box
              p="16px"
              display={["none", "none", "block"]}
              borderRight="1px solid #eaeaea"
              textAlign="center"
            >
              <Text fontSize="15px" fontWeight={600} color="#111">
                Standard
              </Text>
            </Box>
            <Box p="16px" textAlign={["right", "right", "center"]}>
              <Text fontSize="15px" fontWeight={600} color="#111">
                Premium
              </Text>
            </Box>
          </Box>

          {/* Table Rows */}
          {[
            {
              feature: "Management Fee",
              essential: "12%",
              standard: "15%",
              premium: "18%",
            },
            {
              feature: "Listing Optimization",
              essential: "Basic",
              standard: "Enhanced",
              premium: "Premium",
            },
            {
              feature: "Pricing Strategy",
              essential: "Fixed",
              standard: "Dynamic",
              premium: "Advanced",
            },
            {
              feature: "Photography",
              essential: "—",
              standard: "Professional",
              premium: "Premium + Virtual Tour",
            },
            {
              feature: "Guest Support",
              essential: "24/7 Basic",
              standard: "24/7 Priority",
              premium: "24/7 VIP Concierge",
            },
            {
              feature: "Cleaning Discount",
              essential: "—",
              standard: "15%",
              premium: "30%",
            },
            {
              feature: "Performance Reviews",
              essential: "Monthly",
              standard: "Quarterly",
              premium: "Monthly",
            },
            {
              feature: "Maintenance",
              essential: "Basic",
              standard: "Preventative",
              premium: "Priority",
            },
            {
              feature: "Styling Services",
              essential: "—",
              standard: "—",
              premium: "Included",
            },
          ].map((row, index) => (
            <Box
              key={index}
              display="grid"
              gridTemplateColumns={["1fr 1fr", "1fr 1fr", "2fr 1fr 1fr 1fr"]}
              borderBottom={index < 8 ? "1px solid #eaeaea" : "none"}
              bg={index % 2 === 0 ? "white" : "#fafafa"}
            >
              <Box p="16px" borderRight="1px solid #eaeaea">
                <Text fontSize="14px" color="#555">
                  {row.feature}
                </Text>
              </Box>
              <Box
                p="16px"
                display={["none", "none", "block"]}
                borderRight="1px solid #eaeaea"
                textAlign="center"
              >
                <Text fontSize="14px" color="#555">
                  {row.essential}
                </Text>
              </Box>
              <Box
                p="16px"
                display={["none", "none", "block"]}
                borderRight="1px solid #eaeaea"
                textAlign="center"
              >
                <Text fontSize="14px" color="#555">
                  {row.standard}
                </Text>
              </Box>
              <Box p="16px" textAlign={["right", "right", "center"]}>
                <Text fontSize="14px" color="#555">
                  {row.premium}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Call to Action */}
      </Box>

      <FAQ type={"pricing"} />
    </Box>
  );
};

// Helper component for service items with icon
const ServiceItem = ({ icon, text }) => (
  <Box display="flex" alignItems="center" mb="16px">
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#f5f5f5"
      borderRadius="full"
      width="36px"
      height="36px"
      mr="16px"
    >
      {icon}
    </Box>
    <Text fontSize="16px" color="#555">
      {text}
    </Text>
  </Box>
);

// Service Card Component
const ServiceCard = ({
  title,
  subtitle,
  icon,
  pricing,
  features,
  description,
}) => (
  <Box
    borderWidth="1px"
    borderColor="#eaeaea"
    borderRadius="16px"
    p="28px"
    transition="all 0.3s ease"
    _hover={{
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      transform: "translateY(-4px)",
    }}
  >
    <Box display="flex" alignItems="center" mb="16px">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#f5f5f5"
        borderRadius="full"
        width="36px"
        height="36px"
        mr="12px"
      >
        {icon}
      </Box>
      <Text fontSize="22px" fontWeight={600} color="#111" lineHeight="1.2">
        {title}
      </Text>
    </Box>

    <Text fontSize="14px" color="#555" mb="20px">
      {subtitle}
    </Text>

    <Box mb="20px">
      {pricing.map((item, index) => (
        <Box
          key={index}
          display="flex"
          justifyContent="space-between"
          mb={index < pricing.length - 1 ? "8px" : "0"}
        >
          <Text fontSize="14px" color="#555">
            {item.label}
          </Text>
          <Text fontSize="16px" fontWeight={600} color="#111">
            {item.price}
          </Text>
        </Box>
      ))}
    </Box>

    <Box mb="20px">
      {features.map((item, index) => (
        <Box key={index} display="flex" alignItems="center" mb="10px">
          <Box
            mr="10px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Check size={14} color="#111" />
          </Box>
          <Text fontSize="14px" color="#555">
            {item}
          </Text>
        </Box>
      ))}
    </Box>

    <Text fontSize="14px" color="#555" lineHeight="1.6">
      {description}
    </Text>
  </Box>
);

export default Pricing;
