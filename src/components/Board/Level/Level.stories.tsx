import type { Story, Meta } from '@storybook/react'
import { Level } from './Level'

export default {
  title: 'Components/Board/Level',
  component: Level,
} as Meta

const levels = ['beginner', 'intermediate', 'expert']

const Template: Story = (args) => <Level {...args}>{levels}</Level>

export const LevelExample = Template.bind({})
