// "use client";

// import React, { useState } from "react";
// import { Box, VStack, Text, Button, HStack } from "@chakra-ui/react";
// import { createArticle } from "@/lib/actions/createArticle.action";

// export default function Rapid() {
//   const [formValues, setFormValues] = useState({
//     fullArticle: "",
//     articleTitle: "",
//     introductionSubheading: "",
//     introductionContent: "",
//     contentOneSubheadingTitle: "",
//     contentOneParagraph: "",
//     contentTwoSubheadingTitle: "",
//     contentTwoParagraph: "",
//     contentThreeSubheadingTitle: "",
//     contentThreeParagraph: "",
//     conclusionSubheading: "",
//     conclusionParagraph: "",
//     extraSubheading: "",
//     extraContentParagraph: "",
//     pexelImgLink: "",
//     pexelImgLink2: "",
//   });
//   const [loading, setLoading] = useState(false);

//   function parseFullArticle(text: string) {
//     const result = {
//       articleTitle: "",
//       introductionSubheading: "",
//       introductionContent: "",
//       contentOneSubheadingTitle: "",
//       contentOneParagraph: "",
//       contentTwoSubheadingTitle: "",
//       contentTwoParagraph: "",
//       contentThreeSubheadingTitle: "",
//       contentThreeParagraph: "",
//       conclusionSubheading: "",
//       conclusionParagraph: "",
//       extraSubheading: "",
//       extraContentParagraph: "",
//       pexelImgLink: "",
//       pexelImgLink2: "",
//     };

//     // Extract title
//     const introIndex = text.search(/Introduction:/i);
//     result.articleTitle =
//       introIndex >= 0
//         ? text.slice(0, introIndex).trim().split("\n")[0].trim()
//         : text.trim().split("\n")[0].trim();

//     // Split sections
//     const sections = text.split(
//       /(Introduction:|Body paragraph 1:|Body paragraph 2:|Body paragraph 3:|Conclusion:|How Luxe Management helps:)/g,
//     );
//     for (let i = 1; i < sections.length; i += 2) {
//       const key = sections[i].replace(/:$/, "").trim();
//       let content = (sections[i + 1] || "").trim();
//       switch (key) {
//         case "Introduction":
//           result.introductionSubheading = "Introduction";
//           result.introductionContent = content;
//           break;
//         case "Body paragraph 1":
//           {
//             const [first, ...rest] = content.split(/(?<=\.)\s+(?=[A-Z])/);
//             result.contentOneSubheadingTitle = first.trim();
//             result.contentOneParagraph = rest.join(" ").trim();
//           }
//           break;
//         case "Body paragraph 2":
//           {
//             const [first, ...rest] = content.split(/(?<=\.)\s+(?=[A-Z])/);
//             result.contentTwoSubheadingTitle = first.trim();
//             result.contentTwoParagraph = rest.join(" ").trim();
//           }
//           break;
//         case "Body paragraph 3":
//           {
//             const [first, ...rest] = content.split(/(?<=\.)\s+(?=[A-Z])/);
//             result.contentThreeSubheadingTitle = first.trim();
//             result.contentThreeParagraph = rest.join(" ").trim();
//           }
//           break;
//         case "Conclusion":
//           result.conclusionSubheading = "Conclusion";
//           result.conclusionParagraph = content;
//           break;
//         case "How Luxe Management helps":
//           result.extraSubheading = "How Luxe Management helps";
//           // Remove any URLs from the extra content paragraph
//           result.extraContentParagraph = content
//             .replace(/https?:\/\/\S+/g, "")
//             .trim();
//           break;
//       }
//     }

//     // Extract URLs and convert to IDs
//     const urls = text.match(/https?:\/\/\S+/g) || [];
//     if (urls[0]) {
//       const match = urls[0].match(/-(\d+)(?:\/|$)/);
//       result.pexelImgLink = match ? match[1] : urls[0];
//     }
//     if (urls[1]) {
//       const match = urls[1].match(/-(\d+)(?:\/|$)/);
//       result.pexelImgLink2 = match ? match[1] : urls[1];
//     }

//     return result;
//   }

//   const handleFullArticleChange = (e: { target: { value: any } }) => {
//     setFormValues((prev) => ({ ...prev, fullArticle: e.target.value }));
//   };

//   const handleAutoFill = () => {
//     const parsed = parseFullArticle(formValues.fullArticle);
//     setFormValues((prev) => ({ ...prev, ...parsed }));
//   };

//   const handleChange = (field: string) => (e: { target: { value: any } }) => {
//     setFormValues((prev) => ({ ...prev, [field]: e.target.value }));
//   };

