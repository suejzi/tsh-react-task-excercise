import React from "react";
import { render } from "tests";
import InputLogin from "./InputLogin";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key }),
}));

const Input = <InputLogin placeholder="Input placeholder" />;

test("Atom InputLogin has placeholder", () => {
  const { getByPlaceholderText } = render(Input);
  expect(getByPlaceholderText("Input placeholder")).toBeInTheDocument();
});
