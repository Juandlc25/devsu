import { render } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout component", () => {
  const children = <div>Im the children</div>;
  test("renders the layout with the header", () => {
    const { getByAltText } = render(<Layout children={children} />);
    const imageElement = getByAltText("logo");
    expect(imageElement).toBeInTheDocument();
    expect((imageElement as any).src).toBe(
      "https://www.mouseinteractivo.com/wp-content/uploads/mouse-pichincha-0.jpg"
    );
  });

  test("renders the correctly and the children should be there", () => {
    const { getByText } = render(<Layout children={children} />);
    const container = getByText("Im the children");
    expect(container).toBeInTheDocument();
  });
});
