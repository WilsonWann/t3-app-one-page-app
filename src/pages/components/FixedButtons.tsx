import React from "react";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import styled from "@emotion/styled";
import { SiMessenger } from "react-icons/si";
import { HiArrowNarrowUp } from "react-icons/hi";
import { useAtom } from "jotai";
import { getCartItemQuantityAtom, getAddToCartSuccessAtom } from "~/atoms";
import AddToCartSuccessTip from "./AddToCartSuccessTip";

const ButtonWrapper = styled.div`
  position: fixed;
  right: 0.6rem;
  bottom: 5rem;
  height: fit-content;
  width: fit-content;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 99999;
`;

type ButtonProps = {
  backgroundColor?: string;
  color?: string;
  onClick?: () => void;
};
const ButtonDiv = styled.div<ButtonProps>`
  position: relative;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor ?? "#4d4d4d"};
  color: ${(props) => props.color ?? "unset"};
  padding: 0.5rem;
  line-height: 1;
  font-size: 0.8rem;
  text-align: center;
  word-break: break-all;

  box-shadow:
    0 0 5px rgba(0, 0, 0, 0.2),
    3px 3px 3px rgba(0, 0, 0, 0.3);

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;
const FixedButtons = () => {
  const [cartItemQuantity] = useAtom(getCartItemQuantityAtom);
  const [addToCartSuccess] = useAtom(getAddToCartSuccessAtom);

  return (
    <ButtonWrapper>
      {/* //! fb chat func not finished */}
      <CircleButton backgroundColor={"#0084ff"}>
        <SiMessenger size={28} color={"white"} />
      </CircleButton>
      {cartItemQuantity === 0 ? (
        <CircleButton
          As="a"
          backgroundColor={"white"}
          color={"black"}
          href={"/#marketing-discount-anchor"}
        >
          直接購買
        </CircleButton>
      ) : (
        <CircleButton
          As="a"
          backgroundColor={"#ff3366"}
          color={"white"}
          href={"/#cart-list-anchor"}
        >
          立即結帳
        </CircleButton>
      )}

      <CircleButton
        backgroundColor={"white"}
        onClick={() => window.scrollTo(0, 0)}
      >
        <HiArrowNarrowUp color="black" size={24} />
      </CircleButton>

      <AddToCartSuccessTip active={addToCartSuccess} />
    </ButtonWrapper>
  );
};

const DEFAULT_TYPE = "div";
type CircleButtonProps<T extends ElementType> = {
  As?: T;
  backgroundColor?: string;
  color?: string;
  onClick?: () => void;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<T>;

function CircleButton<T extends ElementType = typeof DEFAULT_TYPE>({
  As,
  backgroundColor,
  color,
  onClick = () => void 0,
  children,
  ...props
}: CircleButtonProps<T>) {
  const Component = As ?? DEFAULT_TYPE;
  return (
    <ButtonDiv
      backgroundColor={backgroundColor}
      color={color}
      onClick={onClick}
    >
      <Component {...props}>{children}</Component>
    </ButtonDiv>
  );
}

export default FixedButtons;
