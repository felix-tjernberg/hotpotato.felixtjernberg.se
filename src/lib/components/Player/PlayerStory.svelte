<script lang="ts">
    import Player from "./Player.svelte"
    import Person from "./Person.svelte"
    export let story: "Dead" | "Has Potato" | "Person" | "Default" | "Appearance" = "Default"
    export let alive: boolean = true
    export let appearance: 0 | 1 | 2 | 3 | 4 = 0
    export let hasPotato: boolean = false
</script>

{#if story == "Default"}
    <Player {hasPotato} {appearance} {alive} />
{/if}
{#if story === "Dead"}
    <Player {hasPotato} {appearance} {alive} />
{/if}
{#if story === "Appearance"}
    <div>
        <Person appearance={0} />
        <Person appearance={1} />
        <Person appearance={2} />
        <Person appearance={3} />
        <Person appearance={4} />
    </div>
{/if}

{#if story === "Has Potato"}
    <Player {hasPotato} {appearance} {alive} />
{/if}

<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 34px;
    }
</style>
