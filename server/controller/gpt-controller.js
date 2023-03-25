import axios from "axios";
import openai from "../chatgpt/chatgpt.js";
const clientUrl = "http://localhost:3000/";

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

export const getKeywords = async (url) => {
  try{
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
    return toStringArray(keywordCompletionText, ", ");
  } catch(error) {
    console.log(error)
}


}

export const getTitle = async (url) => {

}

export const getSummary = async (url) => {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generateSummaryPrompt(url),
      temperature: 0.6,
      max_tokens: 200
    });
    //res.status(200).json({ result: completion.data.choices[0].text });
    const summary = completion.data.choices[0].text
    console.log(summary);

    return summary;
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    console.log(error)
  }
}
 

export const handleUrl =  async (req, res) => {
    
  
    const url = req.body.url;
    const data = {
    url,
    summary: await getSummary(url),
    keywords: await getKeywords(url),
    title:   "title"
    }
    //getTitle(url);
    console.log(data);
  }