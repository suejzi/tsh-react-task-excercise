import React, { FC } from "react";
import styled from "styled-components";
import { ImageProps } from "../../common/types";

const Img = styled.img``;

const InputLoginWithText: FC<ImageProps> = ({ name, image }) => {
  return <Img src={image} alt={name} />;
};

export default InputLoginWithText;
