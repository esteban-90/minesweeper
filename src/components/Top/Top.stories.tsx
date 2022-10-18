import type { Story, Meta } from '@storybook/react'
import { Top, type TopProps } from './Top'

export default {
  title: 'Components/Top',
  component: Top,
} as Meta

const Template: Story<TopProps> = (args) => <Top {...args} />

export const TopExample = Template.bind({})

TopExample.args = {
  children: 'Minesweeper',
  feature: 'Flag',
  firstAction: 'ctrl',
  secondAction: 'click',
}
