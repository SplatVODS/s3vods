<script lang="ts">
	import { onMount } from "svelte";

	let scrollY: number;
	let scrolled = false;

	function handleScroll() {
		scrollY = window.scrollY;
		scrolled = scrollY > 0;
	}

	onMount(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
</script>

<header class="header" class:scrolled>
	<div class="container">
		<div class="branding">
			<a href="/" class="brand-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
					<circle cx="12" cy="12" r="10" fill="currentColor" />
					<polygon points="10 8 16 12 10 16" fill="white" stroke="none" />
				</svg>
                <span class:scrolled-text={scrolled}>S3 VODS</span>
			</a>
		</div>

		<nav>
			<ul class="nav-list">
				<li><a href="/" class="nav-link">Home</a></li>
				<!-- <li><a href="/#about" class="nav-link">About</a></li> -->
				<li><a href="/vods" class="nav-link">Vods</a></li>
			</ul>
		</nav>
	</div>
</header>
<div style="margin-bottom: 4rem;"></div>

<style>
	.header {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1000;
		transition: all 0.3s ease;
		background-color: white;
	}

	.header.scrolled {
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
	}

    .scrolled-text {
        color: #5353fd;
    }

	.container {
		margin: 0 auto;
		height: 4rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 10%;
	}

	.branding {
		display: flex;
		align-items: center;
	}

	.brand-link {
		font-size: 1.5rem;
		font-weight: bold;
		color: #5353fd; /* primary-500 */
		display: flex;
		align-items: center;
		text-decoration: none;
	}

	span {
		color: black;
		transition: all 0.3s ease;
		font-family: sans-serif;
		font-weight: 800;
	}

	.nav-list {
		display: flex;
		gap: 2rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.nav-link {
		font-family: sans-serif;
		font-weight: 600;
		color: black;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.nav-link:hover {
		color: #5353fd;
	}
</style>
