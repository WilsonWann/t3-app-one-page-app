'use client'
import React from 'react'
import styled from '@emotion/styled'

const Title = styled.h2`
  margin-top: 2rem;
  font-size: x-large;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

type Props = {
  title: string
  icon?: React.ReactNode
}

const DisplayTitle = (props: Props) => {
  const { title, icon = null } = props
  if (!icon) {
    return <Title>{title}</Title>
  }

  return (
    <Title>
      {icon}
      {title}
    </Title>
  )
}

export default DisplayTitle
