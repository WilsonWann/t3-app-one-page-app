import { ShoppingItem } from '@prisma/client'
import { atom } from 'jotai'

export const shoppingListAtom = atom<ShoppingItem[]>([])

