import React from "react";
import Task from "./Task";

function TaskList({taskList, onDeleteTask, catgry}) {
  return (
    <>
    <div className="tasks">
      {taskList.map((task) => ( catgry === 'All' || task.category === catgry ?
    <Task key={task.text} text={task.text} category={task.category} onDeleteTask={onDeleteTask}/>:null
  ))}
    </div>
    </>
  );
}


export default TaskList;
