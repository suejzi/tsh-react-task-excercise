import { useRef, useState } from "react";

export const useProductsState = (apiClient: {
  getAllProducts(): Promise<object[]>;
}) => {
  const [productsList, setProductsList] = useState<object[]>([]);
  const api = useRef(apiClient);

  const fetchAllProducts = async () => {
    if (productsList.length === 0) {
      const allProducts = await api.current.getAllProducts();
      setProductsList(allProducts);
    }
  };

  return {
    fetchAllProducts,
    productsList,
  };
};
