import React from "react";

function Task({text, category, onRemovingTask }) {
  function onRemoving(){
    onRemovingTask(text)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onRemoving}>X</button>
    </div>
  );
}

export default Task;
