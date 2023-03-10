<script lang="ts">
    import { game } from "./stores";
    import Card from "./Card.svelte";
    import Score from "./Score.svelte";

    let mainClass = "p-6 bg-yellow-300 grid grid-cols-6 gap-4"
</script>

<Score />

<div class={mainClass}>
    {#each $game as c}
        <Card card={c} />
    {/each}
</div>