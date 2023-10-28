<script lang="ts">
    export let value: string = ""
    export let name: string = ""
    export let placeholder: string = ""
    export let pattern: string = ""
    export let title: string = ""
</script>

<input bind:value {name} {placeholder} {pattern} {title} maxlength="15" />

<style>
    input {
        border: 3px solid var(--color-primary);
        border-radius: 20px;
        padding: 7px;
        color: var(--gray-static-900);
    }
    ::placeholder {
        text-align: center;
        color: var(--gray-static-500);
        opacity: 1;
    }
</style>
