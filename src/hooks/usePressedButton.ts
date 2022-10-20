import { useState, useDebugValue } from 'react'

type PressHandler = () => void

export const usePressedButton = (): [boolean, PressHandler, PressHandler] => {
  const [pressed, setPressed] = useState<boolean>(false)

  useDebugValue(`pressed: ${pressed}`, (value) => `${value} ${new Date().toISOString()}`)

  const down: PressHandler = () => setPressed(true)
  const up: PressHandler = () => setPressed(false)

  return [pressed, down, up]
}
