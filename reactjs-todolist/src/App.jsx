import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {

  const [todoItem, setTodoItem] = useState("");
  const [todos, setTodos] = useState([]);

  const persistData = (newTodoList) => {
    localStorage.setItem("todos", JSON.stringify({ todos: newTodoList }));
  }

  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((item, itemIndex) => index !== itemIndex);
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  const handleEditTodo = (index) => {
    setTodoItem(todos[index]);
    handleDeleteTodo(index);
    persistData(todos);
  }

  useEffect(() => {
    if (!localStorage) {
      console.log("No Local Storage");
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      console.log("No Local Todos found.");
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);

  }, []);

  return (
    <>

      <TodoInput todoItem={todoItem} setTodoItem={setTodoItem} handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />

    </>
  )
}

export default App;
