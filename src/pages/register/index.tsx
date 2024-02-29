"use client";
import React from "react";
import styled from "@emotion/styled";
import DisplayTitle from "../components/DisplayTitle";
import UserIcon from "../components/UserIcon";
import { FaFacebook, FaLine } from "react-icons/fa";
import RegisterForm from "./RegisterForm";

const RegisterPageWrapper = styled.div`
  width: 100vw;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

type RegisterButtonProps = {
  iconSize: number;
  iconColor: string;
};

const RegisterButton = styled.div<RegisterButtonProps>`
  width: 100%;
  height: 2.5rem;
  border-radius: 10rem;
  background-color: white;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  & svg {
    width: ${(props) => `${props.iconSize}px`};
    height: ${(props) => `${props.iconSize}px`};
    color: ${(props) => props.iconColor};
  }
`;

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <RegisterPageWrapper>
      <DisplayTitle
        icon={<UserIcon type={"add"} size={30} />}
        title={"會員註冊"}
      />
      <RegisterButton iconSize={22} iconColor={"#3b5998"}>
        <FaFacebook />
        Facebook 註冊
      </RegisterButton>
      <RegisterButton iconSize={22} iconColor={"#06c755"}>
        <FaLine />
        LINE 註冊
      </RegisterButton>
      <RegisterForm />
    </RegisterPageWrapper>
  );
};

export default RegisterPage;
