<script lang="ts">
    import { query } from "$lib/data/query"
</script>

<div class="outer-searchbar-container">
    <div class="searchbar-container">
    <input
        type="text"
        placeholder="Search VODS..."
        bind:value={$query}
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