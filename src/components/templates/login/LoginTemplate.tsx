import React, { FC } from "react";
import styled from "styled-components";

const LoginTemplateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

  img {
    width: 42.5%;
  }

  & > div {
    width: 57.5%;
  }
`;

const LoginTemplate: FC = () => {
  return <LoginTemplateWrapper></LoginTemplateWrapper>;
};

export default LoginTemplate;
