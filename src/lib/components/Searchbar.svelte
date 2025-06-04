<script lang="ts">
    import { searchQuery } from "$lib/data/query_state.svelte";
</script>

<div class="outer-searchbar-container">
    <div class="searchbar-container">
    <input
        type="text"
        placeholder="Search VODS..."
        bind:value={searchQuery.value}
        class="search-bar"
    />
    </div>
</div>

<style>
    .searchbar-container {
        background-color: transparent;
    }

    .search-bar {
        padding: 20px;
    }
</style>