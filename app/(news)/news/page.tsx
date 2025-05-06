"use client";

import React, { useEffect, useState } from "react";
import { Box, Stack, Text, Flex, Button, Spinner } from "@chakra-ui/react";
import { getAllArticles } from "@/lib/actions/getAllArticles.action";
import NewsCard from "@/components/luxeComponents/news/NewsCard";
import { Article } from "@/lib/types/article";
import Image from "next/image";

const NewsPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const LIMIT = 6;

  const fetchArticles = async () => {
    setLoading(true);
    const res = await getAllArticles(LIMIT, offset);
    if (res.success && res.data) {
      setArticles((prev) => {
        const existingIds = new Set(prev.map((a) => a.$id));
        const newUnique = res.data.filter((a) => !existingIds.has(a.$id));
        return [...prev, ...newUnique];
      });
      setOffset((prev) => prev + LIMIT);
      setTotalCount(res.total); // 👈 Store total article count
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchArticles(); // Load initial articles
  }, []);

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
            Discover how our innovative approach to property management and real
            estate investments can elevate your portfolio to new heights.
          </Text>
        </Box>
        <Box flex="1" borderRadius={"md"} objectFit="cover" maxH="400px">
          <Image
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
            alt="Hero Real Estate"
            height={720}
            width={1400}
            draggable={false}
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

      <Text fontSize="md" color="gray.600" textAlign="center" mb="30px">
        Showing {articles.length} of {totalCount} article
        {totalCount !== 1 ? "s" : ""}
      </Text>
      <Stack direction="row" wrap="wrap" justify="space-between" gap="20px">
        {articles.map((article) => (
          <NewsCard key={article.$id} article={article} />
        ))}
      </Stack>

      {/* Load More Button */}
      <Box mt="40px" textAlign="center">
        {loading ? (
          <Spinner />
        ) : (
          <Button onClick={fetchArticles} colorScheme="blue">
            Load More
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default NewsPage;
