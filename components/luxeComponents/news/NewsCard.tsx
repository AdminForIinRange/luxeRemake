"use client";

import React from "react";
import { Box, Stack, HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Article } from "@/lib/types/article";

type NewsCardProps = {
  article: Article;
};

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/news/article/${article.$id}`);
  };

  return (
    <Box
      w={["100%", "48%", "31%"]}
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      cursor="pointer"
      onClick={handleClick}
    >
      <Box
        as="img"
        src={
          article.pexelImgLink ||
          // Optionally, you can check for a second image
          article.pexelImgLink2 ||
          "https://via.placeholder.com/400x200"
        }
        alt={article.articleTitle}
        w="100%"
        h="200px"
        objectFit="cover"
      />
      <Stack spacing="10px" p="20px">
        <Text fontSize="lg" fontWeight="semibold">
          {article.articleTitle}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {article.date || "Unknown Date"}
        </Text>
        <Text fontSize="sm" color="gray.700">
          {article.excerpt ||
            (article.introductionContent
              ? article.introductionContent.substring(0, 100) + "..."
              : "")}
        </Text>
        {article.submissions && article.submissions.length > 0 && (
          <Box mt="10px">
            <Text fontSize="sm" fontWeight="bold" mb="5px">
              Submissions:
            </Text>
            <Stack spacing="5px">
              {article.submissions.map((submission, sIndex) => (
                <HStack key={sIndex} spacing="5px" align="start">
                  <Text fontWeight="bold" fontSize="sm">
                    {submission.author}:
                  </Text>
                  <Text fontSize="sm">{submission.comment}</Text>
                </HStack>
              ))}
            </Stack>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default NewsCard;
