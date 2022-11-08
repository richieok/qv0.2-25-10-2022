<script>
    export let data;
    let movie
    $: {
        if (data && data.movie){
            movie = data.movie
        }
    }
</script>

<div>
    {#if movie}
        <h2>{movie.title}</h2>
        <img src="https://image.tmdb.org/t/p/w500{movie.backdrop_path}" alt="">
        <p>{movie.overview}</p>
        <p>{movie.runtime} mins</p>
    {/if}
</div>