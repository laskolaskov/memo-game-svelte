import { writable, get, type Writable } from "svelte/store"

export interface ICard {
    value: number;
    flipped: boolean;
    index: number;
}

let flippedCards: Array<number> = []
const size = 6
let g = createGame(size)
//array with card objects
export const game = writable(g)

export const flipped = writable(flippedCards.length)
export const p1score = writable(0)
export const p2score = writable(0)
export const isPlayerOneTurn = writable(true)
export const gameStarted = writable(false)
export const gameEnded = writable(false)
export const winner = writable(0)
export const p1name = writable("Player 1")
export const p2name = writable("Player 2")

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
    if (g[flippedCards[0]].value === g[flippedCards[1]].value) {
        //update player score
        if (get(isPlayerOneTurn)) {
            p1score.update(v => v + 1)
            if(get(p1score) >= 10) {
                //player 1 wins
                gameEnded.set(true)
                winner.set(1)
            }
        } else {
            p2score.update(v => v + 1)
            if(get(p2score) >= 10) {
                //player 2 wins
                gameEnded.set(true)
                winner.set(2)
            }
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

export function resetGame() {
    g = createGame(size)
    game.set(g)
    gameStarted.set(false)
    gameEnded.set(false)
    winner.set(0)
    p1score.set(0)
    p2score.set(0)
    isPlayerOneTurn.set(true)
}