import type { FC, PropsWithChildren } from 'react'
import styled from '@emotion/styled'

const Select = styled.select`
  margin: 0;
  border-radius: 0;
  border: 0.15vw solid;
  border-color: white #9e9e9e #9e9e9e white;
  background-color: #d1d1d1;
`

const Option = styled.option`
  font-weight: normal;
  diplay: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0 0.2vw 0.2vw;
`

export const Level: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <Select>
      {(children as string[]).map((item) => (
        <Option value={item} key={item}>
          {item}
        </Option>
      ))}
    </Select>
  )
}
