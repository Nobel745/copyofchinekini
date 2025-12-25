import { GoogleGenAI } from "@google/genai";

// Initialize with environment variable safely
const apiKey = process.env.API_KEY || ''; 

// If no key is present, we will fallback to mock responses in the function logic
// to prevent the app from crashing during demo.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const chatWithChini = async (userMessage: string): Promise<string> => {
  if (!ai) {
    // Mock response for demo purposes if no API key
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay
    const responses = [
      "এই এলাকার মাটির গুণাগুণ বেশ ভালো, বহুতল ভবনের জন্য উপযুক্ত।",
      "গত ৫ বছরে এই এলাকায় জমির দাম প্রায় ৪০% বৃদ্ধি পেয়েছে।",
      "কাছাকাছি একটি নতুন মেট্রো স্টেশন হওয়ার পরিকল্পনা রয়েছে, যা দাম আরও বাড়িয়ে দেবে।",
      "আমি দেখতে পাচ্ছি এই প্লটটি রাজউকের অনুমোদিত জোনের মধ্যে পড়েছে।",
      "বন্যা নিয়ন্ত্রণ বাঁধ থেকে এটি নিরাপদ দূরত্বে অবস্থিত।"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  try {
    const model = 'gemini-2.5-flash-latest'; // Using flash for speed in chat
    const systemInstruction = `You are Chini (চিনি), a helpful AI assistant for a Land Intelligence Platform named 'Chinekini' in Bangladesh. 
    You speak primarily in Bangla using the Hind Siliguri font style context.
    Your goal is to help users understand land value, risk factors (flood, earthquake), and legal aspects in Bangladesh context.
    Keep answers concise, helpful, and polite. Use emojis occasionally.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "দুঃখিত, আমি এখন উত্তর দিতে পারছি না। পরে আবার চেষ্টা করুন।";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "দুঃখিত, সংযোগে সমস্যা হচ্ছে। দয়া করে আপনার ইন্টারনেট চেক করুন।";
  }
};
