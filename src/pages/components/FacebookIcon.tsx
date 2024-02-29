import React from 'react'
import styled from '@emotion/styled'

const IconWrapper = styled.div`
  position: relative;
  width: 9rem;
  height: 2rem;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 1rem;
  padding: 0 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

const IconSpan = styled.span`
  position: relative;
  font-size: small;
`
type Props = {
  children: React.ReactNode
  onClick?: () => void
  iconText: string
}

const IconTemplate = (props: Props) => {
  const { children, onClick = () => {}, iconText } = props
  return (
    <IconWrapper onClick={onClick}>
      {children}
      <IconSpan>{iconText}</IconSpan>
    </IconWrapper>
  )
}

export default IconTemplate
