<script>
	import Nav from '$lib/components/Nav.svelte';

    let { children } = $props();
</script>

<div class="layout-container">
    <Nav/>
    {@render children()}
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
</style>