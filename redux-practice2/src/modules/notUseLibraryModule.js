const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

const initialState = {
  loading: {
    GET_POSTS: false,
  },
  error: {
    user: null,
  },
  data: {
    user: null,
  },
};

const getUsers = () => ({ type: GET_USERS });
const getUsersSuccess = (payload) => ({ type: GET_USERS_SUCCESS, payload });
const getUsersFailure = (error) => ({ type: GET_USERS_FAILURE, error });

const notUseLibraryModule = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, loading: { ...state.loading, GET_USERS: true } };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        data: { ...state.data, user: action.payload },
        loading: { ...state.loading, GET_USERS: false },
      };
    case GET_USERS_FAILURE:
      return { ...state, error: { ...state.error, user: action.error } };
    default:
      return state;
  }
};

export { getUsers, getUsersSuccess, getUsersFailure };
export default notUseLibraryModule;
