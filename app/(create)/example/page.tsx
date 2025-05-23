// // app/article/[id]/page.tsx
// import { getArticle } from "@/lib/actions/getArticle.action";
// import { Article } from "@/lib/types/article";
// import { Box, Stack, HStack, VStack, Text } from "@chakra-ui/react";
// import { CalendarIcon, UserIcon, ClockIcon } from "lucide-react";

// type Props = {
//   params: { id: string };
// };

// export default async function ArticlePage({ params }: Props) {
//   const articleRes = await getArticle(params.id);

//   if (!articleRes.success || !articleRes.data) {
//     return <div>Article not found.</div>;
//   }
//   const article: Article = articleRes.data;

//   return (
//     <Box minH="100vh">
//       <Box mx="auto" px={["4", "6", "8"]} py={["8", "12", "16"]}>
//         <Box bg="white" borderRadius="xl" overflow="hidden">
//           {/* Article Header */}
//           <Box p={["8", "10", "12"]} color="#0a2342">
//             <VStack gap="6" align="flex-start" maxW="900px">
//               <Text
//                 as="h1"
//                 fontSize={["2rem", "2.5rem", "3.25rem"]}
//                 fontWeight="800"
//                 lineHeight="1.1"
//                 letterSpacing="-0.02em"
//               >
//                 {article.articleTitle}
//               </Text>
//               <HStack
//                 gap="4"
//                 flexWrap="wrap"
//                 opacity="0.9"
//                 fontSize={["sm", "md"]}
//               >
//                 <HStack gap="2">
//                   <CalendarIcon size={16} />
//                   <Text>April 11, 2025</Text>
//                 </HStack>
//                 <Text display={["none", "block"]}>•</Text>
//                 <HStack gap="2">
//                   <UserIcon size={16} />
//                   <Text>Luxe Managements Team</Text>
//                 </HStack>
//                 <Text display={["none", "block"]}>•</Text>
//                 <HStack gap="2">
//                   <ClockIcon size={16} />
//                   <Text>10 min read</Text>
//                 </HStack>
//               </HStack>
//               {/* Use Introduction Subheading from database */}
//               {article.introductionSubheading && (
//                 <Text
//                   as="h2"
//                   fontSize={["lg", "xl"]}
//                   fontWeight="600"
//                   color="#374151"
//                 >
//                   {article.introductionSubheading}
//                 </Text>
//               )}
//             </VStack>
//           </Box>

//           <Box p={["6", "8", "10"]}>
//             {/* Main Content */}
//             <Box w="100%">
//               {/* Introduction Section */}
//               <Box id="introduction" mb="16" scrollMarginTop="5rem">
//                 <Text
//                   as="h2"
//                   fontSize={["1.5rem", "1.75rem", "2rem"]}
//                   fontWeight="700"
//                   color="#0a2342"
//                   mb="6"
//                   lineHeight="1.2"
//                   borderBottom="2px solid"
//                   borderColor="#e2e8f0"
//                   pb="2"
//                 >
//                   Introduction
//                 </Text>
//                 <Stack
//                   direction={["column", "column", "row"]}
//                   gap="8"
//                   align="center"
//                 >
//                   <Box flex="1">
//                     <Text
//                       fontSize={["lg", "xl"]}
//                       mb="4"
//                       color="#374151"
//                       lineHeight="1.7"
//                     >
//                       {article.introductionContent}
//                     </Text>
//                   </Box>
//                   <Box
//                     flex="1"
//                     backgroundImage={`url(https://images.pexels.com/photos/${article.pexelImgLink}/pexels-photo-${article.pexelImgLink}.jpeg)`}
//                     backgroundSize="cover"
//                     backgroundPosition="center"
//                     backgroundRepeat="no-repeat"
//                     transition="all 0.3s"
//                     minH="320px"
//                     w="100%"
//                     overflow="hidden"
//                     boxShadow="lg"
//                     position="relative"
//                   >
//                     <Box
//                       position="absolute"
//                       bottom="0"
//                       left="0"
//                       right="0"
//                       bg="rgba(0,0,0,0.6)"
//                       p="3"
//                     >
//                       <Text
//                         fontSize="sm"
//                         color="white"
//                         fontStyle="italic"
//                         textAlign="center"
//                       >
//                         {article.articleTitle} image
//                       </Text>
//                     </Box>
//                   </Box>
//                 </Stack>
//               </Box>

