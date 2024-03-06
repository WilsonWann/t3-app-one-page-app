import React from "react";
import LiteYoutube from "./LiteYoutube";

const VideoArea = () => {
  //* get arr from API
  const arr = [
    {
      id: "ribJ-EMduM8",
      title: "Net Ninja Content Roadmap - 2024",
    },
  ];
  return (
    <>
      {arr.map((item, index) => (
        <LiteYoutube key={index} id={item.id} title={item.title} />
      ))}
    </>
  );
};

export default VideoArea;
