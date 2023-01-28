import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("")

  const handleRemoveTask = (rTask) => {
    setTasks(tasks.filter(task => task.text !== rTask ))
  }
  function handleAddingTask(rTask){
    setTasks([...tasks, rTask])
  }



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <NewTaskForm categories={CATEGORIES} handleAddingTask={handleAddingTask} />
      <TaskList tasks={tasks} handleRemoveTask={handleRemoveTask} selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
