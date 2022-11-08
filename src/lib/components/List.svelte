<script>
    import MovieCard from "./MovieCard.svelte"
    export let items = []
    
    const token = '7f133a015879b4682f0c6b8f01b29da9'
</script>

<div>
    <ul>
        {#each items as item}
            <li>
                <MovieCard id={item.id} poster_path={item.poster_path}/>
            </li>
        {/each}
    </ul>
</div>

<style>
    ul {
        display: grid;
        gap: 30px 20px;
        justify-content: center;
        align-items: center;
    }
    li {
        list-style: none;
    }

    @media (min-width: 700px){
        ul {
            grid-template-columns: repeat(2, auto);
        }
    }
    @media (min-width: 1000px){
        ul {
            grid-template-columns: repeat(3, auto);
        }
    }
    @media screen and (min-width: 1300px){
        ul {
            grid-template-columns: repeat(4, auto);
        }
    }
</style>