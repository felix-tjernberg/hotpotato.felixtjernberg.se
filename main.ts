import type { StorybookConfig } from "@storybook/sveltekit"

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-a11y",
        "@storybook/addon-designs",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-links",
    ],
    framework: {
        name: "@storybook/sveltekit",
        options: {},
    },
    docs: {
        autodocs: false,
    },
    core: {
        disableTelemetry: true,
    },
}
export default config
