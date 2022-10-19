import type { FC, MouseEventHandler } from 'react'
import { useState } from 'react'
import styled from '@emotion/styled'

type ButtonHandler = MouseEventHandler<HTMLButtonElement>

export interface ResetProps {
  /**
   * Reset action handler
   */
  reset: ButtonHandler
}

export const Reset: FC<ResetProps> = ({ reset }): JSX.Element => {
  const [pressed, setPressed] = useState<boolean>(false)

  const down: ButtonHandler = () => setPressed(true)
  const up: ButtonHandler = () => setPressed(false)

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
