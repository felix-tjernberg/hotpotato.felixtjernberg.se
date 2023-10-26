import { maxAge } from "$lib/utilities/setCookie"
import {
    getNewRandomPlayer,
    getRandomNumberBetween5And10,
    playerHoldingPotatoKey,
    playerNamesKey,
    roundsLeftKey,
} from "$lib/utilities/stores/hotPotatoStore"
import { fail, type Actions } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"
import { passPotatoKey, resetGameKey } from "./actionKeys"
import { cookiesSavedKey } from "$lib/utilities/stores/cookiesSaved"
import { separator } from "$lib/utilities/separator"

function roundsLeftValid(roundsLeft: number): boolean {
    return roundsLeft >= 0 && roundsLeft <= 10
}
function playerHodlingPotatoValid(playerHoldingPotato: number): boolean {
    return playerHoldingPotato >= 0 && playerHoldingPotato <= 4
}

export const load = (async ({ cookies }) => {
    let roundsLeft: string | number | undefined = cookies.get(roundsLeftKey)
    let playerHoldingPotato: string | number | undefined = cookies.get(playerHoldingPotatoKey)
    let playerNames: string | string[] | undefined = cookies.get(playerNamesKey)

    let validNumbers = false
    if (roundsLeft !== undefined && playerHoldingPotato !== undefined) {
        // we are only using whole numbers and choose parseInt as it only checks for whole numbers
        roundsLeft = parseInt(roundsLeft)
        playerHoldingPotato = parseInt(playerHoldingPotato)
        validNumbers = roundsLeftValid(roundsLeft) && playerHodlingPotatoValid(playerHoldingPotato)
    }

    let validPlayerNames = false
    if (playerNames !== undefined) {
        playerNames = playerNames.split(separator)
        // we check that there is 5 names to see if the cookie has been tampered with or not. because of the way we set the cookie we know that there is 5 names
        validPlayerNames = playerNames.length === 5
    }

    return {
        // we know roundsLeft and playerHoldingPotato is numbers because of validNumbers, but TS is right it can be undefined, that case is hovever unreachable because of validNumbers
        roundsLeft: validNumbers ? (roundsLeft as number) : null,
        playerHoldingPotato: validNumbers ? (playerHoldingPotato as number) : null,
        // we know playerNames is a string[] because of validPlayerNames, but TS is right it can be undefined, that case is hovever unreachable because of validPlayerNames
        playerNames: validPlayerNames ? (playerNames as string[]) : null,
        // seems like typescript does not like my style of checking and mutating values xD
    }
}) satisfies PageServerLoad

export const actions = {
    [resetGameKey]: async ({ cookies }) => {
        cookies.set(roundsLeftKey, getRandomNumberBetween5And10().toString(), { httpOnly: false, maxAge })
        cookies.set(cookiesSavedKey, "true", { httpOnly: false, maxAge })
    },

    [passPotatoKey]: async ({ cookies, request }) => {
        const formData = await request.formData()
        let roundsLeft: FormDataEntryValue | number | null = formData.get(roundsLeftKey)
        let playerHoldingPotato: FormDataEntryValue | number | null = formData.get(playerHoldingPotatoKey)

        if (
            roundsLeft === null ||
            roundsLeft instanceof File ||
            playerHoldingPotato === null ||
            playerHoldingPotato instanceof File
        )
            return fail(400, { error: "roundsLeft is null or a file" })

        roundsLeft = parseInt(roundsLeft)
        playerHoldingPotato = parseInt(playerHoldingPotato)
        if (!roundsLeftValid(roundsLeft) && !playerHodlingPotatoValid(playerHoldingPotato))
            return fail(400, { error: "roundsLeft is not a valid number" })

        roundsLeft -= 1
        cookies.set(cookiesSavedKey, "true", { httpOnly: false, maxAge })
        cookies.set(roundsLeftKey, roundsLeft.toString(), { httpOnly: false, maxAge })
        cookies.set(playerHoldingPotatoKey, getNewRandomPlayer(playerHoldingPotato).toString(), {
            httpOnly: false,
            maxAge,
        })
    },
} satisfies Actions
