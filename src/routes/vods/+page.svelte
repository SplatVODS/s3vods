<script lang="ts">
    import processedVideos from "$lib/data/video_objects";
    import VideoCard from "$lib/components/VideoCard.svelte";
    import { searchQuery } from "$lib/data/query_state.svelte";
    import Searchbar from "$lib/components/Searchbar.svelte";


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

        <button 
            onclick={() => goToPage(currentPage + 1)} 
            disabled={currentPage === totalPages}
        >
            Next
        </button>
        <button 
            onclick={() => goToPage(totalPages)} 
            disabled={currentPage === totalPages}
        >
            Last
        </button>
    </div>

    <!-- <input type="search" class="search-bar" placeholder="Search VODS..." bind:value={searchQuery.value}/> -->
    <Searchbar/>

    <span class="pagination-info">
        Page {currentPage} of {totalPages}
    </span>
</div>

<div class="card-grid">
    {#each paginatedVideos as video}
    <!-- maybe use a serverless function to fetch video thumbnail from youtube link -->
        <VideoCard {...video}/>
    {/each}
</div>

<style>
    @import "$lib/styles/base.css";
    .search-bar {
        border: none;
        border-radius: 25px;
        padding: 10px 20px;
        font-size: 25px;
        font-family: monospace;
        background-color: var(--dull-white);
        color: rgb(70, 70, 255);
        width: 100%;
        max-width: 300px;
    }

    .search-bar::placeholder {
        color: rgb(70, 70, 255);
    }

    .search-bar:focus {
        outline: none
    }

    .search-bar:focus::placeholder {
        color: transparent;
    }

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
        border: none;
        border-radius: 5px;
        background-color: var(--dull-white);
        color: rgb(70, 70, 255);
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        min-width: 80px;
    }

    .pagination button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .pagination button:hover:not(:disabled) {
        background-color: rgb(70, 70, 255);
        color: var(--dull-white);
    }

    .pagination-info {
        background-color: var(--dull-white);
        border-radius: 5px;
        padding: 8px 16px;
        color: rgb(70, 70, 255);
        margin: 0 20px;
        cursor: default;
        text-align: center;
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
    }

    @media screen and (max-width: 768px) {
        .pagination {
            flex-direction: column;
            gap: 20px;
        }

        .pagination-controls {
            width: 100%;
            justify-content: center;
        }

        .pagination-info {
            margin: 10px 0;
            width: 100%;
            max-width: 200px;
        }

        .search-bar {
            width: 100%;
            max-width: none;
            font-size: 20px;
        }
    }

    @media screen and (max-width: 600px) {
        .card-grid {
            grid-template-columns: 1fr;
        }

        .pagination button {
            padding: 6px 12px;
            font-size: 14px;
            min-width: 60px;
        }

        .search-bar {
            font-size: 16px;
            padding: 8px 16px;
        }
    }
</style>