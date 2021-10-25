import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has the correct intial color", () => {
  //  first thing render the repesctive file
  render(<App />);
  // find an element with a role of button and text of "change to blue"
  const colorBtn = screen.getByRole("button", { name: "Change to blue" });
  // expect the background color to be red
  expect(colorBtn).toHaveStyle({ backgroundColor: "red" });

  // click the btn
  fireEvent.click(colorBtn);
  // expect to have a background color = blue
  expect(colorBtn).toHaveStyle({ backgroundColor: "blue" });

  // expect btn text to be "Change to red"
  expect(colorBtn.textContent).toBe("Change to red");
});
