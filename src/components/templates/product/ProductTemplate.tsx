import React, { FC } from "react";
import styled from "styled-components";
import Header from "../../organisms/header";
import ProductList from "../../organisms/productList";

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

const ProductTemplate: FC = () => {
  return (
    <LoginTemplateWrapper>
      <Header isLogged={false} />
      <ProductList items={} meta={} links={} />
    </LoginTemplateWrapper>
  );
};

export default ProductTemplate;
