import { useRef, useState } from "react";
import { isEmpty } from "../helpers/isEmpty";

interface ProductStateProps {
  getAllProducts(): Promise<object>;
}

export const useProductsState = (apiClient: ProductStateProps) => {
  const [productsList, setProductsList] = useState<any>({});
  const api = useRef(apiClient);

  const fetchAllProducts = async () => {
    if (isEmpty(productsList)) {
      const allProducts = await api.current.getAllProducts();
      setProductsList(allProducts);
    }
  };

  return {
    fetchAllProducts,
    productsList,
  };
};
