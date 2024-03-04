import { atom } from 'jotai'
import { atomWithReset, RESET } from 'jotai/utils'
import type { ShoppingItem } from '@prisma/client'

import type { ProductErrorProps, QuantityProps, TakeOnHandItem } from '~/types'
import { shoppingListAtom, getTakeOnHandItemIdAtom } from '.'

const getTakeOnHandItem = (shoppingList: ShoppingItem[], id: string) => {
  return shoppingList.filter(item => item.id === id)
    .map(item => ({
      ...item,
      quantity: 1,
      subtotal: item.itemSpecialPrice ?? item.itemPrice
    }) satisfies TakeOnHandItem)[0]
}

const getTakeOnHandItemAvailableQuantity = (onHandItem: TakeOnHandItem, type: "INC" | "DEC"): (QuantityProps & ProductErrorProps) => {
  const quantity = type === 'INC' ? onHandItem.quantity + 1 : onHandItem.quantity - 1
  const maxQuantity = onHandItem.itemAvailableQuantity
  if (quantity < 1) {
    return {
      quantity: 1,
      subtotal: onHandItem.itemSpecialPrice ?? onHandItem.itemPrice,
      error: {
        errorType: 'lowerBound',
        errorMessage: '最低為：1'
      }
    }
  } else if (quantity > maxQuantity) {
    return {
      quantity: maxQuantity,
      subtotal: (onHandItem.itemSpecialPrice ?? onHandItem.itemPrice) * maxQuantity,
      error: {
        errorType: 'lowerBound',
        errorMessage: `最高為：${maxQuantity}`
      }
    }
  } else {
    return {
      quantity: quantity,
      subtotal: (onHandItem.itemSpecialPrice ?? onHandItem.itemPrice) * quantity,
      error: undefined
    }
  }
}

export const takeOnHandAtom = atom<TakeOnHandItem | undefined>(undefined)
export const productModalErrorAtom = atomWithReset<ProductErrorProps>({})

export const resetProductModalErrorAtom = atom(
  null,
  (_get, set) => {
    set(productModalErrorAtom, RESET)
  }
)

export const setTakeOnHandItemAtom = atom(
  null,
  (get, set) => {
    set(takeOnHandAtom, getTakeOnHandItem(get(shoppingListAtom), get(getTakeOnHandItemIdAtom)))
  }
)

export const updateTakeOnHandItemAtom = atom(
  null,
  (get, set, type: "INC" | "DEC") => {
    const onHandItem = get(takeOnHandAtom)
    if (!onHandItem) return undefined
    const { quantity, subtotal, error } = getTakeOnHandItemAvailableQuantity(onHandItem, type)
    if (!quantity) return undefined
    const newItem = {
      ...onHandItem,
      quantity,
      subtotal
    } satisfies TakeOnHandItem
    set(takeOnHandAtom, newItem)

    set(productModalErrorAtom, { error })
  }
)