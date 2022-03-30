import React, { FC } from "react";
import { useProducts } from "../../utils/hooks/useProducts";
import ProductTemplate from "../../components/templates/product";
import { LoadingSpinner } from "../../assets/styles/common/Layout";
import { isEmpty } from "../../utils/helpers/isEmpty";

export const Products: FC = () => {
  const { productsList } = useProducts();

  return !isEmpty(productsList) ? (
    <ProductTemplate
      items={productsList.items}
      meta={productsList.meta}
      links={productsList.links}
    />
  ) : (
    <LoadingSpinner />
  );
};
