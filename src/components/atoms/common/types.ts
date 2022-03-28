export interface ImageType {
  imageType?: "product" | "modal";
  active?: boolean;
}

export interface ImageProps extends ImageType {
  name: string;
  image: string;
}
