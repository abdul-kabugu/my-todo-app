import React from "react";

function TodosItem(props) {
  return (
    <div className="todo-app">
      <input
        type="checkbox"
        className="box"
        checked={props.completed}
        onChange={props.changed}
      />
      <span className="text"> {props.text} </span>
    </div>
  );
}

export default TodosItem;
