import React, { FC } from "react";
import { Rating } from "@mui/material";
import { styled } from "@mui/material/styles";

const RatingStars = styled(Rating)`
  font-size: 17px;
  color: #f9a52b;

  & > span {
    margin-right: 7px;
  }
`;

const ProductRating: FC<{ rating: number }> = ({ rating }) => {
  return <RatingStars readOnly value={rating} />;
};

export default ProductRating;
