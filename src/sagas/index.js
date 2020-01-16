import { all } from "redux-saga/effects";
import jobsSaga from "./jobsSaga";

export default function* rootSaga() {
  yield all([jobsSaga()]);
}
