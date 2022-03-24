import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageLogin from "./ImageLogin";

export default {
  title: "atoms/Images/Login",
  component: ImageLogin,
} as ComponentMeta<typeof ImageLogin>;

const Template: ComponentStory<typeof ImageLogin> = (args) => (
  <ImageLogin {...args} />
);
export const Login = Template.bind({});
Login.args = {};
