import { readable, writable } from 'svelte/store';
import type { ChatCompletionRequestMessage } from 'openai';

function createMessages() {
	const { subscribe, set, update } = writable<ChatCompletionRequestMessage[]>([]);

	return {
		subscribe,
		addMessage: (message: ChatCompletionRequestMessage) =>
			update((messages) => [...messages, message])
	};
}

function createChadLoading() {
	const { subscribe, set, update } = writable<boolean>(false);

	return {
		subscribe,
		setLoading: (isLoading: boolean) => set(isLoading)
	};
}

export const loading = createChadLoading();
export const messages = createMessages();
