import { render } from '@testing-library/react'
import { Level } from './Level'

describe('Level test cases:', () => {
  it('should render correctly', () => {
    const levels = ['beginner', 'intermediate', 'expert']
    const { asFragment } = render(<Level>{levels}</Level>)

    expect(asFragment()).toMatchSnapshot()
  })
})
