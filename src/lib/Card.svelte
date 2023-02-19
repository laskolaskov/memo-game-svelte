<script lang="ts">
    export let val: number;

    let isFlipped = false;
    let cardClass = "card";

    $: {
        if (isFlipped) {
            cardClass = "card is-flipped";
        } else {
            cardClass = "card";
        }
    }
</script>

<div
    class="bg-orange-500 m-auto portrait:w-12vw landscape:w-12vh portrait:h-12vw landscape:h-12vh flex flex-col justify-center"
    on:click={() => (isFlipped = !isFlipped)}
    on:keypress={() => null}
>
    <div class={cardClass}>
        <div class="card__face card__face--front">(.)(.)</div>
        <div class="card__face card__face--back">{val}</div>
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
