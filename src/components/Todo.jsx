import PropTypes from "prop-types";
import { useState } from "react";
import trash from "../assets/trash.svg";
import edit from "../assets/edit.svg";
import { TodoDate } from "./TodoDate";

const Todo = ({ onDelete, title, date, id, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleEdit = (e) => {
    setNewTodoTitle(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    onEdit(id, newTodoTitle);
    setIsEditing(false);
    setNewTodoTitle("");
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="card-body__header ellipsis">
            <TodoDate date={date} />
            {isEditing ? (
              <form className="editing-form" onSubmit={handleSave}>
                <input
                  id={id}
                  type="text"
                  placeholder={title}
                  value={newTodoTitle}
                  onChange={handleEdit}
                />
                <span>
                  <button type="submit">Save</button>
                  <button onClick={() => setIsEditing(false)}>Cancel</button>
                </span>
              </form>
            ) : (
              <b>
                <p>{title}</p>
              </b>
            )}
          </div>
          <div className="card-body__btns">
            <button onClick={() => onDelete(id)}>
              <img src={trash} />
            </button>
            <button
              onClick={() => {
                onEdit(id, title);
                setIsEditing(true);
              }}
            >
              <img src={edit} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Todo.propTypes = {
  date: PropTypes.instanceOf(Date),
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { Todo };
