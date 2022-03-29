import React, { FC, useEffect } from "react";
import { useProducts } from "../../utils/hooks/useProducts";
import ProductTemplate from "../../components/templates/product";

export const Products: FC = () => {
  const { productsList, fetchAllProducts } = useProducts();

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
    <ProductTemplate
      items={productsList.items}
      meta={productsList.meta}
      links={productsList.links}
    />
  );
};
