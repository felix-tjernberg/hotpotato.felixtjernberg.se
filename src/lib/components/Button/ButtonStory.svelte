<script lang="ts">
    import Button from "./Button.svelte"
    import { TEST_STRING } from "./TEST_STRING"

    export let label: string
    export let functionTest: boolean = false
</script>

{#if functionTest}
    <Button {label} on:click={() => console.log(TEST_STRING)} />
{:else}
    <Button {label} />
{/if}
