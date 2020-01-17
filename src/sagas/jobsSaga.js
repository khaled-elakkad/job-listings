import { takeEvery, select, call, put } from "redux-saga/effects";

import { JOBS } from "../constants";
import { fetchJobs } from "../api";
import { setJobs, setError, setLastPage } from "../actions";

const getPage = state => state.nextPage;
const getLastPage = state => state.lastPage;

function* handleJobsLoad() {
  const lastPage = yield select(getLastPage);
  if (!lastPage) {
    try {
      const page = yield select(getPage);
      const { data, lastPageNum } = yield call(fetchJobs, page);
      if (page === lastPageNum) {
        yield put(setLastPage());
      }
      yield put(setJobs(data));
    } catch (error) {
      yield put(setError(error.toString()));
    }
  }
}

export default function* watchJobsLoad() {
  yield takeEvery(JOBS.LOAD, handleJobsLoad);
}
