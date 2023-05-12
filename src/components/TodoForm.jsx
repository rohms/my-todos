import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import PropTypes from "prop-types";
import "../App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoForm = ({ onAddTodos }) => {
  const date = new Date().toLocaleDateString("en-US");
  const [enteredText, setEnteredText] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [currentTodo, setCurrentTodo] = useState({});

  const addingTodo = (e) => {
    e.preventDefault();
    if (!enteredText) {
      toast.info("Please enter a todo");
      return;
    }
    const todo = {
      date: enteredDate ? new Date(enteredDate) : null,
      title: enteredText,
      done: false,
      id: uuidv4(),
    };
    onAddTodos(todo);
    setEnteredText("");
    setEnteredDate("");

    const localTodos = JSON.parse(localStorage.getItem("todos")) || [];
    localTodos.unshift(todo);
    localStorage.setItem("todos", JSON.stringify(localTodos));
  };

  const textChangeHandler = (e) => {
    if (e.target.value === "") return;
    setEnteredText(e.target.value);
    setCurrentTodo({ ...currentTodo, title: e.target.value });
    // if (isEditing) onAddTodos(currentTodo || {});
    // console.log(currentTodo);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  // const handleEdit = (e) => {
  //   setIsEditing(true);
  // };

  return (
    <div className="add-todo">
      <form onSubmit={addingTodo}>
        <input
          type="text"
          className="todo-input"
          name="text"
          value={enteredText}
          onChange={textChangeHandler}
        />
        <input
          type="date"
          className="todo-input"
          onChange={dateChangeHandler}
          value={enteredDate}
          min={date}
          name="date"
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

TodoForm.propTypes = {
  onAddTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};

export { TodoForm };
