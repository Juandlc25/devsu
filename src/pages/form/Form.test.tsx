import { fireEvent, render } from "@testing-library/react";
import Form from "./Form";
import { vi } from "vitest";

vi.mock("react-router-dom", async () => {
  return {
    ...vi.importMock("react-router-dom"),
    useNavigate: vi.fn(),
    useLocation: vi.fn().mockReturnValue({
      pathname: "",
      state: {
        id: "1",
        name: "Product 1",
        description: "Description 1",
        logo: "logo.png",
        liberationDate: "2023-06-15",
        revisionDate: "2023-06-16",
      },
    }),
  };
});

describe("Form view", () => {
  test("should renders correctly", () => {
    const { container } = render(<Form />);
    expect(container).toBeInTheDocument();
  });
  test("should click the send button", () => {
    const { getByTestId } = render(<Form />);
    const button = getByTestId("send");
    fireEvent.click(button);
    expect(button).toBeTruthy();
  });

  test("should click the reset button", () => {
    const { getByTestId } = render(<Form />);
    const button = getByTestId("reset");
    fireEvent.click(button);
    expect(button).toBeTruthy();
  });

  test("should change the inputs", () => {
    const { getByTestId } = render(<Form />);
    const idInput = getByTestId("id-input");
    fireEvent.change(idInput, { target: { value: "1" } });

    const nameInput = getByTestId("name-input");
    fireEvent.change(nameInput, { target: { value: "Juandlc" } });

    const logoInput = getByTestId("logo-input");
    fireEvent.change(logoInput, { target: { value: "logo" } });

    const descriptionInput = getByTestId("description-input");
    fireEvent.change(descriptionInput, { target: { value: "description" } });

    const liberationDateInput = getByTestId("liberationDate-input");
    fireEvent.change(liberationDateInput, {
      target: { value: "02-23-2023" },
    });

    const revisionDateInput = getByTestId("revisionDate-input");
    fireEvent.change(revisionDateInput, {
      target: { value: "02-23-2023" },
    });
  });
});
