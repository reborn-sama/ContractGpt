import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export { openai };

export const getCodeSuggestion = async (prompt: string) => {
    try {
        const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt,
        max_tokens: 500,
        n: 1,
        stop: null,
        temperature: 0.5,
        });
        console.log(response.data);
        return response.data.choices[0].text;
        
    
    }catch (error) {
        console.error('Error fetching code suggestion:', error);
        return '';
    }
  };
  