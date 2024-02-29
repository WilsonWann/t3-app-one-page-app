import React from "react";
import {
  BlockTitle,
  BlockContent,
  RadioButton,
  Label,
  Block,
} from "./FormBlock";
import { useAtom } from "jotai";
import { getTimeToReceiveAtom, timeToReceiveTypeAtom } from "~/atoms";

const TimeToReceiveBlock = () => {
  const [timeToReceives] = useAtom(getTimeToReceiveAtom);
  const [timeToReceiveType, setTimeToReceiveType] = useAtom(
    timeToReceiveTypeAtom,
  );

  return (
    <Block gap={"1rem"}>
      <BlockTitle htmlFor={"timeToReceive"}>方便收貨時間</BlockTitle>
      <BlockContent>
        {timeToReceives.map((timeToReceive, index) => (
          <div key={index}>
            <RadioButton
              id={`${timeToReceive.type}-${timeToReceive.name}`}
              type="radio"
              value={timeToReceive.type}
              name={"timeToReceive"}
              onChange={() => setTimeToReceiveType(timeToReceive.type)}
              checked={timeToReceiveType === timeToReceive.type}
            />
            <Label htmlFor={`${timeToReceive.type}-${timeToReceive.name}`}>
              {timeToReceive.name}
            </Label>
            <br />
          </div>
        ))}
      </BlockContent>
    </Block>
  );
};

export default TimeToReceiveBlock;
