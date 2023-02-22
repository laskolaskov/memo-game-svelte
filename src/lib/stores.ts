import { writable, derived, get, type Writable } from "svelte/store"

export interface ICard {
    value: number;
    flipped: boolean;
    index: number;
}

let flippedCards: Array<number> = []
const size = 6
const g = Array(size * size).fill(0).map((n, i) => {
    return {
        value: i + 1,
        flipped: false,
        index: i
    }
})

export const flipped = writable(flippedCards.length)

function checkFlipped(flipped: Writable<number>) {
    setTimeout(() => {
        flipBack()
    }, 2000)
}

function flipBack() {
    flippedCards.forEach(i => {
        g[i].flipped = false
    })
    flippedCards = []
    flipped.set(flippedCards.length)
    game.set(g)
}

//tracker for flipped/clicked cards
flipped.subscribe(v => {
    if (v === 2) {
        checkFlipped(flipped)
    }
})
//array with card objects
export const game = writable(g)

export function flip(index: number) {
    flippedCards.push(index)
    flipped.set(flippedCards.length)
}