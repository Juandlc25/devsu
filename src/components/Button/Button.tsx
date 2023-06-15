import classNames from "classnames";
import styles from "./styles.module.scss";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant: "primary" | "secondary";
  dataTestId?: string;
}

const Button = ({ title, variant, dataTestId, ...props }: Props) => {
  return (
    <button
      {...props}
      data-testid={dataTestId ?? "button"}
      className={classNames(
        styles.container,
        variant === "primary" && styles.primary,
        variant === "secondary" && styles.secondary
      )}
    >
      <span>{title}</span>
    </button>
  );
};

export default Button;
