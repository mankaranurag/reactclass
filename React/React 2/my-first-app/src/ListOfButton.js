import React from "react";
import CustomButton from "./CustomButton";

export default class ListOfButton extends React.Component {
  constructor(props) {
    super(props);
  }

  GetButtons() {
    return this.props.initialCounts.map((count) => (
      <div key={count.id}>
        <CustomButton count={count.value}></CustomButton>
        <hr />
      </div>
    ));
  }

  render() {
    return this.GetButtons();
  }
}
