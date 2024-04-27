<script context="module">

</script>

<script>
	import { fade, fly, crossfade } from 'svelte/transition';

	import { _anim_duration, _anim_shift, _delay_mul, _in_delay, _out_delay, _username } from '../+layout.js';

	import { reveal } from 'svelte-reveal';

	export let data;

	import { afterUpdate } from 'svelte';
</script>

<svelte:head>
	<title>{_username} | Cool Repos</title>
</svelte:head>

<div class="container">
	<div class="container">
		{#each data.starred as cool_repo, i}
			{#key i}
				<div
					class="github_repo sr_hide"
					use:reveal={{
						transition: 'fly',
						x: -_anim_shift,
						duration: _anim_duration,
						delay: _in_delay + i * _delay_mul
					}}
				>
					<svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"
						><path
							fill-rule="evenodd"
							d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
						></path></svg
					>
					<a href={cool_repo.html_url} alt={cool_repo.full_name}>{cool_repo.full_name}</a>
				</div>
			{/key}
		{/each}
	</div>
</div>
