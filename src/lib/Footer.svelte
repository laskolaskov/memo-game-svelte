<script lang="ts">
    import ResetScreen from "./ResetScreen.svelte";

    let resetGameModal: ResetScreen;
</script>

<footer class="h-12 m-1 pl-2 pt-2 border-4 rounded-2xl border-black">
    <p class="inline w-1/2">
        Memory game by <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/laskolaskov/memo-game-svelte"
            >Lasko Laskov</a
        >
    </p>
    <button
        type="button"
        class="inline float-right pr-2"
        on:click={() => {
            resetGameModal.open();
        }}>Reset game</button
    >
</footer>

<ResetScreen bind:this={resetGameModal} />
