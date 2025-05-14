// /app/api/gpt/route.ts

import { NextRequest, NextResponse } from "next/server";

// Handle the POST request for OpenAI GPT API
export async function POST(request: NextRequest) {
  try {
    // Get the prompt from the request body
    const { prompt } = await request.json()

    // Call OpenAI API with the prompt
    const response = await fetchOpenAIResponse(prompt)

    // Return the response to the frontend
    return NextResponse.json({ response })
  } catch (error) {
    console.error('Error fetching OpenAI response:', error)
    return NextResponse.json({ error: 'Failed to fetch OpenAI response' }, { status: 500 })
  }
}

// Function to call OpenAI API
// Function to call OpenAI API
async function fetchOpenAIResponse(prompt: string) {
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt },
        ],
        max_tokens: 100,
      }),
    })

    if (!res.ok) {
      // Log the error response from OpenAI
      const errorData = await res.json()
      console.error('OpenAI Error:', errorData)
      throw new Error(`OpenAI API Error: ${errorData.error.message}`)
    }

    const data = await res.json()
    return data.choices[0].message.content
  } catch (error) {
    console.error('Error fetching OpenAI response:', error)
    throw new Error('Error fetching OpenAI response')
  }
}
