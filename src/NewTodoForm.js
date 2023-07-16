import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const initialState = { todo: "" };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Todo: </label>
      <input
        type="text"
        name="todo"
        id="todo"
        value={formData.todo}
        onChange={handleChange}
        placeholder="Todo"
      />
      <button>Submit Todo</button>
    </form>
  );
};

export default NewTodoForm;
