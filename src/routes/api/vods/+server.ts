import { json } from "@sveltejs/kit";
import processedVideos from "$lib/data/video_objects";
import { currentQuery, searchQuery } from "$lib/data/query_state.svelte";


export function GET() {
    // logic ...
	return json(processedVideos); // response
}

export function POST() {
    // set search query.
    searchQuery.value = currentQuery;
    return searchQuery.value
}
