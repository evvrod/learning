import styles from "./Form.module.scss";

export function Form() {
  return (
    <div className={styles["form-wrapper"]}>
      <form action="#">
        <label>
          <input type="text" />
          <button></button>
        </label>
      </form>
    </div>
  );
}
