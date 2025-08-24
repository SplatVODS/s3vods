<script>
	import { searchQuery, currentQuery } from '$lib/data/query_state.svelte.js';

	let {
		video_id = 'ZxxHfPM7NT8',
		title = 'Title',
		player = 'Player',
		social_link = 'https://sendou.ink/u',
		tags = ['tag1', 'tag2', 'tag3'],
	} = $props();
</script>

<div class="card">
	<div class="iframe-container">
		<iframe
			src="https://www.youtube.com/embed/{video_id}?rel=0&modestbranding=1"
			title="{title}"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		>
		</iframe>
	</div>

	<div class="card-header-container">
		<h3 class="card-title">{title}</h3>
			<a
				class="card-player-name"
				href={social_link}
				target="_blank"
				rel="noopener noreferrer"
				title="Visit player’s social profile">{player}</a>
	</div>

	<div class="card-tag-container">
		{#each tags as tag}
			<a class="card-tag" aria-role="search tag button" onclick={() => {searchQuery.value = tag, currentQuery.value = tag}}>{tag}</a>
		{/each}
	</div>
</div>

<style>
	.iframe-container {
		position: relative;
		width: 100%;
		aspect-ratio: 5/2;
		border-radius: 20px 20px 0 0;
		overflow: hidden;
	}

	.iframe-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: none;
	}

	.card {
		display: flex;
		flex-direction: column;
		margin: 0 25px;
		box-shadow: var(--box-shadow) 0px 5px 15px;
		border-radius: 20px;
		transition: all 0.3s ease-in-out;
	}

	.card:hover {
		box-shadow: var(--main-purple) 0px 5px 30px;
		transform: translateY(-10px);
	}

	.card-header-container {
		display: flex;
		flex-direction: column;
		padding: 4% 0 4% 4%;
		background-color: var(--surface);
	}

	.card-title {
		color: var(--text-primary);
		cursor: default;
		margin: 0;
	}

	.card-player-name {
		font-weight: bold;
		color: var(--text-accent);
	}

	.card-player-name:hover {
		text-decoration: none		;
	}

	.card-tag-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: left;
		border-radius: 0px 0px 20px 20px;
		padding: 4% 0 4% 4%;
		gap: 10px;
		background-color: var(--surface-light);
	}

	.card-tag {
		color: var(--text-secondary);
		border: 1px solid var(--text-secondary);
		border-radius: 20px;
		padding: 5px 10px;
		font-size: 16px;
		font-weight: bold;
		font-family: monospace;
			transition: all 0.2s ease-in-out;
	}

	.card-tag:hover {
			color: var(--background);
			background-color: var(--hover-blue);
			transform: translateY(-2px);
	}
</style>
