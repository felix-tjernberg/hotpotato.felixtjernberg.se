import { cookiesSavedKey } from "$lib/utilities/stores/cookiesSaved"
import { fail, redirect } from "@sveltejs/kit"
import { formNameKey, namesFormKey, removeCookiesKey, submitNamesKey } from "./actionKeys"
import { playerNamesKey } from "$lib/utilities/stores/hotPotatoStore"
import { separator } from "$lib/utilities/separator"
import type { PageServerLoad, Actions } from "./$types"
import { maxAge } from "$lib/utilities/setCookie"

export const load = (async ({ cookies }) => {
    if (cookies.get(cookiesSavedKey) === "true") {
        let playerNames: string | string[] | undefined = cookies.get(playerNamesKey)

        let validPlayerNames = false
        if (playerNames !== undefined) {
            playerNames = playerNames.split(separator)
            // we check that there is 5 names to see if the cookie has been tampered with or not. because of the way we set the cookie we know that there is 5 names
            validPlayerNames = playerNames.length === 5
        }
        return {
            playerNames: validPlayerNames ? (playerNames as string[]) : null,
        }
    }
}) satisfies PageServerLoad

export const actions = {
    [submitNamesKey]: async ({ cookies, request }) => {
        const formData = await request.formData()
        const names = [
            formData.get("name1"),
            formData.get("name2"),
            formData.get("name3"),
            formData.get("name4"),
            formData.get("name5"),
        ]

        if (names.some((name) => name instanceof File))
            return fail(400, { error: { [formNameKey]: namesFormKey, names: names, message: "One name was a file" } })

        if (names.some((name) => name?.toString().includes(separator)))
            return fail(400, {
                error: {
                    [formNameKey]: namesFormKey,
                    names: names,
                    message: `We do not allow ${separator} symbol in names`,
                },
            })

        cookies.set(cookiesSavedKey, "true", { httpOnly: false, maxAge })
        cookies.set(playerNamesKey, names.join(separator), { httpOnly: false, maxAge })

        throw redirect(303, "/game")
    },

    [removeCookiesKey]: ({ cookies }) => {
        cookies.getAll().forEach((cookie) => cookies.delete(cookie.name))
        throw redirect(303, "/")
    },
} satisfies Actions
