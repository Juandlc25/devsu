import { ChangeEventHandler } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface Props {
  label: string;
  type: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: string;
  min?: string;
  readOnly?: boolean;
  dataTestId?: string;
}

const InputWithLabel = ({
  label,
  type,
  value,
  onChange,
  min,
  error = "",
  readOnly,
  dataTestId,
}: Props) => (
  <div style={{ opacity: readOnly ? 0.6 : 1 }} className={styles.container}>
    <label>{label}</label>
    <input
      data-testid={dataTestId ?? "input"}
      className={classNames(error && styles.error)}
      onChange={onChange}
      value={value}
      type={type}
      min={min}
      readOnly={readOnly}
    />
    {error && <span className={styles["error-message"]}>{error}</span>}
  </div>
);

export default InputWithLabel;
