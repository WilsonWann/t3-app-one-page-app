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
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  border-top: 1px solid rgba(87, 90, 93, 1);

  & > * {
    flex-shrink: 0;
  }
`;

const CartTitle = styled.h3`
  display: block;
  text-align: left;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const CartDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const CardImageBlock = styled(ImageBlock)`
  flex-grow: 1;
`;

const RemoveButtonWrapper = styled.div`
  position: relative;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: lightgray;

  flex-grow: 0;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  flex-wrap: wrap;
  width: fit-content;
  gap: 0;
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

const ItemCalculator = styled.div`
  flex-grow: 0;
`;
const ItemSubtotal = styled.div`
  text-align: right;
`;

type Props = {
  item: CartListItem;
};

const CartListItem = (props: Props) => {
  const { item } = props;
  const [, removeCart] = useAtom(removeCartAtom);

  return (
    <CartWrapper>
      <CartTitle>{item.itemName}</CartTitle>
      <CartDetail>
        <RemoveButtonWrapper>
          <TrashIcon onClick={() => removeCart(item.id)} />
        </RemoveButtonWrapper>
        <CardImageBlock
          src={item.imageSrc}
          alt={item.imageAlt}
          customType={"width"}
          customWidth={`8rem`}
        />
        <ItemCalculator>
          <PriceWrapper>
            <Price>{numberFormat(item.itemPrice)}</Price>
            <SpecialPrice>
              {numberFormat(item.itemSpecialPrice ?? item.itemPrice)} *{" "}
              <b>{item.quantity}</b>
            </SpecialPrice>
          </PriceWrapper>
          <Counter
            cartItemId={item.id}
            count={item.quantity}
            max={item.itemAvailableQuantity}
          />
          {item.error && <ErrorMessage>{item.error.errorMessage}</ErrorMessage>}
        </ItemCalculator>
        <ItemSubtotal>{numberFormat(item.subtotal)}</ItemSubtotal>
      </CartDetail>
    </CartWrapper>
  );
};

export default CartListItem;
