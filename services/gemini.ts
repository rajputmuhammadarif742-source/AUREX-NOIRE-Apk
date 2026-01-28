
import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "../constants";

export const getAIShoppingAdvice = async (userPrompt: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    const productContext = PRODUCTS.map(p => 
      `${p.name} (${p.category}): $${p.price}. Description: ${p.description}`
    ).join('\n');

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the AUREX NOIRE Personal Shopping Assistant. 
      You help customers find luxury items.
      Available products:
      ${productContext}
      
      User says: "${userPrompt}"
      
      Provide a helpful, concise, and luxurious recommendation. If they ask for something we don't have, politely suggest our closest alternative.`,
      config: {
        systemInstruction: "You are a professional luxury shopping consultant for AUREX NOIRE. Your tone is sophisticated, helpful, and exclusive. Always focus on AUREX NOIRE's brand values of quality and elegance.",
      }
    });

    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "I apologize, but I'm having trouble connecting to our luxury network right now. How else can I assist you?";
  }
};
