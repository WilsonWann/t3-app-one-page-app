import React from 'react'
import styled from '@emotion/styled'

const Message = styled.p`
  color: red;
  font-size: smaller;
`

type Props = {
  children: React.ReactNode
}

const ErrorMessage = (props: Props) => {
  const { children } = props
  return <Message>{children}</Message>
}

export default ErrorMessage
