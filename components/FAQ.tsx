import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen: initialOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div className="border-b border-gray-200 last:border-0 xl:w-[1280px] w-full">
      <button
        className="flex w-full items-center justify-between py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex-1 font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 shrink-0 text-gray-500" />
        ) : (
          <ChevronDown className="h-6 w-6 shrink-0 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
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

  return (
    <section className="flex flex-col items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center max-w-screen-xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about our luxury property
            management services
          </p>
        </div>
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
  
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
