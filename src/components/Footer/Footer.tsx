import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/evvrod">github</a>
      <span>{new Date().getFullYear()}</span>
      <span>evvrod</span>
    </footer>
  );
}
