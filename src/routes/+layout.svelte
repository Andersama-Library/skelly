<script>
	import { page } from '$app/stores';
	import "svelte-reveal/styles.css";
	import { _username, _name } from './+layout';
</script>

<svelte:head>
	<link rel="stylesheet" href="/normalize.css"/>
    <link rel="stylesheet" href="/skeleton.css"/>
	<link rel="stylesheet" href="/atom-dark.css"/>
</svelte:head>

<header>
	<div class="container">
		<nav class="navbar">
			<a data-sveltekit-prefetch class="navbar-item navbar-link" class:active={$page.url.path === '/'} href="/">Home</a>
			<a data-sveltekit-prefetch class="navbar-item navbar-link" class:active={$page.url.path === '/about'} href="/about">About</a>
			<a data-sveltekit-prefetch class="navbar-item navbar-link" class:active={$page.url.path === '/activity'} href="/activity">Activity</a>
			<a data-sveltekit-prefetch class="navbar-item navbar-link" class:active={$page.url.path === '/gists'} href="/gists">Gists</a> 
			<a data-sveltekit-prefetch class="navbar-item navbar-link" class:active={$page.url.path === '/cool-repos'} href="/cool-repos">Cool Repos</a>
			<a data-sveltekit-prefetch class="navbar-item navbar-link" class:active={$page.url.path === '/blog'} href="/blog">Blog</a>
			<a class="navbar-item navbar-link" href="https://github.com/sponsors/{_username}" target="_blank">Sponsor Me</a>
		</nav>
	</div>
</header>

<main class="container">
	<slot />
</main>

<footer>
	<p>&#169; {_name}</p> 
</footer>

<style>
	.navbar-item {
		position: relative;
		float: left;
		margin-bottom: 0;
	}

	.navbar-link {
		text-transform: uppercase;
		font-size: 11px;
		font-weight: 600;
		letter-spacing: .2rem;
		margin-right: 35px;
		text-decoration: none;
		line-height: 6.5rem;
		color: #222;
	}

	.navbar-link:hover {
		color: #999;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	:global(.absolute) {
        position: absolute;
    }
	:global(.relative) {
        position: relative;
    }
</style>