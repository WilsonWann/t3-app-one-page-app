import Link from 'next/link'
import React from 'react'
import { IoLogoModelS } from 'react-icons/io'
import NavLink from './NavLink'

type Props = {
  size?: number
}

const Logo = (props: Props) => {
  const { size = 36 } = props

  return (
    <NavLink href={'/'}>
      <IoLogoModelS color={'black'} size={size} />
    </NavLink>
  )
}

export default Logo
