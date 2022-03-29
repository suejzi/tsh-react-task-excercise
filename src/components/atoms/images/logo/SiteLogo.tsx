import React, { FC } from "react";
import styled from "styled-components";
import { Logo } from "../../../../assets/images";

const Img = styled.img`
  width: 103px;
  height: 40px;
`;

const SiteLogo: FC = () => {
  return (
    <a href="/">
      <Img src={Logo} />{" "}
    </a>
  );
};

export default SiteLogo;
