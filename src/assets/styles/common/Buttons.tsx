import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BlueButton = styled(Button)`
  font-family: Nunito, sans-serif;
  background: #4460f7;
  border-radius: 4px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  padding: 16px 81.5px;
  text-transform: capitalize;

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
  font-family: Nunito, sans-serif;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #4460f7;
  padding: 11px 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  text-transform: capitalize;
  color: #4460f7;

  &:hover {
    color: #2140e8;
    border: 1px solid #2140e8;
    background-color: unset;
  }

  &:disabled {
    color: #9194a5;
    border: 1px solid #9194a5;
  }
`;

export const TextButton = styled(Button)`
  font-family: Nunito, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #1a1b1d;
  text-transform: capitalize;
  padding: 0;

  &:hover {
    background-color: unset;
  }
`;
