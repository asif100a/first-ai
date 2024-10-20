import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

export async function getGeminiData(searchTerm) {
    // console.log(searchTerm);
    const chatSession = model.startChat({
        generationConfig,
        history: [
        ],
    });

    const result = await chatSession.sendMessage(searchTerm);
    return result.response.text();
}

//   run();

// const { geminiApiKey } = require("../api.config");

// const baseUrl = 'https://api.gemini.com/v1';

// const getGeminiData = async (searchTerm) => {
//     try {
//         const response = await fetch(`${baseUrl}<correct_endpoint>?searchTerm=${searchTerm}`, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${geminiApiKey}`
//             }
//         })
//         return response.data;
//     } catch (error) {
//         console.log(error.message)
//     }
// };

// export default getGeminiData;