import React from "react";
import { Block, BlockTitle, BlockContent } from "./FormBlock";
import { useAtom } from "jotai";
import { cellphoneAtom } from "~/atoms";
import ErrorMessage from "./ErrorMessage";

type Props = {
  error?: { _errors: string[] };
  required: boolean;
};

const CellphoneBlock = (props: Props) => {
  const { error = { _errors: [] }, required = false } = props;
  const [cellphone, setCellphone] = useAtom(cellphoneAtom);
  return (
    <>
      <Block error={!!error?._errors[0]} required={required}>
        <BlockTitle htmlFor={"cellphone"}>手機號碼</BlockTitle>
        <BlockContent>
          <label htmlFor="cellphone">請輸入手機號碼</label>
          <input
            id="cellphone"
            name="cellphone"
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
