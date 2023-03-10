import { writable, derived, get, type Writable } from "svelte/store"
import { createGame } from "../functions";

export interface ICard {
    value: number;
    flipped: boolean;
    index: number;
}

let flippedCards: Array<number> = []
const size = 6
const g = createGame(size)
//array with card objects
export const game = writable(g)

export const flipped = writable(flippedCards.length)
export const p1score = writable(0)
export const p2score = writable(0)
export const isPlayerOneTurn = writable(true)

function checkFlipped(flipped: Writable<number>) {
    if (g[flippedCards[0]].value === g[flippedCards[1]].value) {
        //update player score
        if (get(isPlayerOneTurn)) {
            p1score.update(v => v + 1)
        } else {
            p2score.update(v => v + 1)
        }
        //smaller timeout, reseting the flipped cards counter, to not be able to immediately click something by accident - better UX
        setTimeout(() => {
            resetFlipped()
        }, 200)
    } else {
        setTimeout(() => {
            flipBack()
            resetFlipped()
            //switch player
            isPlayerOneTurn.update(v => !v)
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


export function flip(index: number) {
    flippedCards.push(index)
    flipped.set(flippedCards.length)
}