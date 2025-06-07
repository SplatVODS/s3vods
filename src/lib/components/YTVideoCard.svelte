<script>
    let {
		title = "Title",
		video_id = "",
	} = $props();

	// use svelte {} in html to set the width and height of the iframe
	// OR set it to a static and then use css to change it using width: 100% of the card container
</script>

<iframe
	width="1296" 
	height="729"
	src="https://www.youtube.com/embed/{video_id}?rel=0&modestbranding=1"
	title="{title}"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen>
</iframe>

<style>
    iframe {
		width: 100%;
		height: auto;
	}
</style>
