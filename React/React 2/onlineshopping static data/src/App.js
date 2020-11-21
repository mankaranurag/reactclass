import "./App.css";
import React from "react";
import ListOfProducts from "./ListOfProducts";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Online Shopping</h1>
        </div>
        <ListOfProducts></ListOfProducts>
      </div>
    );
  }
}
export default App;
