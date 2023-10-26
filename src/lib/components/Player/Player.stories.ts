import type { Meta, StoryObj } from "@storybook/svelte"
import Player from "./PlayerStory.svelte"

const meta = {
    title: "Components/Player",
    component: Player,
    argTypes: {
        alive: { control: "boolean" },
    },
} satisfies Meta<Player>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    name: "Default Story",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-419&t=sHpi22t5hRmUPo1J-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A419",
        },
    },
}

export const Appearance: Story = {
    args: { story: "Appearance" },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-613&t=ozQozfYEtBjZYSSx-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A613",
        },
    },
}

export const HasPotato: Story = {
    args: { story: "Has Potato", hasPotato: true },
    name: "Player has potato",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-620&t=ZDdbeVLSPgqm5r5S-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A620",
        },
    },
}

export const Dead: Story = {
    args: { alive: false, story: "Dead" },
    name: "Dead Player Story",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-432&t=sHpi22t5hRmUPo1J-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A432",
        },
    },
}
