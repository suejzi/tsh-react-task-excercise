import React from "react";
import { render } from "tests";
import InputSearch from "./InputSearch";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key }),
}));

const Input = (
  <InputSearch
    placeholder="Search placeholder"
    handleSearchChange={() => null}
  />
);

test("Atom InputSearch has placeholder", () => {
  const { getByPlaceholderText } = render(Input);
  expect(getByPlaceholderText("Search placeholder")).toBeInTheDocument();
});
