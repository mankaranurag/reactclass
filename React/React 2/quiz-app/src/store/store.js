import { createStore } from "redux";
import rootReducers from "../reducers/rootReducer";

let defaultStoreData = {
  questions: [],
};

var store = createStore(
  rootReducers,
  defaultStoreData,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
