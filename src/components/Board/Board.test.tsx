import { render } from '@testing-library/react'
import { Board, type BoardProps } from './Board'

describe('Board test cases:', () => {
  it('should render correctly', () => {
    const props: BoardProps = {
      time: '000',
      levels: ['beginner', 'intermediate', 'expert'],
      mines: '010',
      reset: () => null,
    }

    const { asFragment } = render(<Board {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
