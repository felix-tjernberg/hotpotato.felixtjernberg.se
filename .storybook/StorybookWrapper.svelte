<script lang="ts">
    import "./storybook.css"
    import "../src/lib/utilities/stylesheets/stylesheets.css"

    export let context: any

    function lightnessMode(value: any) {
        switch (value) {
            case "transparent":
                return "dark"
            case "transparent transparent":
                return "light"
            default:
                return "os"
        }
    }

    $: document.body.dataset.lightnessMode = lightnessMode(context.backgrounds?.value)
</script>

<slot />
