import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { notDeepStrictEqual } from "assert";

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

test("initial conditions", () => {
  render(<App />);
  // check btn start enabled
  const colorBtn = screen.getByRole("button", { name: "Change to blue" });
  expect(colorBtn).toBeEnabled();
  // check checkbox start out uncheck

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("btn should be disable when checkbox is checked & enabled when checkbox is unchecked", () => {
  render(<App />);
  const colorBtn = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(colorBtn).toBeDisabled();

  // uncheck checkbox
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(colorBtn).toBeEnabled();
});

test("Check the btn is gray when disable", () => {
  render(<App />);
  const colorBtn = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(colorBtn).toBeDisabled();
  expect(colorBtn).toHaveStyle({ backgroundColor: "gray" });
});

test("Change color, click disable and check for gray", () => {
  render(<App />);
  const colorBtn = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  fireEvent.click(colorBtn);
  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(colorBtn).toBeDisabled();
  expect(colorBtn).toHaveStyle({ backgroundColor: "gray" });
});
