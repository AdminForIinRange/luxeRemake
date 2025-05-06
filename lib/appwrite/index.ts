// appwriteClient.ts
"use server";

import { Client, Databases, Storage, Avatars } from "node-appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";

// ✅ FIXED: Made this async to satisfy Server Action constraints
export const createAppwriteClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(appwriteConfig.apiKey);

  return {
    databases: new Databases(client),
    storage: new Storage(client),
    avatars: new Avatars(client),
  };
};
