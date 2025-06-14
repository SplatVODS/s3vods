<script lang="ts">
    import processedVideos from "$lib/data/video_objects";
    import YtVideoCard from "$lib/components/YTVideoCard.svelte";
    import { searchQuery } from "$lib/data/query_state.svelte";
    import Search from "$lib/components/Search.svelte";


    let currentPage: number = $state(1);
    const itemsPerPage: number = 6; // Changed to 6 items per page by default

    let filtered_videos = $derived(processedVideos.filter(
        ({ lowerTitle, lowerPlayer, lowerTags }) =>
            lowerTitle.includes(searchQuery.value.toLowerCase()) ||
            lowerPlayer.includes(searchQuery.value.toLowerCase()) ||
            lowerTags.some((tag) => tag.includes(searchQuery.value.toLowerCase()))
    ));

    let totalPages = $derived(Math.ceil(filtered_videos.length / itemsPerPage));
    let paginatedVideos = $derived(
        filtered_videos.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        )
    );

    function goToPage(page: number) {
        if (page >= 1 && page <= totalPages) {
            currentPage = page;
        }
    }

    // Reset to first page when search query changes
    $effect(() => {
        if (searchQuery.value) {
            currentPage = 1;
        }
    });
</script>

<div class="pagination">
    <div class="pagination-controls">
        <div class="group-order">
            <button 
            onclick={() => goToPage(1)} 
            disabled={currentPage === 1}
        >
            First
        </button>

        <button 
            onclick={() => goToPage(currentPage - 1)} 
            disabled={currentPage === 1}
        >
            Previous
        </button>
        </div>

        <Search/>

        <div class="group-order">
            <button 
            onclick={() => goToPage(currentPage + 1)} 
            disabled={currentPage === totalPages}>
            Next
            </button>

        <button 
            onclick={() => goToPage(totalPages)} 
            disabled={currentPage === totalPages}
        >
            Last
        </button>

        </div>
    </div>

    <span class="pagination-info">
        Page {currentPage} of {totalPages}
    </span>
</div>

<div class="card-grid">
    {#each paginatedVideos as video}
        <!-- <VideoCard {...video}/> -->
        <YtVideoCard {...video}/>
    {/each}
</div>

<style>
    @import "$lib/styles/base.css";
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 25px 0;
        flex-wrap: wrap;
    }

    .pagination-controls {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .pagination button {
        padding: 8px 16px;
        border: 2px solid var(--main-purple);
        border-radius: 10px;
        background-color: var(--dull-white);
        color: var(--main-purple);
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        min-width: 80px;
    }

    .pagination button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .pagination button:hover:not(:disabled) {
        background-color: var(--main-purple);
        color: var(--dull-white);
    }

    .pagination-info {
        background-color: transparent;
        border-radius: 5px;
        padding: 8px 16px;
        color: var(--main-purple);
        margin: 0 20px;
        cursor: default;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
    }

    .card-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        align-items: start;
    }

    @media screen and (max-width: 1024px) {
        .card-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        .pagination {
            flex-direction: column;
        }
    }

    @media screen and (max-width: 768px) {
        .card-grid {
            grid-template-columns: 1fr;
        }

        .pagination {
            gap: 20px;
        }

        .pagination-controls {
            flex-direction: column;
            width: 100%;
            justify-content: center;
        }

        .pagination-info {
            margin: 10px 0;
            width: 100%;
            max-width: 200px;
        }
    }

    @media screen and (max-width: 600px) {
        .pagination button {
            padding: 6px 12px;
            font-size: 14px;
            min-width: 60px;
        }
    }
</style>
