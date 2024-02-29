import React from "react";
import styled from "@emotion/styled";
import CloseButton from "./CloseButton";
import { useAtom } from "jotai";
import { promotionCheckAtom } from "~/atoms";

const Modal = styled.div`
  position: fixed;
  top: 3rem;
  left: 0;
  margin: auto;
  display: none;
  width: 100vw;
  height: 4rem;
  background-color: #cce6ff;
  box-sizing: border-box;
  z-index: 9999;
  display: block;
  padding: 1rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: small;
  display: flex;
  transition: top 0.75s ease-out;
`;

const ModalTitle = styled.h3`
  color: #4d4d4d;
`;

const ModalState = styled.input`
  display: none;

  &:checked + #promotion-modal {
    top: 3rem;
  }

  &:not(checked) + #promotion-modal {
    top: -4rem;
  }
`;

const CloseButtonWrapper = styled.div`
  margin-left: "auto";
`;
type Props = {
  title: string;
};
const Promotion = (props: Props) => {
  const { title } = props;

  return (
    <>
      <ModalState type="checkbox" id="modal" defaultChecked={true} />
      <Modal id="promotion-modal">
        <ModalTitle>{title}</ModalTitle>
        <CloseButtonWrapper>
          <CloseButton htmlFor={"modal"} />
        </CloseButtonWrapper>
      </Modal>
    </>
  );
};

export default Promotion;
