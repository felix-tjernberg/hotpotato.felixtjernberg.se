import type { Meta, StoryObj } from "@storybook/svelte"

import Potato from "./Potato.svelte"

const meta = {
    title: "Components/Potato",
    component: Potato,
    argTypes: {
        exploded: { control: "boolean" },
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=259-37&t=u79YW8Z1TH8yC4Vt-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=259%3A37",
        },
    },
} satisfies Meta<Potato>

export default meta
type Story = StoryObj<typeof meta>

export const Story1: Story = {
    name: "Default Story",
}

export const Story2: Story = {
    name: "Default State",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=259-40&t=LMHg1VtmNXuQ94ea-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=259%3A40",
        },
    },
}

export const Story3: Story = {
    args: { exploded: true },
    name: "Exploded State",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=259-50&t=LMHg1VtmNXuQ94ea-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=259%3A50",
        },
    },
}