//   const handleSubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const data = new FormData();
//       Object.entries(formValues).forEach(([key, val]) => {
//         if (key !== "fullArticle") data.append(key, val);
//       });
//       const res = await createArticle(data);
//       if (res.success) {
//         alert(`Article created with ID: ${res.id}`);
//         setFormValues({
//           fullArticle: "",
//           articleTitle: "",
//           introductionSubheading: "",
//           introductionContent: "",
//           contentOneSubheadingTitle: "",
//           contentOneParagraph: "",
//           contentTwoSubheadingTitle: "",
//           contentTwoParagraph: "",
//           contentThreeSubheadingTitle: "",
//           contentThreeParagraph: "",
//           conclusionSubheading: "",
//           conclusionParagraph: "",
//           extraSubheading: "",
//           extraContentParagraph: "",
//           pexelImgLink: "",
//           pexelImgLink2: "",
//         });
//       } else {
//         alert(`Error: ${res.error || "Unknown error occurred."}`);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Error creating article.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box minH="100vh">
//       <Box mx="auto" maxW="900px" px={["4", "6", "8"]} py={["8", "12", "16"]}>
//         <Box bg="white" borderRadius="xl" overflow="hidden">
//           <Box p={["8", "10", "12"]} color="#0a2342">
//             <VStack align="start" gap={6}>
//               <Text
//                 as="h1"
//                 fontSize={["2rem", "2.5rem", "3.25rem"]}
//                 fontWeight="800"
//               >
//                 Rapid Create Your Article
//               </Text>
//               <Text fontSize={["md", "lg"]} color="#374151">
//                 Fill out the form below to structure your article exactly how
//                 you want.
//               </Text>
//             </VStack>
//           </Box>

//           <Box p={["6", "8", "10"]}>
//             <Text fontSize={["lg", "xl"]} mb={2}>
//               Full Article
//             </Text>
//             <textarea
//               name="fullArticle"
//               value={formValues.fullArticle}
//               onChange={handleFullArticleChange}
//               placeholder="Paste full article here..."
//               style={{
//                 width: "100%",
//                 minHeight: "300px",
//                 padding: "8px",
//                 borderRadius: "4px",
//                 border: "1px solid #CBD5E0",
//               }}
//             />
//             <HStack mt={4}>
//               <Button onClick={handleAutoFill} colorScheme="teal">
//                 Auto Fill Sections
//               </Button>
//             </HStack>
//           </Box>

//           <Box p={["6", "8", "10"]}>
//             <form onSubmit={handleSubmit}>
//               <VStack gap={6} align="stretch">
//                 {/* Article Title */}
//                 <Box>
//                   \n <Text mb={2}>Article Title</Text>
//                   <input
//                     value={formValues.articleTitle} // corrected spelling? Actually formValues.articleTitle
//                     onChange={handleChange("articleTitle")}
//                     placeholder="Article Title"
//                     style={{
//                       width: "100%",
//                       padding: "8px",
//                       borderRadius: "4px",
//                       border: "1px solid #CBD5E0",
//                     }}
//                   />
//                 </Box>

//                 <Box>
//                   <Text mb={2}>Introduction Subheading</Text>
//                   <input
//                     value={formValues.introductionSubheading}
//                     onChange={handleChange("introductionSubheading")}
//                     placeholder="Introduction Subheading"
//                     style={{
//                       width: "100%",
//                       padding: "8px",
//                       borderRadius: "4px",
//                       border: "1px solid #CBD5E0",
//                     }}
//                   />
//                 </Box>
//                 <Box>
//                   <Text mb={2}>Introduction Content</Text>
//                   <textarea
//                     value={formValues.introductionContent}
//                     onChange={handleChange("introductionContent")}
//                     placeholder="Introduction Content"
//                     style={{
//                       width: "100%",
//                       minHeight: "80px",
//                       padding: "8px",
//                       borderRadius: "4px",
//                       border: "1px solid #CBD5E0",
//                     }}
//                   />
//                 </Box>

//                 <Box>
//                   <Text mb={2}>Content One Subheading Title</Text>
//                   <input
//                     value={formValues.contentOneSubheadingTitle}
//                     onChange={handleChange("contentOneSubheadingTitle")}
//                     placeholder="First Section Title"
//                     style={{
//                       width: "100%",
//                       padding: "8px",
//                       borderRadius: "4px",
//                       border: "1px solid #CBD5E0",
//                     }}
//                   />
//                 </Box>
//                 <Box>
//                   <Text mb={2}>Content One Paragraph</Text>
//                   <textarea
//                     value={formValues.contentOneParagraph}
//                     onChange={handleChange("contentOneParagraph")}
//                     placeholder="First Section Content"
//                     style={{
//                       width: "100%",
//                       minHeight: "80px",
//                       padding: "8px",
//                       borderRadius: "4px",
//                       border: "1px solid #CBD5E0",
//                     }}
//                   />
//                 </Box>

