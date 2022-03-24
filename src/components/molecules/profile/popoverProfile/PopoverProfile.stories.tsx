import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PopoverProfile from "./PopoverProfile";

export default {
  title: "molecules/Profile/Profile Popover",
  component: PopoverProfile,
} as ComponentMeta<typeof PopoverProfile>;

const Template: ComponentStory<typeof PopoverProfile> = (args) => (
  <PopoverProfile {...args} />
);
export const ProfilePopover = Template.bind({});
