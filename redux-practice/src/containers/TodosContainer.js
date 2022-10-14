import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, insert, remove, toggle } from "../modules/todos";
import Todos from "../Todos";

const TodosContainer = () => {
  const input = useSelector((state) => state.todos.input);
  const list = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();

  return (
    <Todos
      input={input}
      list={list}
      onChangeInput={useCallback((input) => dispatch(changeInput(input)), [])}
      onInsert={useCallback((todo) => dispatch(insert(todo)), [])}
      onRemove={useCallback((id) => dispatch(remove(id)), [])}
      onToggle={useCallback((id) => dispatch(toggle(id)), [])}
    />
  );
};

// const mapStateToProps = (state) => ({
//   input: state.todos.input,
//   list: [...state.todos.list],
// });

// const mapDispatchToProps = (dispatch) => ({
//   changeInput: (input) => dispatch(changeInput(input)),
//   insert: (todo) => dispatch(insert(todo)),
//   remove: (id) => dispatch(remove(id)),
//   toggle: (id) => dispatch(toggle(id)),
// });

export default TodosContainer;

// connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
