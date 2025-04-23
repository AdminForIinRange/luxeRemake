// lib/actions/getAllArticles.action.ts
"use server";

import { Client, Databases, Query } from "node-appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";

export const getAllArticles = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(process.env.APPWRITE_API_KEY!);

  const databases = new Databases(client);

  try {
    const res = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.articlesCollectionId,
      [Query.orderDesc("$createdAt")]
    );

    return { success: true, data: res.documents };
  } catch (error) {
    console.error("Error fetching all articles:", error);
    return { success: false, error: "Could not fetch articles." };
  }
};
