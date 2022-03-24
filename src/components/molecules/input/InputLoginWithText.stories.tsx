import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputLoginWithText from "./InputLoginWithText";

export default {
  title: "molecules/Input/Login With Text",
  component: InputLoginWithText,
} as ComponentMeta<typeof InputLoginWithText>;

const Template: ComponentStory<typeof InputLoginWithText> = (args) => (
  <InputLoginWithText {...args} />
);
export const LoginWithText = Template.bind({});
LoginWithText.args = {
  placeholder: "ENTER_USERNAME",
  inputLabel: "USERNAME",
};
