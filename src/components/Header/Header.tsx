import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <a href="/">ToDo</a>
      </div>
    </header>
  );
}
