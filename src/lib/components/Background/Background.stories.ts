import type { Meta, StoryObj } from "@storybook/svelte"
import Background from "./Background.svelte"

const meta = {
    title: "Components/Background",
    component: Background,
} satisfies Meta<Background>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    name: "Default Story",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-314&t=yHU0otmEVGMecoxk-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A314",
        },
    },
}
