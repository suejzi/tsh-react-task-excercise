import React from "react";
import { render } from "tests";
import SingleProduct from "./SingleProduct";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key }),
}));

const Product = (
  <SingleProduct
    id={1}
    description="Description"
    rating={1}
    promo={true}
    active={true}
    name="Name"
    image="/"
  />
);

test("Molecule SingleProduct has description", () => {
  const { getByText } = render(Product);
  expect(getByText("Description")).toBeInTheDocument();
});

test("Molecule SingleProduct has name", () => {
  const { getByText } = render(Product);
  expect(getByText("Name")).toBeInTheDocument();
});

test("Molecule SingleProduct has img alt & src", () => {
  const { getByAltText } = render(Product);
  const image = getByAltText("Name");
  expect(image).toHaveAttribute("src", "/");
});
