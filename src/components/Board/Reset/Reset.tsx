import type { FC } from 'react'
import styled from '@emotion/styled'
import { usePressedButton } from '@/hooks'

export interface ResetProps {
  /**
   * Reset action handler
   */
  reset: () => void
}

export const Reset: FC<ResetProps> = ({ reset }): JSX.Element => {
  const [pressed, down, up] = usePressedButton()

  return (
    <Button onClick={reset} onMouseDown={down} onMouseUp={up} onMouseLeave={up}>
      {pressed ? '😯' : '🙂'}
    </Button>
  )
}

const Button = styled.button`
  font-size: 1.5vw;
  cursor: pointer;
  font-weight: 700;
  border-width: 0.15vw;
  border-style: solid;
  background-color: #d1d1d1;
  border-color: white #9e9e9e #9e9e9e white;
  padding: 0;
`
