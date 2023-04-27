import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About component", () => {
  test("should render staff members", () => {
    render(<About />);

    expect(screen.getByText("Natalie Pang")).toBeInTheDocument();
    expect(screen.getByText("Collin Holloway")).toBeInTheDocument();
    expect(screen.getByText("Luke Benedict")).toBeInTheDocument();
  });
});
