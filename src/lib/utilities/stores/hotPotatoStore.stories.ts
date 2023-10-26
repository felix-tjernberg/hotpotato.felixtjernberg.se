import type { Meta, StoryObj } from "@storybook/svelte"
import hotPotatoStory from "./hotPotatoStory.svelte"

const meta = {
    title: "Utilities/Stores/hotPotatoStore",
    component: hotPotatoStory,
} satisfies Meta<hotPotatoStory>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    name: "Default Story",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-345&t=yHU0otmEVGMecoxk-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A345",
        },
    },
}

export const PassPotato: Story = {
    args: { story: "PassPotato" },
    name: ".passPotato() Story",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-413&t=yHU0otmEVGMecoxk-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A413",
        },
    },
}

export const ResetGame: Story = {
    args: { story: "ResetGame" },
    name: ".resetGame() Story",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=403-10&t=yHU0otmEVGMecoxk-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=403%3A10",
        },
    },
}

export const SetPlayerNames: Story = {
    args: { story: "SetPlayerNames" },
    name: ".setPlayerNames() Story",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-417&t=yHU0otmEVGMecoxk-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A417",
        },
    },
}
