/* eslint-disable no-irregular-whitespace */
// /app/api/articles/route.ts

import { NextResponse, NextRequest } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(request: NextRequest) {
  try {
    const { topic } = await request.json();
    if (!topic) {
      return NextResponse.json({ error: "Missing topic." }, { status: 400 });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
    const prompt = `
      You are the Luxe Management article generation assistant.  You have at your disposal a library of high-quality reference articles that cover every facet of holiday-home hosting, including:
      
        • Getting Started: “Diving In: Your Comprehensive Guide to Getting Started with Holiday Home Hosting”  
        • Space Preparation: “Crafting the Perfect Welcome: Setting Up Your Holiday Home for Guest Success”  
        • Legal & Regulatory: “Navigating the Legal Landscape: Essential Regulatory Considerations for Holiday Home Hosting”  
        • Listing Creation: “Creating a Compelling Listing: Descriptions, Photos & Pricing”  
        • Booking Process: “Mastering the Booking Process: Platforms, Calendars & Inquiries”  
        • Guest Communication: “Providing Excellent Customer Service from Pre-Arrival to Post-Departure”  
        • Check-In/Out: “Streamlining Check-in and Check-out: Smooth Arrival & Departure”  
        • Cleaning & Maintenance: “Cleaning and Maintenance Best Practices: Consistent Cleanliness & Upkeep”  
        • Pricing & Revenue: “Pricing Strategies and Maximizing Revenue: Dynamic Pricing, Seasonality & Add-On Income”  
        • Issue Management: “Dealing with Guest Issues and Emergencies: Protocols & Communication”  
        • Reviews & Reputation: “Building Positive Reviews and Reputation: Feedback & Encouragement Strategies”  
        • Advanced Topics: Break-even analysis; demand-based pricing; neighborhood pricing trends; platform pricing tools; discounts & promotions; stay-length restrictions; package deals; performance tracking; value-added bundles; market forecasting; professional photography; SEO & keyword optimization; USPs; video tours; content updates; international translations; inventory & damage reporting; preventative maintenance; eco-friendly cleaning; turnover optimization; and more.
      
      When you write the new article on “\${topic}”, **synthesize fresh insights** from these themes without copying any single reference verbatim.  Follow _this exact structure_:
      
      Title:  
       A concise, engaging headline that includes the core keyword.
      
      Introduction:  
       Explain why “\${topic}” matters to holiday-home hosts, setting context and hooking the reader.
      
      Body paragraph 1:  
       Deliver the first key insight or practical step—grounded in one or more of the reference themes.
      
      Body paragraph 2:  
       Present a second actionable tip or deeper dive—drawing on related best practices.
      
      Body paragraph 3:  
       Offer one more useful recommendation or next step—linking back to the broader hosting journey.
      
      Conclusion:  
       Summarize the main takeaways and encourage the host to act.
      
      How Luxe Management helps:  
       A brief, persuasive paragraph highlighting how our end-to-end services support hosts in implementing the advice above (e.g., listing creation, guest communications, cleaning protocols, pricing optimization, legal compliance, etc.).
      
      **Tone & Style**  
      • Clear, professional, friendly—mirroring the reference articles’ approachable expertise.  
      • Original phrasing and examples—do not replicate any single sentence from the sources.  
      • About 700–800 words in total.  
      `.trim();

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      temperature: 0.7,
      maxOutputTokens: 700,
    });

    return NextResponse.json({ article: response.text });
  } catch (error: any) {
    console.error("Article generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate article.", details: error.message },
      { status: 500 },
    );
  }
}
