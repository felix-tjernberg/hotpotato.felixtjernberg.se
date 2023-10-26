import type { Meta, StoryObj } from "@storybook/svelte"

import SingleLineStringInput from "./SingleLineStringInput.svelte"

const meta = {
    title: "Components/SingleLineStringInput",
    component: SingleLineStringInput,
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-584&t=0grbck9QYSUT1eDU-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A584",
        },
    },
} satisfies Meta<SingleLineStringInput>

export default meta
type Story = StoryObj<typeof meta>

export const Story1: Story = {
    name: "Default Story",
}

export const Story2: Story = {
    name: "Styling Story",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-604&t=0grbck9QYSUT1eDU-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A604",
        },
    },
}

export const Story3: Story = {
    name: "Value Story",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=796-5&t=0grbck9QYSUT1eDU-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=796%3A5",
        },
    },
}
