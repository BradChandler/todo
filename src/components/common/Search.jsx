function Search({ inName, placeholder, handleSetFilter }) {
  return (
    <label htmlFor="todo-search">
      <input
        type="text"
        name={inName}
        id="todo-search"
        placeholder={placeholder}
        onChange={handleSetFilter}
      />
    </label>
  );
}

Search.defaultProps = {
  inName: "Search-todos",
  placeholder: "Search for todo by name",
};

export default Search;
