import axios from "axios";

export const generateText = async(inputText:string)  =>{
    const response = await axios.post("https://api.openai.com/v1/engines/davinci/completions",{
        prompt: inputText,
        max_tokens: 700,
        temperature: 0.5,        
        stop: "\n"
    },
    {
       headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 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`,
          },          
    });   

 
    return response.data;
}