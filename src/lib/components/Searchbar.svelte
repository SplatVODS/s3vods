<script lang="ts">
    import { searchQuery } from "$lib/data/query_state.svelte";
</script>

<div class="searchbar-container">
    <input
        type="text"
        placeholder="Search VODS..."
        bind:value={searchQuery.value}
        class="search-bar"
    />
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4646ff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
</div>

<style>
    .searchbar-container {
        display: flex;
        align-items: center;
        background-color: transparent;
        border-radius: 25px;
        border: 3px solid #4646ff;
    }

    .search-bar {
        outline: none;
        padding: 20px;
        background: transparent;
        border-radius: 25px;
        border: none;
    }
</style>
