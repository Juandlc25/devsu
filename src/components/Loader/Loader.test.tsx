import { render } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader component", () => {
  test("renders the correctly", () => {
    const { container } = render(<Loader />);
    expect(container).toBeInTheDocument();
  });
});
