import React from 'react'
import styled from '@emotion/styled'
import { IoCartOutline } from 'react-icons/io5'

const CartIconWrapper = styled.div`
  position: relative;

  & > span {
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: -0.3rem;
    right: -0.5rem;
    border-radius: 50%;
    background-color: red;
    color: white;
    text-align: center;
    line-height: 1rem;
    font-size: 0.7rem;
  }
`
type Props = {
  size?: number
  color?: string
  bold?: boolean
  itemNumber: number
  onClick?: () => void
}

const CartIcon = (props: Props) => {
  const { size = 22, color = 'black', bold = false, itemNumber, onClick } = props
  return (
    <CartIconWrapper>
      <IoCartOutline
        size={size}
        color={color}
        onClick={onClick}
        style={{
          ...(bold && { filter: 'drop-shadow(0.8px 0.8px 0px #fff)' })
        }}
      />
      {itemNumber > 0 && <span>{itemNumber}</span>}
    </CartIconWrapper>
  )
}

export default CartIcon
