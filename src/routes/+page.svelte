<script lang="ts">
    import "$lib/styles/global.css";
    import Nav from "$lib/components/Nav.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import Searchbar from "$lib/components/Searchbar.svelte";
	import SocialLinks from "$lib/components/SocialLinks.svelte";
    import RedirectButton from "$lib/components/RedirectButton.svelte";
</script>

<div class="layout-container">
    <Nav></Nav>

    <Hero/>

    <Searchbar/>

    <SocialLinks/>

    <RedirectButton/>

    <p class="about" id="about">Hello, this web app was created to access Splatoon 3 VODS</p>
</div>

<style> 
    .layout-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        height: 100dvh;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .about {
        padding: 800px 0 800px 0;
    }
</style>