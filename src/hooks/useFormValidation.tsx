import { FormInterface } from "../interfaces/form.interface";

interface Props {
  form: FormInterface;
}
const useFormValidation = ({ form }: Props) => {
  return {
    id: {
      errorMsg:
        (form.id.length >= 1 && form.id.length < 4) || form.id.length > 10
          ? "ID no válido"
          : "",
    },
    description: {
      errorMsg:
        (form.description.length >= 1 && form.description.length < 10) ||
        form.description.length > 200
          ? "Requerido, mínimo 10 caracteres y máximo 200"
          : "",
    },
    name: {
      errorMsg:
        (form.name.length >= 1 && form.name.length < 5) ||
        form.name.length > 100
          ? "Requerido, mínimo 5 caracteres y máximo 100"
          : "",
    },
    validationButton:
      form.liberationDate.length === 0 ||
      form.revisionDate.length === 0 ||
      form.name.length === 0 ||
      form.description.length === 0 ||
      form.id.length === 0 ||
      form.logo.length === 0 ||
      (form.name.length >= 1 && form.name.length < 5) ||
      form.name.length > 100 ||
      (form.description.length >= 1 && form.description.length < 10) ||
      form.description.length > 200 ||
      (form.id.length >= 1 && form.id.length < 4) ||
      form.id.length > 10,
  };
};

export default useFormValidation;
