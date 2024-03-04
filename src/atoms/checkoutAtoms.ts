import { atom } from 'jotai'
import type {
  Coupon,
  FamilyMartPickupType, GoodsDeliverType, HiLifePickupType, HomeDeliveryType, LogisticsProps, SevenElevenPickupType
} from '~/types'
import { Logistics, Payments, OnlinePayments } from '~/const'
import { getInStorePickupCouponAtom, getHomeDeliveryCouponAtom, getCartListAtom, getCartListSubtotalAtom } from '.'
import { getValidateRecipientAtom } from './recipientAtoms'
function getCouponAndReturnFreight<LogisticsProps>(logistics: LogisticsProps, coupon: Coupon, payment: typeof Payments[number]): LogisticsProps {
  if (coupon.active) {
    return {
      ...logistics,
      freight: undefined,
      payment
    } satisfies LogisticsProps
  }
  return {
    ...logistics,
    payment
  } satisfies LogisticsProps
}

const homeDelivery: HomeDeliveryType = {
  logisticsType: 'homeDelivery',
  logisticsMode: 'homeDelivery',
  logisticsName: '宅配(台灣本島)',
  freight: 130,
  payment: 'credit'
}

const sevenElevenPickUp: SevenElevenPickupType = {
  logisticsType: 'sevenEleven',
  logisticsMode: 'inStorePickup',
  logisticsName: '7-11超商取貨',
  freight: 65,
  payment: 'cod'
}

const familyMartPickUp: FamilyMartPickupType = {
  logisticsType: 'familyMart',
  logisticsMode: 'inStorePickup',
  logisticsName: '全家超商取貨',
  freight: 70,
  payment: 'cod'
}

const hiLifePickUp: HiLifePickupType = {
  logisticsType: 'hiLife',
  logisticsMode: 'inStorePickup',
  logisticsName: '萊爾富超商取貨',
  freight: 60,
  payment: 'cod'
}

const homeDeliveryAtom = atom<HomeDeliveryType>(get => getCouponAndReturnFreight(homeDelivery, get(getHomeDeliveryCouponAtom), get(paymentTypesAtom)))
const sevenElevenPickUpAtom = atom<SevenElevenPickupType>(get => getCouponAndReturnFreight(sevenElevenPickUp, get(getInStorePickupCouponAtom), get(paymentTypesAtom)))
const familyMartPickUpAtom = atom<FamilyMartPickupType>(get => getCouponAndReturnFreight(familyMartPickUp, get(getInStorePickupCouponAtom), get(paymentTypesAtom)))
const hiLifePickUpAtom = atom<HiLifePickupType>(get => getCouponAndReturnFreight(hiLifePickUp, get(getInStorePickupCouponAtom), get(paymentTypesAtom)))

export const getLogisticsDetailAtom = atom<LogisticsProps[]>(
  (get) => [
    get(homeDeliveryAtom),
    get(sevenElevenPickUpAtom),
    get(familyMartPickUpAtom),
    get(hiLifePickUpAtom)
  ],
)

export const logisticsTypeAtom = atom<LogisticsProps["logisticsType"]>("homeDelivery")
export const setLogisticsTypeAtom = atom(
  null,
  (get, set, logisticsType: LogisticsProps["logisticsType"]) => {
    set(logisticsTypeAtom, logisticsType)
    const payment = get(paymentTypesAtom)
    if (logisticsType === 'homeDelivery') {
      set(paymentTypesAtom, 'credit')
      return
    }
    set(paymentTypesAtom, payment)
  }
)
export const paymentTypesAtom = atom<typeof Payments[number]>('credit')
export const mainLogisticsAtom = atom(
  get => {
    const logisticsDetails = get(getLogisticsDetailAtom)
    //* take care of the exclamation mark at the end
    const selectedLogistics = logisticsDetails.filter(logistics => logistics.logisticsType === get(logisticsTypeAtom))[0]!
    return selectedLogistics
  }
)

export const getLogisticsAtom = atom(Logistics)

const paymentsAtom = atom(
  get => {
    const logisticsType = get(logisticsTypeAtom)
    if (logisticsType === 'homeDelivery') {
      return OnlinePayments
    } else {
      return Payments
    }
  }
)
export const getPaymentTypeAtom = atom(
  get => {
    const payments = get(paymentsAtom)
    const paymentType = payments.flatMap(payment => {
      switch (payment) {
        case 'cod': {
          return ({ payment, name: '超商取貨時付款' })
        }
        case 'credit': {
          return ({ payment, name: '信用卡' })
        }
        case 'virtualAccount': {
          return ({ payment, name: '虛擬帳號' })
        }
        case 'icashPay': {
          return ({ payment, name: 'icash Pay' })
        }
        case 'applePay': {
          return ({ payment, name: 'Apple Pay' })
        }
      }
    })

    return paymentType
  }
)

export const getGoodsDeliverAtom = atom(
  get => {
    const logistics = get(mainLogisticsAtom)
    const cartItems = get(getCartListAtom)
    const subtotal = get(getCartListSubtotalAtom) + (logistics.freight ?? 0)
    const recipient = get(getValidateRecipientAtom)
    return {
      logistics,
      cartItems,
      subtotal,
      recipient,
    } satisfies GoodsDeliverType
  }
)
