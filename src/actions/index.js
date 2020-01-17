import { JOBS, DETAILS } from "../constants";

const loadJobs = () => ({ type: JOBS.LOAD });

const setJobs = jobs => ({
  type: JOBS.LOAD_SUCCESS,
  jobs
});

const setError = error => ({ type: JOBS.LOAD_FAILURE, error });

const setLastPage = () => ({ type: JOBS.LAST_PAGE });

const loadDetails = id => ({ type: DETAILS.LOAD, id });

const setDetails = details => ({
  type: DETAILS.LOAD_SUCCESS,
  details
});

const setDetailError = error => ({ type: DETAILS.LOAD_FAILURE, error });

export {
  loadJobs,
  setJobs,
  setError,
  setLastPage,
  loadDetails,
  setDetails,
  setDetailError
};
