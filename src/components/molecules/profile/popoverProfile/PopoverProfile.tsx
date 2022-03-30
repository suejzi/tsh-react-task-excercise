import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { TextButton } from "../../../../assets/styles/common/Buttons";
import { ProfileImage } from "../../../atoms/images/profile/ImageProfile.stories";
import { Button, Popover } from "@mui/material";

const PopoverProfileWrapper = styled.div``;

const PopoverButton = styled(Button)`
  border-radius: 50%;
  border: 0;
  box-shadow: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
`;

const PopoverContent = styled(Popover)`
  .MuiPopover-paper {
    padding: 20px 16px;
    background: #ffffff;
    box-shadow: 0 8px 32px rgba(17, 18, 20, 0.158514);
    border-radius: 4px;
    width: 184px;
  }
`;

const PopoverProfile: FC = ({}) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <PopoverProfileWrapper>
      <PopoverButton
        sx={{
          ml: 1,
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent",
          },
        }}
        onClick={handleClick}
        aria-describedby={id}
      >
        <ProfileImage />
      </PopoverButton>
      <PopoverContent
        open={open}
        id={id}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <TextButton>{t("LOGOUT")}</TextButton>
      </PopoverContent>
    </PopoverProfileWrapper>
  );
};

export default PopoverProfile;
