import React, { FC, useMemo, useState } from "react";
import styled from "styled-components";
import SingleProduct from "../../molecules/product/single";
import { ProductListProps } from "../../../utils/interfaces/interface";
import {
  SectionWrapper,
  OrganismWrapper,
} from "../../../assets/styles/common/Layout";
import Pagination from "../../molecules/product/pagination/Pagination";
import EmptyProduct from "../../molecules/product/empty";
import { isEmpty } from "../../../utils/helpers/isEmpty";

const ProductListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 40px;

  @media only screen and (max-width: 768px) {
    margin-top: 10px;
  }

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

const ProductList: FC<ProductListProps> = ({ items, meta, links }) => {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = window.matchMedia("only screen and (max-width: 768px)")
    .matches
    ? 4
    : 8;
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
    <OrganismWrapper bgColor="gray">
      <SectionWrapper>
        {!isEmpty(items) ? (
          <>
            <ProductListWrapper data-testid="cy-product-list">
              {Products}
            </ProductListWrapper>
            <Pagination
              currentPage={page}
              pageCount={numberOfPages}
              setCurrentPage={setPage}
              meta={meta}
              links={links}
            />
          </>
        ) : (
          <EmptyProduct />
        )}
      </SectionWrapper>
    </OrganismWrapper>
  );
};

export default ProductList;
