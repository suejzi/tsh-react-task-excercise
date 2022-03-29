import styled from "styled-components";
import { Icons } from "../../../../assets/images";
import { useTranslation } from "react-i18next";
import {
  SecondaryTextButton,
  TextButton,
} from "../../../../assets/styles/common/Buttons";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 34px 0 46px 0;

  .pageCard.active {
    color: #4460f7;
  }
`;

export const PaginationNumbersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 23px;
`;

export const MorePaginationIconContainer = styled.div`
  display: flex;
  align-items: end;
  padding: 8px 6px;
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

  const renderPageRangeButtons = () =>
    getPageRange(currentPage, pageCount).map((page: number) => (
      <SecondaryTextButton
        key={page}
        className={page === currentPage ? `pageCard active` : `pageCard`}
        onClick={() => setCurrentPage(page)}
      >
        {page}
      </SecondaryTextButton>
    ));

  const renderInitialButtons = (initNum: number, maxInitNumber: number) => {
    const numberArr: Array<number> = [];
    for (let i = initNum; i <= maxInitNumber; i++) {
      numberArr.push(i);
    }

    return numberArr.map((pageNumber: number) => (
      <SecondaryTextButton
        key={pageNumber}
        className={currentPage === pageNumber ? `pageCard active` : `pageCard`}
        onClick={() => setCurrentPage(pageNumber)}
      >
        {pageNumber}
      </SecondaryTextButton>
    ));
  };

  const paginationDots = () =>
    pageCount >= 6 && (
      <MorePaginationIconContainer>
        <img src={Icons.paginationDots.default} />
      </MorePaginationIconContainer>
    );

  return (
    <PaginationContainer>
      <TextButton
        onClick={() => {
          setCurrentPage(1);
        }}
        disabled={currentPage <= 1}
      >
        {t(`First`)}
      </TextButton>
      <PaginationNumbersWrapper>
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
      </PaginationNumbersWrapper>
      <TextButton
        onClick={() => {
          setCurrentPage(pageCount);
        }}
        disabled={currentPage === pageCount}
      >
        {" "}
        {t(`Last`)}
      </TextButton>
    </PaginationContainer>
  );
};

export default Pagination;
