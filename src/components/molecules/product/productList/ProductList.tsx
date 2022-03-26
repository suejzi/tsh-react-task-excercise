import React, { FC, useMemo } from "react";
import styled from "styled-components";
import SingleProduct, { SingleProductProps } from "../single";
import { SectionWrapper } from "../../../../assets/styles/common/Layout";

const ProductListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > div {
    width: calc(25% - 24px);
    margin: 16px 12px;

    &:nth-child(4n + 1) {
      background-color: blue;
    }

    &:nth-child(4n) {
      background-color: red;
    }
  }
`;

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

const ProductList: FC<ProductListProps> = ({ items, meta, links }) => {
  const Products = useMemo(
    () =>
      items.map((single) => (
        <SingleProduct
          id={single.id}
          description={single.description}
          rating={single.rating}
          promo={single.promo}
          active={single.active}
          name={single.name}
          image={single.image}
        />
      )),
    [items]
  );

  return (
    <SectionWrapper>
      <ProductListWrapper>{Products}</ProductListWrapper>
    </SectionWrapper>
  );
};

export default ProductList;
