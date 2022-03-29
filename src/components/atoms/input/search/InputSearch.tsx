import React, { FC } from "react";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import { Icons } from "../../../../assets/images";
import { InputAdornment } from "@mui/material";

const Input = styled(TextField)`
  max-width: 392px;
  width: 100%;

  & > div {
    width: 100%;

    img {
      margin-right: 4px;
    }
  }

  input {
    padding: 16px;
    background: #fff;
    font-family: Nunito, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #1a1b1d;
  }

  fieldset {
    border: 1px solid #e0e2ea;
    border-radius: 8px;
  }
`;

export interface InputSearchProps {
  placeholder: string | null;
}

const InputSearch: FC<InputSearchProps> = ({ placeholder }) => {
  const { t } = useTranslation();

  return (
    <Input
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <img src={Icons.magnifyingGlass.default} />
          </InputAdornment>
        ),
      }}
      placeholder={t(`${placeholder}`)}
    />
  );
};

export default InputSearch;
