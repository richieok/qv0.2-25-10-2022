export async function load( {params, fetch} ){
    let movie = {}
    try{
        const id = params.slug
        // console.log(id);
        const res = await fetch('/api/movie', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({id})
        })
        movie = await res.json()
        // console.log(movie);
    }
    catch(e){
        e.message
    }
    finally {
        return {
            movie
        }
    }
}