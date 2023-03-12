<script lang="ts">
    import Player from "./Player.svelte";
    import { p1score, p2score } from "./stores";
</script>

<div class="h-24">
    <Player isPlayerOne={true} score={$p1score} />
    <Player isPlayerOne={false} score={$p2score} />
</div>
