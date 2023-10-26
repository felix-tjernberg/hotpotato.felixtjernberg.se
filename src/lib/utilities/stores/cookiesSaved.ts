import { writable } from "svelte/store"
export const cookiesSavedKey = "cookiesSaved" as const
export const cookiesSaved = writable(false)
