import type { Preview } from "@storybook/svelte"
import StorybookWrapper from "./StorybookWrapper.svelte"

export default {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        backgrounds: {
            default: "None",
            values: [
                { name: "Dark", value: "transparent" },
                { name: "Light", value: "transparent transparent" },
                { name: "None", value: "transparent transparent transparent" },
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        options: {
            storySort: { order: ["Pages", "Compositions", "Components", "Utilities"] },
        },
    },
} satisfies Preview

export const decorators = [
    (_, story) => ({
        Component: StorybookWrapper,
        props: { context: story.globals },
    }),
]
