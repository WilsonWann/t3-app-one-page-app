import React from "react";
import styled from "@emotion/styled";
import { dispatchAtom } from "~/atoms";
import { useAtom } from "jotai";

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;

  & > * {
    display: inherit;
    flex-direction: inherit;
    justify-content: inherit;
    align-items: inherit;
    height: 2rem;
    padding: 0;
    margin: 0;
    color: black;
  }
`;

const CounterButton = styled.div`
  width: 2rem;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-left: none;
  cursor: pointer;
`;
const DecrementButton = styled(CounterButton)`
  border-left: 1px solid rgba(0, 0, 0, 0.2);
`;
const IncrementButton = styled(CounterButton)``;

const CounterPanel = styled.div`
  width: 3rem;
  text-align: center;
  border-radius: unset;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-left: none;
`;
type Props = {
  cartItemId?: number;
  count: number;
};

const Counter = (props: Props) => {
  const { cartItemId, count } = props;
  const [, counter] = useAtom(dispatchAtom);
  return (
    <>
      <CounterWrapper>
        <DecrementButton onClick={() => counter("DEC", cartItemId)}>
          -
        </DecrementButton>
        <CounterPanel>{count}</CounterPanel>
        <IncrementButton onClick={() => counter("INC", cartItemId)}>
          +
        </IncrementButton>
      </CounterWrapper>
    </>
  );
};

export default Counter;
