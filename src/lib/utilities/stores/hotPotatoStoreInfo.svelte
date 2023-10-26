<script lang="ts">
    import { hotPotatoStore } from "./hotPotatoStore"
</script>

<h2 class="primary-fat-100">Player holding the potato</h2>
<p>{$hotPotatoStore.playerHoldingPotato}</p>
<br />

<h2 class="primary-fat-100">Number of rounds left until explosion</h2>
<p>{$hotPotatoStore.roundsLeft}</p>
<br />

<style>
    h2,
    p {
        text-align: center;
    }
</style>
