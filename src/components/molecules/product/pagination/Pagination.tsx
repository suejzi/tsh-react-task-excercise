import styled from "styled-components";
import { Icons } from "../../../../assets/images";
import { useTranslation } from "react-i18next";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .pageCard {
    height: 36px;
    padding: 0 15px;
    background: transparent;
    border: 1px solid #b7bcce;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 0 6px;
    color: #b9bdcf;
    cursor: pointer;

    &:not([disabled]):hover {
      border: 1px solid #1e86ff;
      color: #1e86ff;
    }
  }

  .pageCard.active {
    background: #1e86ff;
    border: 1px solid #1e86ff;
    color: #fff;
  }
`;

export const MorePaginationIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 36px;
  width: 36px;
`;

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  setCurrentPage: (prevPage: number) => void;
}

const Pagination = ({
  currentPage,
  pageCount,
  setCurrentPage,
}: PaginationProps) => {
  const { t } = useTranslation();
  const pageCountArr = (numberOfPages: number) => {
    let arr = [];
    for (let i = 1; numberOfPages <= 6 ? i <= numberOfPages : i <= 3; i++) {
      arr.push(i);
    }
    return arr;
  };

  const getPageRange = (currentPage: number, pageCount: number) => {
    let pageRange = pageCountArr(pageCount);
    if (pageCount > 6) {
      if (currentPage > 1 && currentPage !== pageCount) {
        pageRange.length = 0;
        if (currentPage === pageCount - 3) {
          pageRange.push(currentPage - 2);
        }
        pageRange.push(currentPage - 1);
        pageRange.push(currentPage);
        if (currentPage !== pageCount - 3) {
          pageRange.push(currentPage + 1);
        }
      } else if (currentPage === pageCount) {
        pageRange.length = 0;
        pageRange.push(currentPage - 2);
        pageRange.push(currentPage - 1);
        pageRange.push(currentPage);
      }
      return pageRange;
    } else {
      return pageRange;
    }
  };

  console.log(getPageRange(currentPage, pageCount));

  const renderPageRangeButtons = () =>
    getPageRange(currentPage, pageCount).map((page: number) => (
      <button
        key={page}
        className={page === currentPage ? `pageCard active` : `pageCard`}
        onClick={() => setCurrentPage(page)}
      >
        {page}
      </button>
    ));

  const renderInitialButtons = (initNum: number, maxInitNumber: number) => {
    const numberArr: Array<number> = [];
    for (let i = initNum; i <= maxInitNumber; i++) {
      numberArr.push(i);
    }

    return numberArr.map((pageNumber: number) => (
      <button
        key={pageNumber}
        className={currentPage === pageNumber ? `pageCard active` : `pageCard`}
        onClick={() => setCurrentPage(pageNumber)}
      >
        {pageNumber}
      </button>
    ));
  };

  const paginationDots = () =>
    pageCount >= 6 && (
      <MorePaginationIconContainer
        style={{
          height: "36px",
          width: "36px",
        }}
      >
        <img src={Icons.paginationDots.default} />
      </MorePaginationIconContainer>
    );

  return (
    <PaginationContainer>
      <button
        className="pageCard"
        onClick={() => {
          setCurrentPage(1);
        }}
        disabled={currentPage <= 1}
      >
        {t(`First`)}
      </button>
      {currentPage >= pageCount - 2 && pageCount > 6 && (
        <>
          {renderInitialButtons(1, 3)}
          {paginationDots()}
        </>
      )}
      <>{renderPageRangeButtons()}</>
      {currentPage < pageCount - 2 && pageCount > 6 && (
        <>
          {paginationDots()}
          {renderInitialButtons(pageCount - 2, pageCount)}
        </>
      )}
      <button
        className="pageCard"
        onClick={() => {
          setCurrentPage(pageCount);
        }}
        disabled={currentPage === pageCount}
      >
        {t(`Last`)}
      </button>
    </PaginationContainer>
  );
};

export default Pagination;
