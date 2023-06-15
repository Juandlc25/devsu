import { render, fireEvent } from "@testing-library/react";
import InputWithLabel from "./InputWithLabel";
import { vi } from "vitest";

describe("InputWithLabel component", () => {
  test("renders the input with the correct label", () => {
    const label = "Test Label";
    const { getByText } = render(<InputWithLabel label={label} type="text" />);
    const inputElement = getByText(label);
    expect(inputElement).toBeInTheDocument();
  });

  test("renders the input with the correct value", () => {
    const { getByDisplayValue } = render(
      <InputWithLabel label="Test Label" type="text" value="Test Value" />
    );
    const inputElement = getByDisplayValue("Test Value");
    expect(inputElement).toBeInTheDocument();
  });

  test("triggers the onChange event when the input value changes", () => {
    const onChangeMock = vi.fn();
    const { getByTestId } = render(
      <InputWithLabel label="Test Label" type="text" onChange={onChangeMock} />
    );
    const inputElement = getByTestId("input");
    fireEvent.change(inputElement, { target: { value: "New Value" } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect((inputElement as any).value).toBe("New Value");
  });

  test("renders the error message when the error prop is provided", () => {
    const error = "Invalid input";
    const { getByText } = render(
      <InputWithLabel label="Test Label" type="text" error={error} />
    );
    const errorMessageElement = getByText(error);
    expect(errorMessageElement).toBeInTheDocument();
  });

  test("applies the error class to the input when the error prop is provided", () => {
    const { getByTestId } = render(
      <InputWithLabel label="Test Label" type="text" error="Invalid input" />
    );
    const inputElement = getByTestId("input");
    expect(inputElement).toHaveClass("_error_4db550");
  });
});
