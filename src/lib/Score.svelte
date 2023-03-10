<script lang="ts">
    import Player from "./Player.svelte";
    import { p1score, p2score } from "./stores";
</script>

<div class="h-24 bg-gray-400">
    <div class="w-1/2 h-full bg-green-300 float-left p-2">
        <Player isPlayerOne={true} score={$p1score} />
    </div>
    <div class="w-1/2 h-full bg-green-300 float-left p-2">
        <Player isPlayerOne={false} score={$p2score} />
    </div>
</div>
