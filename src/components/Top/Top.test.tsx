import { render } from '@testing-library/react'
import { Top } from './Top'

describe('GameLegend test cases:', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Top feature='Flag' firstAction='ctrl' secondAction='click'>
        Minesweeper
      </Top>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
