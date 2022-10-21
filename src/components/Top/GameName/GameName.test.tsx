import { render } from '@testing-library/react'
import { GameName } from './GameName'

describe('GameName test cases:', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<GameName>Minesweeper</GameName>)
    expect(asFragment()).toMatchSnapshot()
  })
})
