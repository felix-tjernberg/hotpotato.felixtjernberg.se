<script lang="ts">
    import { receive, send } from "$lib/utilities/transitions"

    export let exploded: boolean = false
</script>

<span class="potato" in:receive={{ key: "emoji" }} out:send={{ key: "emoji" }}>
    {exploded ? "💥" : "🥔"}
</span>

<style>
    .potato {
        position: absolute;
        left: 25px;
        top: 20px;
        font-size: 25px;
    }
</style>
