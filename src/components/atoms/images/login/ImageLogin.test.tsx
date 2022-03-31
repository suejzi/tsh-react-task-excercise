import React from "react";
import { render } from "tests";
import ImageLogin from "./ImageLogin";

const Image = <ImageLogin />;

test("Atom ImageLogin - Uses correct src & alt", () => {
  const { getByAltText } = render(Image);
  const image = getByAltText("login image");
  expect(image).toHaveAttribute("src", "login.png");
});
