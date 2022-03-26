import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import InputLoginWithText from "../../molecules/input/InputLoginWithText";
import styled from "styled-components";
import SiteLogo from "../../atoms/images/logo";
import {
  PrimaryHeading,
  SmallPrimaryParagraph,
  UnderlineLink,
} from "../../../assets/styles/common/Typography";
import { BlueButton } from "../../../assets/styles/common/Buttons";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 496px;
  padding: 44px 195px 0 126px;
  position: relative;

  header {
    top: 54px;
    left: 126px;
    position: absolute;
  }
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
`;

const Login: FC = () => {
  const { t } = useTranslation();

  return (
    <LoginWrapper>
      <header>
        <SiteLogo />
      </header>
      <main>
        <PrimaryHeading>{t("LOGIN")}</PrimaryHeading>
        <InputLoginWithText
          inputLabel={"USERNAME"}
          placeholder={"ENTER_USERNAME"}
        />
        <InputLoginWithText
          inputLabel={"PASSWORD"}
          placeholder={"ENTER_PASSWORD"}
          type="password"
        />
        <BlueButton>{t("LOG_IN")}</BlueButton>
        <SmallPrimaryParagraph>
          <UnderlineLink href="https://www.google.com">
            {t("FORGOT_PASSWORD")}?
          </UnderlineLink>
        </SmallPrimaryParagraph>
      </main>
    </LoginWrapper>
  );
};

export default Login;
