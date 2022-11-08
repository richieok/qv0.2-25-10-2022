<script>
    import ImageCarousel from "$lib/components/ImageCarousel.svelte"
    import { onMount } from "svelte"
    import { element } from "svelte/internal";
    export let data;
    
    let list = []
    

    // $:{
    //     if (data?.movielist?.results?.length){
    //         data?.movielist?.results?.forEach((element, index) => {
    //             // console.log(element);
    //             list[index] = {
    //                 imageUrl: `https://image.tmdb.org/t/p/w500${element.poster_path}`,
    //                 alt: element.id
    //             }
    //         });
    //         // console.log(list);
    //     }
    // }

    onMount(()=>{
        if (data?.movielist?.results?.length){
            data?.movielist?.results?.forEach((element, index) => {
                // console.log(element);
                list[index] = {
                    imageUrl: `https://image.tmdb.org/t/p/w500${element.poster_path}`,
                    alt: element.id
                }
            });
            // console.log(list);
        }
    })
</script>

<h4>Found {data.movielist.results.length} movie{data.movielist.results.length>1?'s':''}</h4>


{#if list.length}
    <ImageCarousel {list}/>
{/if}

<style>
    h4 {
        text-align: center;
    }
</style>