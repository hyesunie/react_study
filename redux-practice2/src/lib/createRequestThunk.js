function createRequestThunk(type, request) {
  const START = type;
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILRUE`;

  return () => async (dispatch) => {
    dispatch({ type: START });
    try {
      const response = await request();
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: SUCCESS, payload: data });
      }
      throw new Error(`${type} 응답 오류`);
    } catch (e) {
      dispatch({ type: FAILURE, error: e });
    }
  };
}

export default createRequestThunk;
