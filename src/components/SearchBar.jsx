import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

const SearchBar = ({ setFilteredTodos, todos }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);
    if (searchQuery === "") {
      setFilteredTodos(todos);
    } else {
      const filtered = todos.filter(
        (todo) =>
          todo.title.toLowerCase().includes(searchQuery) ||
          (todo.date &&
            new Date(todo.date).toLocaleDateString().includes(searchQuery))
      );
      setFilteredTodos(filtered);
    }
  };

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos, setFilteredTodos]);

  return (
    <div className="search">
      <form>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  todos: PropTypes.array.isRequired,
  setFilteredTodos: PropTypes.func,
};

export { SearchBar };
