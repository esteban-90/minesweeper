import type { Story, Meta } from '@storybook/react'
import { GameLegend, type GameLegendProps } from './GameLegend'

export default {
  title: 'Components/Top/Legend',
  component: GameLegend,
} as Meta

const Template: Story<GameLegendProps> = (args) => <GameLegend {...args} />

export const GameLegendExample = Template.bind({})

GameLegendExample.args = {
  feature: 'flag',
  firstAction: 'ctrl',
  secondAction: 'click',
}
