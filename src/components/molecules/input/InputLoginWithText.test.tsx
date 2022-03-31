import React from "react";
import { render } from "tests";
import InputLoginWithText from "./InputLoginWithText";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key }),
}));

const Input = (
  <InputLoginWithText
    inputLabel="Input label"
    placeholder="Input placeholder"
  />
);

test("Atom InputCheckbox has label", () => {
  const { getByText, getByPlaceholderText } = render(Input);

  expect(getByText("Input label")).toBeInTheDocument();
  expect(getByPlaceholderText("Input placeholder")).toBeInTheDocument();
});
