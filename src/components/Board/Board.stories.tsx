import type { Story, Meta } from '@storybook/react'
import { Board, type BoardProps } from './Board'

export default {
  title: 'Components/Board',
  component: Board,
} as Meta

const Template: Story<BoardProps> = (args) => <Board {...args} />

export const BoardExample = Template.bind({})

BoardExample.args = {
  time: '000',
  levels: ['beginner', 'intermediate', 'expert'],
  mines: '010',
}
