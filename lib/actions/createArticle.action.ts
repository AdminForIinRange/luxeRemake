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

export const createArticle = async (
  formData: FormData
): Promise<CreateArticleResponse> => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(appwriteConfig.apiKey);

  const databases = new Databases(client);

  // Retrieve form values using the new schema keys (defaulting to empty strings)
  const articleTitle = formData.get("articleTitle")?.toString() || "";
  const introductionSubheading = formData.get("introductionSubheading")?.toString() || "";
  const introductionContent = formData.get("introductionContent")?.toString() || "";
  const contentOneSubheadingTitle = formData.get("contentOneSubheadingTitle")?.toString() || "";
  const contentTwoSubheadingTitle = formData.get("contentTwoSubheadingTitle")?.toString() || "";
  const contentOneParagraph = formData.get("contentOneParagraph")?.toString() || "";
  const conclusionSubheading = formData.get("conclusionSubheading")?.toString() || "";
  const conclusionParagraph = formData.get("conclusionParagraph")?.toString() || "";
  const extraSubheading = formData.get("extraSubheading")?.toString() || "";
  const extraContentParagraph = formData.get("extraContentParagraph")?.toString() || "";


  const pexelImgLink = formData.get("pexelImgLink")?.toString() || "";
  const pexelImgLink2 = formData.get("pexelImgLink2")?.toString() || "";
  const contentThreeSubheadingTitle = formData.get("contentThreeSubheadingTitle")?.toString() || "";
  const contentThreeParagraph = formData.get("contentThreeParagraph")?.toString() || "";
  const contentTwoParagraph = formData.get("contentTwoParagraph")?.toString() || "";

  // Build the document with user inputs using the updated keys
  const articleDoc = {
    articleTitle,
    introductionSubheading,
    introductionContent,
    contentOneSubheadingTitle,
    contentTwoSubheadingTitle,
    contentOneParagraph,
    conclusionSubheading,
    conclusionParagraph,
    extraSubheading,
    extraContentParagraph,
    pexelImgLink, // Pexels image link 1
    pexelImgLink2, // Pexels image link 2
    contentThreeSubheadingTitle,
    contentThreeParagraph,
    contentTwoParagraph,
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
