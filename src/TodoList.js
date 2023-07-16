import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";

const TodoList = () => {
  const initialState = [{ todo: "Get Milk", id: uuid() }];
  const [todos, setTodos] = useState(initialState);
  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, { ...newTodo, id: uuid() }]);
  };
  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      <ul>
        {todos.map(({ todo, id }) => (
          <Todo removeTodo={removeTodo} todo={todo} id={id} key={id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
