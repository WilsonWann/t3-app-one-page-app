import React from "react";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { getCartListSubtotalAtom } from "~/atoms";
import numberFormat from "~/utils/numberFormat";

type CartSubtotalWrapperType = {
  padding: string;
};
const CartSubtotalWrapper = styled.div<CartSubtotalWrapperType>`
  position: relative;
  background-color: white;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  width: -webkit-fill-available;
  width: -moz-available;
  padding: ${(props) => props.padding};

  & > * {
    color: black;
  }
`;

const Subtotal = styled.div`
  font-size: "larger";
`;
type Props = {
  title?: string;
  freight?: number;
  padding?: string;
};

const CartSubtotal = (props: Props) => {
  const { title = "小計", freight = 0, padding = "1rem" } = props;
  const [cartListSubtotal] = useAtom(getCartListSubtotalAtom);
  return (
    <CartSubtotalWrapper padding={padding}>
      <div>{title}</div>
      <Subtotal>{numberFormat(cartListSubtotal + freight)}</Subtotal>
    </CartSubtotalWrapper>
  );
};

export default CartSubtotal;
