import React, { useEffect } from "react";
import { BlockTitle, BlockContent, BlockCol, Block } from "./FormBlock";
import { useAtom } from "jotai";
import { getCityAtom, districtDataAtom, districtAtom } from "~/atoms";
import ErrorMessage from "./ErrorMessage";

type Props = {
  error?: { _errors: string[] };
  required?: boolean;
};

const DistrictBlock = (props: Props) => {
  const { error = { _errors: [] }, required } = props;
  const [selectedCity] = useAtom(getCityAtom);
  const [districtData, setDistrictData] = useAtom(districtDataAtom);
  const [selectedDistrict, setDistrict] = useAtom(districtAtom);

  useEffect(() => {
    function getDistrictData(city: string | -1) {
      fetch(`/api/getDistrict?city=${city}`)
        .then((res) => res.json())
        .then((data: string[] | null) => setDistrictData(data))
        .catch((err) => console.error("🚀 ~ .then ~ err:", err));
    }

    getDistrictData(selectedCity);
  }, [selectedCity, setDistrictData]);

  return (
    <BlockCol>
      <Block required={required} error={!!error?._errors[0]}>
        <BlockTitle htmlFor={"district"}>區域</BlockTitle>
        <BlockContent>
          <select
            id="district"
            name="district"
            title={"區域"}
            value={selectedDistrict}
            onChange={(e) =>
              setDistrict(e.target.value === "-1" ? -1 : e.target.value)
            }
          >
            {districtData ? (
              <>
                <option value={-1}>請選擇</option>
                {districtData.map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
              </>
            ) : (
              <option value={""}>請先選擇縣市</option>
            )}
          </select>
        </BlockContent>
      </Block>
      {error && <ErrorMessage>{error._errors[0]}</ErrorMessage>}
    </BlockCol>
  );
};

export default DistrictBlock;
