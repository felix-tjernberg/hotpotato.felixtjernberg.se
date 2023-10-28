<script lang="ts">
    import "$lib/utilities/stylesheets/stylesheets.css"
    import { removeCookiesKey } from "./actionKeys.js"
    import { cookiesSaved } from "$lib/utilities/stores/cookiesSaved"
    import Background from "$lib/components/Background/Background.svelte"
    export let data
    $cookiesSaved = data.cookiesSaved
</script>

<Background>
    <slot />
    <div style="display: flex; place-self: end center; opacity: 0.6; color: var(--gray-static-900);">
        <p>
            This website uses
            <a
                href="https://support.cookieinformation.com/en/articles/5405196-all-you-need-to-know-about-cookies?q=url+search+parameters#h_f4c7274e1d"
                target="_blank"
            >
                strictly necessary cookies
            </a>
            to keep track the game state
        </p>
        {#if $cookiesSaved}
            <form action={`/?/${removeCookiesKey}`} method="POST">
                <button type="submit">, click here to remove cookies</button>
            </form>
        {/if}
    </div>
</Background>

<style>
    button {
        padding: 0;
        line-height: 1.666;
        font-size: inherit;
        background-color: transparent;
        text-decoration: underline;
    }
</style>
