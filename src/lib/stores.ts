import { writable } from "svelte/store"

let game = writable([1])

createGame(6)

export function createGame(size: number) {
    const g = Array(size * size).fill(0).map((n, i) => i + 1)
    game = writable(g)
    return game
}