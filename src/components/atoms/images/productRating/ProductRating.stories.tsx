import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProductRating from "./ProductRating";

export default {
  title: "atoms/Images/Star Rating",
  component: ProductRating,
} as ComponentMeta<typeof ProductRating>;

const Template: ComponentStory<typeof ProductRating> = (args) => (
  <ProductRating {...args} />
);
export const StarRating = Template.bind({});
StarRating.args = {
  rating: 4,
};
