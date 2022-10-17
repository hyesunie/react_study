import { delay, put, take, takeEvery, takeLatest } from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
//saga
const INCREASE_ASYNC = "sagaCounter/INCREASE_ASYNC";
const DECREASE_ASYNC = "sagaCounter/";

const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });

//saga
const increaseAsync = () => ({ type: INCREASE_ASYNC });
const decreaseAsync = () => ({ type: DECREASE_ASYNC });

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initState = {
  number: 0,
};

const counter = (state = initState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, number: state.number + 1 };
    case DECREASE:
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
};

export { increase, decrease, increaseAsync, decreaseAsync, counterSaga };
export default counter;
