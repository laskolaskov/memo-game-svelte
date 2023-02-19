import { writable } from "svelte/store"

const size = 6
const g = Array(size * size).fill(0).map((n, i) => i + 1)
export const game = writable(g)