<script lang="ts">
    import { game } from "./stores";
    import Card from "./Card.svelte";
</script>

<div class="p-1 grid grid-cols-6 gap-1">
    {#each $game as c}
        <Card card={c} />
    {/each}
</div>
