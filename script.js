import { config } from "dotenv";
config();

import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
);

openai
  .createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You will be provided with questions, and your task to is generate a response",
      },
      {
        role: "user",
        content:
          "Recommend me some places to eat when my girlfriend states she doesn't know what to eat?",
      },
    ],
  })
  .then((res) => {
    console.log(res);
  });
