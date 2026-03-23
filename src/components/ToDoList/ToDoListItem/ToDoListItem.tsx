import styles from "./ToDoListItem.module.scss";

export function ToDoListItem() {
  return (
    <li className={styles["todo-list-item__wrapper"]}>
      <span>Первая задача</span>
      <div className={styles["todo-list-item__buttons"]}>
        <button className={styles["btn-trash"]}></button>
        <button className={styles["btn-check"]}></button>
      </div>
    </li>
  );
}
