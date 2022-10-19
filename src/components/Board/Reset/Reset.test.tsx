import { render, screen, fireEvent } from '@testing-library/react'
import { Reset } from './Reset'

describe('Reset test cases:', () => {
  it('reset handler should be called', () => {
    const reset = vitest.fn()
    render(<Reset reset={reset} />)

    const smilingFace = screen.getByText('🙂')
    fireEvent.click(smilingFace)

    expect(reset).toBeCalled()
  })

  describe('without reset handler:', () => {
    beforeEach(() => {
      render(<Reset reset={() => null} />)
    })

    it('should render elements with default state', () => {
      const smilingFace = screen.getByText('🙂')
      expect(smilingFace).toBeInTheDocument()
    })

    it('should change state when onMouseDown and onMouseUp events happen', () => {
      const smilingFace = screen.getByText('🙂')
      fireEvent.mouseDown(smilingFace)

      const hushedFace = screen.getByText('😯')
      expect(hushedFace).toBeInTheDocument()

      fireEvent.mouseUp(hushedFace)
      expect(smilingFace).toBeInTheDocument()
    })

    it('should change state when onMouseDown and onMouseLeave events happen', () => {
      const smilingFace = screen.getByText('🙂')
      fireEvent.mouseDown(smilingFace)

      const hushedFace = screen.getByText('😯')
      expect(hushedFace).toBeInTheDocument()

      fireEvent.mouseLeave(hushedFace)
      expect(smilingFace).toBeInTheDocument()
    })
  })
})
