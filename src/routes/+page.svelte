<svelte:head>
    <title>Home</title>
</svelte:head>

<div class="main">
    <div class="adjust">
        <div class="banner">
            <div>
                <h2>LET'S GET YOUR BUSINESS ONLINE</h2>
                <p>
                    We design full stack web solutions for your business and
                    services using reliable cloud providers.
                </p>
            </div>
            <div />
            <div />
        </div>
    </div>
</div>

<style>
    .main {
        height: 100vh;
        width: 100vw;
    }
    .adjust {
        padding-top: 6em;
    }
    .banner {
        position: relative;
        width: 300px;
        height: 350px;
        margin: 0 auto;
    }
    .banner h2 {
        padding: 0.5em 1em;
        color: rgba(230, 228, 244, 0.874);
        text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
    }
    .banner p {
        font-family: 'Poppins', sans-serif;
        padding: 1em;
        font-size: 1.2em;
    }
    .banner div {
        height: 100%;
        width: 100%;
        position: absolute;
        border-width: 3px;
        border-style: solid;
        border-radius: 10px;
        padding: 0.5em 1em;
        text-align: center;
        transform-origin: -20% 90%;
    }

    .banner div:nth-child(1) {
        z-index: 4;
        border-color: hsl(175, 98%, 36%);
        background-color: rgba(76, 168, 198, 0.894);
        box-shadow: 5px 10px 15px rgba(0, 0, 0, .5);
    }
    .banner div:nth-child(2) {
        z-index: -1;
        border-color: rgb(154, 149, 167);
        animation: tilt-tile-2 1s forwards;
        box-shadow: 5px 10px 15px rgba(0, 0, 0, .5);
    }
    .banner div:nth-child(3) {
        z-index: -2;
        border-color: lightblue;
        animation: tilt-tile-3 1s forwards;
    }

    @keyframes tilt-tile-2 {
        from {
            rotate: 0deg;
        }
        to {
            rotate: 20deg;
        }
    }

    @keyframes tilt-tile-3 {
        from {
            rotate: 0deg;
        }
        to {
            rotate: -20deg;
        }
    }
</style>
