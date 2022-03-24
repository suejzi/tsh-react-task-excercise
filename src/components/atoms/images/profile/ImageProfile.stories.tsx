import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageProfile from "./ImageProfile";

export default {
  title: "atoms/Images/Profile Image",
  component: ImageProfile,
} as ComponentMeta<typeof ImageProfile>;

const Template: ComponentStory<typeof ImageProfile> = (args) => (
  <ImageProfile {...args} />
);
export const ProfileImage = Template.bind({});
ProfileImage.args = {};
