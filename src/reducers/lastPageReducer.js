import { JOBS } from "../constants";

const lastPageReducer = (state = false, action) => {
  if (action.type === JOBS.LAST_PAGE) {
    return true;
  }
  return state;
};

export default lastPageReducer;
