import { MdOutlineStarBorder } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
function TableRow({ task, onEdit, onDelete, onFav }) {
  return (
    <tr class="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>
        <button onClick={() => onFav(task.id)}>
          {task?.isFavorite ? <TiStarFullOutline /> : <MdOutlineStarBorder />}
        </button>
      </td>
      <td>{task.title}</td>
      <td>
        <div>{task.description}</div>
      </td>
      <td>
        <ul class="flex justify-center gap-1.5 ">
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
