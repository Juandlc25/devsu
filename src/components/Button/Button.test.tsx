import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { vi } from "vitest";

describe("Button component", () => {
  test("renders with the correct title", () => {
    const title = "Test Button";
    const { getByText } = render(<Button title={title} variant="primary" />);
    const buttonElement = getByText(title);
    expect(buttonElement).toBeInTheDocument();
  });

  test("applies the primary variant class when variant is 'primary'", () => {
    const title = "Test Button";
    const { getByTestId } = render(<Button title={title} variant="primary" />);
    const buttonElement = getByTestId("button");
    expect(buttonElement).toHaveClass("_container_5d566c _primary_5d566c");
  });

  test("applies the secondary variant class when variant is 'secondary'", () => {
    const title = "Test Button";
    const { getByTestId } = render(
      <Button title={title} variant="secondary" />
    );
    const buttonElement = getByTestId("button");
    expect(buttonElement).toHaveClass("_container_5d566c _secondary_5d566c");
  });

  test("fires the onClick event when clicked", () => {
    const onClickMock = vi.fn();
    const { getByText } = render(
      <Button title="Test Button" variant="primary" onClick={onClickMock} />
    );
    const buttonElement = getByText("Test Button");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
