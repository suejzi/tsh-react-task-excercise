import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputLogin from "./InputLogin";

export default {
  title: "atoms/Input/Login Input",
  component: InputLogin,
} as ComponentMeta<typeof InputLogin>;

const Template: ComponentStory<typeof InputLogin> = (args) => (
  <InputLogin {...args} />
);
export const LoginInput = Template.bind({});
LoginInput.args = {
  placeholder: "ENTER_USERNAME",
};
