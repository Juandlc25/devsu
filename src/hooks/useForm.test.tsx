import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "./useForm";

describe("useForm hook", () => {
  test("returns initial state and functions", () => {
    const initialState = { name: "", email: "" };
    const { result } = renderHook(() => useForm(initialState));

    expect(result.current.form).toEqual(initialState);
    expect(result.current.onChange).toBeInstanceOf(Function);
    expect(result.current.reset).toBeInstanceOf(Function);
  });

  test("updates state when onChange is called", () => {
    const initialState = { name: "", email: "" };
    const { result } = renderHook(() => useForm(initialState));

    act(() => {
      result.current.onChange("Juandlc", "name");
    });

    expect(result.current.form.name).toBe("Juandlc");
  });

  test("resets state to initial state when reset is called", () => {
    const initialState = { name: "", email: "" };
    const { result } = renderHook(() => useForm(initialState));

    act(() => {
      result.current.onChange("Juandlc", "name");
    });

    act(() => {
      result.current.reset();
    });

    expect(result.current.form).toEqual(initialState);
  });
});
