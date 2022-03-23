import React from "react";
import { Link } from "react-router-dom";

import { AppRoute } from "routes/AppRoute.enum";
import { PrimaryHeading } from "../../assets/styles/common/Typography";

export const Products = () => {
  return (
    <>
      <PrimaryHeading>Products page</PrimaryHeading>
      <Link to={AppRoute.Login}> Login </Link>
    </>
  );
};
