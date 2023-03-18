<script lang="ts">
    import { flipped, flip, type ICard } from "./stores"
    export let card: ICard
 
    /**
     * tailwind css
     */
    let mainClass = "h-20 text-2xl"

    let mainCardClass = "[transform-style:preserve-3d] relative w-full h-full cursor-pointer origin-right transition-transform duration-1000"
    let isFlippedClass = "[transform:translateX(-100%)_rotateY(-180deg)]"

    let mainCardContent = "absolute h-full w-full [backface-visibility:hidden] flex justify-center items-center border-4 rounded-2xl border-black text-white"
    let cardFront = "bg-red-500"
    let cardBack = "[transform:rotateY(180deg)] bg-indigo-500"

    $: cardClass = card.flipped ?  `${mainCardClass} ${isFlippedClass}` : `${mainCardClass}`
    
    const clickHandler = () => {
        if ($flipped >= 2 || card.flipped === true) {
            //do nothing
            return;
        }
        //flip the card
        card.flipped = true;
        flip(card.index);
    };
</script>

<div
    class={mainClass}
    on:click={() => clickHandler()}
    on:keypress={() => null}
>
    <div class={cardClass}>
        <div class={mainCardContent + " " + cardFront}>(.)(.)</div>
        <div class={mainCardContent + " " + cardBack}>{card.value}</div>
    </div>
</div>