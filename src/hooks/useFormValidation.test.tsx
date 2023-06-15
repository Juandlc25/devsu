import { renderHook } from "@testing-library/react-hooks";
import useFormValidation from "./useFormValidation";

describe("useFormValidation hook", () => {
  const form = {
    id: "1234",
    description: "Lorem ipsum",
    name: "Juandlc",
    logo: "logo.png",
    liberationDate: "2023-06-07",
    revisionDate: "2023-06-08",
  };
  test("returns validation object with no error messages", () => {
    const { result } = renderHook(() => useFormValidation({ form }));

    expect(result.current.id.errorMsg).toBe("");
    expect(result.current.description.errorMsg).toBe("");
    expect(result.current.name.errorMsg).toBe("");
    expect(result.current.validationButton).toBe(false);
  });

  test("returns validation object with error messages in id field", () => {
    const newForm = {
      ...form,
      id: "12",
    };

    const { result } = renderHook(() => useFormValidation({ form: newForm }));

    expect(result.current.id.errorMsg).toBe("ID no válido");
    expect(result.current.description.errorMsg).toBe("");
    expect(result.current.name.errorMsg).toBe("");
    expect(result.current.validationButton).toBe(true);
  });

  test("returns validation object with error messages in name field", () => {
    const newForm = {
      ...form,
      name: "Juan",
    };

    const { result } = renderHook(() => useFormValidation({ form: newForm }));

    expect(result.current.id.errorMsg).toBe("");
    expect(result.current.description.errorMsg).toBe("");
    expect(result.current.name.errorMsg).toBe(
      "Requerido, mínimo 5 caracteres y máximo 100"
    );
    expect(result.current.validationButton).toBe(true);
  });

  test("returns validation object with error messages in description field", () => {
    const newForm = {
      ...form,
      description: "desc",
    };

    const { result } = renderHook(() => useFormValidation({ form: newForm }));

    expect(result.current.id.errorMsg).toBe("");
    expect(result.current.description.errorMsg).toBe(
      "Requerido, mínimo 10 caracteres y máximo 200"
    );
    expect(result.current.name.errorMsg).toBe("");
    expect(result.current.validationButton).toBe(true);
  });
});
