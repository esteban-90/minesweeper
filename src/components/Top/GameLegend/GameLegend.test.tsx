import { render } from '@testing-library/react'
import { GameLegend } from './GameLegend'

describe('GameLegend test cases:', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<GameLegend feature='Flag' firstAction='ctrl' secondAction='click' />)
    expect(asFragment()).toMatchSnapshot()
  })
})
