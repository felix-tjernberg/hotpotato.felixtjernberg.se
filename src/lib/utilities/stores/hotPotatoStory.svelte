<script lang="ts">
    export let story: "Default" | "PassPotato" | "ResetGame" | "SetPlayerNames" = "Default"
    import HotPotatoStoreInfo from "./hotPotatoStoreInfo.svelte"
    import Button from "$lib/components/Button/Button.svelte"
    import { hotPotatoStore } from "./hotPotatoStore"

    story === "SetPlayerNames"
        ? hotPotatoStore.setPlayerNames(["Sam", "Felix", "Johan", "Kevin", "Jeff"])
        : hotPotatoStore.setPlayerNames(["player1", "player2", "player3", "player4", "player5"])
</script>

{#if story === "Default"}
    <HotPotatoStoreInfo />
    <p class="primary-fat-100">Player names</p>
    <p>
        {$hotPotatoStore.players[0]},
        {$hotPotatoStore.players[1]},
        {$hotPotatoStore.players[2]},
        {$hotPotatoStore.players[3]},
        {$hotPotatoStore.players[4]}
    </p>
{/if}

{#if story === "PassPotato"}
    <HotPotatoStoreInfo />
    <div class="button-position">
        <Button label="Pass Potato" on:click={hotPotatoStore.passPotato} />
    </div>
{/if}

{#if story === "ResetGame"}
    <HotPotatoStoreInfo />
    <div class="button-position">
        <Button label="Reset Game" on:click={hotPotatoStore.resetGame} />
    </div>
{/if}

{#if story === "SetPlayerNames"}
    <h2 class="primary-fat-100">Player index 0 name:</h2>
    <p>{$hotPotatoStore.players[0]}</p>
    <h2 class="primary-fat-100">Player index 1 name:</h2>
    <p>{$hotPotatoStore.players[1]}</p>
    <h2 class="primary-fat-100">Player index 2 name:</h2>
    <p>{$hotPotatoStore.players[2]}</p>
    <h2 class="primary-fat-100">Player index 3 name:</h2>
    <p>{$hotPotatoStore.players[3]}</p>
    <h2 class="primary-fat-100">Player index 4 name:</h2>
    <p>{$hotPotatoStore.players[4]}</p>
{/if}

<style>
    .button-position {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }

    h2,
    p {
        text-align: center;
    }
</style>
