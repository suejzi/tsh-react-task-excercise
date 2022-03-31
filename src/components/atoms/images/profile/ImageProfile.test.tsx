import React from "react";
import { render } from "tests";
import ImageProfile from "./ImageProfile";

const Image = <ImageProfile />;

test("Atom ImageProfile uses correct src & alt", () => {
  const { getByAltText } = render(Image);
  const image = getByAltText("Profile Image");
  expect(image).toHaveAttribute("src", "avatar.png");
});
