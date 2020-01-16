import { JOBS } from "../constants";

const loadJobs = () => ({ type: JOBS.LOAD });

const setJobs = jobs => ({
  type: JOBS.LOAD_SUCCESS,
  jobs
});

const setError = error => ({ type: JOBS.LOAD_FAILURE, error });

export { loadJobs, setJobs, setError };
