<script>
    import { onMount } from "svelte"

    export let list;
    export let minImgWidth = 150;

    let ul;
    let delta = 0;
    let realDisplayWidth;
    let overrun;
    let frameWidth;
    let imgWidth;

    // $:{
    //     console.log("delta", delta);
    //     console.log('imgWidth', imgWidth);
    //     console.log('frameWidth', frameWidth);
    //     console.log('overrun', overrun);
    //     console.log('realDisplayWidth', realDisplayWidth);
    //     console.log(list);
    // }

    const calcImageWidth = (rectWidth)=>{
        const imgCount = Math.floor(rectWidth / minImgWidth)
        return rectWidth / imgCount
    }

    const moveLeft = ()=>{
        if (frameWidth >= realDisplayWidth){
            return
        }
        overrun = realDisplayWidth - (delta + frameWidth)
        if (overrun > frameWidth){
            delta += ul.getBoundingClientRect().width
            ul.style.translate=`${-delta}px`
            return
        }
        delta += overrun
        overrun = 0
        ul.style.translate=`${-delta}px`
    }

    const moveRight = ()=>{
        if (delta > frameWidth){
            delta -= frameWidth
            overrun += frameWidth
            ul.style.translate=`${-delta}px`
            return
        }
        overrun += delta
        delta = 0
        ul.style.translate=`${delta}px`
    }

    const resize = ()=>{
        ul.style.translate = `${-delta}px`
        delta = 0
        imgWidth = calcImageWidth(ul.getBoundingClientRect().width)
        frameWidth = ul.getBoundingClientRect().width
        realDisplayWidth = imgWidth * list.length
        overrun = realDisplayWidth - (delta + frameWidth)
    }

    onMount(()=>{
        if (list.length){
            imgWidth = calcImageWidth(ul.getBoundingClientRect().width)
            realDisplayWidth = imgWidth * list.length
            frameWidth = ul.getBoundingClientRect().width
            overrun = realDisplayWidth - (delta + frameWidth)
        }
    })
</script>

<svelte:window on:resize={()=> resize()}/>

<div>
    <span><button disabled={ delta === 0 } on:click={ ()=> moveRight() }></button></span>
    <span><button disabled={ overrun === 0 } on:click={ ()=> moveLeft() }></button></span>
    <ul bind:this={ul}>
        {#each list as item }
            <li><img style="width:{imgWidth}px" src={item.imageUrl} alt={item.alt}></li>
        {/each}
    </ul>
</div>

<style>
    :root{
        --spanPadding: 2em;
    }
    div:has(span){
        position: relative;
        margin: 1em;
        overflow: hidden;
    }
    div span {
        position: absolute;
        top: calc(50% - var(--spanPadding));
        z-index: 20;
    }
    div span:nth-child(2){
        right: 0;
    }
    button {
        padding: var(--spanPadding);
        opacity: .5;
        background-color: black;
        border: 3px solid white;
    }
    ul {
        display: flex;
        transition: .5s;
    }
    ul li {
        list-style: none;
        transform-origin: center;
    }
    ul li:hover {
        scale: 1.2;
    }
    img {
        object-fit: cover;
    }
</style>