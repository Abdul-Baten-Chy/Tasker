import TableContainer from "./TableContainer";

function Table({ tasks, onEdit, onDelete }) {
  return (
    <div class="overflow-auto">
      <TableContainer tasks={tasks} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

export default Table;
