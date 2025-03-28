import React from "react";
import { Accordion, Box, Span , Text} from "@chakra-ui/react";

const faqs = [
  {
    question: "What services does your Airbnb management offer?",
    answer:
      "We offer full-service Airbnb management, including property listing creation, guest communication, pricing optimization, cleaning services, and maintenance, ensuring a seamless hosting experience.",
  },
  {
    question: "How do you help maximize rental income?",
    answer:
      "Our team optimizes your property listings across platforms like Airbnb and Booking.com, adjusts pricing based on market demand, and ensures high occupancy rates, leading to a 40% average increase in rental income.",
  },
  {
    question: "What types of properties do you manage?",
    answer:
      "We manage a wide range of properties, from residential homes and vacation rentals to boutique apartments, focusing on short-term rentals in Adelaide and surrounding areas.",
  },
  {
    question: "How does the linen and amenity service work?",
    answer:
      "We provide high-quality linen and amenity services tailored to each booking. This includes premium bed linens, luxury toiletries, and additional towels, ensuring your guests have a comfortable stay.",
  },
  {
    question: "How can I get started with your services?",
    answer:
      "Getting started is easy! Contact our team, schedule a property inspection, and we'll handle everything from listing creation to guest management and cleaning services.",
  },
  {
    question: "What happens if there's an emergency at my property?",
    answer:
      "We offer 24/7 incidence management, ensuring that any emergencies or issues at your property are addressed immediately for your peace of mind.",
  },
  {
    question: "Do you handle property marketing?",
    answer:
      "Yes, we provide professional marketing services to showcase your property. Our high-quality marketing materials increase your property's appeal and help attract more bookings.",
  },
];
const FAQ = () => {
  return (
    <>

<Text
     
        fontSize={["24px", "24px", "24px", "30px", "36px"]}
        fontWeight="bold"
        mb="8px"
        textAlign={"center"}
      >
     FAQ
      </Text> 
      <Accordion.Root
      fontFamily={"raleway"}
        collapsible
        defaultValue={["b"]}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
      >
        {faqs.map((item, index) => (
          <Accordion.Item key={index} value={item.question}>
            <Accordion.ItemTrigger
              display="flex"
              alignItems="start"
              justifyContent={"start"}
              textAlign={"start"}
              py="4"
        
              _hover={{ bg: "gray.50" }}
            >
              <Span flex="1" fontWeight={"600"}  fontSize={"18px"} >{item.question}</Span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>

            <Accordion.ItemContent>
              <Accordion.ItemBody>{item.answer}</Accordion.ItemBody>
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
