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

export interface ICheckedInputs {
  promo: undefined;
  active: undefined;
}

export interface SingleProductProps extends ImageProps {
  id: number;
  description: string;
  rating: number;
  promo: boolean;
  active: boolean;
  checkbox?: any;
}

export interface ProductListProps {
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