//               {/* End-to-End Management (Content One) Section */}
//               <Box id="content-one" mb="16" scrollMarginTop="5rem">
//                 <Text
//                   as="h2"
//                   fontSize={["1.5rem", "1.75rem", "2rem"]}
//                   fontWeight="700"
//                   color="#0a2342"
//                   mb="6"
//                   lineHeight="1.2"
//                   borderBottom="2px solid"
//                   borderColor="#e2e8f0"
//                   pb="2"
//                 >
//                   {article.contentOneSubheadingTitle ||
//                     "End-to-End Management That Delivers"}
//                 </Text>
//                 <Box p="6" bg="#f8fafc" borderRadius="md">
//                   <Text
//                     fontSize={["lg", "xl"]}
//                     color="#374151"
//                     lineHeight="1.7"
//                   >
//                     {article.contentOneParagraph}
//                   </Text>
//                 </Box>
//               </Box>

//               {/* The Luxe Advantage (Content Two) Section */}
//               <Box id="content-two" mb="16" scrollMarginTop="5rem">
//                 <Text
//                   as="h2"
//                   fontSize={["1.5rem", "1.75rem", "2rem"]}
//                   fontWeight="700"
//                   color="#0a2342"
//                   mb="6"
//                   lineHeight="1.2"
//                   borderBottom="2px solid"
//                   borderColor="#e2e8f0"
//                   pb="2"
//                 >
//                   {article.contentTwoSubheadingTitle || "The Luxe Advantage"}
//                 </Text>
//                 <Stack
//                   direction={["column", "column", "row"]}
//                   gap="8"
//                   align="center"
//                 >
//                   <Box
//                     flex="1"
//                     backgroundImage={`url(https://images.pexels.com/photos/${article.pexelImgLink}/pexels-photo-${article.pexelImgLink}.jpeg)`}
//                     backgroundSize="cover"
//                     backgroundPosition="center"
//                     backgroundRepeat="no-repeat"
//                     transition="all 0.3s"
//                     minH="320px"
//                     w="100%"
//                     overflow="hidden"
//                     boxShadow="lg"
//                   ></Box>
//                   <Box flex="1">
//                     <Text
//                       fontSize={["lg", "xl"]}
//                       color="#374151"
//                       lineHeight="1.7"
//                     >
//                       {article.contentTwoParagraph}
//                     </Text>
//                   </Box>
//                 </Stack>
//               </Box>

//               {/* Optional Content Three Section */}
//               {article.contentThreeSubheadingTitle &&
//                 article.contentThreeParagraph && (
//                   <Box id="content-three" mb="16" scrollMarginTop="5rem">
//                     <Text
//                       as="h2"
//                       fontSize={["1.5rem", "1.75rem", "2rem"]}
//                       fontWeight="700"
//                       color="#0a2342"
//                       mb="6"
//                       lineHeight="1.2"
//                       borderBottom="2px solid"
//                       borderColor="#e2e8f0"
//                       pb="2"
//                     >
//                       {article.contentThreeSubheadingTitle}
//                     </Text>
//                     <Box p="6" bg="#f8fafc" borderRadius="md">
//                       <Text
//                         fontSize={["lg", "xl"]}
//                         color="#374151"
//                         lineHeight="1.7"
//                       >
//                         {article.contentThreeParagraph}
//                       </Text>
//                     </Box>
//                   </Box>
//                 )}

//               {/* Conclusion Section */}
//               <Box id="conclusion" mb="16" scrollMarginTop="5rem">
//                 <Text
//                   as="h2"
//                   fontSize={["1.5rem", "1.75rem", "2rem"]}
//                   fontWeight="700"
//                   color="#0a2342"
//                   mb="6"
//                   lineHeight="1.2"
//                   borderBottom="2px solid"
//                   borderColor="#e2e8f0"
//                   pb="2"
//                 >
//                   {article.conclusionSubheading || "Conclusion"}
//                 </Text>
//                 <Text
//                   fontSize={["lg", "xl"]}
//                   mb="8"
//                   color="#374151"
//                   lineHeight="1.7"
//                 >
//                   {article.conclusionParagraph}
//                 </Text>
//               </Box>

//               {/* Extra Section (e.g., Why Choose Luxe Managements) */}
//               {(article.extraSubheading || article.extraContentParagraph) && (
//                 <Box id="extra" mb="16" scrollMarginTop="5rem">
//                   <Text
//                     as="h2"
//                     fontSize={["1.5rem", "1.75rem", "2rem"]}
//                     fontWeight="700"
//                     color="#0a2342"
//                     mb="6"
//                     lineHeight="1.2"
//                     borderBottom="2px solid"
//                     borderColor="#e2e8f0"
//                     pb="2"
//                   >
//                     {article.extraSubheading || "Why Choose Luxe Managements"}
//                   </Text>
//                   <Text
//                     fontSize={["lg", "xl"]}
//                     mb="8"
//                     color="#374151"
//                     lineHeight="1.7"
//                   >
//                     {article.extraContentParagraph}
//                   </Text>
//                 </Box>
//               )}
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }
