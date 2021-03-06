import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import SiteLogo from "../../atoms/images/logo";
import InputSearch from "../../atoms/input/search";
import InputCheckbox from "../../atoms/input/checkbox";
import HeaderProfile, {
  HeaderProfileProps,
} from "../../molecules/profile/headerProfile";
import {
  SectionWrapper,
  OrganismWrapper,
} from "../../../assets/styles/common/Layout";
import { FormControl, FormGroup } from "@mui/material";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 42px 0;
  width: 100%;
  align-items: center;

  .header-input__wrapper {
    flex-direction: row;
    display: flex;
    align-items: center;
    margin-left: 105px;
    width: 100%;
    & > div {
      margin-right: 31px;
    }

    label {
      margin-right: 37px;
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      margin: 0;
      order: 1;
      flex: 1 0 100%;

      & > div {
        margin-right: 0;
        width: 100%;
        max-width: 100%;
      }

      & > div:first-child {
        margin-top: 17px;
      }

      & > div:last-child {
        margin-left: 13px;
        margin-top: 17px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    padding: 42px 0 28px 0;

    img {
      margin-right: auto;
    }

    > div:last-child {
      margin-left: auto;
    }
  }
`;

export interface HeaderProps extends HeaderProfileProps {
  handleInputChange: Function;
  handleSearchChange: Function;
}

const Header: FC<HeaderProps> = ({
  isLogged,
  handleInputChange,
  handleSearchChange,
}) => {
  const { t } = useTranslation();

  return (
    <OrganismWrapper bgColor="white">
      <SectionWrapper>
        <HeaderWrapper>
          <SiteLogo />
          <FormControl className="header-input__wrapper">
            <InputSearch
              placeholder={t("SEARCH")}
              handleSearchChange={handleSearchChange}
            />
            <FormGroup row>
              <InputCheckbox
                label={t("ACTIVE")}
                filterName="active"
                handleInputChange={handleInputChange}
              />
              <InputCheckbox
                label={t("PROMO")}
                filterName="promo"
                handleInputChange={handleInputChange}
              />
            </FormGroup>
          </FormControl>
          <HeaderProfile isLogged={isLogged} />
        </HeaderWrapper>
      </SectionWrapper>
    </OrganismWrapper>
  );
};

export default Header;
