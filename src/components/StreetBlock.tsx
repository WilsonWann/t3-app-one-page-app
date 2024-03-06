import React from "react";
import { Block, BlockTitle, BlockContent } from "./FormBlock";
import { useAtom } from "jotai";
import { streetAtom } from "~/atoms";
import ErrorMessage from "./ErrorMessage";

type Props = {
  error?: { _errors: string[] };
  required?: boolean;
};

const StreetBlock = (props: Props) => {
  const { error = { _errors: [] }, required = false } = props;
  const [street, setStreet] = useAtom(streetAtom);
  return (
    <>
      <Block error={!!error?._errors[0]} required={required}>
        <BlockTitle htmlFor={"street"}>街道地址</BlockTitle>
        <BlockContent>
          <input
            id="street"
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </BlockContent>
      </Block>
      {error && <ErrorMessage>{error._errors[0]}</ErrorMessage>}
    </>
  );
};

export default StreetBlock;
