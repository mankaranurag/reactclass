import "./App.css";
import React from "react";
import ListOfButton from "./ListOfButton";

class App extends React.Component {
  constructor() {
    super();
    //ref variable
    this.textInput = React.createRef();
    this.state = {
      initialCounts: [
        { id: 1, value: 100 },
        { id: 2, value: 200 },
        { id: 3, value: "300" },
        { id: 4, value: 400 },
      ],
    };
    this.headerImage =
      "data:image/png;base64,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";
  }

  addNewButton() {
    this.setState({
      initialCounts: [
        ...this.state.initialCounts,
        { id: 5, value: this.textInput.current.value },
      ],
    });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Using Buttons</h1>
        </div>
        <img src={this.headerImage} height="150px" width="400px" alt="A" />
        <hr />
        Enter a number:
        <input ref={this.textInput} type="text" id="number" />
        <button
          onClick={this.addNewButton.bind(this)}
          className="btn btn-success"
        >
          Add
        </button>
        <ListOfButton
          initialCounts={[...this.state.initialCounts]}
        ></ListOfButton>
      </div>
    );
  }
}
export default App;
