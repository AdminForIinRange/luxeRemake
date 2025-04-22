"use client";

import React, { useState } from "react";
import { Box, VStack, Text, Button } from "@chakra-ui/react";
import { createArticle } from "@/lib/actions/createArticle.action";

const Create = () => {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);

    try {
      const res = await createArticle(formData);
      if (res.success) {
        alert("Article created with ID: " + res.id);
        e.currentTarget.reset();
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

  return (
    <Box minH="100vh">
      <Box mx="auto" px={["4", "6", "8"]} py={["8", "12", "16"]}>
        <Box bg="white" borderRadius="xl" overflow="hidden">
          {/* Create Header */}
          <Box p={["8", "10", "12"]} color="#0a2342">
            <VStack gap="6" align="flex-start" maxW="900px">
              <Text
                as="h1"
                fontSize={["2rem", "2.5rem", "3.25rem"]}
                fontWeight="800"
                lineHeight="1.1"
                letterSpacing="-0.02em"
              >
                Create Your Article
              </Text>
              <Text color="#374151" fontSize={["md", "lg"]}>
                Fill out the form below to structure your article exactly how you want.
              </Text>
            </VStack>
          </Box>

          <Box p={["6", "8", "10"]}>
            {/* Main Content - Create Form */}
            <form onSubmit={handleSubmit}>
              <VStack spacing="6" align="stretch">
                {/* Article Title */}
                <Box>
                  <Text fontSize={["lg", "xl"]} mb="2">
                    Article Title
                  </Text>
                  <input
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

                {/* Content One Subheading Title */}
                <Box>
                  <Text fontSize={["lg", "xl"]} mb="2">
                    Content One Subheading Title
                  </Text>
                  <input
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

                {/* Content One Paragraph */}
                <Box>
                  <Text fontSize={["lg", "xl"]} mb="2">
                    Content One Paragraph
                  </Text>
                  <textarea
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

                {/* Content Two Subheading Title */}
                <Box>
                  <Text fontSize={["lg", "xl"]} mb="2">
                    Content Two Subheading Title
                  </Text>
                  <input
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

                {/* Content Two Paragraph */}
                <Box>
                  <Text fontSize={["lg", "xl"]} mb="2">
                    Content Two Paragraph
                  </Text>
                  <textarea
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

                {/* Content Three Subheading Title */}
                <Box>
                  <Text fontSize={["lg", "xl"]} mb="2">
                    Content Three Subheading Title
                  </Text>
                  <input
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

                {/* Content Three Paragraph */}
                <Box>
                  <Text fontSize={["lg", "xl"]} mb="2">
                    Content Three Paragraph
                  </Text>
                  <textarea
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

                {/* Conclusion Subheading */}
                <Box>
                  <Text fontSize={["lg", "xl"]} mb="2">
                    Conclusion Subheading
                  </Text>
                  <input
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

                {/* Conclusion Paragraph */}
                <Box>
                  <Text fontSize={["lg", "xl"]} mb="2">
                    Conclusion Paragraph
                  </Text>
                  <textarea
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

                {/* Extra Subheading */}
                <Box>
                  <Text fontSize={["lg", "xl"]} mb="2">
                    Extra Subheading
                  </Text>
                  <input
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

                {/* Extra Content Paragraph */}
                <Box>
                  <Text fontSize={["lg", "xl"]} mb="2">
                    Extra Content Paragraph
                  </Text>
                  <textarea
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

                {/* Pexels Image Link */}
                <Box>
                  <Text fontSize={["lg", "xl"]} mb="2">
                    Pexels Image Link
                  </Text>
                  <input
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

                {/* Additional Pexels Image Link */}
                <Box>
                  <Text fontSize={["lg", "xl"]} mb="2">
                    Pexels Image Link 2
                  </Text>
                  <input
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

                {/* Submit Button */}
                <Box>
                  <Button
                    type="submit"
                    colorScheme="blue"
                    width="100%"
                    loading={loading}
                  >
                    {loading ? "Creating..." : "Create Article"}
                  </Button>
                </Box>
              </VStack>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Create;
