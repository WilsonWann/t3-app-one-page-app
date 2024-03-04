import { atom } from 'jotai'
import { atomWithReset, RESET } from 'jotai/utils'
import { cartMaxLimit } from '~/const'
import type { CartErrorProps, CartItem, ErrorProps, TakeOnHandItem } from '~/types'
import { takeOnHandAtom, productModalOpenAtom, resetCounterAtom, resetTakeOnHandItemIdAtom, resetProductModalErrorAtom } from '.'

function generateError(quantity: number, maxQuantity: number): ErrorProps | undefined {
  if (quantity < 1) {
    return {
      errorType: 'lowerBound',
      errorMessage: '最低為：1'
    } satisfies ErrorProps
  } else if (quantity > maxQuantity) {
    return {
      errorType: 'upperBound',
      errorMessage: `最高為：${maxQuantity}`
    } satisfies ErrorProps
  } else {
    return undefined
  }
}
function getCartItemQuantity(cartItem: CartItem, type: "INC" | "DEC"): number {
  const quantity = type === 'INC' ? cartItem.quantity + 1 : cartItem.quantity - 1
  const maxQuantity = cartItem.itemAvailableQuantity

  const error = generateError(quantity, maxQuantity)
  cartItem.error = error
  if (!error) {
    return quantity
  } else if (error.errorType === 'lowerBound') {
    return 1
  } else {
    return maxQuantity
  }
}

export function updateCart(cartItems: CartItem[], id: string, type: "INC" | "DEC"): CartItem[] {
  const selectedIndex = cartItems.findIndex(item => item.id === id)
  if (selectedIndex === -1) return cartItems

  const selectedItem = cartItems.at(selectedIndex)!
  const quantity = getCartItemQuantity(selectedItem, type)
  const subtotal = (selectedItem.itemSpecialPrice ?? selectedItem.itemPrice) * quantity
  const newItem = {
    ...selectedItem,
    quantity,
    subtotal
  } satisfies CartItem
  return cartItems.toSpliced(selectedIndex, 1, newItem)
}
function removeCart(cartItems: CartItem[], id: string): CartItem[] {
  return cartItems.filter(item => item.id !== id)
}
function addToCart(cartItems: CartItem[], onHandItem: TakeOnHandItem | undefined): CartItem[] {
  if (!onHandItem) return cartItems
  if (cartItems.some(cartItem => cartItem.id === onHandItem.id)) {
    const selectedItem = cartItems.find(cartItem => cartItem.id === onHandItem.id)!
    return [
      ...cartItems.filter(cartItem => cartItem.id !== onHandItem.id),
      {
        ...selectedItem,
        quantity: selectedItem.quantity + onHandItem.quantity,
        subtotal: selectedItem.subtotal * (selectedItem.itemSpecialPrice ?? selectedItem.itemPrice) * onHandItem.quantity
      }
    ]
  }
  return [
    ...cartItems,
    {
      ...onHandItem,
    }
  ]
}

function countCartAndOnHand(cartItems: CartItem[], onHandItem: TakeOnHandItem | undefined): number {
  // no onHandItem
  if (!onHandItem) return cartItems.reduce((acc, curr) => acc + curr.quantity, 0)

  return cartItems.reduce((acc, curr) => acc + curr.quantity, 0) + onHandItem.quantity

}

const cartMaxLimitAtom = atom<number>(cartMaxLimit)
const cartListAtom = atom<CartItem[]>([])

const addToCartSuccessAtom = atom<boolean>(false)
export const getAddToCartSuccessAtom = atom(get => get(addToCartSuccessAtom))
const activeAddToCartSuccessAtom = atom(
  null,
  (_get, set) => {
    set(addToCartSuccessAtom, true)
    setTimeout(() => {
      set(addToCartSuccessAtom, false)
    }, 2000)
  }
)

export const cartErrorModalAtom = atomWithReset<CartErrorProps>({})
export const setCartErrorModalAtom = atom(
  null,
  (_get, set, { errorType, errorMessage }: ErrorProps) => {
    set(cartErrorModalAtom, {
      error: {
        errorType: errorType,
        errorMessage: errorMessage
      }
    })
    setTimeout(() => {
      set(cartErrorModalAtom, RESET)
    }, 2000)
  }
)

export const getCartItemQuantityAtom = atom(get => get(getCartListAtom).reduce((acc, curr) => acc + curr.quantity, 0))
export const getCartListSubtotalAtom = atom(get => get(getCartListAtom).reduce((acc, curr) => acc + curr.subtotal, 0))

export const getCartListAtom = atom(get => get(cartListAtom))

export const addToCartAtom = atom(
  null,
  (get, set) => {
    const total = countCartAndOnHand(get(getCartListAtom), get(takeOnHandAtom))
    if (total > get(cartMaxLimitAtom)) {
      set(setCartErrorModalAtom, {
        errorType: 'upperBound',
        errorMessage: `一般商品最多只能購買${get(cartMaxLimitAtom)}件`
      })
      return
    }

    set(cartErrorModalAtom, RESET)
    set(cartListAtom, addToCart(get(getCartListAtom), get(takeOnHandAtom)))
    set(resetCounterAtom)
    set(resetTakeOnHandItemIdAtom)
    set(productModalOpenAtom, false)
    set(resetProductModalErrorAtom)
    set(activeAddToCartSuccessAtom)
  }
)

export const removeCartAtom = atom(
  null,
  (get, set, id: string) => {
    set(cartListAtom, removeCart(get(getCartListAtom), id))
  }
)

export const updateCartAtom = atom(
  null,
  (get, set, id: string, type: "INC" | "DEC") => {

    set(cartListAtom, updateCart(get(getCartListAtom), id, type))
    const total = countCartAndOnHand(get(getCartListAtom), undefined)
    if (total > get(cartMaxLimitAtom)) {
      set(cartListAtom, updateCart(get(getCartListAtom), id, type === 'INC' ? 'DEC' : 'INC'))
      set(setCartErrorModalAtom, {
        errorType: 'upperBound',
        errorMessage: `一般商品最多只能購買${get(cartMaxLimitAtom)}件`
      })
      return
    }
    set(cartErrorModalAtom, RESET)

  }
)
