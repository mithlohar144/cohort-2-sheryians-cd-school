import dotenv from 'dotenv'
import readline from 'readline/promises';
import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage } from "@langchain/core/messages";
import { sendEmail } from './mail.service.js';
import { tool, createAgent } from "langchain";
import * as z from "zod";
// Load environment variables from .env file
dotenv.config();


const emailtool = tool(
    sendEmail,
    {
        name: "email_tool",
        description:"Use this tool to send email to anyone",
        schema:z.object({
            to:z.string().describe("The recipient's email address"),
            html:z.string().describe("The HTML content of the email"),
            subject:z.string().describe("The subject of the email"),
        })
    }
)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// rl.question('What is your name? ', (name) => {
//   console.log(`Hello, ${name}!`);
//   rl.close();
// });

const model = new ChatMistralAI({
    model: "mistral-small-latest",
});

const agent = createAgent({
    model,
    tools:[emailtool]
})

const messages = [];

while (true) {
    const userInput = await rl.question('\x1b[32mYou: \x1b[0m');

   
    messages.push(new HumanMessage(userInput));
    // console.log(`\x1b[32m[You]\x1b[0m ${userInput}`);

    const response = await agent.invoke({
        messages
    });
    messages.push(response.messages[response.messages.length-1]);
    console.log(response.messages[response.messages.length-1].text);
    // console.log(`\x1b[36mMistralAI \x1b[0m ${response.content}`);
}

rl.close();