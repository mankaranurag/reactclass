import { connect } from "react-redux";
import * as AllActionCreators from "../actions/actionCreators";
import { bindActionCreators } from "redux";
import App from "./App";

function mapStateToProps(storeData) {
  return {
    allQuestions: storeData.questions,
  };
}

function mapDispatchToProps(dispatcher) {
  return bindActionCreators(AllActionCreators, dispatcher);
}

let HOCApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default HOCApp;
