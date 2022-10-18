import type { FC } from 'react'
import styled from '@emotion/styled'
import { GameLegend, type GameLegendProps } from './GameLegend'
import { GameName, type GameNameProps } from './GameName'

const Header = styled.header`
  text-align: center;
  position: relative;
  display: inline-block;
`

export type TopProps = GameLegendProps & GameNameProps

export const Top: FC<TopProps> = ({ children: name, ...legendProps }): JSX.Element => {
  return (
    <Header>
      <GameName>{name}</GameName>
      <GameLegend {...legendProps} />
    </Header>
  )
}
