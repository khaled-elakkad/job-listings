import { takeEvery, select, call, put } from "redux-saga/effects";

import { JOBS } from "../constants";
import { fetchJobs } from "../api";
import { setJobs, setError } from "../actions";

const getPage = state => state.nextPage;

function* handleJobsLoad() {
  try {
    const page = yield select(getPage);
    const jobs = yield call(fetchJobs, page);
    yield put(setJobs(jobs));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchJobsLoad() {
  yield takeEvery(JOBS.LOAD, handleJobsLoad);
}
