import { useEffect, useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(localTodos);
  }, []);

  const onFormSubmit = (todo) => {
    console.log("my todo", todo);
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.unshift(todo);
      return updatedTodos;
    });
  };

  const deleteHandler = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    localStorage.setItem(
      "todos",
      JSON.stringify(todos.filter((todo) => todo.id !== id))
    );
  };

  const editTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: newText } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1>My Todos</h1>
      <TodoForm onAddTodos={onFormSubmit} onEdit={editTodo} todos={todos} />
      <SearchBar
        todos={todos}
        setTodos={setTodos}
        setFilteredTodos={setFilteredTodos}
      />
      <TodoList
        todos={filteredTodos.length > 0 ? filteredTodos : todos}
        setTodos={setTodos}
        onDelete={deleteHandler}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;
