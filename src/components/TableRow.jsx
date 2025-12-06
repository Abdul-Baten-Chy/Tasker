function TableRow({ task, onEdit, onDelete }) {
  return (
    <tr class="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-star"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="yellow"
          fill="yellow"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
        </svg>
      </td>
      <td>{task.title}</td>
      <td>
        <div>{task.description}</div>
      </td>
      <td>
        <ul class="flex justify-center gap-1.5 flex-wrap">
          {task.tags.map((tag, index) => (
            <li key={index} class="rounded-full bg-[#2D323F] px-3 py-1 text-sm">
              {tag}
            </li>
          ))}
        </ul>
      </td>
      <td class="text-center">{task.priority}</td>
      <td>
        <div class="flex items-center justify-center space-x-3">
          <button class="text-red-500" onClick={() => onDelete(task.id)}>
            Delete
          </button>
          <button class="text-blue-500" onClick={() => onEdit(task)}>
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
