import TableContainer from "./TableContainer";

function Table({ tasks, onEdit, onDelete, onFav }) {
  return (
    <div class="overflow-auto">
      <TableContainer
        tasks={tasks}
        onEdit={onEdit}
        onDelete={onDelete}
        onFav={onFav}
      />
    </div>
  );
}

export default Table;
