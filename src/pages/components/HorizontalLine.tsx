import React from 'react'
import styled from '@emotion/styled'

const Line = styled.div`
  width: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.2), transparent);
  height: 1px;
`

const HorizontalLine = () => {
  return <Line />
}

export default HorizontalLine
