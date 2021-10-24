import { render } from "@testing-library/react";
import React from "react";

import App from "./App";

test("renders coming soon message", () => {
  const { getByText } = render(<App />);
  const messageElement = getByText(/coming soon/i);
  expect(messageElement).toBeInTheDocument();
});
