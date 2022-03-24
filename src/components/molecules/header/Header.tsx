import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import SiteLogo from "../../atoms/images/logo";
import InputSearch from "../../atoms/input/search";
import InputCheckbox from "../../atoms/input/checkbox";
import HeaderProfile, { HeaderProfileProps } from "../profile/headerProfile";
import { SectionWrapper } from "../../../assets/styles/common/Layout";
import { FormControl, FormGroup } from "@mui/material";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 48px 0;
  width: 100%;
  align-items: center;

  .header-input__wrapper {
    flex-direction: row;
    margin-left: 105px;
    width: 100%;
    div {
      margin-right: 24px;
    }

    label {
      margin-right: 32px;
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      margin: 0;
      order: 1;
      flex: 1 0 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;

    img {
      margin-right: auto;
    }
  }
`;

export interface HeaderProps extends HeaderProfileProps {}

const Header: FC<HeaderProps> = ({ isLogged }) => {
  const { t } = useTranslation();

  return (
    <SectionWrapper>
      <HeaderWrapper>
        <SiteLogo />
        <FormControl className="header-input__wrapper">
          <InputSearch placeholder={t("SEARCH")} />
          <FormGroup row>
            <InputCheckbox label={t("ACTIVE")} />
            <InputCheckbox label={t("PROMO")} />
          </FormGroup>
        </FormControl>
        <HeaderProfile isLogged={isLogged} />
      </HeaderWrapper>
    </SectionWrapper>
  );
};

export default Header;
