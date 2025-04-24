// lib/appwrite/config.ts

// lib/appwrite/config.ts

export const appwriteConfig = {
  endpointUrl: process.env.APPWRITE_ENDPOINT!,
  projectId: process.env.APPWRITE_PROJECT!,
  databaseId: process.env.APPWRITE_DATABASE!,
  articlesCollectionId: process.env.APPWRITE_ARTICLE_COLLECTION!,
  apiKey: process.env.APPWRITE_API_KEY!,
};
