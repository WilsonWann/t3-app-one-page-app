import React from 'react';
import LiteYoutube from './LiteYoutube';

type Props = {};

const VideoArea = (props: Props) => {
  //* get arr from API
  const arr = [
    {
      id: 'L2vS_050c-M',
      title: 'What’s new in Material Design for the web (Chrome Dev Summit 2019)'
    }
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
