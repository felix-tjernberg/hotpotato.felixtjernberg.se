<script lang="ts">
    import Button from "$lib/components/Button/Button.svelte"
    import Player from "$lib/components/Player/Player.svelte"
    import { hotPotatoStore, playerHoldingPotatoKey, roundsLeftKey } from "$lib/utilities/stores/hotPotatoStore"
    import { send, receive } from "$lib/utilities/transitions"
    import { enhance } from "$app/forms"
    import { setCookie } from "$lib/utilities/setCookie"
    import { cookiesSaved, cookiesSavedKey } from "$lib/utilities/stores/cookiesSaved"
    import { passPotatoKey, resetGameKey } from "$routes/game/actionKeys"
    type player = 0 | 1 | 2 | 3 | 4
    const players: player[] = [0, 1, 2, 3, 4]
</script>

<div class="container height-100p">
    {#each players as player}
        {@const holdingPotato = $hotPotatoStore.playerHoldingPotato === player}
        {@const gameOver = $hotPotatoStore.roundsLeft !== 0}
        <div class="player">
            <Player appearance={player} alive={!(!gameOver && holdingPotato)} hasPotato={holdingPotato} {gameOver} />
        </div>
    {/each}
    <div class="button-container">
        {#if $hotPotatoStore.roundsLeft === 0}
            <form
                action={`?/${resetGameKey}`}
                method="POST"
                use:enhance={({ cancel }) => {
                    cancel()
                    if (!$cookiesSaved) {
                        $cookiesSaved = true
                        setCookie(cookiesSavedKey, "true")
                    }
                    hotPotatoStore.resetGame()
                }}
            >
                <Button label={"Restart Game"} on:click={hotPotatoStore.resetGame} />
            </form>
        {:else if $hotPotatoStore.playerHoldingPotato === 5}
            <span class="potato" in:receive={{ key: "emoji" }} out:send={{ key: "emoji" }}>🥔</span>
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
                <Button label={"Start Game"} on:click={hotPotatoStore.passPotato} />
            </form>
        {/if}
    </div>
</div>

<style>
    .container {
        place-items: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 50px;
        grid-template-areas:
            ". . player-1 . ."
            "player-2 . center-button . player-3"
            ". player-4 . player-5 .";
    }
    .container :nth-child(1) {
        grid-area: player-1;
    }
    .container :nth-child(2) {
        grid-area: player-2;
    }
    .container :nth-child(3) {
        grid-area: player-3;
    }
    .container :nth-child(4) {
        grid-area: player-4;
    }
    .container :nth-child(5) {
        grid-area: player-5;
    }
    .container :nth-child(6) {
        grid-area: center-button;
    }

    .button-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .potato {
        grid-area: center-button;
        font-size: 36px;
    }

    .player {
        font-size: 36px;
    }

    @media (max-width: 650px) {
        .container {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
    }
</style>
