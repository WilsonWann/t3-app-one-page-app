import React from 'react'
import styled from '@emotion/styled'
import { IoCloseCircleOutline } from 'react-icons/io5'
import Backdrop from './Backdrop'
import usePreventScroll from '../hook/usePreventScroll'

type ModalDivProps = {
  active: boolean
}
const ModalDiv = styled.div<ModalDivProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 8rem;
  width: 15rem;
  border-radius: 0.5rem;
  transform: translate(-50%, -50%);
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: ${(props) => (props.active ? 'calc(99999 + 3)' : '-1')};
  transition: top 0.25s ease-in-out;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: nowrap;
`

type Props = {
  errorMessage: string
}

const CartErrorModal = (props: Props) => {
  const { errorMessage } = props
  usePreventScroll({ active: !!errorMessage })
  return (
    <>
      <Backdrop active={!!errorMessage} backgroundColor={'transparent'} zIndex={99999 + 3 - 1} />
      <ModalDiv active={!!errorMessage}>
        <IoCloseCircleOutline color={'red'} size={32} />
        <div>{errorMessage}</div>
      </ModalDiv>
    </>
  )
}

export default CartErrorModal
