import openai from "../chatgpt/chatgpt.js";

function generateSummaryPrompt(url) {
    return `Provide a summary of this webpage in 60 words.
  
  Webpage: ${url}`;
 };

function generateKeywordPrompt(url) {
  return `Provide 8 keywords for this webpage in comma separated format.

Webpage: ${url}`;
};

function toStringArray(completionText, delimiter) {
  return completionText.slice(2).split(delimiter);
}

export const handleUrl =  async (req, res) => {
    const url = req.body.url;
  
    try {
      const summaryCompletion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generateSummaryPrompt(url),
        temperature: 0.8,
        max_tokens: 200
      });
      //res.status(200).json({ result: completion.data.choices[0].text });
      let summaryCompletionText = summaryCompletion.data.choices[0].text;
      // console.log(summaryCompletion.data.choices[0].text);
      console.log(toStringArray(summaryCompletionText, ". "));


      const keywordCompletion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generateKeywordPrompt(url),
        temperature: 0.6,
        top_p: 0.5,
        max_tokens: 200
      });
      //res.status(200).json({ result: completion.data.choices[0].text });
      let keywordCompletionText = keywordCompletion.data.choices[0].text;
      // console.log(keywordCompletion.data.choices[0].text);
      console.log(toStringArray(keywordCompletionText, ", "));

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