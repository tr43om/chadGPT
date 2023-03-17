import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
	apiKey: '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'
});

const openai = new OpenAIApi(configuration);

export const POST = (async ({ request }) => {
	const { prompt }: { prompt: string } = await request.json();

	const dalle = await openai.createImage({ prompt });

	console.log(dalle.status);

	const imageURL = dalle.data.data[0].url;

	// console.log(chatGPTMessage);
	return json({ imageURL });
}) satisfies RequestHandler;
