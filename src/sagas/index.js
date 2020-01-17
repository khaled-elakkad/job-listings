import { all } from "redux-saga/effects";
import jobsSaga from "./jobsSaga";
import detailsSaga from "./detailsSaga";

export default function* rootSaga() {
  yield all([jobsSaga(), detailsSaga()]);
}
