<script lang="ts">
    import { game } from "./stores";
    import Card from "./Card.svelte";

    let mainClass = "p-6 bg-yellow-300 grid grid-cols-6 gap-4"
</script>

<div id="head">
</div>

<div class={mainClass}>
    {#each $game as c}
        <Card card={c} />
    {/each}
</div>