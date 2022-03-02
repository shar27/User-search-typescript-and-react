import React from "react";
import {
  
  render,
  screen,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Users from './components/Users'
import FetchList from './components/Users'
import "@testing-library/jest-dom";




it("renders a loading text", () => {
  render(<Users />);
  const Loading = screen.getByText("Loading...");
  expect(Loading).toBeInTheDocument();
});

