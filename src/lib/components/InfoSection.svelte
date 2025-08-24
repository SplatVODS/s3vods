<script lang="ts">
	import DescriptionCard from './DescriptionCard.svelte';
	import RedirectButton from './RedirectButton.svelte';
	import replay_icon from '$lib/icons/replay.svg'
	import host_icon from '$lib/icons/host.svg'
	import search_icon from '$lib/icons/search.svg'
	import camera_icon from '$lib/icons/camera.svg'


	// Send Replays (Send us your replay code(s) OR a link to a published youtube video!)
	// We Record It (We will use our capture cards to record your replays so you do not need any setup!)
	// We Post It (Your VOD then gets added to this site with a video preview, title, player name, and tags!)
	// You Search VODS (Filter through many vods using the searchbar!)
</script>

<section class="area">
	<h1>How It Works</h1>

	<div class="descriptions">
		<DescriptionCard
			header="1. Send a replay"
			description="High level players send us replay codes OR a link to a published youtube video!"
			svg_path={replay_icon}
		/>

		<DescriptionCard
			header="2. We Record It"
			description="We will use our capture cards to record your replays so you don't need a setup!"
			svg_path={camera_icon}
		/>

		<DescriptionCard
			header="3. We Host It"
			description="Your VOD then gets added to this site with a video preview, title, player name, and tags!"
			svg_path={host_icon}
		/>

		<DescriptionCard
			header="4. You Search VODS"
			description="Anyone can filter through VODs using the searchbar! Or, just check the VODs page."
			svg_path={search_icon}
		/>
	</div>
</section>

<style>
	.area {
		background-color: var(--background-accent);
		color: var(--text-primary);
		font-family: sans-serif;
		width: 100%;
		text-align: center;
	}

	.descriptions {
			display: grid;
			align-content: center;
			grid-template-columns:  repeat(2, 1fr);
			gap: 2rem;
			margin: 0 8dvw;
	}

	@media(max-width: 700px) {
			.descriptions {
					margin: 0 1rem;
					gap: 0.7rem;
          grid-template-columns: 1fr;
      }
	}
</style>
