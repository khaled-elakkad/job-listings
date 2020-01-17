import { takeEvery, call, put } from "redux-saga/effects";

import { DETAILS } from "../constants";
import { fetchDetails } from "../api";
import { setDetails, setDetailError } from "../actions";

function* handleDetailsLoad({ id }) {
  try {
    const jobDetails = yield call(fetchDetails, id);
    yield put(setDetails(jobDetails));
  } catch (error) {
    yield put(setDetailError(error));
  }
}

export default function* watchDetailsLoad() {
  yield takeEvery(DETAILS.LOAD, handleDetailsLoad);
}
