<script lang="ts">
	import DescriptionCard from './DescriptionCard.svelte';

	// Send Replays (Send us your replay code(s) OR a link to a published youtube video!)
	// We Record It (We will use our capture cards to record your replays so you do not need any setup!)
	// We Post It (Your VOD then gets added to this site with a video preview, title, player name, and tags!)
	// You Search VODS (Filter through many vods using the searchbar!)
</script>

<section class="area">
	<h1>How It Works</h1>

	<div class="descriptions">
		<DescriptionCard
			header="Send Replays"
			description="Send us your replay code(s) OR a link to a published youtube video!"
			svg_path="/replay.svg"
		/>

		<DescriptionCard
			header="We Record It"
			description="We will use our capture cards to record your replays so you do not need any setup!"
			svg_path="/replay.svg"
		/>

		<DescriptionCard
			header="We Post It"
			description="Your VOD then gets added to this site with a video preview, title, player name, and tags!"
			svg_path="/replay.svg"
		/>

		<DescriptionCard
			header="You Search VODS"
			description="Filter through many vods using the searchbar!"
			svg_path="/replay.svg"
		/>
	</div>
</section>

<style>
	.area {
		background-color: #e0e1ff;
		color: #1d1d1d;
		font-family: sans-serif;
		width: 100%;
		text-align: center;
	}

	.descriptions {
        display: flex;
        justify-content: center;
        flex: 1;
        align-items: center;
        flex-wrap: wrap;
        gap: 5%;
	}
</style>
