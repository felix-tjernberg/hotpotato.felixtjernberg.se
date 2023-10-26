<script lang="ts">
    import background from "./background.jpg"
</script>

<div class="height-100p grid-stack">
    <img src={background} alt="Background" />
    <slot />
</div>

<style>
    img {
        width: 100%;
        height: 100%;
    }
</style>
