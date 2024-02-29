import { Coupon } from '~/types'
import { atom } from 'jotai'
import { getCartListSubtotalAtom } from '.'

const inStorePickupCoupon: Coupon = {
  code: '0101',
  name: '滿800 超取免運',
  description: '滿800 超商取貨免運',
  threshold: 800,
  active: false
}

const homeDeliveryCoupon: Coupon = {
  code: '0201',
  name: '滿1500 宅配免運',
  description: '滿1500 宅配免運',
  threshold: 1500,
  active: false
}

const inStorePickupCouponAtom = atom<Coupon>(inStorePickupCoupon)
const homeDeliveryCouponAtom = atom<Coupon>(homeDeliveryCoupon)

export const getInStorePickupCouponAtom = atom(
  get => {
    const subtotal = get(getCartListSubtotalAtom)
    const inStorePickupCoupon = get(inStorePickupCouponAtom)
    if (subtotal >= inStorePickupCoupon.threshold) {
      return {
        ...inStorePickupCoupon,
        active: true
      }
    }
    return inStorePickupCoupon
  }
)

export const getHomeDeliveryCouponAtom = atom(
  get => {
    const subtotal = get(getCartListSubtotalAtom)
    const homeDeliveryCoupon = get(homeDeliveryCouponAtom)
    if (subtotal >= homeDeliveryCoupon.threshold) {
      return {
        ...homeDeliveryCoupon,
        active: true
      }
    }
    return homeDeliveryCoupon
  }
)


