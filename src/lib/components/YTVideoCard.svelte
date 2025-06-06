<script>
    let {
		title = "Title",
		video_id = "",
	} = $props();
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
    
</style>
