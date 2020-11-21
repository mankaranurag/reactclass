import { combineReducers } from "redux";
import { questions } from "./questionsReducer";

var rootReducers = combineReducers({ questions });
export default rootReducers;
