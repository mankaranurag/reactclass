import React from "react";
import Counter from "./countertotest";

import renderer from "react-test-renderer";

describe("Use Snapshot testing", () => {
  it("should take the snapshot", () => {
    var tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
