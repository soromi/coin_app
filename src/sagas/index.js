import { all } from "redux-saga/effects";
import { coinAsync } from "./coin";

export function* rootSaga() {
  // prettier-ignore
  yield all([
    coinAsync(),
  ]);
}
