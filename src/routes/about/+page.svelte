<script context="module">
	import { lorem } from '$lib/lorem';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="container">
	{@html lorem(Math.random() * 6 + 1, 30, 80)}
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
