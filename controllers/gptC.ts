import type { Context } from "@oak/oak";
import { askGPT, generateFormStructure } from "../services/gptS.ts";
import formStructure from "../schemas/formStructure.json" with { type: "json" };

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

    const stringResponse = await generateFormStructure(body.prompt, formStructure);
    context.response.body = JSON.parse(stringResponse);
}

export async function fetchCustomFormStructure(context: Context) {
    const body = await context.request.body.json();
    if (!body.prompt) {
        throw new Error("Prompt is required");
    }
    if (!body.schema) {
        throw new Error("Schema is required");
    }

    const stringResponse = await generateFormStructure(body.prompt, body.schema);
    context.response.body = JSON.parse(stringResponse);
}
