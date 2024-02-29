import React from 'react'
import { IoClose } from 'react-icons/io5'
import styled from '@emotion/styled'

const CloseLabel = styled.label`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover svg {
    opacity: 0.6;
  }
`
type Props = {
  htmlFor?: string
  onClick?: () => void
}

const CloseButton = (props: Props) => {
  const { htmlFor = '', onClick = () => {} } = props

  return (
    <CloseLabel htmlFor={htmlFor} onClick={onClick}>
      <IoClose color='black' size={20} />
    </CloseLabel>
  )
}

export default CloseButton
