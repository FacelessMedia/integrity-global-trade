import { NextRequest } from "next/server";
import OpenAI from "openai";
import { KNOWLEDGEBASE } from "@/lib/knowledgebase";

const SYSTEM_PROMPT = `You are the AI assistant for Integrity Global Trade & Commodities Corp (IGTC). You represent the company on its website chat widget. Your name is "IGTC Assistant".

Your role:
- Answer questions about IGTC's services, commodities, compliance, and how the company works
- Be professional, knowledgeable, and helpful — you represent a $1B+ global commodities trading firm
- Guide prospective clients toward requesting a consultation or contacting Tim Mercer directly
- Be concise but thorough — most answers should be 2-4 sentences unless the user asks for detail
- If asked something outside your knowledge, say you'd recommend they speak with Tim directly and provide contact info
- Never make up information not in your knowledgebase
- Never discuss competitors negatively
- Always be honest about what IGTC does and doesn't do

Contact information to share when appropriate:
- Email: tim@integritygtc.com
- Phone: +1 (773) 219-7674
- Website: https://www.integritygtc.com/contact

Here is your complete knowledgebase about the company:

${KNOWLEDGEBASE}`;

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey || apiKey === "your_openai_api_key_here") {
      return Response.json(
        {
          message:
            "Thanks for reaching out! Our AI assistant is being set up. In the meantime, please contact Tim Mercer directly at tim@integritygtc.com or call +1 (773) 219-7674.",
        },
        { status: 200 }
      );
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: "Messages are required" }, { status: 400 });
    }

    // Limit conversation history to last 20 messages to stay within token limits
    const recentMessages = messages.slice(-20);

    const openai = new OpenAI({ apiKey });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...recentMessages,
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply = completion.choices[0]?.message?.content || "I apologize, I wasn't able to generate a response. Please try again or contact Tim directly at tim@integritygtc.com.";

    return Response.json({ message: reply });
  } catch (error: unknown) {
    console.error("Chat API error:", error);

    // Handle specific OpenAI errors
    if (error instanceof OpenAI.APIError) {
      if (error.status === 401) {
        return Response.json(
          { message: "Our AI assistant is currently being configured. Please contact Tim Mercer directly at tim@integritygtc.com or call +1 (773) 219-7674." },
          { status: 200 }
        );
      }
      if (error.status === 429) {
        return Response.json(
          { message: "I'm receiving a lot of questions right now. Please try again in a moment, or contact Tim directly at tim@integritygtc.com." },
          { status: 200 }
        );
      }
    }

    return Response.json(
      { message: "I apologize for the inconvenience. Please contact Tim Mercer directly at tim@integritygtc.com or call +1 (773) 219-7674." },
      { status: 200 }
    );
  }
}
