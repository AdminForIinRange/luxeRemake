"use client";

import React, { useState, useRef } from "react";
import { Box, VStack, Text, Button, HStack } from "@chakra-ui/react";
import { createArticle } from "@/lib/actions/createArticle.action";

const sampleTopics = [
  "Setting Up Your Space for Success: Focusing on preparing your property to attract guests and ensure a comfortable stay",
  "Legal and Regulatory Considerations: Navigating local laws, permits, insurance, and tax obligations for short-term rentals",
  "Creating a Compelling Listing: Crafting Effective Descriptions, Taking High-Quality Photos, and Setting Competitive Pricing",
  "Mastering the Booking Process: Understanding Booking Platforms, Managing Calendars, and Handling Guest Inquiries Efficiently",
  "Guest Communication and Hospitality: Providing Excellent Customer Service from Pre-Arrival to Post-Departure",
  "Streamlining Check-in and Check-out: Implementing Smooth and Convenient Processes for Guest Arrival and Departure",
  "Cleaning and Maintenance Best Practices: Ensuring a Consistently Clean and Well-Maintained Property",
];

const Create = () => {
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);

  // refs for all form fields
  const titleRef = useRef<HTMLInputElement>(null);
  const introSubRef = useRef<HTMLInputElement>(null);
  const introContentRef = useRef<HTMLTextAreaElement>(null);
  const c1TitleRef = useRef<HTMLInputElement>(null);
  const c1ParaRef = useRef<HTMLTextAreaElement>(null);
  const c2TitleRef = useRef<HTMLInputElement>(null);
  const c2ParaRef = useRef<HTMLTextAreaElement>(null);
  const c3TitleRef = useRef<HTMLInputElement>(null);
  const c3ParaRef = useRef<HTMLTextAreaElement>(null);
  const conclSubRef = useRef<HTMLInputElement>(null);
  const conclParaRef = useRef<HTMLTextAreaElement>(null);
  const extraSubRef = useRef<HTMLInputElement>(null);
  const extraParaRef = useRef<HTMLTextAreaElement>(null);
  const pexelImgLinkRef = useRef<HTMLInputElement>(null);
  const pexelImgLink2Ref = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await createArticle(formData);
      if (res.success) {
        alert("Article created with ID: " + res.id);
        form.reset();
      } else {
        alert("Error: " + (res.error || "Unknown error occurred."));
      }
    } catch (error) {
      console.error("Error creating article:", error);
      alert("Error creating article.");
    } finally {
      setLoading(false);
    }
  }

 async function generateRandomArticle() {
  setAiLoading(true);
  try {
    // 1) pick topic
    const topic = sampleTopics[Math.floor(Math.random() * sampleTopics.length)];

    // 2) fetch entire article
    const resp = await fetch("/api/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic }),
    });
    const { article: text } = await resp.json();

    // 3) helper to pull out any section
    const getSection = (label: string) => {
      const re = new RegExp(
        `${label}:\\s*([\\s\\S]*?)(?=\\n[A-Z][^\\n]+?:|$)`,
        "i"
      );
      const m = text.match(re);
      return m ? m[1].trim() : "";
    };

    // 4) fill in each field
    if (titleRef.current)       titleRef.current.value = getSection("Title");
    if (introSubRef.current)    introSubRef.current.value = "Introduction";
    if (introContentRef.current) introContentRef.current.value = getSection("Introduction");

    if (c1TitleRef.current)     c1TitleRef.current.value = "Insight 1";
    if (c1ParaRef.current)      c1ParaRef.current.value = getSection("Body paragraph 1");

    if (c2TitleRef.current)     c2TitleRef.current.value = "Insight 2";
    if (c2ParaRef.current)      c2ParaRef.current.value = getSection("Body paragraph 2");

    if (c3TitleRef.current)     c3TitleRef.current.value = "Insight 3";
    if (c3ParaRef.current)      c3ParaRef.current.value = getSection("Body paragraph 3");

    if (conclSubRef.current)    conclSubRef.current.value = "Conclusion";
    if (conclParaRef.current)   conclParaRef.current.value = getSection("Conclusion");

    if (extraSubRef.current)    extraSubRef.current.value = "How Luxe Management helps";
    if (extraParaRef.current)   extraParaRef.current.value = getSection("How Luxe Management helps");

    // 5) your Pexels‑URL extraction can stay the same…
    const urlsMatch = text.match(/\[(https?:\/\/[^\]]+\.(?:jpg|jpeg|png)[^\]]*)\]/);
    if (urlsMatch) {
      try {
        const urls = JSON.parse(urlsMatch[0]);
        const extractId = (u: string) => (u.match(/-(\d+)(?:\/)?$/)?.[1] ?? "");
        if (pexelImgLinkRef.current)  pexelImgLinkRef.current.value = extractId(urls[0]);
        if (pexelImgLink2Ref.current) pexelImgLink2Ref.current.value = extractId(urls[1]);
      } catch {}
    }

  } catch (e) {
    console.error(e);
    alert("Failed to generate AI article.");
  } finally {
    setAiLoading(false);
  }
}

  return (
    <Box minH="100vh" py={["8", "12", "16"]}>
      <Box maxW="900px" mx="auto">
        <HStack justify="space-between" mb="8">
          <VStack align="flex-start">
            <Text
              as="h1"
              fontSize={["2rem", "2.5rem", "3.25rem"]}
              fontWeight="800"
            >
              Create Your Article
            </Text>
            <Text color="#374151" fontSize={["md", "lg"]}>
              Fill out the form below or let AI draft a random one for you.
            </Text>
          </VStack>
          <Button onClick={generateRandomArticle} isLoading={aiLoading}>
            Generate Random Article
          </Button>
        </HStack>

        <Box bg="white" borderRadius="xl" p={["6", "8", "10"]}>
          <form onSubmit={handleSubmit}>
            <VStack spacing="6" align="stretch">
              {/* Article Title */}
              <Box>
                <Text fontSize={["lg", "xl"]} mb="2">
                  Article Title
                </Text>
                <input
                  ref={titleRef}
                  name="articleTitle"
                  type="text"
                  placeholder="Enter article title"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #CBD5E0",
                  }}
                />
              </Box>

              {/* Introduction Subheading */}
              <Box>
                <Text fontSize={["lg", "xl"]} mb="2">
                  Introduction Subheading
                </Text>
                <input
                  ref={introSubRef}
                  name="introductionSubheading"
                  type="text"
                  placeholder="Enter introduction subheading"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #CBD5E0",
                  }}
                />
              </Box>

              {/* Introduction Content */}
              <Box>
                <Text fontSize={["lg", "xl"]} mb="2">
                  Introduction Content
                </Text>
                <textarea
                  ref={introContentRef}
                  name="introductionContent"
                  placeholder="Enter introduction content"
                  style={{
                    width: "100%",
                    padding: "8px",
                    minHeight: "80px",
                    borderRadius: "4px",
                    border: "1px solid #CBD5E0",
                  }}
                />
              </Box>

              {/* Content One */}
              <Box>
                <Text fontSize={["lg", "xl"]} mb="2">
                  Content One Subheading Title
                </Text>
                <input
                  ref={c1TitleRef}
                  name="contentOneSubheadingTitle"
                  type="text"
                  placeholder="Enter first section title"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #CBD5E0",
                  }}
                />
              </Box>
              <Box>
                <Text fontSize={["lg", "xl"]} mb="2">
                  Content One Paragraph
                </Text>
                <textarea
                  ref={c1ParaRef}
                  name="contentOneParagraph"
                  placeholder="Enter first section content"
                  style={{
                    width: "100%",
                    padding: "8px",
                    minHeight: "80px",
                    borderRadius: "4px",
                    border: "1px solid #CBD5E0",
                  }}
                />
              </Box>

              {/* Content Two */}
              <Box>
                <Text fontSize={["lg", "xl"]} mb="2">
                  Content Two Subheading Title
                </Text>
                <input
                  ref={c2TitleRef}
                  name="contentTwoSubheadingTitle"
                  type="text"
                  placeholder="Enter second section title"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #CBD5E0",
                  }}
                />
              </Box>
              <Box>
                <Text fontSize={["lg", "xl"]} mb="2">
                  Content Two Paragraph
                </Text>
                <textarea
                  ref={c2ParaRef}
                  name="contentTwoParagraph"
                  placeholder="Enter second section content"
                  style={{
                    width: "100%",
                    padding: "8px",
                    minHeight: "80px",
                    borderRadius: "4px",
                    border: "1px solid #CBD5E0",
                  }}
                />
              </Box>

              {/* Content Three */}
              <Box>
                <Text fontSize={["lg", "xl"]} mb="2">
                  Content Three Subheading Title
                </Text>
                <input
                  ref={c3TitleRef}
                  name="contentThreeSubheadingTitle"
                  type="text"
                  placeholder="Enter third section title"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #CBD5E0",
                  }}
                />
              </Box>
              <Box>
                <Text fontSize={["lg", "xl"]} mb="2">
                  Content Three Paragraph
                </Text>
                <textarea
                  ref={c3ParaRef}
                  name="contentThreeParagraph"
                  placeholder="Enter third section content"
                  style={{
                    width: "100%",
                    padding: "8px",
                    minHeight: "80px",
                    borderRadius: "4px",
                    border: "1px solid #CBD5E0",
                  }}
                />
              </Box>

              {/* Conclusion */}
              <Box>
                <Text fontSize={["lg", "xl"]} mb="2">
                  Conclusion Subheading
                </Text>
                <input
                  ref={conclSubRef}
                  name="conclusionSubheading"
                  type="text"
                  placeholder="Enter conclusion subheading"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #CBD5E0",
                  }}
                />
              </Box>
              <Box>
                <Text fontSize={["lg", "xl"]} mb="2">
                  Conclusion Paragraph
                </Text>
                <textarea
                  ref={conclParaRef}
                  name="conclusionParagraph"
                  placeholder="Enter conclusion paragraph"
                  style={{
                    width: "100%",
                    padding: "8px",
                    minHeight: "80px",
                    borderRadius: "4px",
                    border: "1px solid #CBD5E0",
                  }}
                />
              </Box>

              {/* Extra / How We Help */}
              <Box>
                <Text fontSize={["lg", "xl"]} mb="2">
                  Extra Subheading
                </Text>
                <input
                  ref={extraSubRef}
                  name="extraSubheading"
                  type="text"
                  placeholder="Enter extra subheading"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #CBD5E0",
                  }}
                />
              </Box>
              <Box>
                <Text fontSize={["lg", "xl"]} mb="2">
                  Extra Content Paragraph
                </Text>
                <textarea
                  ref={extraParaRef}
                  name="extraContentParagraph"
                  placeholder="Enter extra content paragraph"
                  style={{
                    width: "100%",
                    padding: "8px",
                    minHeight: "80px",
                    borderRadius: "4px",
                    border: "1px solid #CBD5E0",
                  }}
                />
              </Box>

              {/* Pexels IDs */}
              <Box>
                <Text fontSize={["lg", "xl"]} mb="2">
                  Pexels Image Link
                </Text>
                <input
                  ref={pexelImgLinkRef}
                  name="pexelImgLink"
                  type="text"
                  placeholder="Enter image URL from Pexels"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #CBD5E0",
                  }}
                />
              </Box>
              <Box>
                <Text fontSize={["lg", "xl"]} mb="2">
                  Pexels Image Link 2
                </Text>
                <input
                  ref={pexelImgLink2Ref}
                  name="pexelImgLink2"
                  type="text"
                  placeholder="Enter second image URL from Pexels"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #CBD5E0",
                  }}
                />
              </Box>

              {/* Submit */}
              <Box>
                <Button
                  type="submit"
                  colorScheme="blue"
                  width="100%"
                  isLoading={loading}
                >
                  {loading ? "Creating..." : "Create Article"}
                </Button>
              </Box>
            </VStack>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Create;
