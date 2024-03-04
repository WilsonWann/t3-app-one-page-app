import { atom } from 'jotai'
import { atomWithReset, RESET } from 'jotai/utils'
import { updateCartAtom, updateTakeOnHandItemAtom } from '.'

const baseAtom = atomWithReset(1)

export const counterAtom = atom((get) => get(baseAtom))
export const resetCounterAtom = atom(
  null,
  (_get, set) => set(baseAtom, RESET)
)
export const incAtom = atom(null, (get, set, max: number) => {
  set(baseAtom, (prev) => {
    if (prev + 1 > max) {
      return max
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
  (get, set, type: "INC" | "DEC", max: number, cartItemId?: string) => {
    if (type === 'INC') {
      set(incAtom, max)
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