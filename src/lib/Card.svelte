<script lang="ts">
    import { flipped, flip, type ICard } from "./stores";
    export let card: ICard;

    let cardClass = "card";

    $: {
        if (card.flipped) {
            cardClass = "card is-flipped";
        } else {
            cardClass = "card";
        }
    }

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
    class="bg-orange-500 m-auto portrait:w-12vw landscape:w-12vh portrait:h-12vw landscape:h-12vh flex flex-col justify-center"
    on:click={() => clickHandler()}
    on:keypress={() => null}
>
    <div class={cardClass}>
        <div class="card__face card__face--front">(.)(.)</div>
        <div class="card__face card__face--back">{card.value}</div>
    </div>
</div>

<style>
    .card {
        position: relative;
        width: 100%;
        height: 100%;
        cursor: pointer;
        transform-style: preserve-3d;
        transform-origin: center right;
        transition: transform 1s;
    }

    .card.is-flipped {
        transform: translateX(-100%) rotateY(-180deg);
    }

    .card__face {
        position: absolute;
        width: 100%;
        height: 100%;
        color: white;
        text-align: center;
        font-weight: bold;
        backface-visibility: hidden;
    }

    .card__face--front {
        background: crimson;
    }

    .card__face--back {
        background: slateblue;
        transform: rotateY(180deg);
    }
</style>
