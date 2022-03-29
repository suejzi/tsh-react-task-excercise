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
  max-width: 496px;
  padding: 0 126px;
  position: relative;

  .logo-section {
    top: 54px;
    left: 126px;
    position: absolute;
  }
  .login-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin-top: 112px;
    h1 {
      margin-bottom: 30px;
    }

    div {
      p {
        margin-bottom: 5px;
      }

      div {
        margin-bottom: 12px;
      }
    }

    button {
      padding: 15px 0;
      margin: 30px 0 20px 0;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 0 24px;

    .logo-section {
      left: 24px;
    }
  }
`;

const Login: FC = () => {
  const { t } = useTranslation();

  return (
    <LoginWrapper>
      <div className="logo-section">
        <SiteLogo />
      </div>
      <div className="login-section">
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
      </div>
    </LoginWrapper>
  );
};

export default Login;
