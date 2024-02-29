import React from "react";
import { ShoppingItem } from "~/types";
import Item from "./Item";

type Props = {
  item: ShoppingItem;
};

const CardItem = (props: Props) => {
  const { item } = props;
  return <Item item={item} />;
};

export default CardItem;
