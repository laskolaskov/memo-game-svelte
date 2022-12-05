<script lang="ts">
    import { createGame } from "./stores";
    import Card from "./Card.svelte";

    let size = 6;
    let game = createGame(size);

    function changeSize(size) {
        game = createGame(size);
        console.log("game :: ", game);
        console.log("$game :: ", $game);
        console.log("size :: ", size);
    }
</script>

<div id="head">
    <select
        bind:value={size}
        on:change={(v) => {
            changeSize(size);
        }}
    >
        <option value={4}>4</option>
        <option value={6}>6</option>
        <option value={8}>8</option>
    </select>
</div>

<div id="board">
    {#each $game as c}
        <Card val={c} {size} />
    {/each}
</div>

<style>
    #board {
        display: grid;
        grid-template-columns: repeat(6, 10vw);
        grid-template-rows: repeat(6, 10vw);
        grid-gap: 1vw;
        padding: 1vw;
        background-color: aqua;
        width: 65vw;
        margin: auto;
    }
</style>
