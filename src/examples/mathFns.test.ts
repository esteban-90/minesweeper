import { addition, multiply } from '@/examples/mathFns'

describe('Math functions test cases:', () => {
  it('check addition', () => {
    expect(addition(1, 2)).toBe(3)
  })

  it('check multiply', () => {
    expect(multiply(2, 3)).toBe(6)
  })
})
