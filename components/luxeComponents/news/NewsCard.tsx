"use client";

import React from "react";
import { Box, Stack, HStack, Text, Icon } from "@chakra-ui/react";

import { useRouter } from "next/navigation";
import { Article } from "@/lib/types/article";
// import { deleteArticle } from "@/lib/actions/deleetArticle.action";
import { X } from "lucide-react";
import Image from "next/image";

type NewsCardProps = {
  article: Article;
};

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/news/article/${article.$id}`);
  };

  // const handleDelete = async (e: React.MouseEvent) => {
  //   e.stopPropagation(); // prevent routing when clicking delete
  //   const confirmed = confirm("Are you sure you want to delete this article?");
  //   if (!confirmed) return;

  //   const res = await deleteArticle(article.$id);
  //   if (res.success) {
  //     router.refresh(); // Refresh the page to reflect changes
  //   } else {
  //     alert(res.error);
  //   }
  // };
  const src = `https://images.pexels.com/photos/${article.pexelImgLink}/pexels-photo-${article.pexelImgLink}.jpeg`;
  return (
    <Box
      w={["100%", "48%", "31%"]}
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      cursor="pointer"
      position="relative"
      onClick={handleClick}
    >
      {/* Delete Button */}
      <Icon
        as={X}
        size="sm"
        aria-label="Delete article"
        position="absolute"
        top="10px"
        right="10px"
        // onClick={handleDelete}
        zIndex="1"
        backgroundColor="red.500"
        color="white"
        _hover={{ backgroundColor: "red.600" }}
      />

      <Box
        position="relative"
        w="100%"
        h="200px"
        overflow="hidden" // clip the image to the container
        transition="all 0.3s" // preserve your transition
      >
        <Image
          quality={70}
          loading="lazy"
          src={src}
          alt={article.title || ""}
          fill // makes the image fill the Box
          style={{
            objectFit: "cover", // replicates backgroundSize="cover"
            objectPosition: "center", // replicates backgroundPosition="center"
          }}
        />
      </Box>

      <Stack gap="10px" p="20px">
        <Text fontSize="lg" fontWeight="semibold">
          {article.articleTitle}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {article.date}
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
            <Stack gap="5px">
              {article.submissions.map((submission, sIndex) => (
                <HStack key={sIndex} gap="5px" align="start">
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
