<script lang="ts">
    import { game } from "./stores";
    import Card from "./Card.svelte";
</script>

<div class="p-2 grid grid-cols-6 gap-2">
    {#each $game as c}
        <Card card={c} />
    {/each}
</div>
