import React from 'react'
import styled from '@emotion/styled'

type WrapperType = {
  active: boolean
}
const Wrapper = styled.div<WrapperType>`
  position: absolute;
  top: -1000rem;
  transform: translateY(-50%);
  width: 8rem;
  height: 2rem;
  border-radius: 0.3rem;
  font-size: small;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.5rem 1rem;

  display: inline-block;
  text-align: center;
  line-height: 1;

  right: 5rem;
  opacity: 0;
  transition: right 0.5s 0.1s ease-in, opacity 0.5s 0.1s ease-in;

  ${(props) =>
    props.active &&
    `
    top: 50%;
    right: 4rem;
    opacity: 1;
      `}

  &::after {
    content: '';
    position: absolute;
    display: block;
    border-style: solid;
    border-width: 5px 0 5px 8px;
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
    height: 0;
    width: 0;
    border-color: transparent transparent transparent rgba(0, 0, 0, 0.7);
  }
`

type Props = {
  active: boolean
}

const AddToCartSuccessTip = (props: Props) => {
  const { active } = props
  return <Wrapper active={active}>已加到購物車</Wrapper>
}

export default AddToCartSuccessTip
