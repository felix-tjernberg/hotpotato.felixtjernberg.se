<script lang="ts">
    export let appearance: 0 | 1 | 2 | 3 | 4 = 0
</script>

{#if appearance === 0}
    👨‍🦲
{:else if appearance === 1}
    🧑
{:else if appearance === 2}
    👨
{:else if appearance === 3}
    🤴
{:else if appearance === 4}
    👳‍♂️
{/if}
