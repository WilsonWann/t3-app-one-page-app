import React from "react";
import { Block, BlockTitle, BlockContent } from "./FormBlock";
import { useAtom } from "jotai";
import { emailAtom } from "~/atoms";
import ErrorMessage from "./ErrorMessage";

type Props = {
  error?: { _errors: string[] };
  required?: boolean;
};

const EmailBlock = (props: Props) => {
  const { error = { _errors: [] }, required = false } = props;
  const [email, setEmail] = useAtom(emailAtom);
  return (
    <>
      <Block error={!!error?._errors[0]} required={required}>
        <BlockTitle htmlFor={"email"}>
          電子發票寄送信箱(無開立紙本發票)<span>建議填寫Yahoo以外的信箱</span>
        </BlockTitle>
        <BlockContent>
          <label htmlFor="email">請輸入電子信箱</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </BlockContent>
      </Block>
      {error && <ErrorMessage>{error._errors[0]}</ErrorMessage>}
    </>
  );
};

export default EmailBlock;
