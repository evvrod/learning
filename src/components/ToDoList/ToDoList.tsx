import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import styles from "./ToDoList.module.scss";

export function ToDoList() {
  return (
    <div className={styles["todo-container"]}>
      <ul className={`${styles["todo-list"]} ${styles.failed}`}>
        <ToDoListItem />
      </ul>
      <ul className={`${styles["todo-list"]} ${styles.completed}`}>
        <ToDoListItem />
      </ul>
    </div>
  );
}
