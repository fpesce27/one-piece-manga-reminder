import { callAPI } from "../cron-job";
import { getChapterImages, getChapterNumber, postChapter } from "../dbFunctions";

export async function GET(request: Request) {
    let capitulo = await getChapterNumber();
    let response = await callAPI(capitulo);
    if (response.length !== 0) {
        await postChapter(response, capitulo + 1);
    } else {
        response = await getChapterImages() as string[];
    }
    return new Response(JSON.stringify(response), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}