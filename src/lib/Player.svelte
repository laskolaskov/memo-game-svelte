<script lang="ts">
    import { derived } from "svelte/store";
    import { isPlayerOneTurn, p1name, p2name } from "./stores";

    export let score: number;
    export let isPlayerOne: boolean;

    let mainColor = isPlayerOne ? "text-green-700" : "text-red-700";
    let fadeColor = isPlayerOne ? "text-green-300" : "text-red-300";
    let mainBGColor = isPlayerOne ? "bg-green-200" : "bg-red-200";
    let fadeBGColor = isPlayerOne ? "bg-green-100" : "bg-red-100";
    let mainBorderColor = isPlayerOne ? "border-green-500" : "border-red-500";
    let fadeBorderColor = isPlayerOne ? "border-green-200" : "border-red-200";
    //base CSS
    const baseCSS = "h-full w-full border-4 rounded-2xl flex justify-center items-center text-3xl"

    let mainClass = derived(isPlayerOneTurn, ($isPlayerOneTurn) => { 
        if (
            ($isPlayerOneTurn && isPlayerOne) ||
            (!$isPlayerOneTurn && !isPlayerOne)
        ) {
            return `${baseCSS} ${mainBorderColor} ${mainColor} ${mainBGColor}`;
        }
        return `${baseCSS} ${fadeBorderColor} ${fadeColor} ${fadeBGColor}`;
    });
</script>

<div class="w-1/2 h-full float-left p-1">
    <div class={$mainClass}>
        {isPlayerOne ? $p1name : $p2name} : {score}
    </div>
</div>
