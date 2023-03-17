<script lang="ts">
	let prompt: string;
	let imgURL = '';

	const generateURL = async () => {
		const res = await fetch('/images', {
			method: 'POST',
			body: JSON.stringify({ prompt })
		});

		const dalleURL: { imageURL: string } = await res.json();

		imgURL = dalleURL.imageURL;
	};
</script>

<h1 class="text-5xl font-bold mb-10">🖼️ Bropic</h1>

<form on:submit|preventDefault={generateURL} class="flex items-end gap-4">
	<label>
		<textarea
			class="textarea textarea-primary resize-none"
			id=""
			cols="50"
			placeholder="Какую картинку сгенерить..."
			rows="5"
			bind:value={prompt}
		/>
	</label>

	<button type="submit" class="btn btn-primary">сгенерить </button>
</form>

<main>
	{#if imgURL}
		<img src={imgURL} alt="pic" />
	{/if}
</main>

<style lang="postcss">
	:global(html) {
		padding-inline: 2rem;
		padding-block: 2rem;
		background-color: theme(colors.gray.100);
	}

	:global(body) {
		display: grid;
		justify-content: center;
	}
</style>
