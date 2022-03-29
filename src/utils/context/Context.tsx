import React, { FC } from "react";
import * as apiClient from "../api/api";
import { useProductsState } from "../hooks/useProductsState";
import { resolveAny } from "dns";

interface IProductContext {
  productsList: any;
  fetchAllProducts: any;
}

export const ProductContext = React.createContext<IProductContext>({
  productsList: {},
  fetchAllProducts: Promise,
});

export const ProductProvider: FC = ({ children }) => {
  const productState = useProductsState(apiClient);

  return (
    <ProductContext.Provider value={productState}>
      {children}
    </ProductContext.Provider>
  );
};
