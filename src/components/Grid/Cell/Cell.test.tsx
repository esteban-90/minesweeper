import { render, screen, fireEvent, createEvent } from '@testing-library/react'
import { cellState, type Coords } from '@/helpers'
import { Cell, ClosedCell, type CellProps, checkIsActiveCell } from './Cell'

describe('Cell test cases:', () => {
  const coords: Coords = [1, 1]
  const { empty, weakFlag } = cellState
  const mockFn = vitest.fn()

  for (let cell = empty; cell <= weakFlag; cell++) {
    const id = `${cell}_${coords}`
    const props: CellProps = { coords, leftClick: mockFn, rightClick: mockFn, cell, 'data-testid': id }

    describe('renders:', () => {
      it(`cell with status "${cell}" should render correctly`, () => {
        const { asFragment } = render(<Cell {...props} />)
        expect(asFragment()).toMatchSnapshot()
      })

      it('closed cell should render correctly', () => {
        const { asFragment } = render(<ClosedCell pressed />)
        expect(asFragment()).toMatchSnapshot()
      })
    })

    describe('events:', () => {
      beforeEach(() => {
        render(<Cell {...props} />)
      })

      it(`should check prevent default onContextMenu for cell with status "${cell}"`, () => {
        const cellElement = screen.getByTestId(id)
        const contextMenuEvent = createEvent.contextMenu(cellElement)

        fireEvent(cellElement, contextMenuEvent)
        expect(contextMenuEvent.defaultPrevented).toBe(true)
      })

      it(`onClick and onContextMenu handlers should be called for active cell with status "${cell}"`, () => {
        const isActive = checkIsActiveCell(cell)
        const cellElement = screen.getByTestId(id)

        fireEvent.click(cellElement)
        fireEvent.contextMenu(cellElement)

        if (isActive) {
          expect(props.leftClick).toBeCalled()
          expect(props.rightClick).toBeCalled()
        } else {
          expect(props.leftClick).not.toBeCalled()
          expect(props.rightClick).not.toBeCalled()
        }
      })
    })
  }
})
