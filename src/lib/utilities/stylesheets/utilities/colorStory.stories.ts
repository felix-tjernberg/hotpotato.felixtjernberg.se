import type { Meta, StoryObj } from "@storybook/svelte"
import colorStory from "./colorStory.svelte"

const meta: Meta = {
    title: "Utilities/Styles/Colors",
    component: colorStory,
}

export default meta

type Story = StoryObj<typeof meta>

export const Story1: Story = {
    name: "Default/Lightness Story",
    args: {},
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-315&t=zVPkD81WtoWJ4JZN-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A315",
        },
    },
}
