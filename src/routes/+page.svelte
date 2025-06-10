<script lang="ts">
    import "$lib/styles/global.css";
    import Nav from "$lib/components/Nav.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import Search from "$lib/components/Search.svelte";
	import SocialLinks from "$lib/components/SocialLinks.svelte";
    import RedirectButton from "$lib/components/RedirectButton.svelte";
	import SupportButton from "$lib/components/SupportButton.svelte";
</script>

<div class="layout-container">
    <Nav></Nav>

    <Hero/>

    <!-- Make the state not update unless the search button is clicked, use form POST request which triggers the filter function -->
    <Search/>

    <SocialLinks/>

    <SupportButton/>

    <p class="about" id="about">Hello, this web app was created to access Splatoon 3 VODS</p>
    <RedirectButton/>
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