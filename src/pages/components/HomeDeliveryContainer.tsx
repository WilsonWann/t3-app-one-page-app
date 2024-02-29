import React from 'react'
import { Block } from './FormBlock'
import CityBlock from './CityBlock'
import DistrictBlock from './DistrictBlock'
import TimeToReceiveBlock from './TimeToReceiveBlock'
import StreetBlock from './StreetBlock'
import DefaultAddress from './DefaultAddress'

type Props = {
  addressError?: any
}

const HomeDeliveryContainer = (props: Props) => {
  const { addressError } = props
  return (
    <>
      <Block direction={'row'} gap={'1rem'}>
        <CityBlock required error={addressError?.city} />
        <DistrictBlock required error={addressError?.district} />
      </Block>
      <StreetBlock required error={addressError?.street} />
      <TimeToReceiveBlock />
      <DefaultAddress />
    </>
  )
}

export default HomeDeliveryContainer
