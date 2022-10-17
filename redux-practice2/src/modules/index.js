import { applyMiddleware, combineReducers, createStore } from "redux";
import { all } from "redux-saga/effects";
import createSagaMiddleware from "@redux-saga/core";
import thunk from "redux-thunk";
import { logger } from "../lib/middleware";
import counter, { counterSaga } from "./counter";
import notUseLibraryModule from "./notUseLibraryModule";
import thunkModule from "./thunkModule";

const reducer = combineReducers({
  counter,
  sample: notUseLibraryModule,
  thunkModule,
});

export function* rootSaga() {
  yield all([counterSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
export default store;
