import React, { FC } from "react";
import styled from "styled-components";
import ImageLogin from "../../atoms/images/login";
import Login from "../../organisms/form";

const LoginTemplateWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginTemplate = () => {
  return (
    <LoginTemplateWrapper>
      <ImageLogin />
      <Login />
    </LoginTemplateWrapper>
  );
};

export default LoginTemplate;
