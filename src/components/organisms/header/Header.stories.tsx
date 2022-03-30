import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "./Header";

export default {
  title: "organisms/Header/Navigation",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;
export const Navigation = Template.bind({});
Navigation.args = {
  isLogged: true,
  handleInputChange: () => null,
  handleSearchChange: () => null,
};
