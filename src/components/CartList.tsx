import React from "react";
import styled from "@emotion/styled";
import CartListItem from "./CartListItem";
import { useAtom } from "jotai";
import { getCartListAtom } from "~/atoms";

const CartListTitle = styled.h2`
  font-size: x-large;
  margin: 2rem 0;
  white-space: pre-line;
  text-align: center;
`;

const CartListDiv = styled.div`
  position: relative;
  width: 100vw;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid rgba(87, 90, 93, 1);
  border-bottom: 1px solid rgba(87, 90, 93, 1);
`;

const CartList = () => {
  const [cartList] = useAtom(getCartListAtom);

  if (cartList.length === 0) {
    return (
      <CartListWrapper>
        <CartListTitle>{`購物車「沒有產品」，\n請先將產品「加入購物車」`}</CartListTitle>
      </CartListWrapper>
    );
  }

  return (
    <CartListWrapper>
      <CartListTitle>目前已經選購</CartListTitle>
      {cartList.map((item, index) => (
        <CartListItem key={index} item={item} />
      ))}
    </CartListWrapper>
  );
};

const CartListWrapper = ({ children }: { children: React.ReactNode }) => {
  return <CartListDiv id="cart-list-anchor">{children}</CartListDiv>;
};

export default CartList;
