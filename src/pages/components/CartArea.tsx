import React from "react";
import CartList from "./CartList";
import CartDiscount from "./CartDiscount";
import CartSubtotal from "./CartSubtotal";
import CheckoutContainer from "./CheckoutContainer";
import { useAtom } from "jotai";
import { cartErrorModalAtom } from "~/atoms";
import usePreventScroll from "../hook/usePreventScroll";
import CartErrorModal from "./CartErrorModal";

const CartArea = () => {
  const [cartModalError] = useAtom(cartErrorModalAtom);

  usePreventScroll({ active: !!cartModalError.error?.errorMessage });
  return (
    <>
      <CartList />
      <CartDiscount />
      <CartSubtotal />
      <CheckoutContainer />
      {cartModalError.error && (
        <CartErrorModal errorMessage={cartModalError.error.errorMessage} />
      )}
    </>
  );
};

export default CartArea;
