import { NextRequest, NextResponse } from "next/server";

// Handle the POST request for OpenAI GPT API
export async function POST(request: NextRequest) {
  try {
    // Get the address from the request body
    const { address } = await request.json();

    // Pre-prompt GPT-4 to ensure it returns the correct real estate metrics
    const prompt = `You are a real estate analysis assistant. When given a property address, return the following metrics: revenue, revenue trend, occupancy, occupancy trend, daily rate, daily rate trend, market score, expenses, income, and cap rate. 

    If this data is not directly available, estimate it based on general market trends and typical calculations. Provide all of these metrics in a detailed, clear format.

    Property Address: ${address}

    Please provide the metrics in the following format:
    {
      "revenue": "value",
      "revenueTrend": "value",
      "occupancy": "value",
      "occupancyTrend": "value",
      "dailyRate": "value",
      "dailyRateTrend": "value",
      "marketScore": "value",
      "expenses": "value",
      "income": "value",
      "capRate": "value"
    }`;

    // Call OpenAI API with the prompt
    const response = await fetchOpenAIResponse(prompt);

    // Log the full response for debugging purposes
    console.log("OpenAI Response:", response);

    // Parse the response content
    let parsedResponse = null;
    try {
      parsedResponse = JSON.parse(response);
    } catch (e) {
      console.error("Error parsing OpenAI response:", e);
      return NextResponse.json(
        { error: "Failed to parse OpenAI response" },
        { status: 500 },
      );
    }

    return NextResponse.json({ response: parsedResponse });
  } catch (error) {
    console.error("Error fetching OpenAI response:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch OpenAI response" },
      { status: 500 },
    );
  }
}

// Function to call OpenAI API
async function fetchOpenAIResponse(prompt: string) {
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are a helpful real estate assistant.",
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 1000, // Increase token limit
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("OpenAI Error:", errorData);
      throw new Error(`OpenAI API Error: ${errorData.error.message}`);
    }

    const data = await res.json();
    return data.choices[0].message.content; // Check if this returns a valid structure
  } catch (error) {
    console.error("Error fetching OpenAI response:", error);
    throw new Error("Error fetching OpenAI response");
  }
}
