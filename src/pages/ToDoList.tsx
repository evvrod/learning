import { Footer } from "../components/Footer/Footer";
import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { ToDoList } from "../components/ToDoList/ToDoList";

export function ToDoListPage() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Header />
      <div style={{ flex: "1" }}>
        <Form />
        <ToDoList />
      </div>
      <Footer />
    </div>
  );
}
