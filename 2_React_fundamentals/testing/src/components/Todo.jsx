import React from "react";

const Todo = (props) => {
    return (
      <div>
        <h3 className="todo-title">{props.data.title}</h3>
        <p className="todo-done">Done: {props.data.done? "True" : "False"}</p>
        <p>---</p>
      </div>
   )
 }

export default Todo;