import type { Story, Meta } from '@storybook/react'
import { Counter } from './Counter'

export default {
  title: 'Components/Board/Counter',
  component: Counter,
} as Meta

const Template: Story = (args) => <Counter {...args}>20</Counter>

export const CounterExample = Template.bind({})
