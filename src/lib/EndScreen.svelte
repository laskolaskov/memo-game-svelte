<script lang="ts">
    import Modal from "./Modal.svelte";
    import { gameEnded, p1name, p2name, resetGame, winner } from "./stores";

    $: showModal = $gameEnded;
</script>

<Modal bind:showModal css="bg-sky-100 border-4 rounded-2xl border-black">
    <div>
        <h1 class="my-2 text-center text-2xl text-slate-700">Game Ended!</h1>
        {#if $winner === 0}
            <!-- nothing to render-->
        {:else if $winner === 1}
            <p class="text-center text-2xl text-slate-700">The winner is:</p>
            <p class="text-center text-3xl text-green-700 mt-5">
                !!! {$p1name} !!!
            </p>
        {:else}
            <p class="text-center text-2xl text-slate-700">The winner is:</p>
            <p class="text-center text-3xl text-green-700 mt-5">
                !!! {$p2name} !!!
            </p>
        {/if}
        <button
            on:click={() => resetGame()}
            class="block px-3 mt-5 h-10 text-white font-bold bg-blue-300 mx-auto mb-10 border-4 border-blue-500 rounded-xl hover:border-blue-700 hover:bg-blue-400"
            >NEW GAME</button
        >
        <a
            class="text-slate-500"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/laskolaskov/memo-game-svelte"
            >By Lasko Laskov</a
        >
    </div>
</Modal>
