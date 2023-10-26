import { cookiesSavedKey } from "$lib/utilities/stores/cookiesSaved"
import type { LayoutServerLoad } from "./$types"

export const load = (async ({ cookies }) => {
    const cookiesSaved = cookies.get(cookiesSavedKey) === "true"
    return { cookiesSaved }
}) satisfies LayoutServerLoad
