import React, { FC } from "react";
import styled from "styled-components";
import { Pictures } from "../../../../assets/images";

const Img = styled.img`
  width: 43%;
  height: 100%;
`;

const ImageLogin: FC = ({}) => {
  console.log(Pictures);

  return <Img src={Pictures.loginImg} />;
};

export default ImageLogin;
