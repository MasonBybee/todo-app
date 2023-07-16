import React from "react";

const Todo = ({ removeTodo, todo, id }) => {
  return (
    <li>
      {todo}
      <button onClick={() => removeTodo(id)}>X</button>
    </li>
  );
};

export default Todo;
