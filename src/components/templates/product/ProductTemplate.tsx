import React, { FC, useState } from "react";
import Header from "../../organisms/header";
import ProductList from "../../organisms/productList";
import { ProductListProps } from "../../organisms/productList";
import {
  LoadingSpinner,
  TemplateWrapper,
} from "../../../assets/styles/common/Layout";
const ProductTemplate: FC<ProductListProps> = ({ items, meta, links }) => {
  const [searchParam, setSearchParam] = useState<string>("");

  return (
    <TemplateWrapper>
      <Header isLogged={false} />
      {items ? (
        <ProductList items={items} meta={meta} links={links} />
      ) : (
        <LoadingSpinner />
      )}
    </TemplateWrapper>
  );
};

export default ProductTemplate;
