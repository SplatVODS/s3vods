<script lang="ts">
    import { currentQuery, searchQuery } from "$lib/data/query_state.svelte";
    import { page } from "$app/state"
	import { goto } from "$app/navigation";

    function handleSearch() {
        searchQuery.value = currentQuery.value
        console.log(page.url.pathname);
        if (!page.url.pathname.includes('/vods')) {
            goto('/vods');
        }
    }

    function handleEnterKeySearch(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }
</script>

<div class="searchbar-container">
    <input
        type="text"
        placeholder="Search VODS..."
        bind:value={currentQuery.value}
        on:keydown={handleEnterKeySearch}
        class="searchbar"
    />
    <button class="svg-button" aria-label="submit-search" on:click={handleSearch}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    </button>
</div>

<style>
    .searchbar-container {
        display: flex;
        align-items: center;
        background-color: transparent;
        border-radius: 25px;
        border: 3px solid #4646ff;
    }

    .searchbar {
        outline: none;
        padding: 20px;
        background: transparent;
        border-radius: 25px;
        border: none;
    }

    .svg-button {
        background-color: #4646ff;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 5px;
        cursor: pointer;
        transition: transform 0.2s ease, background-color 0.2s ease;
    }

    .svg-button:hover {
        transform: scale(1.1);
        background-color: #3535ff;
    }
</style>