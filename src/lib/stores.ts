import { writable, derived, get, type Writable } from "svelte/store"

export interface ICard {
    value: number;
    flipped: boolean;
    index: number;
}

let flippedCards: Array<number> = []
const size = 6
const g = createGame(size)
console.log('game :: ', g)

export const flipped = writable(flippedCards.length)

function createGame(size: number) {
    //first half of cards
    const a = Array((size * size) / 2).fill(0).map((n, i) => i + 1)
    //merge and shuffle
    const base = [...a, ...a].sort(() => 0.5 - Math.random())
    //map the values to card objects and return
    return base.map((n, i) => {
        return {
            value: n,
            flipped: false,
            index: i
        }
    })
}

function checkFlipped(flipped: Writable<number>) {
    if(g[flippedCards[0]].value === g[flippedCards[1]].value) {
        //TODO: process score
        //smaller timeout, reseting the flipped cards counter, to not be able to immediately click something by accident - maybe better UX ?
        setTimeout(() => {
            resetFlipped()
        }, 200)
    } else {
        setTimeout(() => {
            flipBack()
            resetFlipped()
        }, 2000)
    }
}

function flipBack() {
    flippedCards.forEach(i => {
        g[i].flipped = false
    })
    game.set(g)
}

function resetFlipped() {
    flippedCards = []
    flipped.set(flippedCards.length)
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