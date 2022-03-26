import React, { FC } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { ImageProps } from "../../../atoms/common/types";
import ImageProduct from "../../../atoms/images/product/ImageProduct";
import {
  SecondaryHeading,
  SmallPrimaryParagraph,
} from "../../../../assets/styles/common/Typography";
import ProductRating from "../../../atoms/images/productRating";
import { BlueButton } from "../../../../assets/styles/common/Buttons";

const SingleProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: bisque;
`;

const DescriptionWrapper = styled.div`
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  height: 100%;

  .lower-col {
    margin-top: auto;
  }
`;

export interface SingleProductProps extends ImageProps {
  id: number;
  description: string;
  rating: number;
  promo: boolean;
  active: boolean;
}

const SingleProduct: FC<SingleProductProps> = (props) => {
  const { t } = useTranslation();
  return (
    <SingleProductWrapper key={props.name}>
      <ImageProduct name={props.name} image={props.image} />
      <DescriptionWrapper>
        <div className="upper-col">
          <SecondaryHeading>{props.name}</SecondaryHeading>
          <SmallPrimaryParagraph>{props.description}</SmallPrimaryParagraph>
        </div>
        <div className="lower-col">
          <ProductRating rating={props.rating} />
          <BlueButton onClick={() => console.log("test")}>
            {t("SHOW_DETAILS")}
          </BlueButton>
        </div>
      </DescriptionWrapper>
    </SingleProductWrapper>
  );
};

export default SingleProduct;
