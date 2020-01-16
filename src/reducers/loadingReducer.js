import { JOBS } from "../constants";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case JOBS.LOAD:
      return true;
    case JOBS.LOAD_SUCCESS:
      return false;
    case JOBS.LOAD_FAILURE:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
