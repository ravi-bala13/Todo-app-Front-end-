import React, { useState } from "react";
import TodoForm from "./TodoForm";

import { nanoid } from "nanoid";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    date: "",
    isComplete: false,
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
      date: "",
      isComplete: false,
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={nanoid()}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div>{todo.date}</div>

      <div className="icons">
        <button className="btn" onClick={() => removeTodo(todo.id)}>
          Remove
        </button>

        <button
          className="btn"
          onClick={() =>
            setEdit({ id: todo.id, value: todo.text, date: todo.date })
          }
        >
          Edit
        </button>
      </div>
    </div>
  ));
}

export default Todo;
