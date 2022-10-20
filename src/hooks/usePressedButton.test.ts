import { renderHook, act } from '@testing-library/react'
import { usePressedButton } from './usePressedButton'

describe('usePressedButton() hook test cases:', () => {
  it('should toggle state after down/up calls', () => {
    const { result } = renderHook(usePressedButton)

    const [pressed, down] = result.current
    expect(pressed).toBe(false)

    act(down)

    const [pressedAfterDown, , up] = result.current
    expect(pressedAfterDown).toBe(true)

    act(up)

    const [pressedAfterUp] = result.current
    expect(pressedAfterUp).toBe(false)
  })
})
