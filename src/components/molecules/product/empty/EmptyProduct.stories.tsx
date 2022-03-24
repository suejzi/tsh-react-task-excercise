import { ComponentStory, ComponentMeta } from "@storybook/react";
import EmptyProduct from "./EmptyProduct";

export default {
  title: "molecules/Product/Empty",
  component: EmptyProduct,
} as ComponentMeta<typeof EmptyProduct>;

const Template: ComponentStory<typeof EmptyProduct> = (args) => (
  <EmptyProduct {...args} />
);
export const Empty = Template.bind({});
Empty.args = {};
