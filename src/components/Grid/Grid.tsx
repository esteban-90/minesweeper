import type { FC } from 'react'
import styled from '@emotion/styled'
import type { Coords, Field } from '@/helpers'
import { Cell } from './Cell'

export interface GridProps {
  field: Field
  leftClick: (coords: Coords) => void
  rightClick: (coors: Coords) => void
}

export const Grid: FC<GridProps> = ({ field, ...rest }): JSX.Element => {
  return (
    <Wrapper length={field.length}>
      {field.map((row, y) =>
        row.map((cell, x) => {
          return <Cell key={`${y}_${x}_${cell}`} coords={[y, x]} cell={cell} {...rest} />
        })
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div<{ length: number }>`
  display: grid;
  grid-template-columns: repeat(${({ length }) => length}, auto);
  width: max-content;
  padding: 1vw;
`
