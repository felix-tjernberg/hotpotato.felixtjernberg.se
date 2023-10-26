import type { Meta, StoryObj } from "@storybook/svelte"
import FontStory from "./FontStory.svelte"

const meta: Meta = {
    title: "Utilities/Styles/Fonts",
    component: FontStory,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
    name: "Default Story",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-330&t=LMHg1VtmNXuQ94ea-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A330",
        },
    },
}
