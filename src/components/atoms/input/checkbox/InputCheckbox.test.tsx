import React from "react";
import { render } from "tests";
import InputCheckbox from "./InputCheckbox";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key }),
}));

const Input = (
  <InputCheckbox
    filterName="promo"
    handleInputChange={() => null}
    label={"Input label"}
  />
);

test("Atom InputCheckbox has label", () => {
  const { getByLabelText } = render(Input);
  expect(getByLabelText("Input label")).toBeInTheDocument();
});
