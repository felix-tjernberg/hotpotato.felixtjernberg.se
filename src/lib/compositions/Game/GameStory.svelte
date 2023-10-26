<script lang="ts">
    import Game from "./Game.svelte"
    import { hotPotatoStore } from "$lib/utilities/stores/hotPotatoStore"

    export let story: "default" | "restart" = "default"

    story === "restart" ? hotPotatoStore.setGameState(0, 0) : hotPotatoStore.resetGame()
</script>

<Game />
