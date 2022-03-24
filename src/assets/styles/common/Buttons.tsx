import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BlueButton = styled(Button)`
  background: #4460f7;
  border-radius: 4px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  padding: 11px 81.5px;
  text-transform: inherit;

  &:hover {
    background: #2140e8;
    border-radius: 4px;
  }

  &:disabled {
    background: #9194a5;
    border-radius: 4px;
  }
`;

export const WhiteButton = styled(Button)`
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #4460f7;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #4460f7;

  &:hover {
    color: #2140e8;
    border: 1px solid #2140e8;
  }

  &:disabled {
    color: #9194a5;
    border: 1px solid #9194a5;
  }
`;
