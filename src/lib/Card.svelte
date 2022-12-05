<script lang="ts">
    export let val: number
    export let size: number

    console.log('size in card :: ', size)

    $: s = size == 4 ? 14 : size == 6 ? 8 : 6
</script>

<div class="card" style="--s: {s}vh">
    {val}
</div>

<style>
    /* div {
        color:goldenrod;
        display: inline-block;
        border: 1px solid goldenrod;
        width: var(--s);
        padding: 1em;
        height: var(--s);
        margin: 0.1em;
    } */
    .card {
        background-color: lightgreen;
        color:black;
    }
</style>
