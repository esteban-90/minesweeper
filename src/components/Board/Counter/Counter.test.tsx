import { render } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter test cases:', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Counter>20</Counter>)
    expect(asFragment()).toMatchSnapshot()
  })
})
