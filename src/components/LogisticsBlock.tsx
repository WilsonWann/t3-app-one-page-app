import React from "react";
import {
  Block,
  BlockTitle,
  BlockContent,
  RadioButton,
  Label,
} from "./FormBlock";
import { useAtom } from "jotai";
import {
  logisticsTypeAtom,
  getLogisticsDetailAtom,
  setLogisticsTypeAtom,
} from "~/atoms";

const LogisticsBlock = () => {
  const [logisticsType] = useAtom(logisticsTypeAtom);
  const [logisticsDetail] = useAtom(getLogisticsDetailAtom);
  const [, setLogisticsType] = useAtom(setLogisticsTypeAtom);
  return (
    <Block required direction={"column"}>
      <BlockTitle>運送方式</BlockTitle>
      <BlockContent>
        {logisticsDetail.map((logisticsMethod, index) => (
          <div key={index}>
            <RadioButton
              id={`${logisticsMethod.logisticsType}-${logisticsMethod.payment}`}
              type="radio"
              value={logisticsMethod.logisticsType}
              name={"logisticsType"}
              onChange={() => setLogisticsType(logisticsMethod.logisticsType)}
              checked={logisticsType === logisticsMethod.logisticsType}
            />
            <Label
              htmlFor={`${logisticsMethod.logisticsType}-${logisticsMethod.payment}`}
            >
              {logisticsMethod.logisticsName}{" "}
              {logisticsMethod.freight && (
                <span> +{logisticsMethod.freight}</span>
              )}
            </Label>
            <br />
          </div>
        ))}
      </BlockContent>
    </Block>
  );
};

export default LogisticsBlock;
