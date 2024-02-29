import React from "react";
import styled from "@emotion/styled";
import type { CartItem as CartListItem } from "~/types";
import TrashIcon from "./TrashIcon";
import ImageBlock from "./ImageBlock";
import Counter from "./Counter";
import { useAtom } from "jotai";
import { removeCartAtom } from "~/atoms";
import numberFormat from "~/utils/numberFormat";
import ErrorMessage from "./ErrorMessage";

const CartWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 10rem;
  background-color: white;
  padding: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid rgba(87, 90, 93, 1);
`;
const CardImageBlock = styled(ImageBlock)``;

const RemoveButtonWrapper = styled.div`
  position: relative;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: lightgray;
`;
const CartTitle = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: inherit;
  gap: 0.5rem;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.5rem;
`;

const Price = styled.div`
  color: grey;
  text-decoration: line-through;
  text-decoration-color: grey;
  text-decoration-thickness: 1px;
`;

const SpecialPrice = styled.div`
  color: #4d4d4d;

  & b {
    color: red;
  }
`;

type Props = {
  item: CartListItem;
};

const CartListItem = (props: Props) => {
  const { item } = props;
  const [, removeCart] = useAtom(removeCartAtom);

  return (
    <CartWrapper>
      <RemoveButtonWrapper>
        <TrashIcon onClick={() => removeCart(item.id)} />
      </RemoveButtonWrapper>
      {/* <CardImageBlock
        src={item.image}
        alt={item.alt}
        customType={"width"}
        customWidth={`3rem`}
      /> */}
      <div>
        {/* <CartTitle>{item.title}</CartTitle> */}
        <PriceWrapper>
          <Price>{numberFormat(item.price)}</Price>
          <SpecialPrice>
            {numberFormat(item.specialPrice)} * <b>{item.quantity}</b>
          </SpecialPrice>
        </PriceWrapper>
        <Counter cartItemId={item.id} count={item.quantity} />
        {item.error && <ErrorMessage>{item.error.errorMessage}</ErrorMessage>}
      </div>
      <div>{numberFormat(item.subtotal)}</div>
    </CartWrapper>
  );
};

export default CartListItem;
