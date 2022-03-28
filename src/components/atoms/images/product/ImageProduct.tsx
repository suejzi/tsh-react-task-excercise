import React, { FC } from "react";
import styled from "styled-components";
import { ImageProps, ImageType } from "../../common/types";

const Img = styled.img<ImageType>`
  object-fit: cover;
  height: ${(props) =>
    props.imageType === "productList"
      ? "192px"
      : props.imageType === "modal"
      ? "400px"
      : "auto"};
  width: 100%;
  opacity: ${(props) =>
    !props.active && props.imageType === "productList" && "0.5"};
`;

const ImageProduct: FC<ImageProps> = ({ name, image, imageType, active }) => {
  return <Img src={image} alt={name} imageType={imageType} active={active} />;
};

export default ImageProduct;
