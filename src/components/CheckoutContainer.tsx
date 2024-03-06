import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import {
  mainLogisticsAtom,
  getRecipientAtom,
  getCityAtom,
  districtAtom,
  setValidateAddressAtom,
  setCartErrorModalAtom,
  getCartItemQuantityAtom,
} from "~/atoms";
import HomeDeliveryContainer from "./HomeDeliveryContainer";
import InStorePickupContainer from "./InStorePickupContainer";
import GenderBlock from "./GenderBlock";
import LogisticsBlock from "./LogisticsBlock";
import PaymentBlock from "./PaymentBlock";
import NameBlock from "./NameBlock";
import CellphoneBlock from "./CellphoneBlock";
import EmailBlock from "./EmailBlock";
import NoteBlock from "./NoteBlock";
import ScamReminderBlock from "./ScamReminderBlock";
import { recipientSchema } from "~/zodSchema";
import type { z, ZodFormattedError } from "zod";
import CartTotalBlock from "./CartTotalBlock";
import { useRouter } from "next/navigation";
import CheckAuthBlock from "./CheckAuthBlock";

const CheckoutForm = styled.form`
  border-top: 1px solid rgba(87, 90, 93, 1);
  position: relative;
  width: 100vw;
  padding: 0 1rem;
  box-sizing: border-box;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 0.5rem;
`;
const CheckoutTitle = styled.h2`
  text-align: center;
  font-size: x-large;
  padding: 2rem 0 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;

type CheckoutSubmitButtonProps = {
  disabled: boolean;
};
const CheckoutSubmitButton = styled.button<CheckoutSubmitButtonProps>`
  width: 100%;
  height: 2.5rem;
  color: white;
  background-color: #ff3366;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border-radius: 3rem;

  &:focus-visible {
    outline: none;
  }
`;

const CheckoutContainer = () => {
  const router = useRouter();
  const [mainLogistics] = useAtom(mainLogisticsAtom);
  const [cartItemQuantity] = useAtom(getCartItemQuantityAtom);
  const [recipient] = useAtom(getRecipientAtom);
  const [validateCity] = useAtom(getCityAtom);
  const [validateDistrict] = useAtom(districtAtom);
  const [, setValidateAddress] = useAtom(setValidateAddressAtom);
  const [, setCartErrorModal] = useAtom(setCartErrorModalAtom);
  const [startParsing, setStartParsing] = useState(false);
  const [error, setError] = useState<
    ZodFormattedError<z.infer<typeof recipientSchema>> | undefined
  >(undefined);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cartItemQuantity === 0) {
      setCartErrorModal({
        errorType: "cartEmpty",
        errorMessage: "購物車沒有產品，無法結帳",
      });
      return;
    }
    setStartParsing(true);
  };

  useEffect(() => {
    if (startParsing) {
      const results = recipientSchema.safeParse(recipient);
      if (!results.success) {
        const error = results.error.format();
        setError(error);
        return;
      }
      setStartParsing(false);
      setError(undefined);
      const city = validateCity as string;
      const district = validateDistrict as string;
      setValidateAddress(city, district);
      router.push("/cart");
    }
  }, [
    recipient,
    router,
    setValidateAddress,
    startParsing,
    validateCity,
    validateDistrict,
  ]);

  return (
    <CheckoutForm onSubmit={handleSubmit}>
      <CheckoutTitle>結帳</CheckoutTitle>
      <CheckAuthBlock />
      <ScamReminderBlock />
      <LogisticsBlock />
      <PaymentBlock />

      <CartTotalBlock freight={mainLogistics.freight} />
      <NameBlock required error={error?.name} />
      <CellphoneBlock required error={error?.cellphone} />
      {mainLogistics.logisticsMode === "homeDelivery" ? (
        <HomeDeliveryContainer addressError={error?.address} />
      ) : (
        <InStorePickupContainer />
      )}
      <GenderBlock />
      <EmailBlock required error={error?.email} />
      <NoteBlock />

      <CheckoutSubmitButton type="submit" disabled={startParsing}>
        送出
      </CheckoutSubmitButton>
    </CheckoutForm>
  );
};

export default CheckoutContainer;
