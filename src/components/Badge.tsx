import React from 'react'
import styled from '@emotion/styled'

type BadgeProps = {
  color: string
  backgroundColor: string
}

const StyledBadge = styled.label<BadgeProps>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  padding: 0.3rem 0.8rem;
  border-radius: 0.2rem;
  font-size: 0.7rem;
`

type Props = {
  label: string
  color?: string
  backgroundColor?: string
}

const Badge = (props: Props) => {
  const { label, color = 'white', backgroundColor = 'red' } = props
  return (
    <StyledBadge color={color} backgroundColor={backgroundColor}>
      {label}
    </StyledBadge>
  )
}

export default Badge
