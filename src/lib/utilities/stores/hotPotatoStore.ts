import { writable } from "svelte/store"
import { setCookie } from "$lib/utilities/setCookie"

export const roundsLeftKey = "roundsLeft" as const
export const playerHoldingPotatoKey = "playerHoldingPotato" as const
export const playerNamesKey = "playerNames" as const

function getRandomNumberBetween0And4() {
    return Math.floor(Math.random() * 5)
}
export function getRandomNumberBetween5And10() {
    return Math.floor(Math.random() * 6) + 5
}
export function getNewRandomPlayer(previousPlayer: number) {
    const players = [0, 1, 2, 3, 4]
    players.splice(previousPlayer, 1)
    return players[Math.floor(Math.random() * 4)]
}

const INTIAL_STATE = {
    players: {
        0: "player 1",
        1: "player 2",
        2: "player 3",
        3: "player 4",
        4: "player 5",
    },
    playerHoldingPotato: 5, // setting to index outside of players object to signal that game has not started
    roundsLeft: getRandomNumberBetween5And10(),
}

export function validatePlayerName(name: string | null | undefined): boolean {
    return name !== "undefined" && name !== "" && name !== null && name !== undefined
}

function createHotPotatoStore() {
    const { subscribe, update } = writable(INTIAL_STATE)

    function setGameState(roundsLeft: number, playerHoldingPotato: number) {
        update((object) => {
            object.roundsLeft = roundsLeft
            object.playerHoldingPotato = playerHoldingPotato
            return object
        })
    }

    function resetGame() {
        update((object) => {
            const roundsLeft = getRandomNumberBetween5And10()
            const playerHoldingPotato = getRandomNumberBetween0And4()

            setCookie(roundsLeftKey, roundsLeft.toString())
            setCookie(playerHoldingPotatoKey, playerHoldingPotato.toString())

            object.roundsLeft = roundsLeft
            object.playerHoldingPotato = playerHoldingPotato
            return object
        })
    }

    function passPotato() {
        update((object) => {
            const playerHoldingPotato = getNewRandomPlayer(object.playerHoldingPotato)
            let roundsLeft = object.roundsLeft

            if (roundsLeft > 0) roundsLeft -= 1

            object.roundsLeft = roundsLeft
            object.playerHoldingPotato = playerHoldingPotato

            setCookie(roundsLeftKey, roundsLeft.toString())
            setCookie(playerHoldingPotatoKey, playerHoldingPotato.toString())

            return object
        })
    }

    function setPlayerNames(playerNames: string[]): void {
        update((object) => {
            if (playerNames.length === 5) {
                for (let i = 0; i < 5; i++) {
                    // typescript silly as we know that i will be 0-4
                    validatePlayerName(playerNames[i])
                        ? // @ts-ignore
                          (object.players[i] = playerNames[i])
                        : // @ts-ignore
                          (object.players[i] = `player ${i + 1}`)
                }
            }
            return object
        })
    }

    return {
        setGameState,
        setPlayerNames,
        subscribe,
        resetGame,
        passPotato,
    }
}

export const hotPotatoStore = createHotPotatoStore()
