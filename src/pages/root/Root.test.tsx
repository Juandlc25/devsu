import { render, fireEvent } from "@testing-library/react";
import Root from "./Root";
import { vi } from "vitest";

vi.mock("react-router-dom", async () => {
  return {
    ...vi.importMock("react-router-dom"),
    useNavigate: vi.fn(),
  };
});

describe("Root view", () => {
  test("should renders correctly", () => {
    const { container } = render(<Root />);
    expect(container).toBeInTheDocument();
  });

  test("Root component should render correctly", () => {
    vi.mock("../../hooks/useGetProducts", () => {
      return {
        default: vi.fn(() => ({
          products: [
            {
              id: "1",
              name: "Product 1",
              description: "Description 1",
              logo: "logo.png",
              liberationDate: "2023-06-15",
              revisionDate: "2023-06-16",
            },
          ], // Provide an empty array or mock products here
          filteredproducts: [
            {
              id: "1",
              name: "Product 1",
              description: "Description 1",
              logo: "logo.png",
              liberationDate: "2023-06-15",
              revisionDate: "2023-06-16",
            },
          ], // Provide an empty array or mock filtered products here
          setFilteredProducts: vi.fn(),
          isLoading: false,
        })),
      };
    });

    const { queryByText, getByText, getByPlaceholderText, getByTestId } =
      render(<Root />);

    expect(queryByText("Loader")).toBeNull();

    expect(getByText("Agregar")).toBeInTheDocument();
    expect(getByText("Logo")).toBeInTheDocument();
    expect(getByText("Nombre del producto")).toBeInTheDocument();
    expect(getByText("Descripción")).toBeInTheDocument();
    expect(getByText("Fecha de liberación")).toBeInTheDocument();
    expect(getByText("Fecha de reeconstrucción")).toBeInTheDocument();

    const searchInput = getByPlaceholderText("Search...");
    const selectInput = getByTestId("select-footer");
    fireEvent.change(searchInput, { target: { value: "Product" } });
    fireEvent.change(selectInput, { target: { value: "10" } });
  });
});
