import type { Story, Meta } from '@storybook/react'
import { GameName, type GameNameProps } from './GameName'

export default {
  title: 'Components/Top/GameName',
  component: GameName,
} as Meta

const Template: Story<GameNameProps> = (args) => <GameName {...args} />

export const GameNameExample = Template.bind({})

GameNameExample.args = {
  children: 'Minesweeper',
}
