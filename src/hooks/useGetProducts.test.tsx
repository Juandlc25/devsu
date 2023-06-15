import { renderHook } from "@testing-library/react-hooks";
import useGetProducts from "./useGetProducts";
import database from "../api/database";
import { vi } from "vitest";

vi.spyOn(database, "get").mockResolvedValue({ data: [] });

describe("use get products hook", () => {
  test("useGetProducts should fetch products and update state correctly", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGetProducts());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.products).toEqual([]);
    expect(result.current.filteredproducts).toEqual([]);

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.products).toEqual([]);
    expect(result.current.filteredproducts).toEqual([]);
  });
});
