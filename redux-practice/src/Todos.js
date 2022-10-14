import { useCallback, useState } from "react";
import TodoItem from "./TodoItem";

function Todos({ input, list, onChangeInput, onToggle, onRemove, onInsert }) {
  const [id, setId] = useState(3);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const newInput = {
        id,
        text: input,
        checked: false,
      };
      onInsert(newInput);
      setId((prevID) => prevID + 1);
    },
    [input]
  );

  return (
    <section>
      <form onSubmit={onSubmit}>
        <input
          type="input"
          placeholder="입력하세요."
          onChange={(e) => {
            onChangeInput(e.target.value);
          }}
          value={input}
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {list.map((e) => (
          <TodoItem
            key={e.id}
            todo={e}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </section>
  );
}

export default Todos;
