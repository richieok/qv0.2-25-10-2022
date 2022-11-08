<script>
    import TestForm from "$lib/components/TestForm.svelte"
    let movieId = 760741
</script>

<div>
    <TestForm action="/test">
        <input type="number" name="page" bind:value={movieId}>
        <button>Send</button>
    </TestForm>
</div>

<style>
    div {
        padding-top: 1em;
        height: 90vh;
    }
</style>