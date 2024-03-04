import React from "react";
import styled from "@emotion/styled";
import ImageBlock from "./ImageBlock";
// import { ShoppingItem } from "~/types";
import { useAtom } from "jotai";
import {
  shoppingAreaDisplayColumnAtom,
  setTakeOnHandItemIdAtom,
} from "~/atoms";
import AddToCartButton from "./AddToCartButton";
import numberFormat from "~/utils/numberFormat";
import { ShoppingItem } from "@prisma/client";

type ItemWrapperProps = {
  align: string;
};

const ItemWrapper = styled.div<ItemWrapperProps>`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: stretch;

  align-items: ${(props) =>
    props.align === "center" ? "center" : `flex-${props.align}`};
  text-align: ${(props) => props.align};
  gap: 0.5rem;
  overflow: hidden;

  & > *:last-child {
    margin-top: auto;
  }
`;
type ItemContentProps = {
  padding?: string;
};
const CardImageBlock = styled(ImageBlock)<ItemContentProps>``;

const ItemContentWrapper = styled.div<ItemContentProps>`
  ${(props) =>
    props.padding &&
    `
padding: ${props.padding};
border-top: 1px solid rgba(0, 0, 0, 0.2);
width: 100%;
`}
`;
const ItemTitle = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: inherit;
  gap: 0.5rem;
  color: black;

  & small {
    color: red;
  }
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
  color: black;
  text-decoration: line-through;
  text-decoration-color: red;
  text-decoration-thickness: 2px;
`;

const SpecialPrice = styled.div`
  color: red;
`;

const Content = styled.small`
  color: grey;
  white-space: pre-wrap;
  text-align: inherit;
`;

const ItemFooter = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

type Props = {
  item: ShoppingItem;
  align?: string;
  padding?: string;
  children?: React.ReactNode;
  subtotal?: React.ReactNode;
  addToCartButton?: React.ReactNode;
};

const Item = (props: Props) => {
  const [columnNumber] = useAtom(shoppingAreaDisplayColumnAtom);
  const [, setItemId] = useAtom(setTakeOnHandItemIdAtom);
  const {
    item,
    align = "center",
    children = null,
    subtotal = null,
    addToCartButton = <AddToCartButton onClick={() => setItemId(item.id)} />,
  } = props;

  const isInProductModal = props.padding ? true : false;

  return (
    <ItemWrapper align={align}>
      {isInProductModal ? (
        <CardImageBlock
          src={item.imageSrc}
          alt={item.imageAlt}
          customType={"height"}
          customHeight={`${16}rem`}
        />
      ) : (
        <CardImageBlock
          src={item.imageSrc}
          alt={item.imageAlt}
          customType={"height"}
          customHeight={`${16 / columnNumber}rem`}
        />
      )}

      <ItemContentWrapper padding={props.padding}>
        <ItemTitle>
          {item.itemName}
          <small>{item.itemSubtitle}</small>
        </ItemTitle>
        <PriceWrapper>
          <Price>原價：{numberFormat(item.itemPrice)}</Price>
          <SpecialPrice>
            現在特價只要{numberFormat(item.itemSpecialPrice ?? item.itemPrice)}
            元
          </SpecialPrice>
        </PriceWrapper>
        {children}
        <Content>{item.itemDescription}</Content>
      </ItemContentWrapper>
      <ItemFooter>
        {subtotal}
        {addToCartButton}
      </ItemFooter>
    </ItemWrapper>
  );
};

export default Item;
