import { json } from "@sveltejs/kit";
import processedVideos from "$lib/data/video_objects";


export function GET() {
    // logic ...
	return json(processedVideos); // response
}
