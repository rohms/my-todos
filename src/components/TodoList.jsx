import { Todo } from "./Todo";
import PropTypes from "prop-types";

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <>
      {todos.map((todo) => (
        <ul key={todo.id} className="cards-list">
          <li>
            <Todo
              key={todo.id}
              title={todo.title}
              date={todo.date}
              id={todo.id}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          </li>
        </ul>
      ))}
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  filteredTodos: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export { TodoList };
