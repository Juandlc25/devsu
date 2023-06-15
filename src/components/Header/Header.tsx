import styles from "./styles.module.scss";

const Header = () => (
  <div className={styles.container} data-testid="header">
    <img
      src={
        "https://www.mouseinteractivo.com/wp-content/uploads/mouse-pichincha-0.jpg"
      }
      alt="logo"
    />
  </div>
);

export default Header;
