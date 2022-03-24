import React, { FC } from "react";
import styled from "styled-components";
import { SmallSecondaryParagraph } from "../../../assets/styles/common/Typography";
import { useTranslation } from "react-i18next";
import InputLogin from "../../atoms/input/login";
import { InputLoginProps } from "../../atoms/input/login";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export interface InputLoginWithTextProps extends InputLoginProps {
  inputLabel: string;
}

const InputLoginWithText: FC<InputLoginWithTextProps> = ({
  placeholder,
  inputLabel,
  type,
}) => {
  const { t } = useTranslation();
  return (
    <InputWrapper>
      <SmallSecondaryParagraph>{t(inputLabel)}</SmallSecondaryParagraph>
      <InputLogin placeholder={placeholder} type={type} />
    </InputWrapper>
  );
};

export default InputLoginWithText;
