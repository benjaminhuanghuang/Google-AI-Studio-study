import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

async function main() {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
  const tools = [
    {
      googleSearch: {},
    },
  ];
  const config = {
    thinkingConfig: {
      // thinkingLevel: "LOW",
    },
    tools,
  };
  // const model = "gemini-3-flash-preview";
  const model = "models/gemini-2.5-flash";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `What is the capital of France?`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let fileIndex = 0;
  for await (const chunk of response) {
    console.log(chunk.text);
  }
}

main();
