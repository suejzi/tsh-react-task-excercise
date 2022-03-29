import React, { FC, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { SingleProductProps } from "../../common/types";
import ImageProduct from "../../../atoms/images/product/ImageProduct";
import {
  SecondaryHeading,
  SmallPrimaryParagraph,
} from "../../../../assets/styles/common/Typography";
import ProductRating from "../../../atoms/images/productRating";
import { BlueButton } from "../../../../assets/styles/common/Buttons";
import { Modal } from "@mui/material";
import SingleProductModalContent from "../singleModalContent/SingleProductModalContent";

const SingleProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;

const DescriptionWrapper = styled.div`
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  height: 195px;
  background-color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  .lower-col,
  .upper-col {
    display: flex;
    flex-direction: column;
  }

  .upper-col {
    h2 {
      margin-bottom: 8px;
    }
  }

  .lower-col {
    margin-top: auto;

    & > span {
      margin-bottom: 16px;
    }

    & > button {
      margin-bottom: 7px;
    }
  }
`;

const PromoParagraph = styled(SmallPrimaryParagraph)`
  color: #fff;
  background-color: #f9a52b;
  padding: 4px 17px 4px 16px;
  position: absolute;
  margin-top: 16px;
`;

const SingleProduct: FC<SingleProductProps> = ({
  id,
  name,
  description,
  rating,
  image,
  promo,
  active,
  imageType,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { t } = useTranslation();
  return (
    <SingleProductWrapper key={id} data-filter={{ promo, active }}>
      {promo && <PromoParagraph>{t("PROMO")}</PromoParagraph>}
      <ImageProduct
        name={name}
        image={image}
        imageType={imageType}
        active={active}
      />
      <DescriptionWrapper>
        <div className="upper-col">
          <SecondaryHeading>{name}</SecondaryHeading>
          <SmallPrimaryParagraph>{description}</SmallPrimaryParagraph>
        </div>
        <div className="lower-col">
          <ProductRating rating={rating} />
          <BlueButton disabled={!active} onClick={handleOpen}>
            {active ? t("SHOW_DETAILS") : t("UNAVAILABLE")}
          </BlueButton>
        </div>
      </DescriptionWrapper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SingleProductModalContent
          description={description}
          name={name}
          image={image}
          imageType="modal"
          handleClose={handleClose}
        />
      </Modal>
    </SingleProductWrapper>
  );
};

export default SingleProduct;
