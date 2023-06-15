import { renderHook } from "@testing-library/react-hooks";
import { vi } from "vitest";
import { FormInterface } from "../interfaces/form.interface";
import useFormActions from "./useFormActions";
import { act } from "react-dom/test-utils";

vi.mock("react-router-dom", async () => {
  return {
    ...vi.importMock("react-router-dom"),
    useNavigate: vi.fn(),
  };
});

describe("useFormActions hook", () => {
  const form: FormInterface = {
    id: "1",
    name: "Product 1",
    description: "Description 1",
    logo: "logo.png",
    liberationDate: "2023-06-15",
    revisionDate: "2023-06-16",
  };
  test("useFormActions should save product", async () => {
    const { result } = renderHook(() =>
      useFormActions({ state: undefined, form })
    );

    await act(async () => {
      result.current.saveProduct();
    });

    expect(result.current.isLoading).toBe(true);
  });

  test("useFormActions should edit product", async () => {
    const form: FormInterface = {
      id: "1",
      name: "Product 1",
      description: "Description 1",
      logo: "logo.png",
      liberationDate: "2023-06-15",
      revisionDate: "2023-06-16",
    };

    const { result } = renderHook(() => useFormActions({ state: form, form }));

    await act(async () => {
      result.current.editProduct();
    });

    expect(result.current.isLoading).toBe(true);
  });
});
