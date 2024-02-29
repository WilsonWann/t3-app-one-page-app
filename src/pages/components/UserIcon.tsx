import React from 'react'
import styled from '@emotion/styled'
import { LuUser2 } from 'react-icons/lu'
import { LuUserPlus2 } from 'react-icons/lu'

const UserIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`
type Props = {
  type: 'default' | 'add'
  size?: number
  onClick?: () => void
  name?: string
}

const UserIcon = (props: Props) => {
  const { type = 'default', size = 22, onClick = () => {}, name = undefined } = props
  if (type === 'default') {
    return (
      <UserIconWrapper>
        <LuUser2 color='black' size={size} onClick={onClick} />
        {name && <span>{name}</span>}
      </UserIconWrapper>
    )
  }

  if (type === 'add') {
    return (
      <UserIconWrapper>
        <LuUserPlus2 color='black' size={size} onClick={onClick} />
        {name && <span>{name}</span>}
      </UserIconWrapper>
    )
  }
}

export default UserIcon
