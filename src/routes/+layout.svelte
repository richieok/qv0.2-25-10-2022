<script>
    import "../app.css";
    import Nav from "$lib/components/Nav.svelte"

    export let data;
    const links = data.navmenu;
</script>

<div class="bg-img" />
<Nav {links}></Nav>
<slot />

<style>
    .bg-img {
        background: url("/bg-img-portrait.svg");
        position: fixed;
        width: 100vw;
        min-height: 100vh;
        background-size: cover;
        z-index: -10;
    }

    @media screen and (min-width: 820px) {
        .bg-img {
            background: url("/bg-img.svg");
        }
    }
</style>
