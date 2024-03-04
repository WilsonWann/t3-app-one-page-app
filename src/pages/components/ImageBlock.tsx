"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import styled from "@emotion/styled";
import { Photo } from "~/types";

type CustomWidthProps = {
  customType: "width";
  customWidth: string;
};

type CustomHeightProps = {
  customType: "height";
  customHeight: string;
};

type ImageDefaultProps = {
  customType: "default";
};

type ImageStaticProps = {
  customType: "static";
  width: number;
  height: number;
};

type ImageProps =
  | ImageStaticProps
  | ImageDefaultProps
  | CustomWidthProps
  | CustomHeightProps;

const ImageDiv = styled.div<ImageProps>`
  position: relative;

  ${(props) =>
    props.customType === "static" &&
    `
      width: 100vw;
      height: calc((${props.height / props.width}) * 100vw);
    `}

  ${(props) =>
    props.customType === "default" &&
    `
      width: 100%;
      height: 100%;
    `}

  ${(props) =>
    props.customType === "height" &&
    `
      width: max( calc( ${props.customHeight} * ( 16 / 9 )) , 100%);
      height: ${props.customHeight};
      overflow: hidden;
    `} 
    
     ${(props) =>
    props.customType === "width" &&
    `
      width: max( ${props.customWidth}, 100%);
      height: calc( ${props.customWidth} * ( 9 / 16 ));  
      overflow: hidden;      
    `}
`;

type Props =
  | ({
      alt?: string;
    } & ((ImageDefaultProps | CustomWidthProps | CustomHeightProps) & {
      src: string;
    }))
  | {
      customType: "static";
      image: Photo;
    };

const ImageBlock = (props: Props) => {
  const { customType } = props;

  // src is StaticImageData
  if (customType === "static") {
    const { src, alt, blurredDataUrl } = props.image;
    return (
      <ImageDiv customType={"static"} width={100} height={100}>
        <Image src={src} alt={alt} blurDataURL={blurredDataUrl} fill />
      </ImageDiv>
    );
  }

  // if (customType === "default") {
  //   return (
  //     <ImageDiv customType={customType}>
  //       <Image src={src} alt={alt} style={{ objectFit: "cover" }} />
  //     </ImageDiv>
  //   );
  // }

  if (customType === "height") {
    return (
      <ImageDiv customType={customType} customHeight={props.customHeight}>
        <Image
          src={props.src}
          alt={props.alt ?? ""}
          style={{ height: "100%", objectFit: "cover" }}
          fill
        />
      </ImageDiv>
    );
  }

  if (customType === "width") {
    return (
      <ImageDiv customType={customType} customWidth={props.customWidth}>
        <Image
          src={props.src}
          alt={props.alt ?? ""}
          style={{ width: "100%", objectFit: "cover" }}
          fill
        />
      </ImageDiv>
    );
  }
};

export default ImageBlock;
