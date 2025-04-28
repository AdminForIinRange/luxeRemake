// app/services/loading.js

"use client";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="w-16 h-16 border-t-4 border-red-500 border-solid rounded-full animate-spin"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
