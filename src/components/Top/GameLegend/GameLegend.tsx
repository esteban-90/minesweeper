import type { FC } from 'react'
import styled from '@emotion/styled'

const Parent = styled.legend`
  font-size: 1em;
  margin: 0 auto 2vw;
  line-height: 1.25em;
`

const Combo = styled.code`
  background-color: #e3e3e3;
`

const FirstAction = styled.span`
  color: #ec433c;
`

const SecondAction = styled.span`
  color: #2a48ec;
`

export interface GameLegendProps {
  /**
   * Feature that should be activated after first + second actions
   */
  feature: string
  /**
   * First action
   */
  firstAction: string
  /**
   * Second action
   */
  secondAction: string
}

export const GameLegend: FC<GameLegendProps> = ({ feature, firstAction, secondAction }): JSX.Element => {
  return (
    <Parent>
      <strong>{feature}:</strong>
      <Combo>
        <FirstAction>{firstAction}</FirstAction> + <SecondAction>{secondAction}</SecondAction>
      </Combo>
    </Parent>
  )
}
