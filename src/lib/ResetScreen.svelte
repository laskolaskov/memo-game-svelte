<script lang="ts">
    import Modal from "./Modal.svelte";
    import { resetGame } from "./stores";

    let showModal = false;
    let modal: Modal;

    export function open() {
        showModal = true;
    }
</script>

<Modal
    bind:this={modal}
    bind:showModal
    css="bg-sky-100 border-4 rounded-2xl border-black"
>
    <div>
        <h1 class="my-2 text-center text-2xl text-slate-700">
            Start new Game ?
        </h1>
        <button
            on:click={() => {
                resetGame();
                showModal = false;
            }}
            class="block px-3 mt-5 h-10 text-white font-bold bg-blue-300 mx-auto border-4 border-blue-500 rounded-xl hover:border-blue-700 hover:bg-blue-400"
            >NEW GAME</button
        >
        <button
            on:click={() => (showModal = false)}
            class="block px-3 h-10 text-white font-bold bg-red-300 mx-auto mb-10 mt-2 border-4 border-red-500 rounded-xl hover:border-red-700 hover:bg-red-400"
            >CANCEL</button
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
