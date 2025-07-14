import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "LakshyaAI",name:"LakshyaAI",
    credentials:{
        gemini:{
            apiKey:process.env.GEMINI_API_KEY,
        }
    }
 });
