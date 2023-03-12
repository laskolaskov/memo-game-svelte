<script lang="ts">
    import { derived } from "svelte/store";
    import { isPlayerOneTurn } from "./stores";

    export let score: number;
    export let isPlayerOne: boolean;

    let mainColor = isPlayerOne ? "text-green-500" : "text-red-500";
    let fadeColor = isPlayerOne ? "text-green-300" : "text-red-300";
    //let mainBGColor = isPlayerOne ? "bg-green-500" : "bg-red-500";
    let fadeBGColor = isPlayerOne ? "bg-green-50" : "bg-red-50";
    let mainBorderColor = isPlayerOne ? "border-green-500" : "border-red-500";
    let fadeBorderColor = isPlayerOne ? "border-green-100" : "border-red-100";
    //base CSS
    const baseCSS = "h-full w-full border-4 rounded-2xl flex justify-center items-center text-3xl"

    let mainClass = derived(isPlayerOneTurn, ($isPlayerOneTurn) => { 
        if (
            ($isPlayerOneTurn && isPlayerOne) ||
            (!$isPlayerOneTurn && !isPlayerOne)
        ) {
            return `${baseCSS} ${mainBorderColor} ${mainColor} ${fadeBGColor}`;
        }
        return `${baseCSS} ${fadeBorderColor} ${fadeColor} ${fadeBGColor}`;
    });
</script>

<div class="w-1/2 h-full float-left p-2">
    <div class={$mainClass}>
        Player {isPlayerOne ? 1 : 2} : {score}
    </div>
</div>
