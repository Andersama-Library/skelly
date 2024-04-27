<script>
	import { _username } from '../../+layout.js';

	export let data;
	if (typeof data.post === undefined || data === null) {
	}

	let date =
		data && data.post && data.post.metadata && data.post.metadata.date
			? data.post.metadata.date.toUpperCase()
			: '';

	let title =
		data && data.post && data.post.metadata && data.post.metadata.date
			? data.post.metadata.title
			: '';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1 class="title">{title}</h1>
<p class="info"><a href="https://github.com/{_username}}">{_username}</a> {date}</p>
{@html data.post.content}

<style lang="scss">
	h1.title {
		margin-bottom: 0;
	}
</style>
