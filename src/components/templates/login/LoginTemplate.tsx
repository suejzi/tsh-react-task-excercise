import React, { FC } from "react";
import styled from "styled-components";
import ImageLogin from "../../atoms/images/login";
import Login from "../../organisms/form";

const LoginTemplateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

  & > div:first-child {
    width: 42.5%;
  }

  & > div:last-child {
    width: 57.5%;
    position: relative;
  }
`;

const LoginTemplate = () => {
  return (
    <LoginTemplateWrapper>
      <div>
        <ImageLogin />
      </div>
      <div>
        <Login />
      </div>
    </LoginTemplateWrapper>
  );
};

export default LoginTemplate;
