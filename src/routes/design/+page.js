export async function load({ fetch }){
    let movielist = {};
    try{
        const res = await fetch('api/movies/popular?language=en-US')
        movielist = await res.json()
    }
    catch(e){
        console.log(e);
    }
    finally{
        return {
            movielist
        }
    }
}