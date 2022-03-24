import React from "react";
import { Link } from "react-router-dom";

import { AppRoute } from "routes/AppRoute.enum";
import { PrimaryHeading } from "../../assets/styles/common/Typography";
import { useTranslation } from "react-i18next";

export const Products = () => {
  const { t } = useTranslation();
  return (
    <>
      <PrimaryHeading>{t("USERNAME")}</PrimaryHeading>
      <Link to={AppRoute.Login}> Login </Link>
    </>
  );
};
