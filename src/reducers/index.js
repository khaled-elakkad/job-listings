import loadingReducer from "./loadingReducer";
import jobsReducer from "./jobsReducer";
import errorReducer from "./errorReducer";
import pageReducer from "./pageReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  jobs: jobsReducer,
  error: errorReducer,
  nextPage: pageReducer
});

export default rootReducer;
