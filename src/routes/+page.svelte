<script lang="ts">
	import { ChatBox, ChatBubble, MessageSkeleton } from '@components';
	import { loading, messages } from '../lib/stores';

	let scrollTo: HTMLDivElement;
</script>

<header class="max-w-lg mx-auto mb-10">
	<h1 class="text-3xl font-bold">Chad GPT 👺</h1>
</header>

<main class=" min-h-screen max-w-lg mx-auto mb-24">
	<div>
		{#each $messages as { content, role }, i}
			<ChatBubble start={i % 2 !== 0}>
				<svelte:fragment slot="role"
					>{#if role === 'user'}
						you
					{:else}
						Chad
					{/if}</svelte:fragment
				>
				<svelte:fragment slot="content">{content}</svelte:fragment>
			</ChatBubble>
		{/each}

		{#if $loading}
			<MessageSkeleton />
		{/if}
	</div>
</main>

<footer
	class="bg-base-100 w-full h-24 fixed bottom-0 left-1/2 transform -translate-x-1/2 flex align-center justify-center"
>
	<ChatBox scrollToDiv={scrollTo} />
</footer>
<div bind:this={scrollTo} />
