import React from "react";
import { BlockTitle, BlockContent, Block } from "./FormBlock";
import { useAtom } from "jotai";
import { getDefaultAddressAtom, setDefaultAddressAtom } from "~/atoms";

type Props = {};

const DefaultAddress = (props: Props) => {
  const [defaultAddressStatus] = useAtom(getDefaultAddressAtom);
  const [, setDefaultAddress] = useAtom(setDefaultAddressAtom);
  return (
    <Block>
      <BlockContent>
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
