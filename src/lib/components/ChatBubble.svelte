<script lang="ts">
	export let start: boolean;
</script>

<div class="chat chat-{start ? 'start' : 'end'}">
	<div class="chat-header "><slot name="role" /></div>
	<div class="chat-bubble "><slot name="content" /></div>
</div>
