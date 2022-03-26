import { useRef, useState } from "react";

export type GetProducts = {
  getProducts: Function;
  getAllProducts: Function;
};

export const usePostsState = (apiClient: GetProducts) => {
  const [productsList, setProductsList] = useState<Array<object>>([]);
  const [singleProduct, setSingleProduct] = useState(new Map());
  const api = useRef(apiClient);

  const fetchAllProducts = async () => {
    if (productsList.length === 0) {
      const allProducts = await api.current.getProducts();
      setProductsList(allProducts);
    }
  };

  const fetchProduct = async (id: string) => {
    if (!singleProduct.has(id)) {
      const products = await api.current.getAllProducts(id);
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
