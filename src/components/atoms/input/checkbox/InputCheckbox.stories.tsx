import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputCheckbox from "./InputCheckbox";

export default {
  title: "atoms/Input/Checkbox",
  component: InputCheckbox,
} as ComponentMeta<typeof InputCheckbox>;

const Template: ComponentStory<typeof InputCheckbox> = (args) => (
  <InputCheckbox {...args} />
);
export const Checkbox = Template.bind({});
Checkbox.args = {
  label: "PROMO",
};
