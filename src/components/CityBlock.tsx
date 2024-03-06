import React, { useEffect } from "react";
import { BlockCol, BlockTitle, BlockContent, Block } from "./FormBlock";
import { useAtom } from "jotai";
import { cityDataAtom, setCityAtom } from "~/atoms";
import ErrorMessage from "./ErrorMessage";

type Props = {
  error?: { _errors: string[] };
  required?: boolean;
};

const CityBlock = (props: Props) => {
  const { error = { _errors: [] }, required } = props;
  const [cityData, setCityData] = useAtom(cityDataAtom);
  const [, setCity] = useAtom(setCityAtom);

  useEffect(() => {
    function getCityData() {
      fetch("/api/getCity")
        .then((res) => res.json())
        .then((data: string[]) => setCityData(data))
        .catch((err) => console.error("🚀 ~ .then ~ err:", err));
    }

    getCityData();
  }, [setCityData]);

  return (
    <>
      <BlockCol>
        <Block required={required} error={!!error?._errors[0]}>
          <BlockTitle htmlFor={"country"}>縣市</BlockTitle>
          <BlockContent>
            <select
              id="country"
              name="country"
              title={"縣市"}
              onChange={(e) =>
                setCity(e.target.value === "-1" ? -1 : e.target.value)
              }
              defaultValue={-1}
            >
              <option value={-1}>請選擇</option>
              {cityData.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </BlockContent>
        </Block>
        {error && <ErrorMessage>{error._errors[0]}</ErrorMessage>}
      </BlockCol>
    </>
  );
};

export default CityBlock;
