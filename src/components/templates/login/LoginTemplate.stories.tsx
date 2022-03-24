import { ComponentStory, ComponentMeta } from "@storybook/react";
import LoginTemplate from "./LoginTemplate";

export default {
  title: "templates/Login Template",
  component: LoginTemplate,
} as ComponentMeta<typeof LoginTemplate>;

const Template: ComponentStory<typeof LoginTemplate> = (args) => (
  <LoginTemplate />
);
export const Login = Template.bind({});
Login.args = {
  placeholder: "DUPA",
  inputText: "DUPA",
};
