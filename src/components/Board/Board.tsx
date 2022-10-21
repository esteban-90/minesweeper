import type { FC } from 'react'
import styled from '@emotion/styled'
import { Counter } from './Counter'
import { Level } from './Level'
import { Reset } from './Reset'

export interface BoardProps {
  /**
   * Timer
   */
  time: string
  /**
   * Possible game scenarios
   */
  levels: string[]
  /**
   * Action handler when the game reset button is called
   */
  reset: () => void
  /**
   * Bombs in the field
   */
  mines: string
}

export const Board: FC<BoardProps> = ({ time, levels, reset, mines }): JSX.Element => {
  return (
    <Wrapper>
      <Counter>{time}</Counter>
      <Level>{levels}</Level>
      <Reset reset={reset} />
      <Counter>{mines}</Counter>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: max-content;
  padding-bottom: 2vw;
  justify-content: space-between;
`
