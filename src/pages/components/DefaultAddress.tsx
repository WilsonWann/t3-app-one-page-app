import React from "react";
import { BlockTitle, BlockContent, Block } from "./FormBlock";
import { useAtom } from "jotai";
import { getDefaultAddressAtom, setDefaultAddressAtom } from "~/atoms";

const DefaultAddress = () => {
  const [defaultAddressStatus] = useAtom(getDefaultAddressAtom);
  const [, setDefaultAddress] = useAtom(setDefaultAddressAtom);
  return (
    <Block>
      <BlockContent>
        <label htmlFor="defaultAddress">設為預設地址</label>
        <input
          type="checkbox"
          id="defaultAddress"
          checked={defaultAddressStatus}
          onChange={(e) => setDefaultAddress(e.target.checked)}
        />
      </BlockContent>
      <BlockTitle htmlFor={"defaultAddress"}>儲存為常用地址</BlockTitle>
    </Block>
  );
};

export default DefaultAddress;
