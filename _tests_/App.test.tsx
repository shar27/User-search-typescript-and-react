import React from "react";
import { render, screen } from "@testing-library/react";
import Header  from "../src/App";

test("Header contains correct text", () => {
  render(<Header />);
  const text = screen.getByText("hello");
  expect(text).toBeInTheDocument();
});