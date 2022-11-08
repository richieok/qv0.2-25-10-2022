<script>
    let hovering;
    // export let title;
    export let poster_path;
    export let id;

    function enter(){
        hovering = true;
    }

    function leave(){
        hovering = false
    }
</script>

<div on:mouseenter={enter} on:mouseleave={leave} class:active={hovering}>
    <!-- <h3>
        {title}
    </h3>
    <p>{id}</p> -->
    <a href="/shop/{id}">
        <img src="https://image.tmdb.org/t/p/w500{poster_path}" alt={poster_path}>
    
    </a>
</div>

<style>
    div {
        border: 4px solid rgba(0,0,0,0);
        transition: .5s;
        width: 300px;
    }
    img {
        width: 100%;
    }
    .active {
        border: 4px solid var(--coolwhite);
    }
</style>