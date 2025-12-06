import { useState } from "react";
import AddTask from "./components/AddTask";
import Board from "./components/Board";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleAddTask = (newTask) => {
    if (selectedTask) {
      setTasks(
        tasks.map((task) => {
          if (task.id == newTask.id) {
            return newTask;
          } else {
            return task;
          }
        })
      );
      setSelectedTask(null);
      console.log(selectedTask, "hellow");
    } else {
      setTasks([...tasks, newTask]);
    }

    setIsOpen(false);
  };
  const handleEdite = (task) => {
    setSelectedTask(task);
    setIsOpen(true);
  };
  const onDelete = (id) => {
    const taskAfterDelete = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(taskAfterDelete);
  };
  return (
    <div class="bg-[#191D26] font-[Inter] text-white mx-auto max-width-[1400px] relative">
      {isOpen && <AddTask onSave={handleAddTask} selectedTask={selectedTask} />}
      <Nav />
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <Board
          toggleModal={setIsOpen}
          tasks={tasks}
          onEdit={handleEdite}
          onDelete={onDelete}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
