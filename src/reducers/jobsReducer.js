import { JOBS } from "../constants";

const jobsReducer = (state = [], action) => {
  if (action.type === JOBS.LOAD_SUCCESS) {
    return [...state, ...action.jobs];
  }
  return state;
};

export default jobsReducer;
