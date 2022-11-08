<script>
    import { page } from "$app/stores";
    export let links;
    let checked = false;

</script>

<div class="nav">
    <div class="toggle">
        <svg>
            <g>
                {#if checked}
                    <path style="stroke:white;stroke-width:5;stroke-linecap:round" d="m 10 20 L 35 42"></path>
                    <path style="stroke:white;stroke-width:5;stroke-linecap:round" d="m 10 42 L 35 20"></path>
                {:else}
                    <path style="stroke:black;stroke-width:5;stroke-linecap:round" d="m 10 20 L 35 20"></path>
                    <path style="stroke:black;stroke-width:5;stroke-linecap:round" d="m 10 31 L 35 31"></path>
                    <path style="stroke:black;stroke-width:5;stroke-linecap:round" d="m 10 42 L 35 42"></path>
                {/if}
            </g>
        </svg>
        <input type="checkbox" bind:checked={checked}/>
    </div>
    <ul class:slideout={checked}>
        {#if links}
            {#each links as link}
                <li class:active={$page.url.pathname === `${link.href}`}>
                    <a href={link.href}>{link.name}</a>
                </li>
            {/each}
        {/if}
    </ul>
</div>

<style>
    :root{
        --mini-nav-width: 150px;
    }
    .nav {
        position: relative;
        display: flex;
        flex-direction: row;
        font-size: 1.2em;
        justify-content: flex-end;
    }
    ul {
        position: absolute;
        display: flex;
        width: var(--mini-nav-width);
        flex-direction: column;
        align-items: space-around;
        right: calc(-1 * var(--mini-nav-width));
        /* top: 2em; */
        z-index: 8;
        list-style: none;
        padding: 3em 0em 1em;
        background-color: rgba(30,30,30,.7);
        transition: translate .3s;
        border-radius: 20px 0 0 20px;
    }
    .slideout {
        translate: calc(-1* var(--mini-nav-width));
        z-index: 10;
    }
    li {
        padding: .5em 0em;
        margin: .2em 0em;
        border-radius: 10px;
    }
    a {
        text-decoration: none;
        color: rgba(230, 228, 244, 0.874);
        padding: 1em;
        text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.9);
    }
    .active {
        font-weight: bold;
        text-transform: uppercase;
    }
    .toggle {
        position: relative;
        /* padding: 1em 1em .25em .25em; */
        z-index: 20;
    }
    .toggle input {
        width: 4em;
        height: 4em;
        opacity: 0;
    }
    .toggle svg {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -2;
    }
    .toggle path {
        transition: .5s;
    }

    @media screen and (min-width: 420px) {
        ul {
            position: static;
            display: flex;
            flex-direction: row;
            padding: 1em 0em;
            background-color: transparent;
            width: 100%;
        }
        .toggle {
            position: relative;
            display: none;
        }
    }
</style>
