<script lang="ts">
    import { game } from "./stores";
    import Card from "./Card.svelte";

    let mainClass = "landscape:m-auto portrait:mt-auto landscape:w-1/2 landscape:h-full portrait:w-full portrait:h-1/2 bg-sky-300 grid grid-cols-6 grid-rows-6 gap-4"

</script>

<div id="head">
</div>

<div class={mainClass}>
    {#each $game as c}
        <Card val={c} />
    {/each}
</div>