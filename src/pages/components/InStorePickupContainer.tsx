import React from "react";
import { Block, BlockContent } from "./FormBlock";

const InStorePickupContainer = () => {
  return (
    <>
      <Block>
        {/* <BlockTitle htmlFor={"inStorePickup"}>取貨超商</BlockTitle> */}
        <BlockContent>
          <label htmlFor="inStorePickup">請選擇取貨超商</label>
          <input id="inStorePickup" type="text" />
        </BlockContent>
      </Block>
      <Block>
        <BlockContent>
          <input type="checkbox" id="defaultStore" />
        </BlockContent>
        <label htmlFor="defaultStore">儲存為常用超商</label>
        {/* <BlockTitle htmlFor={"defaultStore"}>儲存為常用超商</BlockTitle> */}
      </Block>
    </>
  );
};

export default InStorePickupContainer;
