import type { Meta, StoryObj } from "@storybook/svelte"
import Game from "./GameStory.svelte"

const meta = {
    title: "Compositions/Game",
    component: Game,
    argTypes: {},
} satisfies Meta<Game>

export default meta

type Story = StoryObj<typeof meta>

export const Story1: Story = {
    name: "Default Story",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-437&t=yHU0otmEVGMecoxk-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A437",
        },
    },
}

export const Story2: Story = {
    name: "Start Story",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=798-16&t=Bddd4N41gPwDg0u9-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=798%3A16",
        },
    },
}

export const Story3: Story = {
    args: {
        story: "restart",
    },
    name: "Restart Story",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-571&t=n4nNL59vp64Y3Ssu-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A571",
        },
    },
}

export const Story4: Story = {
    name: "Responsive Story",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=293-4&t=n4nNL59vp64Y3Ssu-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=293%3A4",
        },
    },
}
