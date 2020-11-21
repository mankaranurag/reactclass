import { connect } from "react-redux";
import * as AllActionCreators from "../actions/actionCreators";
import { bindActionCreators } from "redux";
import App from "./App";
// data
function mapStateToProps(storeData) {
  return {
    // left becomes props // right is storeData
    allPosts: storeData.posts,
    allProducts: storeData.products,
  };
}

// actions
// dispatcher attach context of the methods
// dispatcher expose all action creators
function mapDispatchToProps(dispatcher) {
  return bindActionCreators(AllActionCreators, dispatcher);
}

// connect returns another function  which is passed App
// this is also called as higher order component
// App and HOCApp are same  but added store values
let HOCApp = connect(mapStateToProps, mapDispatchToProps)(App);

// in a app there should only one connect method

// so now instead of app we will use HOCApp
export default HOCApp;
