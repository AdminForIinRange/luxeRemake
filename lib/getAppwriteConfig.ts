// lib/appwrite/getAppwriteConfig.ts
import { unstable_noStore as noStore } from "next/cache";

export function getAppwriteConfig() {
  // Prevent static caching
  noStore();

  const endpointUrl = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;
  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE;
  const articlesCollectionId = process.env.NEXT_PUBLIC_APPWRITE_ARTICLE_COLLECTION;
  const apiKey = process.env.NEXT_PUBLIC_APPWRITE_API_KEY;


  if (
    !endpointUrl ||
    !projectId ||
    !databaseId ||
    !articlesCollectionId ||
    !apiKey

  ) {
    throw new Error("One or more required Appwrite environment variables are missing.");
  }

  return {
    endpointUrl,
    projectId,
    databaseId,
    articlesCollectionId,
    apiKey

  };
}
