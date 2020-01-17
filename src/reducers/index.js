import loadingReducer from "./loadingReducer";
import jobsReducer from "./jobsReducer";
import errorReducer from "./errorReducer";
import pageReducer from "./pageReducer";
import detailsReducer from "./detailsReducer";
import lastPageReducer from "./lastPageReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  jobs: jobsReducer,
  error: errorReducer,
  nextPage: pageReducer,
  lastPage: lastPageReducer,
  details: detailsReducer
});

export default rootReducer;
