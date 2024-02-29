import { atom } from 'jotai'
import { AddressType, GenderType, GoodsDeliverType, RecipientType, TimeToReceiveType } from '~/types'
import { Gender, TimeToReceive } from '~/const'

export const getGenderTypeAtom = atom(
  () => {
    const genders = [...Gender]
    const genderType = genders.flatMap((gender: typeof Gender[number]) => {
      switch (gender) {
        case 'unset': {
          return ({ type: gender, name: '無' })
        }
        case 'male': {
          return ({ type: gender, name: '先生' })
        }
        case 'female': {
          return ({ type: gender, name: '小姐' })
        }
      }
    })

    return genderType
  }
)

export const getTimeToReceiveAtom = atom(
  () => {
    const timeToReceives = [...TimeToReceive]
    const timeToReceiveType = timeToReceives.flatMap((timeToReceive: typeof TimeToReceive[number]) => {
      switch (timeToReceive) {
        case 'unset': {
          return ({ type: timeToReceive, name: '不指定' })
        }
        case 'morning': {
          return ({ type: timeToReceive, name: '13點前' })
        }
        case 'afternoon': {
          return ({ type: timeToReceive, name: '14-18點' })
        }
      }
    })

    return timeToReceiveType
  }
)

export const nameAtom = atom<string>('')

export const cellphoneAtom = atom<string>('')

const cityAtom = atom<string | -1>(-1)
export const getCityAtom = atom(get => get(cityAtom))

export const setCityAtom = atom(
  null,
  (get, set, city: string | -1) => {
    set(cityAtom, city)
    set(districtAtom, -1)
  }
)

export const cityDataAtom = atom<string[]>([])

export const districtAtom = atom<string | -1>(-1)

export const districtDataAtom = atom<string[] | null>(null)

export const streetAtom = atom<string>('')

const addressAtom = atom(
  get => {
    const city = get(getCityAtom)
    const district = get(districtAtom)
    const street = get(streetAtom)
    return {
      city: city,
      district: district,
      street: street
    }
  }
)

const defaultAddressAtom = atom<boolean>(false)
export const getDefaultAddressAtom = atom(get => get(defaultAddressAtom))
export const setDefaultAddressAtom = atom(
  null,
  (get, set, defaultAddress: boolean) => {
    set(defaultAddressAtom, defaultAddress)
  }
)

export const timeToReceiveTypeAtom = atom<TimeToReceiveType>('unset')
export const genderTypeAtom = atom<GenderType>('unset')

export const timeToReceiveAtom = atom<TimeToReceiveType>(
  get => {
    const timeToReceives = get(getTimeToReceiveAtom)
    const timeToReceiveType = get(timeToReceiveTypeAtom)

    return timeToReceives
      .filter(timeToReceive => timeToReceive.type === timeToReceiveType)[0].type
  }
)
export const genderAtom = atom<GenderType>(
  get => {
    const genders = get(getGenderTypeAtom)
    const genderType = get(genderTypeAtom)

    return genders
      .filter(gender => gender.type === genderType)[0].type
  })
export const emailAtom = atom<string>('')
export const noteAtom = atom<string>('')

const recipientAtom = atom<RecipientType>({} as RecipientType)
export const getRecipientAtom = atom(
  get => {
    return {
      name: get(nameAtom),
      cellphone: get(cellphoneAtom),
      address: get(addressAtom),
      timeToReceive: get(timeToReceiveAtom),
      gender: get(genderAtom),
      email: get(emailAtom),
      note: get(noteAtom)
    }
  }
)

const validateCityAtom = atom<string>('')
const getValidateCityAtom = atom<string>(get => get(validateCityAtom))
const setValidateCityAtom = atom(
  null,
  (get, set, city: string) => {
    set(validateCityAtom, city)
  }
)
const validateDistrictAtom = atom<string>('')
const getValidateDistrictAtom = atom<string>(get => get(validateDistrictAtom))
const setValidateDistrictAtom = atom(
  null,
  (_get, set, district: string) => {
    set(validateDistrictAtom, district)
  }
)

const getValidateAddressAtom = atom<AddressType>(
  get => ({
    city: get(getValidateCityAtom),
    district: get(getValidateDistrictAtom),
    street: get(streetAtom)
  })
)

export const setValidateAddressAtom = atom(
  null,
  (get, set, city: string, district: string) => {
    set(setValidateCityAtom, city)
    set(setValidateDistrictAtom, district)
  }
)
export const getValidateRecipientAtom = atom(
  get => {
    return {
      name: get(nameAtom),
      cellphone: get(cellphoneAtom),
      address: get(getValidateAddressAtom),
      timeToReceive: get(timeToReceiveAtom),
      gender: get(genderAtom),
      email: get(emailAtom),
      note: get(noteAtom)
    }
  }
)
