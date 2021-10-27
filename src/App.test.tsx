import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpace } from './App';

test('button has the correct intial color', () => {
  //  first thing render the repesctive file
  render(<App />);
  // find an element with a role of button and text of "change to MidnightBlue"
  const colorBtn = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  // expect the background color to be MediumVioletRed
  expect(colorBtn).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  // click the btn
  fireEvent.click(colorBtn);
  // expect to have a background color = MidnightBlue
  expect(colorBtn).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // expect btn text to be "Change to MediumVioletRed"
  expect(colorBtn.textContent).toBe('Change to MediumVioletRed');
});

test('initial conditions', () => {
  render(<App />);
  // check btn start enabled
  const colorBtn = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  expect(colorBtn).toBeEnabled();
  // check checkbox start out uncheck

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('btn should be disable when checkbox is checked & enabled when checkbox is unchecked', () => {
  render(<App />);
  const colorBtn = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(colorBtn).toBeDisabled();

  // uncheck checkbox
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(colorBtn).toBeEnabled();
});

test('Check the btn is gray when disable', () => {
  render(<App />);
  const colorBtn = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(colorBtn).toBeDisabled();
  expect(colorBtn).toHaveStyle({ backgroundColor: 'gray' });
});

test('Change color, click disable and check for gray', () => {
  render(<App />);
  const colorBtn = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  fireEvent.click(colorBtn);
  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(colorBtn).toBeDisabled();
  expect(colorBtn).toHaveStyle({ backgroundColor: 'gray' });
});

describe('space before camel-case capital letter', () => {
  test('works for no inner capital letter', () => {
    expect(replaceCamelWithSpace('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpace('MidnightBlue')).toBe('Midnight Blue');
  });
  test('works for multiple inner capital letter', () => {
    expect(replaceCamelWithSpace('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
