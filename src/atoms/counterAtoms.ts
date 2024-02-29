import { atom } from 'jotai'
import { updateCartAtom, updateTakeOnHandItemAtom } from '.'

const baseAtom = atom(1)

export const counterAtom = atom((get) => get(baseAtom))
export const resetCounterAtom = atom(
  null,
  (_get, set) => set(baseAtom, 1)
)
export const incAtom = atom(null, (get, set) => {
  set(baseAtom, (prev) => {
    if (prev + 1 > 3) {
      return 3
    } else {
      return prev + 1
    }
  })
})
export const decAtom = atom(null, (_get, set) => {
  set(baseAtom, (prev) => {
    if (prev - 1 < 1) {
      return 1
    } else {
      return prev - 1
    }
  })
})

export const dispatchAtom = atom(
  null,
  (get, set, type: "INC" | "DEC", cartItemId?: number) => {
    if (type === 'INC') {
      set(incAtom)
    } else if (type === 'DEC') {
      set(decAtom)
    } else {
      throw new Error('unknown action')
    }

    //* takeOnHand item selected
    if (cartItemId === undefined) {
      set(updateTakeOnHandItemAtom, type)
      return
    }

    //* cart item selected
    set(updateCartAtom, cartItemId, type)
  }
)