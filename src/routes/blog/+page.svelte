<script>
	export let data;
	if (typeof data.posts === undefined || !data.posts) {
		console.log(`no posts!`);
		data.posts = [];
	}
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div>
	<h1>Blog</h1>
	<p class="info">{data.posts.length} posts.</p>
	{#each data.posts as post}
		{#if post.metadata}
			<a href={`/blog/${post.slug}`}>
				<h2 class="title">{post.metadata.title}</h2>
				<p>{post.metadata.excerpt}</p>
			</a>
		{:else}
			<a href={`/blog/${post.slug}`}>
				<h2 class="title">{post.slug}</h2>
			</a>
		{/if}
	{/each}
</div>
