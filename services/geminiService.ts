
import { GoogleGenAI } from '@google/genai';
import type { Settings, Style, AspectRatio } from '../types';

// Ensure the API key is available from environment variables.
if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateAvatars(
  prompt: string,
  style: Style,
  settings: Settings
): Promise<string[]> {
  const fullPrompt = `${prompt}, ${style.promptSuffix}`;

  try {
    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: fullPrompt,
      config: {
        numberOfImages: settings.variations,
        outputMimeType: 'image/jpeg',
        aspectRatio: settings.aspectRatio as '1:1' | '9:16' | '16:9' | '4:3' | '3:4', // Cast required by SDK for supported ratios
      },
    });

    if (!response.generatedImages || response.generatedImages.length === 0) {
      throw new Error('API returned no images.');
    }

    return response.generatedImages.map((img) => {
      const base64ImageBytes = img.image.imageBytes;
      return `data:image/jpeg;base64,${base64ImageBytes}`;
    });

  } catch (error) {
    console.error('Error calling Gemini API:', error);
    if (error instanceof Error) {
        throw new Error(`Gemini API Error: ${error.message}`);
    }
    throw new Error('An unknown error occurred while communicating with the Gemini API.');
  }
}
