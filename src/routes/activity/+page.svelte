<script>
	export let data;

	import { fade, fly, crossfade } from 'svelte/transition';
	import { _anim_duration, _anim_shift, _delay_mul, _in_delay, _out_delay, _username } from '../+layout.js';

	import { reveal } from 'svelte-reveal';

	if (!data.github_user_events) {
		data.github_user_events = [];
	}
</script>

<svelte:head>
	<title>{_username} | Activity</title>
</svelte:head>

<div class="container">
	<div class="container">
		{#each data.github_user_events as github_event, i}
			{#key i}
				<div
					class="github_event sr_hide"
					use:reveal={{
						transition: 'fly',
						x: -_anim_shift,
						duration: _anim_duration,
						delay: _in_delay + i * _delay_mul
					}}
				>
					{#if github_event.type}
						{#if github_event.type.toLowerCase().indexOf('issue') == 0}
							<svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"
								><path
									fill-rule="evenodd"
									d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"
								></path></svg
							>
							{#if github_event.type.toLowerCase().indexOf('comment') >= 0}
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
									><path
										fill-rule="evenodd"
										d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"
									></path></svg
								>
								<a href={github_event.payload.comment.html_url} alt={github_event.type}
									>{github_event.repo.name}</a
								>
							{:else}
								<a href={github_event.payload.issue.html_url} alt={github_event.type}
									>{github_event.repo.name}</a
								>
							{/if}
						{:else if github_event.type.toLowerCase().indexOf('pullrequest') == 0}
							<svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"
								><path
									fill-rule="evenodd"
									d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
								></path></svg
							>
							{#if github_event.type.toLowerCase().indexOf('comment') >= 0}
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
									><path
										fill-rule="evenodd"
										d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"
									></path></svg
								>
								<a href={github_event.payload.comment.html_url} alt={github_event.type}
									>{github_event.repo.name}</a
								>
							{:else}
								<a href={github_event.payload.pull_request.html_url} alt={github_event.type}
									>{github_event.repo.name}</a
								>
							{/if}
						{:else if github_event.type.toLowerCase().indexOf('merge') == 0}
							{#if github_event.type.toLowerCase().indexOf('comment') >= 0}
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
									><path
										fill-rule="evenodd"
										d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"
									></path></svg
								>
							{/if}
							<svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"
								><path
									fill-rule="evenodd"
									d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.45 1.9a2.25 2.25 0 10-1.95.218v5.256a2.25 2.25 0 101.5 0V7.123A5.735 5.735 0 009.25 9h1.378a2.251 2.251 0 100-1.5H9.25a4.25 4.25 0 01-3.8-2.346zM12.75 9a.75.75 0 100-1.5.75.75 0 000 1.5zm-8.5 4.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
								></path></svg
							>
							<a href={'https://github.com/' + github_event.repo.name} alt={github_event.type}
								>{github_event.repo.name}</a
							>
						{:else if github_event.type.toLowerCase().indexOf('fork') == 0}
							<svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"
								><path
									fill-rule="evenodd"
									d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
								></path></svg
							>
							{#if github_event.type.toLowerCase().indexOf('comment') >= 0}
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
									><path
										fill-rule="evenodd"
										d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"
									></path></svg
								>
								<a href={github_event.payload.comment.html_url} alt={github_event.type}
									>{github_event.repo.name}</a
								>
							{:else}
								<a href={'https://github.com/' + github_event.repo.name} alt={github_event.type}
									>{github_event.repo.name}</a
								>
							{/if}
						{:else if github_event.type.toLowerCase().indexOf('create') == 0}
							<svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"
								><path
									fill-rule="evenodd"
									d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
								></path></svg
							>
							<a href={'https://github.com/' + github_event.repo.name} alt={github_event.type}
								>{github_event.repo.name} ({#if github_event.payload.ref_type
									.toLowerCase()
									.indexOf('branch') == 0}{github_event.payload.ref}{:else}{github_event.payload
										.ref_type}{/if})</a
							>
						{:else if github_event.type.toLowerCase().indexOf('push') == 0}
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
								><path
									fill-rule="evenodd"
									d="M1 2.5A2.5 2.5 0 013.5 0h8.75a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V1.5h-8a1 1 0 00-1 1v6.708A2.492 2.492 0 013.5 9h3.25a.75.75 0 010 1.5H3.5a1 1 0 100 2h5.75a.75.75 0 010 1.5H3.5A2.5 2.5 0 011 11.5v-9zm13.23 7.79a.75.75 0 001.06-1.06l-2.505-2.505a.75.75 0 00-1.06 0L9.22 9.229a.75.75 0 001.06 1.061l1.225-1.224v6.184a.75.75 0 001.5 0V9.066l1.224 1.224z"
								></path></svg
							>
							<a
								href={'https://github.com/' +
									github_event.repo.name +
									'/commit/' +
									github_event.payload.head}
								alt={github_event.type}
								>{github_event.repo.name}/commit/{github_event.payload.head}</a
							>
						{:else if github_event.type.toLowerCase().indexOf('delete') == 0}
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
								><path
									fill-rule="evenodd"
									d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"
								></path></svg
							>
							<span>~binned something~</span>
						{:else if github_event.type.toLowerCase().indexOf('release') == 0}
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
								><path
									fill-rule="evenodd"
									d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"
								></path></svg
							>
							<a href={github_event.payload.release.html_url} alt={github_event.type}
								>{github_event.repo.name}</a
							>
						{:else}
							<!--nothing to add here-->
						{/if}
					{/if}
				</div>
			{/key}
		{/each}
	</div>
</div>
