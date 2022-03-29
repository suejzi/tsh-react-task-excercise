import React, { FC } from "react";
import styled from "styled-components";
import ImageLogin from "../../atoms/images/login";
import Login from "../../organisms/form";

const LoginTemplateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

  & > img {
    width: 42.5%;
  }

  & > div {
    width: 57.5%;
  }

  @media only screen and (max-width: 768px) {
    & > img {
      display: none;
    }

    & > div {
      width: 100%;
    }
  }
`;

const LoginTemplate: FC = () => {
  return (
    <LoginTemplateWrapper>
      <ImageLogin />
      <Login />
    </LoginTemplateWrapper>
  );
};

export default LoginTemplate;
