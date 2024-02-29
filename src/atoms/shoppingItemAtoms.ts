import { ShoppingItem } from '~/types'
import { atom } from 'jotai'

export const shoppingListAtom = atom<ShoppingItem[]>([])

