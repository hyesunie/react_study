const CHANGE_INPUT = "todo/CHANGE_INPUT";
const INSERT = "todo/INSERT";
const REMOVE = "todo/REMOVE";
const TOGGLE = "todo/TOGGLE";

export const changeInput = (input) => ({ type: CHANGE_INPUT, input });
export const insert = (todo) => ({ type: INSERT, todo });
export const remove = (id) => ({ type: REMOVE, id });
export const toggle = (id) => ({ type: TOGGLE, id });

const initState = {
  input: "",
  list: [{ id: 1, text: "hello", checked: false }],
};

function todos(state = initState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return { ...state, input: action.input };
    case INSERT:
      return { ...state, list: [...state.list, action.todo] };
    case REMOVE:
      return {
        ...state,
        list: state.list.filter((todo) => {
          if (!todo) return todo;
          return todo.id !== Number(action.id);
        }),
      };
    case TOGGLE: {
      return {
        ...state,
        list: state.list.map((e) => {
          return e.id === Number(action.id) ? { ...e, checked: !e.checked } : e;
        }),
      };
    }
    default:
      return state;
  }
}

export default todos;
