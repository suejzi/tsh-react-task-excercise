import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import { Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";

const Input = styled(Checkbox)`
  padding: 0;
  margin-right: 3px;
  svg {
    height: 32px;
    width: 32px;
    color: #e0e2ea;
  }

  svg[data-testid="CheckBoxIcon"] {
    color: #4460f7;
  }
`;

const ControlWrapper = styled(FormControlLabel)`
  .MuiTypography-root {
    font-size: 14px;
    line-height: 16px;
    color: #1a1b1d;
    font-weight: 600;
  }
`;

export interface InputCheckboxProps {
  label: string;
  filterName: "promo" | "active";
  handleInputChange: Function;
}

const InputCheckbox: FC<InputCheckboxProps> = ({
  label,
  filterName,
  handleInputChange,
}) => {
  const { t } = useTranslation();

  return (
    <ControlWrapper
      onChange={(e) => handleInputChange(e)}
      control={<Input />}
      label={`${t(label)}`}
      value={filterName}
    />
  );
};

export default InputCheckbox;
