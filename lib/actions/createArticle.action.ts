// lib/actions/createArticle.action.ts
"use server";

import { ID } from "node-appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { Client, Databases } from "node-appwrite";

export interface CreateArticleResponse {
  success: boolean;
  id?: string;
  error?: string;
}

// Helper to pick a random date in 2023–2024 and format it as "April 11, 2025"
function getRandomDateString(): string {
  const start = new Date(2023, 0, 1).getTime();      // Jan 1, 2023
  const end   = new Date(2024, 11, 31).getTime();    // Dec 31, 2024
  const randomTs = start + Math.random() * (end - start);
  const d = new Date(randomTs);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day:   "numeric",
    year:  "numeric",
  });
}

export const createArticle = async (
  formData: FormData
): Promise<CreateArticleResponse> => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(appwriteConfig.apiKey);

  const databases = new Databases(client);

  // Retrieve form values
  const articleTitle                = formData.get("articleTitle")?.toString() || "";
  const introductionSubheading      = formData.get("introductionSubheading")?.toString() || "";
  const introductionContent         = formData.get("introductionContent")?.toString() || "";
  const contentOneSubheadingTitle   = formData.get("contentOneSubheadingTitle")?.toString() || "";
  const contentOneParagraph         = formData.get("contentOneParagraph")?.toString() || "";
  const contentTwoSubheadingTitle   = formData.get("contentTwoSubheadingTitle")?.toString() || "";
  const contentTwoParagraph         = formData.get("contentTwoParagraph")?.toString() || "";
  const contentThreeSubheadingTitle = formData.get("contentThreeSubheadingTitle")?.toString() || "";
  const contentThreeParagraph       = formData.get("contentThreeParagraph")?.toString() || "";
  const conclusionSubheading        = formData.get("conclusionSubheading")?.toString() || "";
  const conclusionParagraph         = formData.get("conclusionParagraph")?.toString() || "";
  const extraSubheading             = formData.get("extraSubheading")?.toString() || "";
  const extraContentParagraph       = formData.get("extraContentParagraph")?.toString() || "";
  const pexelImgLink                = formData.get("pexelImgLink")?.toString() || "";
  const pexelImgLink2               = formData.get("pexelImgLink2")?.toString() || "";

  // Build the document, including our new random-date string
  const articleDoc = {
    articleTitle,
    introductionSubheading,
    introductionContent,
    contentOneSubheadingTitle,
    contentOneParagraph,
    contentTwoSubheadingTitle,
    contentTwoParagraph,
    contentThreeSubheadingTitle,
    contentThreeParagraph,
    conclusionSubheading,
    conclusionParagraph,
    extraSubheading,
    extraContentParagraph,
    pexelImgLink,
    pexelImgLink2,

    // NEW: set a formatted, random date string
    date: getRandomDateString(),
  };

  try {
    const res = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.articlesCollectionId,
      ID.unique(),
      articleDoc
    );
    return { success: true, id: res.$id };
  } catch (error) {
    console.error("Appwrite error:", error);
    return { success: false, error: "Failed to create article" };
  }
};
