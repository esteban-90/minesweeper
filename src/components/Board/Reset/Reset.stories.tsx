import type { Story, Meta } from '@storybook/react'
import { Reset, type ResetProps } from './Reset'

export default {
  title: 'Components/Board/Reset',
  component: Reset,
} as Meta

const Template: Story<ResetProps> = (args) => <Reset {...args} />

export const ResetExample = Template.bind({})
