import openai from "../chatgpt/chatgpt.js";

function generatePrompt(url) {
    return `Provide a summary of this webpage in 50 words.
  
  Webpage: https://globalnews.ca/news/9577125/edmonton-police-regimental-funeral-procession-road-closures-transit/`;
 };

export const handleUrl =  async (req, res) => {
    const url = req.body.url;
  
    try {
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(url),
        temperature: 0.6,
        max_tokens: 200
      });
      //res.status(200).json({ result: completion.data.choices[0].text });
      console.log(completion.data.choices[0].text);
      console.log(completion.data);
    } catch(error) {
      // Consider adjusting the error handling logic for your use case
      if (error.response) {
        console.error(error.response.status, error.response.data);
        res.status(error.response.status).json(error.response.data);
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        res.status(500).json({
          error: {
            message: 'An error occurred during your request.',
          }
        });
      }
    }
  }