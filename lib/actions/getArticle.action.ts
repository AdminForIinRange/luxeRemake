// lib/actions/getArticle.action.ts
"use server";

import { Client, Databases } from "node-appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";

export const getArticle = async (id: string) => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(appwriteConfig.apiKey);

  const databases = new Databases(client);

  try {
    // Use getDocument to directly fetch the document by its ID
    const document = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.articlesCollectionId,
      id
    );
    return { success: true, data: document };
  } catch (error) {
    console.error("Error fetching article with getDocument:", error);
    return { success: false, error: "Failed to fetch article." };
  }
};
