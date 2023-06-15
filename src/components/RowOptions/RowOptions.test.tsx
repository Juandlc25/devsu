import { fireEvent, render } from "@testing-library/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import RowOptions from "./RowOptions";
import { vi } from "vitest";
import { createRef } from "react";

describe("RowOptions component", () => {
  test("RowOptions should call option action when clicked", () => {
    const optionAction = vi.fn();

    const options = [
      {
        Icon: BsThreeDotsVertical,
        label: "Option 1",
        action: optionAction,
      },
      {
        Icon: BsThreeDotsVertical,
        label: "Option 2",
        action: vi.fn(),
      },
    ];

    const dropdownRef = createRef<HTMLDivElement>();

    const { getByText } = render(
      <RowOptions
        show={true}
        setShow={vi.fn()}
        dropdownRef={dropdownRef}
        options={options}
      />
    );

    const optionElement = getByText("Option 1");

    fireEvent.click(optionElement);

    expect(optionAction).toHaveBeenCalledTimes(1);
  });

  test("RowOptions should not render options when show is false", () => {
    const options = [
      { Icon: BsThreeDotsVertical, label: "Option 1", action: vi.fn() },
      { Icon: BsThreeDotsVertical, label: "Option 2", action: vi.fn() },
    ];

    const { queryByText } = render(
      <RowOptions
        show={false}
        setShow={vi.fn()}
        dropdownRef={{} as React.MutableRefObject<HTMLDivElement | null>}
        options={options}
      />
    );

    options.forEach((option) => {
      const optionElement = queryByText(option.label);
      expect(optionElement).not.toBeInTheDocument();
    });
  });

  test("RowOptions click in the icon", () => {
    const options = [
      { Icon: BsThreeDotsVertical, label: "Option 1", action: vi.fn() },
      { Icon: BsThreeDotsVertical, label: "Option 2", action: vi.fn() },
    ];

    const { getByTestId } = render(
      <RowOptions
        show={false}
        setShow={vi.fn()}
        dropdownRef={{} as React.MutableRefObject<HTMLDivElement | null>}
        options={options}
      />
    );

    const icon = getByTestId("icon");
    fireEvent.click(icon);
    expect(icon).toBeTruthy();
  });
});
