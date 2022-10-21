import type { FC, HTMLAttributes, MouseEventHandler } from 'react'
import styled from '@emotion/styled'
import type { Cell as CellType, Coords } from '@/helpers'
import { cellState } from '@/helpers'
import { usePressedButton } from '@/hooks'

export interface CellProps {
  /**
   * Cell status based on cell type
   */
  cell: CellType
  /**
   * Cell coordinates
   */
  coords: Coords
  /**
   * Click handler
   */
  leftClick: (coords: Coords) => void
  /**
   * Context menu handler
   */
  rightClick: (coords: Coords) => void
  /**
   * For testing
   */
  'data-testid'?: string
}

export const checkIsActiveCell = (cell: CellType): boolean => {
  return [cellState.hidden, cellState.flag, cellState.weakFlag].includes(cell)
}

export const Cell: FC<CellProps> = ({ cell, coords, leftClick, rightClick, 'data-testid': id }): JSX.Element => {
  const [pressed, onMouseDown, onMouseUp] = usePressedButton()

  const onClick: MouseEventHandler<HTMLDivElement> = () => {
    leftClick(coords)
  }

  const onContextMenu: MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault()
    if (checkIsActiveCell(cell)) rightClick(coords)
  }

  type StyledCellProps = HTMLAttributes<HTMLDivElement> & { 'data-testid': typeof id }

  const activeCellProps: StyledCellProps & { pressed: typeof pressed } = {
    onClick,
    onContextMenu,
    onMouseDown,
    onMouseUp,
    onMouseLeave: onMouseUp,
    'data-testid': id,
    pressed,
  }

  const nonActiveCellProps: StyledCellProps = {
    onContextMenu,
    'data-testid': id,
  }

  const { empty, bomb, flag, weakFlag, hidden } = cellState

  switch (cell) {
    case empty: {
      return <RevealedCell {...nonActiveCellProps} />
    }

    case bomb: {
      return (
        <CellWithBomb {...nonActiveCellProps}>
          <Bomb />
        </CellWithBomb>
      )
    }

    case hidden: {
      return <ClosedCell {...activeCellProps} />
    }

    case flag: {
      return (
        <ClosedCell {...activeCellProps}>
          <Flag />
        </ClosedCell>
      )
    }

    case weakFlag: {
      return (
        <ClosedCell {...activeCellProps}>
          <WeakFlag />
        </ClosedCell>
      )
    }

    default: {
      return <RevealedCell {...nonActiveCellProps}>{cell}</RevealedCell>
    }
  }
}

export const ClosedCell = styled.div<{ pressed?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  width: 1.8vw;
  height: 1.8vw;
  background-color: #d1d1d1;
  border: 0.6vh solid transparent;
  border-color: ${({ pressed = false }) => (pressed ? 'tranparent' : 'white #9e9e9e #9e9e9e white')};

  &:hover {
    filter: brightness(1.1);
  }
`

const RevealedCell = styled(ClosedCell)`
  border-color: #ddd;
  cursor: default;
  color: ${({ children }) => colors[children as CellType] ?? transparent};

  &:hover {
    filter: brightness(1);
  }
`

const Bomb = styled.div`
  border-radius: 50%;
  width: 1vw;
  height: 1vw;
  background-color: #333;
`

const CellWithBomb = styled(RevealedCell)`
  background-color: #ec433c;
`

const Flag = styled.div`
  width: 0;
  height: 0;
  border-top: 0.5vw solid transparent;
  border-bottom: 0.5vw solid transparent;
  border-left: 0.5vw solid #ec433c;
`

const WeakFlag = styled(Flag)`
  border-left: 0.5vw solid #f19996;
`

const transparent = 'rgba(0,0,0,0)'

const colors: { [key in CellType]: string } = {
  0: '#000',
  1: '#2a48ec',
  2: '#2bb13d',
  3: '#ec6561',
  4: '#233db7',
  5: '#a6070f',
  6: '#e400af',
  7: '#906a02',
  8: '#fa0707',
  9: transparent,
  10: transparent,
  11: transparent,
  12: transparent,
}
