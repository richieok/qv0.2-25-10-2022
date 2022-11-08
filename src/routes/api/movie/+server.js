import { json } from "@sveltejs/kit"

export async function POST({request}){
    let reply = {}
    try{
        const { id } = await request.json()
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=7f133a015879b4682f0c6b8f01b29da9&language=en-US`
        console.log(url);
        const res = await fetch(url)
        reply = await res.json()
    }
    catch(e){
        console.log(e.message);
    }
    finally{
        return json(reply)
    }
}