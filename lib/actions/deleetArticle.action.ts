// // deleet arytile page

// "use server";

// import { Client, Databases } from "node-appwrite";
// import { appwriteConfig } from "@/lib/appwrite/config";

// export const deleteArticle = async (id: string) => {
//   const client = new Client()
//     .setEndpoint(appwriteConfig.endpointUrl)
//     .setProject(appwriteConfig.projectId)
//     .setKey(appwriteConfig.apiKey);

//   const databases = new Databases(client);

//   try {
//     await databases.deleteDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.articlesCollectionId,
//       id
//     );
//     return { success: true };
//   } catch (error) {
//     console.error("Failed to delete article:", error);
//     return { success: false, error: "Could not delete article." };
//   }
// };
