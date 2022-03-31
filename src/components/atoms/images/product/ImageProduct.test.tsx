import React from "react";
import { render } from "tests";
import ImageProduct from "./ImageProduct";

const Image = <ImageProduct name="Name" image="" />;

test("Atom ImageProduct has alt", () => {
  const { getByAltText } = render(Image);
  expect(getByAltText("Name")).toBeInTheDocument();
});
