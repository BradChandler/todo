export default function ShowDone({ handleSetFilter }) {
  return (
    <label
      htmlFor="show-done"
      className="hover-tooltip pos__rel pointer"
      title="Select to see completed tasks"
    >
      <input
        type="checkbox"
        name="Show-completed-tasks"
        id="show-done"
        onChange={handleSetFilter}
      />
    </label>
  );
}
