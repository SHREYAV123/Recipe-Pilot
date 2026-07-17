import Groq from "groq-sdk";

const groq = process.env.GROQ_API_KEY && process.env.GROQ_API_KEY.trim() !== ""
  ? new Groq({
      apiKey: process.env.GROQ_API_KEY,
    })
  : null;

export default groq;