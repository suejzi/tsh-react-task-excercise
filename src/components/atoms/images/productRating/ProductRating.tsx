import React, { FC } from "react";
import { Rating } from "@mui/material";

const ProductRating: FC<{ rating: number }> = ({ rating }) => {
  return <Rating readOnly value={rating} />;
};

export default ProductRating;
