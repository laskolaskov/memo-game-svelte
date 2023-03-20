<script lang="ts">
    import Score from "./lib/Score.svelte";
    import Footer from "./lib/Footer.svelte";
    import Board from "./lib/Board.svelte";
    import StartScreen from "./lib/StartScreen.svelte";
    import EndScreen from "./lib/EndScreen.svelte";
</script>

<main class="lg:w-1/2 lg:mx-auto">
    <Score />
    <Board />
    <Footer />
</main>

<StartScreen />
<EndScreen />
