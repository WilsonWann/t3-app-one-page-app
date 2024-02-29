import React from "react";
import { Block, BlockTitle, BlockContent } from "./FormBlock";
import { useAtom } from "jotai";
import { noteAtom } from "~/atoms";

type Props = {};

const NoteBlock = (props: Props) => {
  const [note, setNote] = useAtom(noteAtom);
  return (
    <Block>
      <BlockTitle htmlFor={"note"}>
        備註<span>有什麼特殊需求可以寫在這裡呦</span>
      </BlockTitle>
      <BlockContent>
        <textarea
          id="note"
          placeholder={"(若無則不需填寫)"}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </BlockContent>
    </Block>
  );
};

export default NoteBlock;
