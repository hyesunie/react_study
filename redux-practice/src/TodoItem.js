import React from "react";

function TodoItem({ todo, onToggle, onRemove }) {
  const { id, text, checked } = todo;
  console.log("d", text);

  return (
    <li>
      <input type="checkbox" onChange={() => onToggle(id)} checked={checked} />
      <div>{text}</div>
      <button onClick={() => onRemove(id)}>x</button>
    </li>
  );
}

export default React.memo(TodoItem);
