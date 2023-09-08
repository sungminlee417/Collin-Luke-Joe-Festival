import { render, screen } from "@testing-library/react";
import Staff from "./Staff";

describe("Staff component", () => {
  test("should render staff members", () => {
    render(<Staff />);

    expect(screen.getByText("Joe Hagen")).toBeInTheDocument();
    expect(screen.getByText("Natalie Pang")).toBeInTheDocument();
    expect(screen.getByText("Collin Holloway")).toBeInTheDocument();
    expect(screen.getByText("Luke Benedict")).toBeInTheDocument();
  });
});
