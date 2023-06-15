import styles from "./styles.module.scss";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import Button from "../../components/Button/Button";
import { useForm } from "../../hooks/useForm";
import { incrementYear } from "../../utils/incrementYear";
import { useEffect } from "react";
import useFormValidation from "../../hooks/useFormValidation";
import Layout from "../../components/Layout";
import { useLocation } from "react-router-dom";
import formatDate from "../../utils/formatDate";
import useFormActions from "../../hooks/useFormActions";
import { FormInterface } from "../../interfaces/form.interface";

const Form = () => {
  const { state }: { state: FormInterface } = useLocation();
  const { form, onChange, reset } = useForm({
    id: state?.id ?? "",
    description: state?.description ?? "",
    name: state?.name ?? "",
    logo: state?.logo ?? "",
    liberationDate: state?.liberationDate
      ? formatDate(state.liberationDate)
      : "",
    revisionDate: state?.revisionDate ? formatDate(state.revisionDate) : "",
  });

  const { validationButton, id, description, name } = useFormValidation({
    form,
  });
  const { isLoading, saveProduct, editProduct } = useFormActions({
    state,
    form,
  });

  useEffect(() => {
    onChange(incrementYear(form.liberationDate), "revisionDate");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.liberationDate]);
  return (
    <Layout>
      <div className={styles.content}>
        <div className={styles.form}>
          <div className={styles.title}>
            <span>Formulario de registro</span>
          </div>
          <div className={styles.formContent}>
            <section>
              <InputWithLabel
                error={id.errorMsg}
                value={form.id}
                onChange={(e) => onChange(e.target.value, "id")}
                label="ID"
                type="text"
                readOnly={!!state?.id}
                dataTestId="id-input"
              />
              <InputWithLabel
                error={description.errorMsg}
                value={form.description}
                onChange={(e) => onChange(e.target.value, "description")}
                label="Descripción"
                type="text"
                dataTestId="description-input"
              />
              <InputWithLabel
                value={form.liberationDate}
                onChange={(e) => onChange(e.target.value, "liberationDate")}
                label="Fecha de liberacion"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                dataTestId="liberationDate-input"
              />
            </section>
            <section>
              <InputWithLabel
                error={name.errorMsg}
                value={form.name}
                onChange={(e) => onChange(e.target.value, "name")}
                label="Nombre"
                type="text"
                dataTestId="name-input"
              />
              <InputWithLabel
                value={form.logo}
                onChange={(e) => onChange(e.target.value, "logo")}
                label="Logo"
                type="text"
                dataTestId="logo-input"
              />
              <InputWithLabel
                value={form.revisionDate}
                onChange={(e) => onChange(e.target.value, "revisionDate")}
                label="Fecha de revisión"
                dataTestId="revisionDate-input"
                type="date"
                readOnly
              />
            </section>
          </div>
          <div className={styles.btnContainer}>
            <Button
              dataTestId="reset"
              onClick={reset}
              title="Reiniciar"
              variant="secondary"
            />
            <Button
              onClick={state?.id ? editProduct : saveProduct}
              disabled={validationButton || isLoading}
              title="Enviar"
              variant="primary"
              dataTestId="send"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Form;
