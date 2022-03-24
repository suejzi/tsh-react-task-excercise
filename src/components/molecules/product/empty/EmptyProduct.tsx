import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Icons } from "../../../../assets/images";
import {
  SecondaryHeading,
  SmallPrimaryParagraph,
} from "../../../../assets/styles/common/Typography";
import { SectionWrapper } from "../../../../assets/styles/common/Layout";

const EmptyProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 344px;
  max-width: 600px;
  width: 100%;
  margin: 56px auto 0 auto;
  background: #ffffff;
  border-radius: 8px;

  @media only screen and (max-width: 768px) {
    margin: 0;
    max-width: 100%;
  }
`;

const EmptyProduct: FC = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper>
      <EmptyProductWrapper>
        <img src={Icons.briefcase.default} />
        <SecondaryHeading>{t("HEADING_NOTFOUND_PRODUCT")}</SecondaryHeading>
        <SmallPrimaryParagraph>
          {t("PARAGRAPH_NOTFOUND_PRODUCT")}
        </SmallPrimaryParagraph>
      </EmptyProductWrapper>
    </SectionWrapper>
  );
};

export default EmptyProduct;
