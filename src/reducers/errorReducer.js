import { JOBS } from "../constants";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case JOBS.LOAD_FAILURE:
      return action.error;
    case JOBS.LOAD:
    case JOBS.LOAD_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
