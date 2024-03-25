import React, {useState, useEffect} from "react";
import Todo  from "./Todo";

const TodoList = (props) => {
    const [todos, setTodos] = useState([]);
  
    useEffect(() => {
    const URL = `https://makers-todo-list-server.onrender.com/tagged/${props.tag}`;
    fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setTodos(data.todos);}
                );
    }, [props.tag]);

    return (
      <>
      <div className="componentHolder">
        <h2 className="componentTitle">Todo component</h2>
        <h2>Todos List:</h2>
            <div className="todo-list">
            {todos.map((todoData) => (
            <Todo data={todoData} />
          ))}
         </div>
        </div>
      </>
    );
  };

export default TodoList;