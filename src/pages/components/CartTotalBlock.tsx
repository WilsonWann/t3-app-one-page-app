import React from 'react'
import { Block } from './FormBlock'
import CartSubtotal from './CartSubtotal'
type Props = {
  freight?: number
}

const CartTotalBlock = (props: Props) => {
  const { freight = 0 } = props
  return (
    <Block>
      <CartSubtotal padding={'0'} title='總計' freight={freight} />
    </Block>
  )
}

export default CartTotalBlock
