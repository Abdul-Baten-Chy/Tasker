import { useState } from "react";

function AddTask({ onSave, selectedTask }) {
  const [task, setTask] = useState(
    selectedTask || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorite: false,
    }
  );
  const isEdit = Object.is(selectedTask, null);
  const handleChange = (e) => {
    if (e.target.name === "tags") {
      const tagsArray = e.target.value.split(",").map((tag) => tag.trim());
      setTask({ ...task, tags: tagsArray });
      return;
    }
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task);
  };
  return (
    <>
      <div className="bg-black/80 h-full w-full z-10 absolute top-0 left-0"></div>
      <form
        onSubmit={handleSubmit}
        class="mx-auto my-10 w-full max-w-[780px]  rounded-xl border  border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 "
      >
        <h2 class="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isEdit ? "Add New Task" : "Edit task"}
        </h2>

        <div class="space-y-9 text-white lg:space-y-10">
          <div class="space-y-2 lg:space-y-3">
            <label for="title">Title</label>
            <input
              class="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>

          <div class="space-y-2 lg:space-y-3">
            <label for="description">Description</label>
            <textarea
              class="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              value={task.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div class="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div class="space-y-2 lg:space-y-3">
              <label for="tags">Tags</label>
              <input
                class="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                value={task.tags}
                onChange={handleChange}
                required
              />
            </div>

            <div class="space-y-2 lg:space-y-3">
              <label for="priority">Priority</label>
              <select
                class="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>

        <div class="mt-16 flex justify-center lg:mt-20">
          <button class="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80">
            {isEdit ? "Create new Task" : "Save Edit"}
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTask;
