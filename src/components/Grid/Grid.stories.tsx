import type { Story, Meta } from '@storybook/react'
import { Grid, type GridProps } from './Grid'

export default {
  title: 'Components/Grid',
  component: Grid,
} as Meta

const Template: Story<GridProps> = (args) => <Grid {...args} />

export const GridExample = Template.bind({})

GridExample.args = {
  field: [
    [9, 2, 9, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1, 0, 1, 9, 1, 1, 9, 1],
    [0, 0, 1, 9, 10, 0, 2, 2, 2, 1, 1, 1],
    [0, 0, 10, 10, 1, 0, 1, 9, 1, 2, 2, 2],
    [0, 1, 1, 2, 2, 9, 1, 1, 1, 0, 0, 0],
    [0, 1, 9, 3, 9, 2, 10, 0, 0, 2, 1, 1],
    [0, 2, 2, 4, 9, 2, 10, 1, 1, 1, 9, 1],
    [0, 1, 9, 2, 1, 1, 1, 9, 1, 2, 2, 2],
    [0, 1, 10, 10, 0, 0, 1, 1, 1, 1, 9, 1],
    [0, 1, 10, 10, 0, 0, 1, 1, 1, 1, 9, 1],
    [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 9, 1],
    [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 9, 1],
  ],
}
