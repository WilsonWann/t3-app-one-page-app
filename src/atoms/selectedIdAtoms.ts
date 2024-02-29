import { atom } from 'jotai'
import { productModalOpenAtom, resetCounterAtom, setTakeOnHandItemAtom } from '.'

const takeOnHandItemIdAtom = atom<number>(-1)

export const getTakeOnHandItemIdAtom = atom(get => get(takeOnHandItemIdAtom))
export const resetTakeOnHandItemIdAtom = atom(
  null,
  (_get, set) => set(takeOnHandItemIdAtom, -1)
)

export const setTakeOnHandItemIdAtom = atom(
  null,
  (get, set, id: number) => {
    set(resetCounterAtom)
    set(takeOnHandItemIdAtom, id)
    set(setTakeOnHandItemAtom)
    set(productModalOpenAtom, true)
  }
)