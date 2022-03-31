import React from "react";

export interface ImageType {
  imageType?: "product" | "modal";
  active?: boolean;
}

export interface OrganismWrapperType {
  bgColor?: "white" | "gray";
}

export interface ImageProps extends ImageType {
  name: string;
  image: string;
}

export interface SingleProductProps extends ImageProps {
  id: number;
  description: string;
  rating: number;
  promo: boolean;
  active: boolean;
  checkbox?: any;
}

export interface ProductFetchedData {
  items: Array<SingleProductProps>;
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
  links: {
    first: string;
    previous: string;
    next: string;
    last: string;
  };
}

export interface ProductListProps extends ProductFetchedData{
  termChange: boolean
  setTermChange: React.Dispatch<React.SetStateAction<boolean>>
}
