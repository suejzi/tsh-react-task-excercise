import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageProduct from "./ImageProduct";

export default {
  title: "atoms/images/Product Image",
  component: ImageProduct,
} as ComponentMeta<typeof ImageProduct>;

const Template: ComponentStory<typeof ImageProduct> = (args) => (
  <ImageProduct {...args} />
);
export const ProductImage = Template.bind({});
ProductImage.args = {
  name: "Licensed Cotton Soap",
  image: "https://picsum.photos/640/480?random=5623",
};
