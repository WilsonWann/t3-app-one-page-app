import { atom } from 'jotai'
import { ProductErrorProps, QuantityProps, ShoppingItem, TakeOnHandItem } from '~/types'
import { shoppingListAtom, getTakeOnHandItemIdAtom } from '.'

const getTakeOnHandItem = (shoppingList: ShoppingItem[], id: number) => {
  return shoppingList.filter(item => item.id === id)
    .map(item => ({
      ...item,
      quantity: 1,
      subtotal: item.specialPrice
    }) satisfies TakeOnHandItem)[0]
}

const getTakeOnHandItemAvailableQuantity = (onHandItem: TakeOnHandItem, type: "INC" | "DEC"): (QuantityProps & ProductErrorProps) => {
  const quantity = type === 'INC' ? onHandItem.quantity + 1 : onHandItem.quantity - 1
  const maxQuantity = onHandItem.maxQuantity ?? 3
  if (quantity < 1) {
    return {
      quantity: 1,
      subtotal: onHandItem.specialPrice,
      error: {
        errorType: 'lowerBound',
        errorMessage: '最低為：1'
      }
    }
  } else if (quantity > maxQuantity) {
    return {
      quantity: maxQuantity,
      subtotal: onHandItem.specialPrice * maxQuantity,
      error: {
        errorType: 'lowerBound',
        errorMessage: `最高為：${maxQuantity}`
      }
    }
  } else {
    return {
      quantity: quantity,
      subtotal: onHandItem.specialPrice * quantity,
      error: undefined
    }
  }
}

export const takeOnHandAtom = atom<TakeOnHandItem | undefined>(undefined)
export const productModalErrorAtom = atom<ProductErrorProps>({})

export const resetProductModalErrorAtom = atom(
  null,
  (_get, set) => {
    set(productModalErrorAtom, {})
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