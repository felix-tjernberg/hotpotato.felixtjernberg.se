<script lang="ts">
    import { hotPotatoStore, playerHoldingPotatoKey, roundsLeftKey } from "$lib/utilities/stores/hotPotatoStore"
    import Button from "../Button/Button.svelte"
    import Potato from "../Potato/Potato.svelte"
    import Person from "./Person.svelte"
    import { passPotatoKey } from "$routes/game/actionKeys"
    import { cookiesSaved, cookiesSavedKey } from "$lib/utilities/stores/cookiesSaved"
    import { enhance } from "$app/forms"
    import { setCookie } from "$lib/utilities/setCookie"
    export let alive: boolean = true
    export let appearance: 0 | 1 | 2 | 3 | 4 = 0
    export let hasPotato: boolean = false
    export let gameOver: boolean = false
</script>

<div class="emoji-container">
    <div class="emoji">
        {#if alive}
            <Person {appearance} />
        {:else}
            {"💀"}
        {/if}
        <br />
        {$hotPotatoStore.players[appearance]}
        {#if hasPotato}
            <Potato exploded={!alive} />
        {/if}
        <br />
        {#if gameOver && hasPotato}
            <form
                action={`?/${passPotatoKey}`}
                method="POST"
                use:enhance={({ cancel }) => {
                    cancel()
                    if (!$cookiesSaved) {
                        $cookiesSaved = true
                        setCookie(cookiesSavedKey, "true")
                    }
                    hotPotatoStore.passPotato()
                }}
            >
                <input type="hidden" name={playerHoldingPotatoKey} value={$hotPotatoStore.playerHoldingPotato} />
                <input type="hidden" name={roundsLeftKey} value={$hotPotatoStore.roundsLeft} />
                <Button label={"Pass potato"} on:click={hotPotatoStore.passPotato} />
            </form>
        {/if}
    </div>
</div>

<style scoped>
    .emoji-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .emoji {
        font-size: 36px;
        position: relative;
        color: var(--gray-static-900);
    }
</style>
