import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { getCartItemQuantityAtom, navbarOpenAtom } from "~/atoms";
import Logo from "./Logo";
import CartIcon from "./CartIcon";
import UserIcon from "./UserIcon";
import { useRouter } from "next/navigation";

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 99999;
  padding: 1rem;
  gap: 10rem;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Header = () => {
  const router = useRouter();
  const [, toggleNavbar] = useAtom(navbarOpenAtom);
  const [cartItemQuantity] = useAtom(getCartItemQuantityAtom);

  return (
    <HeaderWrapper>
      <Logo />
      <ButtonWrapper>
        <UserIcon type="default" onClick={() => router.push("/account")} />
        <CartIcon
          itemNumber={cartItemQuantity}
          onClick={() => router.push("/cart")}
        />
        <RxHamburgerMenu
          color="black"
          size={22}
          onClick={() => toggleNavbar(true)}
        />
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

export default Header;
