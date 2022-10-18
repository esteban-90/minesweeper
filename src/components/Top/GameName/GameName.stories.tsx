import type { Story, Meta } from '@storybook/react'
import { GameName } from './GameName'

export default {
  title: 'Components/Top/GameName',
  component: GameName,
} as Meta

const Template: Story = (args) => <GameName {...args}>Minesweeper</GameName>

export const GameNameExample = Template.bind({})
