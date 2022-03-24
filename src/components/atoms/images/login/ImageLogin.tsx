import React, { FC } from "react";
import styled from "styled-components";
import { Pictures } from "../../../../assets/images";

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageLogin: FC = ({}) => {
  return <Img src={Pictures.loginImg} />;
};

export default ImageLogin;
