import React, { useState } from "react";
import { Accordion, Box, Span } from "@chakra-ui/react";
import TitleSubheading from "./luxeComponents/Text/titleSubheading";

const faqs = [
  {
    question: "What services does your Airbnb management offer?",
    answer:
      "At Luxe Managements, we offer end-to-end Airbnb and short-stay property management. From creating standout listings and handling all guest communication, to dynamic pricing, professional cleaning, hotel-quality linen, and round-the-clock maintenance — we take care of everything so you can enjoy stress-free passive income. Our service is tailored to deliver a seamless, high-end hosting experience.",
  },
  {
    question: "How do you help maximize rental income?",
    answer:
      "We use real-time market data and advanced pricing tools to ensure your property is always listed at the optimal rate. Combined with high-converting listings, professional photography, and multi-platform exposure across Airbnb, Booking.com, and more, our strategies regularly boost income by up to 40%. Higher occupancy, better reviews, and premium nightly rates that's the Luxe difference.",
  },
  {
    question: "What types of properties do you manage?",
    answer:
      "Luxe specializes in managing a diverse portfolio of short-term rental properties, including stylish city apartments, family homes, luxury holiday stays, and boutique accommodations. Whether you’re in Adelaide or surrounding regions, we tailor our service to suit your property type and investment goals.",
  },
  {
    question: "How does the linen and amenity service work?",
    answer:
      "We provide premium linen and amenity packages for every guest stay. Think crisp white sheets, plush towels, high-thread-count bedding, and luxury toiletries — all refreshed and professionally laundered between bookings. Our goal is to elevate the guest experience to five-star hotel standards, every time.",
  },
  {
    question: "How can I get started with your services?",
    answer:
      "Getting started with Luxe is simple. Book a free consultation with our team — we’ll inspect your property, provide income projections, and walk you through the onboarding process. From there, we handle everything: staging, photography, listings, guest communication, and ongoing operations. You relax — we do the work.",
  },
  {
    question: "What happens if there's an emergency at my property?",
    answer:
      "We offer 24/7 incident response and property oversight. Whether it’s a late-night lockout or a maintenance issue, our local team is on-call and ready to act immediately. With Luxe, your property is always protected — and your guests are always looked after.",
  },
  {
    question: "Do you handle property marketing?",
    answer:
      "Absolutely. First impressions matter, and our in-house marketing team ensures your property stands out with professional photography, compelling copywriting, and strategic placement across high-traffic platforms. We showcase your home’s best features to attract premium bookings and enhance long-term visibility.",
  },
];


const pricingFaqs = [
  {
    question: "How does your pricing model work?",
    answer:
      "We charge 18% of booking profit — calculated as total revenue minus platform fees, cleaning, and utilities. This means we only succeed when you do. There are no hidden fees or lock-in contracts — just performance-based pricing designed to maximize your income.",
  },
  {
    question: "What’s included in the 18% management fee?",
    answer:
      "Our 18% fee covers full-service management: expert listing creation, dynamic pricing, 24/7 guest communication, professional photography, styling advice, review optimization, and ongoing maintenance coordination. It’s a hands-off solution designed to elevate your earnings and guest experience.",
  },
  {
    question: "How much can I expect to earn?",
    answer:
      "Properties managed by Luxe see an average revenue increase of 40% through better pricing, occupancy, and reviews. Every property is different — we offer a custom income projection during your free consultation to give you a clear idea of your earning potential.",
  },
  {
    question: "Are there any upfront costs?",
    answer:
      "If your property needs photography, styling, or furnishing, we offer premium services at competitive rates. Photography starts at $250, while furnishing is calculated at 8% of the total item value. All costs are discussed transparently before any commitments.",
  },
  {
    question: "Can I choose a different management plan?",
    answer:
      "Yes — we offer tiered plans (Essential, Standard, Premium) with varying levels of service and pricing, starting as low as 12%. Each plan offers different levels of support, marketing, and discounts, so you can choose what fits your goals and budget.",
  },
  {
    question: "Do I have to pay for cleaning services?",
    answer:
      "Guests cover the basic cleaning fee as part of their booking. For owners, we offer premium cleaning (including linen and quality checks) with a 30% discount for managed properties. This ensures your space is spotless and always guest-ready.",
  },
  {
    question: "How do I get a custom quote?",
    answer:
      "Simple — book a free consultation with our team. We’ll assess your property, walk you through potential earnings, and provide a tailored quote based on your specific needs and the level of service you’re after.",
  },
];


const FAQ = ({ type }: { type: string }) => {
  const isPricing = type === "pricing";
  const selectedFaqs = isPricing ? pricingFaqs : faqs;

  return (
    <>
      <TitleSubheading
        title={"FAQ"}
        subheading={"Frequently Asked Questions"}
      />
      <Accordion.Root
        mt={"50px"}
        fontFamily={"raleway"}
        collapsible
        defaultValue={["b"]}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
      >
        {selectedFaqs.map((item, index) => (
          <Accordion.Item key={index} value={item.question}>
            <Accordion.ItemTrigger
              display="flex"
              alignItems="start"
              justifyContent={"start"}
              textAlign={"start"}
              py="4"
              _hover={{ bg: "gray.50" }}
            >
              <Span
                ml={"10px"}
                flex="1"
                fontWeight={"600"}
                fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}
              >
                {item.question}
              </Span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>

            <Accordion.ItemContent>
              <Accordion.ItemBody
                ml={"10px"}
                fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}
              >
                {item.answer}
              </Accordion.ItemBody>
            </Accordion.ItemContent>
            <Box
              _hover={{ bg: "gray.50" }}
              borderBottom={"1px solid"}
              borderColor="gray.100"
            ></Box>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </>
  );
};

export default FAQ;
