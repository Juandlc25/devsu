import * as React from "react";
import styles from "./styles.module.scss";

const Loader: React.FC = () => (
  <div data-testid="loader" className={styles.loaderContainer}>
    <div className={styles.loader} />
  </div>
);

export default Loader;
