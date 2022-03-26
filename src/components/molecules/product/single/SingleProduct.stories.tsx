import { ComponentStory, ComponentMeta } from "@storybook/react";
import SingleProduct from "./SingleProduct";

export default {
  title: "molecules/Product/Single",
  component: SingleProduct,
} as ComponentMeta<typeof SingleProduct>;

const Template: ComponentStory<typeof SingleProduct> = (args) => (
  <SingleProduct {...args} />
);
export const Single = Template.bind({});
Single.args = {
  id: 1,
  name: "Incredible Plastic Pizza",
  description: "Molestiae iure eum voluptas culpa et ut quasi.",
  rating: 2,
  image: "https://picsum.photos/640/480?random=1074",
  promo: true,
  active: true,
};
