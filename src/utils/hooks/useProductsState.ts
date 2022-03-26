import { useRef, useState } from "react";

export const useProductsState = (apiClient: {
  getSingleProduct(id: string): Promise<object>;
  getAllProducts(): Promise<object[]>;
}) => {
  const [productsList, setProductsList] = useState<object[]>([]);
  const [singleProduct, setSingleProduct] = useState<Map<any, any>>(new Map());
  const api = useRef(apiClient);

  const fetchAllProducts = async () => {
    if (productsList.length === 0) {
      const allProducts = await api.current.getAllProducts();
      setProductsList(allProducts);
    }
  };

  const fetchProduct = async (id: string) => {
    if (!singleProduct.has(id)) {
      const products = await api.current.getSingleProduct(id);
      const newProduct = new Map(singleProduct);
      newProduct.set(id, products);
      setTimeout(() => {
        setSingleProduct(newProduct);
      }, 1000);
    }
  };

  return {
    fetchAllProducts,
    fetchProduct,
    productsList,
    singleProduct,
  };
};
