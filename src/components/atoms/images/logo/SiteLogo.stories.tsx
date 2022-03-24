import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SiteLogo from "./SiteLogo";

export default {
  title: "atoms/Images/Logo",
  component: SiteLogo,
} as ComponentMeta<typeof SiteLogo>;

const Template: ComponentStory<typeof SiteLogo> = (args) => (
  <SiteLogo {...args} />
);
export const Logo = Template.bind({});
