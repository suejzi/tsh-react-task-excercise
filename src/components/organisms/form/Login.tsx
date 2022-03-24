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
`;

const Login: FC = () => {
  const { t } = useTranslation();

  return (
    <LoginWrapper>
      <SiteLogo />
      <PrimaryHeading>{t("LOGIN")}</PrimaryHeading>
      <InputLoginWithText
        inputLabel={"USERNAME"}
        placeholder={"ENTER_USERNAME"}
      />
      <InputLoginWithText
        inputLabel={"PASSWORD"}
        placeholder={"ENTER_PASSWORD"}
      />
      <BlueButton>{t("LOG_IN")}</BlueButton>
      <SmallPrimaryParagraph>
        <UnderlineLink href="https://www.google.com">
          {t("FORGOT_PASSWORD")}?
        </UnderlineLink>
      </SmallPrimaryParagraph>
    </LoginWrapper>
  );
};

export default Login;
