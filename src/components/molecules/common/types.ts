import { ImageProps } from "../../atoms/common/types";

export interface SingleProductProps extends ImageProps {
  id: number;
  description: string;
  rating: number;
  promo: boolean;
  active: boolean;
}
