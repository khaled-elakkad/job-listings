import { DETAILS } from "../constants";

const detailsReducer = (state = {}, action) => {
  switch (action.type) {
    case DETAILS.LOAD:
      return { isLoading: true, jobDetails: null, error: null };

    case DETAILS.LOAD_SUCCESS:
      return {
        isLoading: false,
        jobDetails: action.details,
        error: null
      };
    case DETAILS.LOAD_FAILURE:
      return {
        isLoading: false,
        jobDetails: null,
        error: action.error
      };

    default:
      return state;
  }
};

export default detailsReducer;
