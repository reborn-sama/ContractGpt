import axios from "axios";
import openaiClient from "./openaiClient";

async function requestCompletion(prompt) {
  try {
    const response = await openaiClient.createCompletion({
      engine: "gpt-3.5-turbo-0301",
      prompt: prompt+"solidity version must be higher than 0.5.0",
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 0.7,
    });

    return response.choices[0].text;
  } catch (error) {
    console.error("Error requesting completion:", error);
    return null;
  }
}

export default requestCompletion;
