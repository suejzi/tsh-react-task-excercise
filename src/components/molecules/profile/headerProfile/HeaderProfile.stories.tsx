import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeaderProfile from "./HeaderProfile";

export default {
  title: "molecules/Profile/Profile Header",
  component: HeaderProfile,
} as ComponentMeta<typeof HeaderProfile>;

const Template: ComponentStory<typeof HeaderProfile> = (args) => (
  <HeaderProfile {...args} />
);
export const ProfileHeader = Template.bind({});
ProfileHeader.args = {
  isLogged: true,
};
