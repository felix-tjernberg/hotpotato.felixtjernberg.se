<script lang="ts">
    import Game from "$lib/compositions/Game/Game.svelte"
    import { hotPotatoStore } from "$lib/utilities/stores/hotPotatoStore"

    export let data

    $: if (
        data.playerHoldingPotato !== null &&
        data.roundsLeft !== undefined &&
        data.roundsLeft !== null &&
        data.roundsLeft !== undefined
    )
        hotPotatoStore.setGameState(data.roundsLeft, data.playerHoldingPotato)
    $: if (data.playerNames) hotPotatoStore.setPlayerNames(data.playerNames)
</script>

<Game />
<a href="/" style="place-self: start start; opacity: 0.6">&#60; back to setup</a>

<style>
    a {
        color: var(--gray-static-900);
    }
</style>
