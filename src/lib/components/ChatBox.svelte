<script lang="ts">
	import type { ChatCompletionRequestMessage } from 'openai';
	import { messages, loading } from '../stores';
	export let scrollToDiv: HTMLDivElement;

	let query = '';
	let inputRef: HTMLTextAreaElement;

	function scrollToBottom() {
		setTimeout(function () {
			scrollToDiv.scrollIntoView({ behavior: 'smooth' });
		}, 100);
	}

	const chat = async () => {
		loading.setLoading(true);

		messages.addMessage({ role: 'user', content: query });
		query = '';
		scrollToBottom();

		const res = await fetch('/', {
			method: 'POST',
			body: JSON.stringify({ messages: $messages })
		});

		const chatGPTMessage: ChatCompletionRequestMessage = await res.json();

		messages.addMessage(chatGPTMessage);
		scrollToBottom();

		loading.setLoading(false);
	};
</script>

<form on:submit|preventDefault={chat} class="flex items-center gap-4   max-w-lg w-full">
	<textarea
		class="textarea textarea-bordered resize-none w-full h-16"
		placeholder="Вопрос для чада..."
		bind:value={query}
		bind:this={inputRef}
	/>

	<button class="btn btn-square btn-sm">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-4 h-4"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
			/>
		</svg>
	</button>
</form>
