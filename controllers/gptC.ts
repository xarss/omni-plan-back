import type { Context } from "@oak/oak";
import { askGPT, generateFormStructure } from "../services/gptS.ts";

export async function fetchGPT(context: Context) {
    const body = await context.request.body.json();
    if (!body.prompt) {
        throw new Error("Prompt is required");
    }

    context.response.body = { content: await askGPT(body.prompt) };
}

export async function fetchFormStructure(context: Context) {
    const body = await context.request.body.json();
    if (!body.prompt) {
        throw new Error("Prompt is required");
    }

    const stringResponse = await generateFormStructure(body.prompt);
    console.log(stringResponse);
    context.response.body = JSON.parse(stringResponse);
}