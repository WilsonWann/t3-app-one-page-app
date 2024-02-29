const cartMaxLimit = 5

const TimeToReceive = ['unset', 'morning', 'afternoon'] as const

const Logistics = ['homeDelivery', 'sevenEleven', 'familyMart', 'hiLife'] as const
const LogisticsMode = ['homeDelivery', 'inStorePickup'] as const
const Payments = ['cod', 'credit', 'virtualAccount', 'icashPay', 'applePay'] as const
const OnlinePayments = ['credit', 'virtualAccount', 'icashPay', 'applePay'] as const
const Gender = ['unset', 'male', 'female'] as const

export {
  cartMaxLimit,
  Logistics,
  LogisticsMode,
  Payments,
  OnlinePayments,
  Gender,
  TimeToReceive
}