import { ComponentStory, ComponentMeta } from "@storybook/react";
import Login from "./Login";

export default {
  title: "organisms/Login Form",
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;
export const LoginForm = Template.bind({});
LoginForm.args = {};
