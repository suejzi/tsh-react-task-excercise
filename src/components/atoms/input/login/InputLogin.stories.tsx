import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputLogin from "./InputLogin";

export default {
  title: "atoms/Input/Login",
  component: InputLogin,
} as ComponentMeta<typeof InputLogin>;

const Template: ComponentStory<typeof InputLogin> = (args) => (
  <InputLogin {...args} />
);
export const Login = Template.bind({});
Login.args = {
  placeholder: "ENTER_USERNAME",
};
