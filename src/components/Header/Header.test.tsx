import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  test("renders the header with the correct image", () => {
    const { getByAltText } = render(<Header />);
    const imageElement = getByAltText("logo");
    expect(imageElement).toBeInTheDocument();
    expect((imageElement as any).src).toBe(
      "https://www.mouseinteractivo.com/wp-content/uploads/mouse-pichincha-0.jpg"
    );
  });

  test("renders the header with the correct container class", () => {
    const { getByTestId } = render(<Header />);
    const headerContainer = getByTestId("header");
    expect(headerContainer).toBeInTheDocument();
  });
});
