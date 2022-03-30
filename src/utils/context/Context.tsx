import React, { FC, useEffect } from "react";
import * as apiClient from "../api/api";
import { useProductsState } from "../hooks/useProductsState";
import { ProductListProps } from "../interfaces/interface";

interface IProductContext {
  fetchAllProducts: () => Promise<void>;
  productsList: ProductListProps;
}

export const ProductContext = React.createContext<IProductContext>(
  undefined as unknown as IProductContext
);

export const ProductProvider: FC = ({ children }) => {
  const productState = useProductsState(apiClient);

  useEffect(() => {
    productState.fetchAllProducts();
  }, [productState.fetchAllProducts]);

  return (
    <ProductContext.Provider value={productState}>
      {children}
    </ProductContext.Provider>
  );
};
