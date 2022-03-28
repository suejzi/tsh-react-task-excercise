import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ImageProduct from "../../../atoms/images/product";
import {
  SecondaryHeading,
  SmallPrimaryParagraph,
} from "../../../../assets/styles/common/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { ImageProps } from "../../../atoms/common/types";

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: auto;
  position: absolute;
  justify-content: center;
  height: 100%;
  left: 0; right: 0;
}

  .upper-modal-col {
    position: relative;
    svg {
      position: absolute;
      top: 0; right: 0;
    }
    img {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }


  .lower-modal-col {
    padding: 32px 24px 56px 24px;
    background-color: #fff;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  
  .close-icon {
    padding: 0;
    border-radius: 0;
    
    img {
      height: 14px;
      width: 14px;
      
  }
`;

export interface SingleModalProps extends ImageProps {
  description: string;
  handleClose: () => void;
}

const SingleProductModalContent: FC<SingleModalProps> = ({
  name,
  description,
  image,
  handleClose,
}) => {
  const { t } = useTranslation();

  return (
    <ModalWrapper>
      <div className="upper-modal-col">
        <CloseIcon onClick={handleClose} />
        <ImageProduct name={name} image={image} imageType="modal" />
      </div>
      <div className="lower-modal-col">
        <SecondaryHeading>{name}</SecondaryHeading>
        <SmallPrimaryParagraph>{description}</SmallPrimaryParagraph>
      </div>
    </ModalWrapper>
  );
};

export default SingleProductModalContent;
