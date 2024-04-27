<script context="module">
</script>

<script>
	import { fade, fly, crossfade } from 'svelte/transition';
	import {
		_anim_duration,
		_anim_shift,
		_delay_mul,
		_in_delay,
		_out_delay,
		_username
	} from '../+layout.js';
	import { reveal } from 'svelte-reveal';

	export let data;

	if (!data.gists) {
		data.gists = [];
	}

	if (!data.gists_by_extension) {
		data.gists_by_extension = [];
	}

	let sorted_gists = [];
	let extensions = Object.keys(data.gists_by_extension);

	for (let i = 0; i < extensions.length; i++) {
		sorted_gists[extensions[i]] = [];
		let s = sorted_gists[extensions[i]];
		for (const num of data.gists_by_extension[extensions[i]]) {
			s.push(data.gists[num]);
		}
	}
</script>

<svelte:head>
	<title>{_username} | Gists</title>
	<style>
		.navbar-item {
			position: relative;
			//float: left;
			margin-bottom: 0;
		}

		.navbar-link {
			text-transform: uppercase;
			white-space: nowrap;
			font-size: 11px;
			font-weight: 600;
			letter-spacing: 0.2rem;
			margin-right: 35px;
			text-decoration: none;
			line-height: 6.5rem;
			color: #222;
		}

		.navbar-link:hover {
			color: #999;
		}
	</style>
</svelte:head>

<div class="container">
	<nav
		class="navbar"
		use:reveal={{ transition: 'fly', x: -_anim_shift, duration: _anim_duration, delay: 0 }}
	>
		{#each Object.keys(sorted_gists) as gist_ext, j}
			<a class="navbar-item navbar-link" href="#{gist_ext}"
				>{gist_ext.toUpperCase()} [{sorted_gists[gist_ext].length}]</a
			>
		{/each}
	</nav>
	{#each Object.keys(sorted_gists) as gist_ext, j}
		<div
			class="github_gist sr__hide"
			id={gist_ext}
			use:reveal={{
				transition: 'fly',
				x: -_anim_shift,
				duration: _anim_duration,
				delay: _in_delay + j * _delay_mul
			}}
		>
			{gist_ext}
		</div>
		{#each sorted_gists[gist_ext] as github_gist, i}
			{#if github_gist.public}
				<div
					class="github_gist sr__hide"
					use:reveal={{
						transition: 'fly',
						x: -_anim_shift,
						duration: _anim_duration,
						delay: _in_delay + i * _delay_mul
					}}
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
						><path
							fill-rule="evenodd"
							d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"
						></path></svg
					>
					<a href={github_gist.html_url} alt="">
						{#if github_gist.description}
							{github_gist.description}
						{:else}
							{Object.keys(github_gist.files)[0]}
						{/if}
					</a>
				</div>
			{/if}
		{/each}
	{/each}
</div>
