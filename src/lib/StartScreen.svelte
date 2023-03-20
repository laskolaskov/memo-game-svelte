<script lang="ts">
    import Modal from "./Modal.svelte";
    import { p1name, p2name, gameStarted } from "./stores";

    $: showModal = !$gameStarted;

    function startGame() {
        showModal = false
        $gameStarted = true
    }
</script>

<Modal bind:showModal css="bg-sky-100 border-4 rounded-2xl border-black">
    <div>
        <h1 class="my-2 text-center text-5xl text-slate-700">Welcome to Memo!</h1>
        <p class="mt-5 text-center text-2xl text-slate-700">First to 10 wins!</p>
        <p class="text-center text-2xl text-slate-700">Enter you names:</p>
        <input type="text" bind:value={$p1name} class="block w-full text-2xl p-1 my-5 border-4 rounded-xl border-green-500 bg-green-200 focus:border-green-700 focus:bg-green-300 text-green-700 text-center focus:outline-none" />
        <input type="text" bind:value={$p2name} class="block w-full text-2xl p-1 my-5 border-4 rounded-xl border-red-500 bg-red-200 focus:border-red-700 focus:bg-red-300 text-red-700 text-center focus:outline-none" />
        <button on:click={() => startGame()} class="block w-1/2 h-10 text-white font-bold bg-blue-300 mx-auto mb-10 border-4 border-blue-500 rounded-xl hover:border-blue-700 hover:bg-blue-400">START GAME</button>
        <a class="text-slate-500" target="_blank" rel="noreferrer" href="https://github.com/laskolaskov/memo-game-svelte">By Lasko Laskov</a>
    </div>
</Modal>
