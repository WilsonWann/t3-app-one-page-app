'use client'
import React from 'react'
import styled from '@emotion/styled'
import { useFormStatus } from 'react-dom'

const Button = styled.button`
  border: none;
  outline: none;
  position: relative;
  padding: 0 1rem;
  background-color: #ff3366;
  height: 3rem;
  width: 100%;
  border-radius: 10rem;
  color: white;
`

type Props = {
  text: string
}
const SubmitButton = (props: Props) => {
  const { text } = props
  const { pending } = useFormStatus()
  return (
    <Button type='submit' aria-disabled={pending}>
      {text}
    </Button>
  )
}

export default SubmitButton
