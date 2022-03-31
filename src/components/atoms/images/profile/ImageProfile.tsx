import React, { FC } from "react";
import styled from "styled-components";
import { Pictures } from "../../../../assets/images";

const Img = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
`;

const ImageProfile: FC = () => {
  return <Img alt="Profile Image" src={Pictures.sampleAvatar} />;
};

export default ImageProfile;
