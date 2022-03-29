import React, { FC, useMemo, useState } from "react";
import styled from "styled-components";
import SingleProduct from "../../molecules/product/single";
import { SingleProductProps } from "../../molecules/common/types";
import {
  SectionWrapper,
  OrganismWrapper,
} from "../../../assets/styles/common/Layout";
import Pagination from "../../molecules/product/pagination/Pagination";

const ProductListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 40px;

  & > div {
    margin: 16px 12px;

    @media only screen and (min-width: 1201px) {
      width: calc(25% - 18px);

      &:nth-child(4n + 1) {
        margin-left: 0;
      }

      &:nth-child(4n) {
        margin-right: 0;
      }
    }

    @media only screen and (max-width: 1200px) {
      width: calc(50% - 12px);
      &:nth-child(2n - 1) {
        margin-left: 0;
      }

      &:nth-child(2n) {
        margin-right: 0;
      }
    }

    @media only screen and (max-width: 768px) {
      width: 100%;
      margin: 12px 0;
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
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const numberOfPages = Math.ceil(items.length / itemsPerPage);

  const Products = useMemo(
    () =>
      items
        .slice((page - 1) * itemsPerPage, page * itemsPerPage)
        .map((single) => (
          <SingleProduct
            key={single.id}
            id={single.id}
            description={single.description}
            rating={single.rating}
            promo={single.promo}
            active={single.active}
            name={single.name}
            image={single.image}
            imageType="product"
          />
        )),
    [items, page, itemsPerPage]
  );

  return (
    <OrganismWrapper
      bgColor="gray"
      style={{
        height: "100%",
      }}
    >
      <SectionWrapper>
        <ProductListWrapper>{Products}</ProductListWrapper>
        <Pagination
          currentPage={page}
          pageCount={numberOfPages}
          setCurrentPage={setPage}
        />
      </SectionWrapper>
    </OrganismWrapper>
  );
};

export default ProductList;
