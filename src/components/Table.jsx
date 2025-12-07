import TableRow from "./TableRow.jsx";
function Table({ tasks, onEdit, onDelete, onFav }) {
  return (
    <div class="overflow-auto">
      <table class="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th class="p-4 pb-8 text-sm font-semibold capitalize w-12"></th>
            <th class="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
              {" "}
              Title{" "}
            </th>
            <th class="p-4 pb-8 text-sm font-semibold capitalize w-full">
              {" "}
              Description{" "}
            </th>
            <th class="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
              {" "}
              Tags{" "}
            </th>
            <th class="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              {" "}
              Priority{" "}
            </th>
            <th class="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              {" "}
              Options{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TableRow
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onFav={onFav}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
