import React from "react";
import { render } from "tests";
import SingleModalContent from "./index";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key }),
}));

const Modal = (
  <SingleModalContent
    description="Description"
    handleClose={() => null}
    name="Name"
    image="/"
  />
);

test("Molecule SingleModalContent has description", () => {
  const { getByText } = render(Modal);
  expect(getByText("Description")).toBeInTheDocument();
});

test("Molecule SingleModalContent has name", () => {
  const { getByText } = render(Modal);
  expect(getByText("Name")).toBeInTheDocument();
});

test("Molecule SingleProduct has img alt & src", () => {
  const { getByAltText } = render(Modal);
  const image = getByAltText("Name");
  expect(image).toHaveAttribute("src", "/");
});
