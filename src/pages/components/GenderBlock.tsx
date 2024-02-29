import React from "react";
import {
  Block,
  BlockTitle,
  BlockContent,
  RadioButton,
  Label,
} from "./FormBlock";
import { useAtom } from "jotai";
import { getGenderTypeAtom, genderTypeAtom } from "~/atoms";
type Props = {};

const GenderBlock = (props: Props) => {
  const [genders] = useAtom(getGenderTypeAtom);
  const [genderType, setGenderType] = useAtom(genderTypeAtom);
  return (
    <Block direction="row" gap="1rem">
      <BlockTitle>
        性別<span>如何稱呼？</span>
      </BlockTitle>
      <BlockContent>
        {genders.map((gender, index) => (
          <div key={index}>
            <RadioButton
              id={`${gender.type}-${gender.name}`}
              type="radio"
              value={gender.type}
              name={"gender"}
              onChange={() => setGenderType(gender.type)}
              checked={genderType === gender.type}
            />
            <Label htmlFor={`${gender.type}-${gender.name}`}>
              {gender.name}
            </Label>
            <br />
          </div>
        ))}
      </BlockContent>
    </Block>
  );
};

export default GenderBlock;
