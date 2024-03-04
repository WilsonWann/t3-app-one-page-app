import { atom } from 'jotai'
import { atomWithReset, RESET } from 'jotai/utils'
import { productModalOpenAtom, resetCounterAtom, setTakeOnHandItemAtom } from '.'

const takeOnHandItemIdAtom = atomWithReset<string>("")

export const getTakeOnHandItemIdAtom = atom(get => get(takeOnHandItemIdAtom))
export const resetTakeOnHandItemIdAtom = atom(
  null,
  (_get, set) => set(takeOnHandItemIdAtom, RESET)
)

export const setTakeOnHandItemIdAtom = atom(
  null,
  (get, set, id: string) => {
    set(resetCounterAtom)
    set(takeOnHandItemIdAtom, id)
    set(setTakeOnHandItemAtom)
    set(productModalOpenAtom, true)
  }
)