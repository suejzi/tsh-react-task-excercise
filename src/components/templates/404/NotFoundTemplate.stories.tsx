import { ComponentStory, ComponentMeta } from "@storybook/react";
import NotFoundTemplate from "./NotFoundTemplate";

export default {
  title: "templates/Not Found",
  component: NotFoundTemplate,
} as ComponentMeta<typeof NotFoundTemplate>;

const Template: ComponentStory<typeof NotFoundTemplate> = (args) => (
  <NotFoundTemplate {...args} />
);
export const NotFound = Template.bind({});
NotFound.args = {};
