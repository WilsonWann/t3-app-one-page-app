import React from "react";
import styled from "@emotion/styled";

import { IoSquareSharp } from "react-icons/io5";
import { TfiLayoutGrid2Alt, TfiLayoutGrid3Alt } from "react-icons/tfi";
import { useAtom } from "jotai";
import { shoppingAreaDisplayColumnAtom } from "~/atoms";
import HorizontalLine from "./HorizontalLine";
import DisplayTitle from "./DisplayTitle";
import CardItem from "./CardItem";
import { ShoppingItem } from "~/types";

const DisplayControlPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  margin: 1rem auto 2rem;
`;

type DisplayAreaProps = {
  gap?: string;
  columnItems: number;
};

const DisplayArea = styled.div<DisplayAreaProps>`
  position: relative;
  height: fit-content;
  width: 100vw;
  padding: ${(props) => (props.gap ? `0 ${props.gap}` : "0")};

  display: grid;
  grid-template-columns: repeat(${(props) => props.columnItems}, 1fr);
  grid-template-rows: 1fr;

  gap: ${(props) => props.gap ?? "0"};
  row-gap: 3rem;
  margin-bottom: 2rem;
`;

type Props = {
  data: ShoppingItem[];
};

const ShoppingArea = (props: Props) => {
  const { data } = props;
  const [columnNumber, setColumn] = useAtom(shoppingAreaDisplayColumnAtom);
  return (
    <>
      <DisplayTitle title={"精選單品"} />
      <DisplayControlPanel>
        <IoSquareSharp size={12} color={"#999"} onClick={() => setColumn(1)} />
        <TfiLayoutGrid2Alt
          size={12}
          color={"#999"}
          onClick={() => setColumn(2)}
        />
        <TfiLayoutGrid3Alt
          size={12}
          color={"#999"}
          onClick={() => setColumn(3)}
        />
        {/* <TfiLayoutGrid4Alt size={12} color={'#999'} onClick={() => setColumn(4)} /> */}
      </DisplayControlPanel>
      <DisplayArea gap={"1rem"} columnItems={columnNumber}>
        {data.map((item, index) => (
          <CardItem key={index} item={item} />
        ))}
      </DisplayArea>
      <HorizontalLine />
    </>
  );
};

export default ShoppingArea;
