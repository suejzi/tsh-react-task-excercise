import React, { FC } from "react";
import styled from "styled-components";
import ImageProduct from "../../../atoms/images/product";
import {
  TertiaryHeading,
  BigPrimaryParagraph,
} from "../../../../assets/styles/common/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { ImageProps } from "../../../../utils/interfaces/interface";

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  height: fit-content;
  bottom: 0;
  top: 0;

  @media only screen and (max-width: 768px) {
    width: auto;
    padding: 0 24px;
  }

  .upper-modal-col {
    position: relative;
    height: 350px;
    svg {
      position: absolute;
      top: 19px;
      right: 19px;
      cursor: pointer;
    }
    img {
      border-radius: 8px;
    }
  }

  .lower-modal-col {
    margin-top: -7px;
    padding: 0 32px;
    background-color: #fff;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    h2 {
      margin-top: 38px;
    }

    p {
      margin: 10px 0 56px 0;
    }
  }

  .close-icon {
    padding: 0;
    border-radius: 0;

    img {
      height: 14px;
      width: 14px;
    }
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
  return (
    <ModalWrapper>
      <div className="upper-modal-col">
        <CloseIcon onClick={handleClose} />
        <ImageProduct name={name} image={image} imageType="modal" />
      </div>
      <div className="lower-modal-col">
        <TertiaryHeading>{name}</TertiaryHeading>
        <BigPrimaryParagraph>{description}</BigPrimaryParagraph>
      </div>
    </ModalWrapper>
  );
};

export default SingleProductModalContent;
