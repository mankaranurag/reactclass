import React from "react";

export default class CustomButton extends React.Component {
  constructor(props) {
    // state is private for every component
    super(props);
    // props are not available in count
    this.state = { currCount: this.props.count };
  }

  IncreementCount() {
    // Count++;
    this.setState({ currCount: this.state.currCount + 1 });
    // state are immutable so you have to replace full state value
    //this.props.count++; // props are read only so this will give a error

    // state in react allows you to have data being mutated
  }

  render() {
    return (
      <button
        className="btn btn-primary"
        onClick={this.IncreementCount.bind(this)}
      >
        {this.state.currCount}
      </button>
    );
  }
}
