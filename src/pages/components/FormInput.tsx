import React from 'react'
import styled from '@emotion/styled'

type CompositedInputProps = {
  error?: string
}

const CompositedInput = styled.div<CompositedInputProps>`
  position: relative;
  width: 100%;
  margin-bottom: 0.5rem;
  height: fit-content;
  background-color: ${(props) => (props.error ? 'rgba(249,72,22,0.1)' : 'white')};
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 0.3rem;
  overflow: hidden;
  transition: background-color 0.25s linear;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &:focus-visible {
    outline: none;
  }

  & input {
    width: 100%;
    line-height: 1;
    font-size: 1rem;
    height: 2.5rem;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    background-color: transparent;

    &:focus-visible {
      outline: none;
    }
  }
`
const LabelDiv = styled.div`
  position: relative;
  padding: 0.5rem 0.5rem 0;
  font-size: medium;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

type Props = {
  label: string
  type?: string
  icon?: React.ReactNode
  required?: boolean
  inputProps?: any
  error?: string
}

const FormInput = (props: Props) => {
  const {
    label,
    type = 'text',
    icon = null,
    required = false,
    inputProps = {},
    error = undefined
  } = props
  return (
    <CompositedInput error={error}>
      <LabelDiv>
        <label>{label}</label>
        {required && <span style={{ color: 'red' }}>*</span>}
      </LabelDiv>
      <input type={type} autoComplete={'off'} {...inputProps} />
      {icon}
    </CompositedInput>
  )
}

export default FormInput
