import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import puppeteer from "puppeteer";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const scrapeProperty = async (address: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 1) Go to DuckDuckGo
  await page.goto(`https://www.duckduckgo.com`, { waitUntil: "domcontentloaded" });

  // 2) Type the address into the search box
  await page.waitForSelector('input[name="q"]', { visible: true });
  await page.click('input[name="q"]');
  await page.type('input[name="q"]', address, { delay: 100 });

  // 3) Submit and wait for results
  await Promise.all([
    page.keyboard.press("Enter"),
    page.waitForNavigation({ waitUntil: "domcontentloaded" }),
  ]);

  // 4) Wait for any "domain.com" link
  await page.waitForSelector('a[href*="domain.com"]', { visible: true });

  // 5) Click the first result that contains "domain.com"
  const domainLink = (await page.$$('a[href*="domain.com"]'))[0];
  if (!domainLink) {
    throw new Error(`Could not find a domain.com result for "${address}"`);
  }
  await Promise.all([
    domainLink.click(),
    page.waitForNavigation({ waitUntil: "domcontentloaded" }),
  ]);

  // 6) Wait for the main property section to render
  await page.waitForSelector(
    'div#__next > div:nth-of-type(1) > main > div > div > div:nth-of-type(2) > section',
    { visible: true }
  );

  // 7) Extract exactly the three fields you care about:
  const propertyData = await page.evaluate(() => {
    // original three:
    const sel1 = 'div#__next > div:nth-of-type(1) > main > div > div > div:nth-of-type(2) > section:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2)';
    const sel2 = 'div#__next > div:nth-of-type(1) > main > div > div > div:nth-of-type(2) > section:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(2)';
    const sel3 = 'div#__next > div:nth-of-type(1) > main > div > div > div:nth-of-type(2) > section:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(2)';

    // new title spans:
    const titlePart1 = 'div#__next > div:nth-of-type(1) > main > div > div > div:nth-of-type(2) > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h1 > span:nth-of-type(1)';
    const titlePart2 = 'div#__next > div:nth-of-type(1) > main > div > div > div:nth-of-type(2) > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h1 > span:nth-of-type(2) > span';

    // the four numeric spans under that same div[2]:
    const numSpan1 = 'div#__next > div:nth-of-type(1) > main > div > div > div:nth-of-type(2) > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(1) > span';
    const numSpan2 = 'div#__next > div:nth-of-type(1) > main > div > div > div:nth-of-type(2) > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(2) > span';
    const numSpan3 = 'div#__next > div:nth-of-type(1) > main > div > div > div:nth-of-type(2) > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(3) > span';
    const numSpan4 = 'div#__next > div:nth-of-type(1) > main > div > div > div:nth-of-type(2) > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(4) > span';
        const numSpan5 = 'div#__next > div:nth-of-type(1) > main > div > div > div:nth-of-type(2) > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > span';

    // the extra single-span in div:nth-of-type(2) > div:nth-of-type(2)


    // the first image under the main button>picture>img:
    const imgSel = 'div#__next > div:nth-of-type(1) > main > div > div > div:nth-of-type(1) > button > picture > img';

    const getText = (s: string) => {
      const el = document.querySelector<HTMLElement>(s);
      return el?.innerText.trim() ?? null;
    };
    const getAttr = (s: string, attr: string) => {
      const el = document.querySelector<HTMLImageElement>(s);
      return el?.getAttribute(attr) ?? null;
    };

    return {
      lowPriceRange: getText(sel1),
      midPriceRange: getText(sel2),
      highPriceRange: getText(sel3),
      location: getText(titlePart1),
      suburb: getText(titlePart2),
      beds: getText(numSpan1),
      bathroom: getText(numSpan2),
      carSpace: getText(numSpan3),
      landSize: getText(numSpan4),
       typeOfProperty: getText(numSpan5),

      imageUrl: getAttr(imgSel, 'src'),
    };
  });

  await browser.close();
  console.log(propertyData);
  return propertyData;
}

export async function POST(request: NextRequest) {
  try {
    const { address } = await request.json();
    
    if (!address || typeof address !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid address." },
        { status: 400 }
      );
    }

    // Step 1: Scrape the entire page HTML from Domain
    const addressPageDominScrapedData = await scrapeProperty(address);

    // Step 2: Construct the pre-prompt for the Gemini Bot with the raw page data
    const preprompt = `
      Give a small financial analysis summary on this property, i only wnat the potential rental value and more, Here is the house data:
      ${JSON.stringify(addressPageDominScrapedData)}

    `;

    // Step 3: Use the Gemini API to generate content based on the scraped data
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(preprompt);
    const response = await result.response;
    const text = await response.text();

    // Step 4: Return the generated content
    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("BACKEND ERROR:", error.message);
    return NextResponse.json(
      { error: "Failed to generate content.", details: error.message },
      { status: 500 }
    );
  }
}
