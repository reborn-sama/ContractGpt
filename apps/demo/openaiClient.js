import { Client } from "@openai/client";

const openaiClient = new Client({
  apiKey: "your_openai_api_key_here"
});

export default openaiClient;