//                 <Box>
//                   <Text mb={2}>Content Two Subheading Title</Text>
//                   <input
//                     value={formValues.contentTwoSubheadingTitle}
//                     onChange={handleChange("contentTwoSubheadingTitle")}
//                     placeholder="Second Section Title"
//                     style={{
//                       width: "100%",
//                       padding: "8px",
//                       borderRadius: "4px",
//                       border: "1px solid #CBD5E0",
//                     }}
//                   />
//                 </Box>
//                 <Box>
//                   <Text mb={2}>Content Two Paragraph</Text>
//                   <textarea
//                     value={formValues.contentTwoParagraph}
//                     onChange={handleChange("contentTwoParagraph")}
//                     placeholder="Second Section Content"
//                     style={{
//                       width: "100%",
//                       minHeight: "80px",
//                       padding: "8px",
//                       borderRadius: "4px",
//                       border: "1px solid #CBD5E0",
//                     }}
//                   />
//                 </Box>

//                 <Box>
//                   <Text mb={2}>Content Three Subheading Title</Text>
//                   <input
//                     value={formValues.contentThreeSubheadingTitle}
//                     onChange={handleChange("contentThreeSubheadingTitle")}
//                     placeholder="Third Section Title"
//                     style={{
//                       width: "100%",
//                       padding: "8px",
//                       borderRadius: "4px",
//                       border: "1px solid #CBD5E0",
//                     }}
//                   />
//                 </Box>
//                 <Box>
//                   <Text mb={2}>Content Three Paragraph</Text>
//                   <textarea
//                     value={formValues.contentThreeParagraph}
//                     onChange={handleChange("contentThreeParagraph")}
//                     placeholder="Third Section Content"
//                     style={{
//                       width: "100%",
//                       minHeight: "80px",
//                       padding: "8px",
//                       borderRadius: "4px",
//                       border: "1px solid #CBD5E0",
//                     }}
//                   />
//                 </Box>

//                 <Box>
//                   <Text mb={2}>Conclusion Subheading</Text>
//                   <input
//                     value={formValues.conclusionSubheading}
//                     onChange={handleChange("conclusionSubheading")}
//                     placeholder="Conclusion Subheading"
//                     style={{
//                       width: "100%",
//                       padding: "8px",
//                       borderRadius: "4px",
//                       border: "1px solid #CBD5E0",
//                     }}
//                   />
//                 </Box>
//                 <Box>
//                   <Text mb={2}>Conclusion Paragraph</Text>
//                   <textarea
//                     value={formValues.conclusionParagraph}
//                     onChange={handleChange("conclusionParagraph")}
//                     placeholder="Conclusion Paragraph"
//                     style={{
//                       width: "100%",
//                       minHeight: "80px",
//                       padding: "8px",
//                       borderRadius: "4px",
//                       border: "1px solid #CBD5E0",
//                     }}
//                   />
//                 </Box>

//                 <Box>
//                   <Text mb={2}>Extra Subheading</Text>
//                   <input
//                     value={formValues.extraSubheading}
//                     onChange={handleChange("extraSubheading")}
//                     placeholder="Additional Subheading"
//                     style={{
//                       width: "100%",
//                       padding: "8px",
//                       borderRadius: "4px",
//                       border: "1px solid #CBD5E0",
//                     }}
//                   />
//                 </Box>
//                 <Box>
//                   <Text mb={2}>Extra Content Paragraph</Text>
//                   <textarea
//                     value={formValues.extraContentParagraph}
//                     onChange={handleChange("extraContentParagraph")}
//                     placeholder="Additional Paragraph"
//                     style={{
//                       width: "100%",
//                       minHeight: "80px",
//                       padding: "8px",
//                       borderRadius: "4px",
//                       border: "1px solid #CBD5E0",
//                     }}
//                   />
//                 </Box>

//                 <Box>
//                   <Text mb={2}>Pexels Image Link</Text>
//                   <input
//                     value={formValues.pexelImgLink}
//                     onChange={handleChange("pexelImgLink")}
//                     placeholder="Pexels Image URL"
//                     style={{
//                       width: "100%",
//                       padding: "8px",
//                       borderRadius: "4px",
//                       border: "1px solid #CBD5E0",
//                     }}
//                   />
//                 </Box>
//                 <Box>
//                   <Text mb={2}>Pexels Image Link 2</Text>
//                   <input
//                     value={formValues.pexelImgLink2}
//                     onChange={handleChange("pexelImgLink2")}
//                     placeholder="Second Pexels URL"
//                     style={{
//                       width: "100%",
//                       padding: "8px",
//                       borderRadius: "4px",
//                       border: "1px solid #CBD5E0",
//                     }}
//                   />
//                 </Box>

//                 <Box>
//                   <Button
//                     type="submit"
//                     colorScheme="blue"
//                     width="100%"
//                     loading={loading}
//                   >
//                     {loading ? "Creating..." : "Create Article"}
//                   </Button>
//                 </Box>
//               </VStack>
//             </form>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }
