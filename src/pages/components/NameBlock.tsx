import React from "react";
import { Block, BlockTitle, BlockContent } from "./FormBlock";
import { useAtom } from "jotai";
import { nameAtom } from "~/atoms";
import ErrorMessage from "./ErrorMessage";

type Props = {
  error?: any;
  required?: boolean;
};

const NameBlock = (props: Props) => {
  const { error, required = false } = props;
  const [name, setName] = useAtom(nameAtom);
  return (
    <>
      <Block error={error?._errors[0]} required={required}>
        <BlockTitle htmlFor={"recipient"}>
          收件人<span>請填寫姓名</span>
        </BlockTitle>
        <BlockContent>
          <input
            id="recipient"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </BlockContent>
      </Block>
      {error && <ErrorMessage>{error._errors[0]}</ErrorMessage>}
    </>
  );
};

export default NameBlock;
