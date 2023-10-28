<script lang="ts">
    import { enhance } from "$app/forms"
    import { goto } from "$app/navigation"
    import { page } from "$app/stores"

    import { cookiesSaved, cookiesSavedKey } from "$lib/utilities/stores/cookiesSaved"
    import { formNameKey, namesFormKey, submitNamesKey } from "$routes/actionKeys"
    import { hotPotatoStore, playerNamesKey, validatePlayerName } from "$lib/utilities/stores/hotPotatoStore"
    import { separator } from "$lib/utilities/separator"
    import { setCookie } from "$lib/utilities/setCookie"
    import SingleLineStringInput from "$lib/components/SingleLineStringInput/SingleLineStringInput.svelte"
    import Button from "$lib/components/Button/Button.svelte"

    let names: string[] = $page.data.playerNames ? $page.data.playerNames : ["", "", "", "", "", ""]

    $: {
        if ($page.form?.error[formNameKey] === namesFormKey) {
            for (let i = 0; i < 5; i++)
                // @ts-ignore
                if (validatePlayerName($page.form?.error.names[i]?.toString())) names[i] = $page.form.error.names[i]
        }
    }
</script>

<form
    class="height-100p"
    action={`?/${submitNamesKey}`}
    method="POST"
    use:enhance={({ cancel, formData }) => {
        const names = [
            formData.get("name1"),
            formData.get("name2"),
            formData.get("name3"),
            formData.get("name4"),
            formData.get("name5"),
        ]

        if (
            !names.some((name) => name instanceof File) &&
            !names.some((name) => name?.toString().includes(separator))
        ) {
            cancel()
            setCookie(playerNamesKey, names.join(separator))
            // @ts-ignore, names should only contain strings as we check if any on the names is a File or not, and it seems like TS did not pick that up
            hotPotatoStore.setPlayerNames(names)
            if (!$cookiesSaved) {
                $cookiesSaved = true
                setCookie(cookiesSavedKey, "true")
            }
            goto("/game")
        }
    }}
    data-sveltekit-keepfocus
>
    {#each [0, 1, 2, 3, 4] as index}
        <div>
            <h2 class="primary-fat-100">
                {names[index] ? names[index] : `Player ${index + 1}`}
            </h2>
            <SingleLineStringInput
                bind:value={names[index]}
                name="name{index + 1}"
                placeholder="Type player {index + 1} name here"
                pattern="[^␟]*"
                title="␟ symbol is not allowed"
            />
        </div>
    {/each}
    <div class="center-button">
        <Button label={"Submit names"} />
        {#if $page.form?.error[formNameKey] === namesFormKey}
            <p>{$page.form.error.message}</p>
        {/if}
    </div>
</form>

<style>
    h2 {
        text-align: center;
        text-overflow: ellipsis ellipsis;
        overflow: auto;
        color: var(--gray-static-900);
    }
    form {
        place-items: center;
        max-height: 100vh;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 50px;
        grid-template-areas:
            ". . . player-1 . . ."
            ". player-2 . submit . player-3 ."
            ". . player-4 . player-5 . .";
    }
    form :global(:nth-child(1)) {
        grid-area: player-1;
    }
    form :global(:nth-child(2)) {
        grid-area: player-2;
    }
    form :global(:nth-child(3)) {
        grid-area: player-3;
    }
    form :global(:nth-child(4)) {
        grid-area: player-4;
    }
    form :global(:nth-child(5)) {
        grid-area: player-5;
    }

    .center-button {
        grid-area: submit;
        display: flex;
        justify-content: center;
        margin-top: 70px;
    }
</style>
