import React, { FC } from "react";
import styled from "styled-components";
import { SecondaryHeading } from "../../../assets/styles/common/Typography";
import { useTranslation } from "react-i18next";
import { WhiteButton } from "../../../assets/styles/common/Buttons";
import { TemplateWrapper } from "../../../assets/styles/common/Layout";

const NotFoundWrapper = styled.div`
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

  h2 {
    margin-bottom: 15px;
  }

  a {
    text-decoration: unset;
    color: inherit;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 48px);
  }
`;

const NotFoundTemplate: FC = ({}) => {
  const { t } = useTranslation();

  return (
    <TemplateWrapper
      style={{
        backgroundColor: "#F0F1F5",
        height: "100vh",
      }}
    >
      <NotFoundWrapper>
        <SecondaryHeading>{t("PAGE_NOT_FOUND")}</SecondaryHeading>
        <WhiteButton>
          <a href="/">{t("BACK_TO_PRODUCTS")}</a>
        </WhiteButton>
      </NotFoundWrapper>
    </TemplateWrapper>
  );
};

export default NotFoundTemplate;
