import type { Story, Meta } from '@storybook/react'
import { Cell, type CellProps } from './Cell'

export default {
  title: 'Components/Grid/Cell',
  component: Cell,
  argTypes: {
    coords: {
      defaultValue: [1, 1],
    },
  },
} as Meta

const Template: Story<CellProps> = (args) => <Cell {...args} />

export const ClosedCell = Template.bind({})
ClosedCell.args = { cell: 10 }

export const EmptyCell = Template.bind({})
EmptyCell.args = { cell: 0 }

export const CellWithBomb = Template.bind({})
CellWithBomb.args = { cell: 9 }

export const CellWithFlag = Template.bind({})
CellWithFlag.args = { cell: 11 }

export const CellWithWeakFlag = Template.bind({})
CellWithWeakFlag.args = { cell: 12 }

export const CellWith1 = Template.bind({})
CellWith1.args = { cell: 1 }

export const CellWith3 = Template.bind({})
CellWith3.args = { cell: 3 }

export const CellWith5 = Template.bind({})
CellWith5.args = { cell: 5 }

export const CellWith8 = Template.bind({})
CellWith8.args = { cell: 8 }
