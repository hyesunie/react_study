import api from "../api";
import createRequestThunk from "../lib/createRequestThunk";

const GET_POSTS = "thunkModule/GET_POSTS";
const GET_POSTS_SUCCESS = "thunkModule/GET_POSTS_SUCCESS";
const GET_POSTS_FAILURE = "thunkMoudle/GET_POSTS_FAILURE";

const getPosts = createRequestThunk(GET_POSTS, api.getPosts);

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const thunkModule = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, loading: true };
    case GET_POSTS_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case GET_POSTS_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export { getPosts };
export default thunkModule;
