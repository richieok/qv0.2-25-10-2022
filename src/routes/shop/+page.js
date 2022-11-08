// import {json} from "@sveltejs/kit"

export async function load({ fetch }){
    let tmdb = {}
    try {
        const res = await fetch('/api/movies/popular?language=en-US')
        const j = await res.json()
        tmdb = j
    }
    catch (e ){
        console.log(e);
    }
    finally {
        return {
            tmdb
        }
    }
}