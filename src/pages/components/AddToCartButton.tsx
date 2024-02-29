import React from 'react'
import styled from '@emotion/styled'
import CartIcon from './CartIcon'

const CheckoutButton = styled.button`
  border: none;
  outline: none;
  position: relative;
  padding: 0 1rem;
  background-color: #ff3366;
  height: 2rem;
  width: 100%;
  border-radius: 10rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`

const CheckoutText = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  line-height: 1rem;
  color: white;
`
type Props = {
  showIcon?: boolean
  iconText?: string
  onClick: () => void
}

const AddToCartButton = (props: Props) => {
  const { showIcon = true, iconText = '選購', onClick } = props
  return (
    <CheckoutButton onClick={onClick}>
      {showIcon && <CartIcon size={16} color={'white'} bold />}
      <CheckoutText>{iconText}</CheckoutText>
    </CheckoutButton>
  )
}

export default AddToCartButton
