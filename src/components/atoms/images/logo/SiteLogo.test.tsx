import React from "react";
import { render } from "tests";
import SiteLogo from "./SiteLogo";

const Image = <SiteLogo />;

test("Atom SiteLogo uses correct src & alt", () => {
  const { getByAltText } = render(Image);
  const image = getByAltText("Site logo");
  expect(image).toHaveAttribute("src", "logo.svg");
});
