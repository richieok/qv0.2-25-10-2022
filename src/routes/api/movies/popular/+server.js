// import { json } from "@sveltejs/kit";
import { getApiKey } from "$lib/server/aws-ssm.js"

export async function GET({ url }){
    let data = {};
    const API_KEY = await getApiKey()
    console.log(API_KEY);
    try{
        const page = url.searchParams.get('page')
        // if ( page ){
        // }
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
        data = await res.json()
        // console.log("page: ", page);
        // console.log(data);

    }
    catch(e){
        console.log(e.message);
    }
    finally{
        return new Response(JSON.stringify(data), {
            headers: {
                "Content-Type": 'application/json'
            }
        })
    }
}

