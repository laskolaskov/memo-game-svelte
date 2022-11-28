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

<div id="wrapper">
    <div id="board">
        <div id="content">
            {#each $game as c}
                <Card val={c} {size} />
            {/each}
        </div>
    </div>
</div>

<style>
    #head {
        margin: 2em 0;
    }

    #wrapper {
        background-color: grey;
    }

    #content {
        background-color: red;
        margin:auto;
    }

    #board {
        background-color: aqua;
        height: 80vh;
        width: 80vh;
        margin: auto;
    }
</style>
