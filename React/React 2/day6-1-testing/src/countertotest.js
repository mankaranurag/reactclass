import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Count : {this.state.count}</p>
        <button
          id="incre"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +++
        </button>
      </div>
    );
  }
}
