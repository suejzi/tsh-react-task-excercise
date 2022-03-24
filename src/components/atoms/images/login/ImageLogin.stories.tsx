import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageLogin from "./ImageLogin";

export default {
  title: "atoms/Images/Login Image",
  component: ImageLogin,
} as ComponentMeta<typeof ImageLogin>;

const Template: ComponentStory<typeof ImageLogin> = (args) => (
  <ImageLogin {...args} />
);
export const LoginImage = Template.bind({});
LoginImage.args = {};
