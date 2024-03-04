import React from "react";
import { api } from "~/utils/api";
import ImageBlock from "./ImageBlock";

type Props = {};

const ImageArea = (props: Props) => {
  const { data: allImages, isLoading } =
    api.shoppingItem.getBase64Images.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (!allImages) return <div>No data</div>;

  return (
    <>
      {allImages.map((photo, index) => (
        <ImageBlock key={index} customType={"static"} image={photo} />
      ))}
    </>
  );
};

export default ImageArea;
