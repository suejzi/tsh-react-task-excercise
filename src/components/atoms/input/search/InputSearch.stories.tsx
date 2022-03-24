import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputSearch from "./InputSearch";

export default {
  title: "atoms/Input/Search Input",
  component: InputSearch,
} as ComponentMeta<typeof InputSearch>;

const Template: ComponentStory<typeof InputSearch> = (args) => (
  <InputSearch {...args} />
);
export const SearchInput = Template.bind({});
SearchInput.args = {
  placeholder: "SEARCH",
};
