<script>
    import List from "$lib/components/List.svelte";

    export let data
    let results;
    let total_pages;
    let total_results;
    let page = 1;

    $: if (data && data.tmdb){
        results = data.tmdb.results;
        total_results = data.tmdb.total_results
        total_pages = data.tmdb.total_pages
        // console.log(total_pages);
        // console.log("total_results", total_results);
        // console.log(results);
    }
    
    const next = async ()=>{
        page += 1
        const res = await fetch(`/api/movies/popular?language=en-US&page=${page}`)
        const jsonData = await res.json()
        if (jsonData.error){
            console.log(jsonData.errors);
            return
        }
        results = jsonData.results
    }

    const prev = async ()=>{
        page -= 1
        const res = await fetch(`/api/movies/popular?language=en-US&page=${page}`)
        const jsonData = await res.json()
        if (jsonData.error){
            console.log(jsonData.errors);
            return
        }
        results = jsonData.results
    }
    
</script>

<svelte:head>
    <title>Shop</title>
</svelte:head>

<div>
    {#if results}
        <h2>Page {page}</h2>
        <List items={results}/>
    {/if}
    <div class="controls">
        <button id="prev" disabled={page===1} on:click={prev}>Prev</button>
        <button id="next" disabled={page===500} on:click={next}>Next</button>
    </div>
</div>

<style>
    h2 {
        padding: 1em;
        text-align: center;
        color: var(--coolwhite);
    }
    div {
        padding: 1em;
    }
    button {
        padding: .5em;
        font-size: .8em;
    }
    .controls {
        display: grid;
        grid-template-columns: repeat(5, auto);
        align-items: center;
        justify-items: center;
    }
    .controls button {
        padding: 1em;
        max-width: 150px;
        border-radius: 10px;
    }
    #next {
        grid-column-start: 5;
    }
</style>