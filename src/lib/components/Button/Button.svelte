<script lang="ts">
    export let label: string
</script>

<button class="primary-fat-100" on:click>{label}</button>

<style>
    button {
        background-color: var(--color-primary);
        color: var(--gray-static-000);
        padding: 6px 14px;
        border-radius: 20px;
    }
</style>
