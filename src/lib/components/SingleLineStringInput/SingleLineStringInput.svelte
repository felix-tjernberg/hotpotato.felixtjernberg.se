<script lang="ts">
    export let value: string = ""
    export let name: string = ""
    export let placeholder: string = ""
    export let pattern: string = ""
    export let title: string = ""
</script>

<input bind:value {name} {placeholder} {pattern} {title} />
