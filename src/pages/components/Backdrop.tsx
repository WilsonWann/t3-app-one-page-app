'use client'
import React from 'react'
import styled from '@emotion/styled'

type BackDropProps = {
  active: boolean
  backgroundColor: string
  zIndex: number
}

const BackdropDiv = styled.div<BackDropProps>`
  position: fixed;
  top: 0;
  height: 100dvh;
  left: ${(props) => (props.active ? '0' : '-100vw')};
  width: 100vw;
  background-color: ${(props) => props.backgroundColor};
  z-index: ${(props) => props.zIndex};
`

type Props = {
  active: boolean
  onClick?: () => void
  backgroundColor?: string
  zIndex?: number
}

const Backdrop = (props: Props) => {
  const {
    active,
    onClick = () => {},
    backgroundColor = 'rgba(0, 0, 0, 0.8)',
    zIndex = 100000
  } = props
  return (
    <BackdropDiv
      active={active}
      onClick={onClick}
      backgroundColor={backgroundColor}
      zIndex={zIndex}
    />
  )
}

export default Backdrop
