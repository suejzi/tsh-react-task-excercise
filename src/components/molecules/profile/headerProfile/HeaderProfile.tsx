import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { WhiteButton } from "../../../../assets/styles/common/Buttons";
import PopoverProfile from "../popoverProfile";

const HeaderProfileWrapper = styled.div`
  white-space: pre;
  height: 60px;
  display: flex;
  align-items: center;
`;

export interface HeaderProfileProps {
  isLogged: boolean;
}

const HeaderProfile: FC<HeaderProfileProps> = ({ isLogged }) => {
  const { t } = useTranslation();

  return (
    <HeaderProfileWrapper>
      {!isLogged ? (
        <WhiteButton>{t("LOG_IN")}</WhiteButton>
      ) : (
        <PopoverProfile />
      )}
    </HeaderProfileWrapper>
  );
};

export default HeaderProfile;
