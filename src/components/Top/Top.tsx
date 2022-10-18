import type { FC, PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import { GameLegend, type GameLegendProps } from './GameLegend'
import { GameName } from './GameName'

const Header = styled.header`
  text-align: center;
  position: relative;
  display: inline-block;
`

export type TopProps = PropsWithChildren<GameLegendProps>

export const Top: FC<TopProps> = ({ children, ...legendProps }): JSX.Element => {
  return (
    <Header>
      <GameName>{children}</GameName>
      <GameLegend {...legendProps} />
    </Header>
  )
}
