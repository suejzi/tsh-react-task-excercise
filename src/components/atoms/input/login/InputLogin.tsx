import React, { FC } from "react";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";

const Input = styled(TextField)`
  width: 100%;

  input {
    padding: 16px;
    background: #fff;
  }

  fieldset {
    border: 1px solid #e0e2ea;
    border-radius: 8px;
    font-family: Nunito, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #9194a5;
  }
`;

export interface InputLoginProps {
  placeholder?: string;
  type?: string;
}

const InputLogin: FC<InputLoginProps> = ({ placeholder, type }) => {
  const { t } = useTranslation();

  return <Input placeholder={t(`${placeholder}`)} type={type} />;
};

export default InputLogin;
