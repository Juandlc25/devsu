import { fireEvent, render } from "@testing-library/react";
import TableRow from "./TableRow";
import { vi } from "vitest";

vi.mock("react-router-dom", async () => {
  return {
    ...vi.importMock("react-router-dom"),
    useNavigate: vi.fn(),
    useLocation: () => ({
      search: "",
      pathname: "/",
    }),
  };
});

describe("TableRow component", () => {
  test("renders the table row with the correct data", () => {
    const data = ["Item 1", "Item 2", "Item 3"];
    const { getByText } = render(<TableRow data={data} id={"1"} />);

    data.forEach((item) => {
      const itemElement = getByText(item);
      expect(itemElement).toBeInTheDocument();
    });
  });
  test("renders the table row with an image", () => {
    const data = ["Item 1", "http://example.com"];
    const { getByAltText } = render(<TableRow data={data} id={"1"} />);

    const img = getByAltText("logo");
    expect(img).toBeInTheDocument();
  });
  test("renders the table row with an icon and click on his actions", () => {
    const id = "1";

    const data = ["Item 1", "action"];
    const { getByTestId, getByText } = render(<TableRow data={data} id={id} />);

    const icon = getByTestId("icon");
    fireEvent.click(icon);
    const editButton = getByText("Editar");
    const deleteButton = getByText("Eliminar");
    expect(icon).toBeInTheDocument();
    fireEvent.click(deleteButton);
    fireEvent.click(editButton);

    expect(icon).toBeTruthy();
    expect(editButton).toBeTruthy();
    expect(deleteButton).toBeTruthy();
  });
});
