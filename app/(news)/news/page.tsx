

import React from "react";
import { Box, Stack, Text, Flex } from "@chakra-ui/react";
import { getAllArticles } from "@/lib/actions/getAllArticles.action";
import NewsCard from "@/components/luxeComponents/news/NewsCard";

export default async function NewsPage() {
  // Fetch all articles from Appwrite.
  const articlesRes = await getAllArticles();
  const articles = articlesRes.success && articlesRes.data ? articlesRes.data : [];

  return (
    <Box w="100%" maxW="1200px" mx="auto" px={["20px", "40px"]} py="40px">
      {/* Hero Section */}
      <Flex
        direction={["column", "column", "row"]}
        align="center"
        justify="space-between"
        mb={["40px", "60px"]}
        gap={["20px", "40px"]}
      >
        <Box flex="1">
          <Text
            fontSize={["3xl", "4xl", "5xl"]}
            fontWeight="bold"
            mb="20px"
            lineHeight="1.2"
          >
            Unlocking Efficiency:
            <br />
            The Power of Modern Real Estate
          </Text>
          <Text fontSize={["md", "lg"]} color="gray.600" mb="20px">
            Discover how our innovative approach to property management and
            real estate investments can elevate your portfolio to new heights.
          </Text>
    
        </Box>
        <Box flex="1">
          <Box
            as="img"
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
            alt="Hero Real Estate"
            borderRadius="md"
            w="100%"
            maxH="400px"
            objectFit="cover"
          />
        </Box>
      </Flex>

      <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        mb="30px"
        textAlign="center"
      >
        Our Recent Articles
      </Text>

      <Stack direction="row" wrap="wrap" justify="space-between" gap="20px">
        {articles.map((article) => (
          <NewsCard key={article.$id} article={article} />
        ))}
      </Stack>
    </Box>
  );
}
