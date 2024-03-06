import React from "react";
import { Block } from "./FormBlock";
import CityBlock from "./CityBlock";
import DistrictBlock from "./DistrictBlock";
import TimeToReceiveBlock from "./TimeToReceiveBlock";
import StreetBlock from "./StreetBlock";
import DefaultAddress from "./DefaultAddress";
import type { z } from "zod";

type Props = {
  addressError?:
    | z.ZodFormattedError<
        {
          city: string | -1;
          district: string | -1;
          street: string;
        },
        string
      >
    | undefined;
};

const HomeDeliveryContainer = (props: Props) => {
  const { addressError } = props;
  return (
    <>
      <Block direction={"row"} gap={"1rem"}>
        <CityBlock required error={addressError?.city} />
        <DistrictBlock required error={addressError?.district} />
      </Block>
      <StreetBlock required error={addressError?.street} />
      <TimeToReceiveBlock />
      <DefaultAddress />
    </>
  );
};

export default HomeDeliveryContainer;
