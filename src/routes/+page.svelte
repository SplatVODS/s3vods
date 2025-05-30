<script lang="ts">
    import "./global.css";
    import Hero from "$lib/components/Hero.svelte";
    import RedirectButton from "$lib/components/RedirectButton.svelte";
    import Bar from "$lib/components/Bar.svelte";
    import Nav from "$lib/components/Nav.svelte";
</script>

<style> 
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100vh;
    }
</style>

<div class="container">
    <Nav></Nav>

    <Hero/>
    <RedirectButton/>
</div>


