import React, { FC } from "react";
import * as apiClient from "../api/api";
import { useProductsState } from "../hooks/useProductsState";

interface IProductContext {
  productsList: object[];
  singleProduct: Map<any, any>;
}

const ProductContext = React.createContext<IProductContext>({
  productsList: [],
  singleProduct: new Map(),
});

export const ProductProvider: FC = ({ children }) => {
  const productState = useProductsState(apiClient);
  return (
    <ProductContext.Provider value={productState}>
      {children}
    </ProductContext.Provider>
  );
};
