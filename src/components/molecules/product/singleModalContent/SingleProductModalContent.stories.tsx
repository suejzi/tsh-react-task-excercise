import { ComponentStory, ComponentMeta } from "@storybook/react";
import SingleProductModalContent from "./SingleProductModalContent";

export default {
  title: "molecules/Product/Modal",
  component: SingleProductModalContent,
} as ComponentMeta<typeof SingleProductModalContent>;

const Template: ComponentStory<typeof SingleProductModalContent> = (args) => (
  <SingleProductModalContent {...args} />
);
export const Modal = Template.bind({});
Modal.args = {
  name: "Incredible Plastic Pizza",
  description: "Molestiae iure eum voluptas culpa et ut quasi.",
  image: "https://picsum.photos/640/480?random=1074",
  handleClose: () => console.log(test),
};
