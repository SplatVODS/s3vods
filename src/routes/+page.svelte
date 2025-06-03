<script lang="ts">
    import "./global.css";
    import Hero from "$lib/components/Hero.svelte";
    import RedirectButton from "$lib/components/RedirectButton.svelte";
    import Nav from "$lib/components/Nav.svelte";
</script>

<div class="container">
    <Nav></Nav>

    <Hero/>

    <RedirectButton/>

    <p class="about" id="about">Hello, this web app was created to access Splatoon 3 VODS</p>
</div>

<style> 
    .container {
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