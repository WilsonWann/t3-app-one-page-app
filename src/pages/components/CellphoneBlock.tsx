import React from "react";
import { Block, BlockTitle, BlockContent } from "./FormBlock";
import { useAtom } from "jotai";
import { cellphoneAtom } from "~/atoms";
import ErrorMessage from "./ErrorMessage";

type Props = {
  error?: any;
  required: boolean;
};

const CellphoneBlock = (props: Props) => {
  const { error, required = false } = props;
  const [cellphone, setCellphone] = useAtom(cellphoneAtom);
  return (
    <>
      <Block error={error?._errors[0]} required={required}>
        <BlockTitle htmlFor={"cellphone"}>手機號碼</BlockTitle>
        <BlockContent>
          <input
            id="cellphone"
            type="text"
            value={cellphone}
            onChange={(e) => setCellphone(e.target.value)}
          />
        </BlockContent>
      </Block>
      {error && <ErrorMessage>{error._errors[0]}</ErrorMessage>}
    </>
  );
};

export default CellphoneBlock;
