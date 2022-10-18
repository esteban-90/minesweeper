import type { Story, Meta } from '@storybook/react'
import { Top, type TopProps } from './Top'

export default {
  title: 'Components/Top',
  component: Top,
} as Meta

const Template: Story<TopProps> = (args) => <Top {...args}>Minesweeper</Top>

export const TopExample = Template.bind({})

TopExample.args = {
  feature: 'Flag',
  firstAction: 'ctrl',
  secondAction: 'click',
}
