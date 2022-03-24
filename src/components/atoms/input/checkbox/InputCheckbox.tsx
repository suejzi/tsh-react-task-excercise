import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import { Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { FormGroup } from "@mui/material";

const Input = styled(Checkbox)``;

export interface InputCheckboxProps {
  label: string;
}

const InputCheckbox: FC<InputCheckboxProps> = ({ label }) => {
  const { t } = useTranslation();

  return <FormControlLabel control={<Input />} label={`${t(label)}`} />;
};

export default InputCheckbox;
