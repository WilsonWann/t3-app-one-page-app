import React from 'react'
import { Block, BlockTitle, BlockContent } from './FormBlock'
type Props = {}

const InStorePickupContainer = (props: Props) => {
  return (
    <>
      <Block>
        <BlockTitle htmlFor={'inStorePickup'}>取貨超商</BlockTitle>
        <BlockContent>
          <input id='inStorePickup' type='text' />
        </BlockContent>
      </Block>
      <Block>
        <BlockContent>
          <input type='checkbox' id='defaultStore' />
        </BlockContent>
        <BlockTitle htmlFor={'defaultStore'}>儲存為常用超商</BlockTitle>
      </Block>
    </>
  )
}

export default InStorePickupContainer
