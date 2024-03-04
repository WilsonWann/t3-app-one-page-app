import React from "react";
import {
  Block,
  BlockTitle,
  BlockContent,
  RadioButton,
  Label,
} from "./FormBlock";
import { useAtom } from "jotai";
import { getPaymentTypeAtom, paymentTypesAtom } from "~/atoms";

const PaymentBlock = () => {
  const [paymentType, setPaymentType] = useAtom(paymentTypesAtom);
  const [payments] = useAtom(getPaymentTypeAtom);
  return (
    <Block required direction={"column"}>
      <BlockTitle>付款方式</BlockTitle>
      <BlockContent>
        {payments.map((paymentMethod, index) => (
          <div key={index}>
            <RadioButton
              id={`${paymentMethod.payment}-${paymentMethod.name}`}
              type="radio"
              value={paymentMethod.payment}
              name={"payment"}
              onChange={() => setPaymentType(paymentMethod.payment)}
              checked={paymentType === paymentMethod.payment}
            />
            <Label htmlFor={`${paymentMethod.payment}-${paymentMethod.name}`}>
              {paymentMethod.name}
            </Label>
            <br />
          </div>
        ))}
      </BlockContent>
    </Block>
  );
};

export default PaymentBlock;
