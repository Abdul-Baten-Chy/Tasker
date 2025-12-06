import TableContainer from "./TableContainer";

function Table({ tasks, onEdit }) {
  return (
    <div class="overflow-auto">
      <TableContainer tasks={tasks} onEdit={onEdit} />
    </div>
  );
}

export default Table;
