import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(value);
    setValue("");
  }

  return (
    <form 
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",       
        marginBottom: "16px" 
      }}
    >
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add new todo..."
        style={{
          flex: "1",
          padding: "6px 8px",
          borderRadius: "4px",
          border: "1px solid #ccc"
        }}
      />
      <button
        type="submit"
        style={{
          padding: "6px 12px",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#a21aabff",
          color: "white",
          cursor: "pointer"
        }}
      >
        Add Todo
      </button>
    </form>
  );
}
