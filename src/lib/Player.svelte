<script lang="ts">
    import { derived } from "svelte/store"
    import { isPlayerOneTurn } from "./stores"

    export let score: number
    export let isPlayerOne: boolean

    let mainClass = derived(isPlayerOneTurn, $isPlayerOneTurn => {
        if($isPlayerOneTurn && isPlayerOne) {
            return "h-full w-full bg-sky-200"
        }
        if(!$isPlayerOneTurn && !isPlayerOne) {
            return "h-full w-full bg-sky-200" 
        }
        return "h-full w-full bg-red-200"
    })
</script>

<div class={$mainClass}>
    Player {isPlayerOne ? 1 : 2} : {score}
</div>