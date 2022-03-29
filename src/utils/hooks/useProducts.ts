import { useContext } from "react";
import { ProductContext } from "../context/Context";

export const useProducts = () => {
  return useContext(ProductContext);
};
